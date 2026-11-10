import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { contactHref, navOrder } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './ui/LanguageToggle'
import Logo from './ui/Logo'
import ThemeToggle from './ui/ThemeToggle'

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const close = () => setIsOpen(false)
  const MenuIcon = isOpen ? X : Menu

  return (
    <header className="relative z-30">
      <div className="page-wrap">
        <div className="grid h-[72px] grid-cols-[1fr_auto] items-center border-b border-line lg:grid-cols-[1fr_auto_1fr]">
          <Logo />

          <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-8 lg:flex xl:gap-9">
            {navOrder.map((id) => (
              <a key={id} href={`#${id}`} className="link-draw py-1 text-[13px] text-ink/70 hover:text-ink">
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end">
            <LanguageToggle />
            <ThemeToggle />

            <a
              href={contactHref}
              className="group ml-4 hidden items-center gap-3 border-b border-ink/70 py-2 text-[13px] whitespace-nowrap transition-colors duration-150 hover:border-ink lg:inline-flex lg:ml-6"
            >
              {t.talk}
              <ArrowRight className="size-4 transition-transform duration-150 ease-ui group-hover:translate-x-[3px]" strokeWidth={1.5} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? t.a11y.closeMenu : t.a11y.openMenu}
              className="-mr-2.5 grid size-11 place-items-center lg:hidden"
            >
              <MenuIcon className="size-5" strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label={t.a11y.mobileNav} className="fixed inset-x-0 top-[72px] bottom-0 flex flex-col bg-void px-5 pt-4 pb-8 sm:px-8 lg:hidden">
          {navOrder.map((id) => (
            <a key={id} href={`#${id}`} onClick={close} className="border-b border-line py-4 text-3xl font-semibold tracking-[-0.03em]">
              {t.nav[id]}
            </a>
          ))}
          <a href={contactHref} onClick={close} className="mt-auto flex min-h-12 items-center justify-center gap-3 bg-ink text-sm font-medium text-void">
            {t.talk}
            <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden="true" />
          </a>
        </nav>
      )}
    </header>
  )
}
