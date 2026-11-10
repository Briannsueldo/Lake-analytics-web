import { brandName } from '../../content/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { asset } from '../../lib/asset'

const LOGO_SRC = asset('images/logo.webp')

export default function Logo({ className = 'h-8' }: { className?: string }) {
  const { t } = useLanguage()

  return (
    <a
      href="#main"
      aria-label={`${brandName}, ${t.a11y.logoHome}`}
      className="inline-flex min-h-11 items-center transition-opacity duration-150 hover:opacity-80"
    >
      {/* The same file twice: mark and wordmark take different filters on dark grounds. */}
      <span className={`relative inline-block aspect-[207/62] ${className}`}>
        <img src={LOGO_SRC} alt="" width={207} height={62} className="logo-mark absolute inset-0 size-full" />
        <img src={LOGO_SRC} alt="" width={207} height={62} className="logo-word absolute inset-0 size-full" />
      </span>
    </a>
  )
}
