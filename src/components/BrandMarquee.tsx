import { brands, type Brand } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import { asset } from '../lib/asset'

/** Equal visual weight: every logo gets about the same ink area, within a height range. */
const LOGO_AREA = 4200
const logoHeight = (brand: Brand) => Math.round(Math.min(50, Math.max(20, Math.sqrt(LOGO_AREA / (brand.width / brand.height)))))

function BrandRun({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20">
      {brands.map((brand) => {
        const height = logoHeight(brand)
        return (
          <li key={brand.id} className="shrink-0">
            <img
              src={asset(`images/brands/${brand.id}.webp`)}
              alt={hidden ? '' : brand.name}
              width={Math.round((brand.width / brand.height) * height)}
              height={height}
              decoding="async"
              className="brand-logo block"
              style={{ height }}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default function BrandMarquee() {
  const { t } = useLanguage()

  return (
    <div className="flex items-center gap-6 py-5 sm:py-6">
      <div className="hidden w-44 shrink-0 items-center gap-3 md:flex lg:w-52">
        <p className="eyebrow leading-relaxed text-ink/60">{t.brands.label}</p>
      </div>

      <div className="brand-viewport min-w-0 flex-1 overflow-hidden" role="region" aria-label={t.brands.listLabel}>
        <div className="brand-track flex w-max">
          <BrandRun />
          <BrandRun hidden />
        </div>
      </div>
    </div>
  )
}
