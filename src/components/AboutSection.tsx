import { ChartColumnIncreasing, MonitorSmartphone, Target, Workflow, type LucideIcon } from 'lucide-react'
import type { CSSProperties } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { asset } from '../lib/asset'

/**
 * One icon per service, in the order of `services` in content/en.ts and es.ts:
 * data strategy, AI integration and automation, visualization and analysis, web/mobile apps.
 */
const serviceIcons: LucideIcon[] = [Target, Workflow, ChartColumnIncreasing, MonitorSmartphone]

export default function AboutSection() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <section id="about" aria-labelledby="about-title" className="relative isolate overflow-hidden bg-void">
      {/* Wireframe terrain mesh in both themes: decorative, softened so the text leads. */}
      <div aria-hidden="true" className="about-bg-blur">
        <div className="about-bg" style={{ '--about-art': `url('${asset('images/about-mesh.svg')}')` } as CSSProperties} />
      </div>

      <div className="page-wrap relative py-24 sm:py-32 lg:py-36">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4">
              <p className="eyebrow inline-flex shrink-0 items-center gap-2.5 text-ink/70">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                {about.eyebrow}
              </p>
              <span aria-hidden="true" className="h-px w-24 bg-line sm:w-32" />
            </div>

            <h2 id="about-title" className="title-section mt-7 lg:text-[clamp(2.75rem,4.4vw,4rem)]">
              {about.lines.map(([before, emphasis, after], index) => (
                <span key={emphasis} className={`block ${index === 0 ? 'text-ink' : index === 1 ? 'text-ink/90' : 'text-ink/80'}`}>
                  {before}
                  <em className="title-accent text-accent">{emphasis}</em>
                  {after}
                </span>
              ))}
            </h2>

            <p className="mt-8 max-w-[36rem] text-lg leading-relaxed text-pretty text-ink/75">{about.paragraph}</p>
          </div>
        </div>

        <ul aria-label={t.footer.servicesTitle} className="mt-20 grid gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:mt-24 lg:grid-cols-4 lg:gap-x-0">
          {t.services.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <li
                key={service}
                className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-5 lg:border-l lg:border-line lg:px-8 lg:first:border-l-0 lg:first:pl-0"
              >
                {/* Decorative beside its label: one size (22px), one stroke (1.5), outline only, in a 48px tile. */}
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center border border-line bg-ink/[0.03] text-accent shadow-[inset_0_1px_0_color-mix(in_srgb,var(--color-ink)_8%,transparent)]"
                >
                  {Icon && <Icon className="size-[22px]" strokeWidth={1.5} />}
                </span>
                <span className="max-w-[20ch] text-[17px] leading-snug font-medium tracking-[-0.01em] text-pretty text-ink">{service}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
