import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { useTheme } from '../../theme/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const label = theme === 'dark' ? t.a11y.toLight : t.a11y.toDark
  const Icon = theme === 'dark' ? Sun : Moon

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="group grid size-11 place-items-center text-ink/70 transition-colors duration-150 hover:text-ink"
    >
      <Icon
        key={theme}
        className="size-[18px] animate-[spin-in_420ms_var(--ease-settle)] transition-transform duration-300 ease-ui group-hover:rotate-12"
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </button>
  )
}
