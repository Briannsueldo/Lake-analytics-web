import { useLanguage } from '../../i18n/LanguageContext'
import type { Language } from '../../content/types'

const languages: Language[] = ['en', 'es']

export default function LanguageToggle() {
  const { lang, t, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.a11y.switchLanguage}
      title={t.a11y.switchLanguage}
      lang={lang === 'en' ? 'es' : 'en'}
      className="inline-flex min-h-11 items-center gap-1.5 eyebrow px-2"
    >
      {languages.map((code, index) => (
        <span key={code} className="contents">
          {index > 0 && (
            <span aria-hidden="true" className="text-ink/25">
              /
            </span>
          )}
          <span
            aria-hidden="true"
            className={`transition-colors duration-150 ${code === lang ? 'text-ink' : 'text-ink/40 hover:text-ink/70'}`}
          >
            {code}
          </span>
        </span>
      ))}
    </button>
  )
}
