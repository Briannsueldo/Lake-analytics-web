import { ArrowUp, ArrowUpRight, BadgeCheck } from 'lucide-react'
import type { ReactNode } from 'react'
import { brandName, certifications, linkedinUrl, navOrder } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import ContactForm from './ContactForm'
import GlyphWordmark from './ui/GlyphWordmark'
import Logo from './ui/Logo'

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-ink/55">{title}</h3>
      <ul className="mt-3 space-y-0.5">{children}</ul>
    </div>
  )
}

const footerLinkClass = 'inline-flex min-h-11 items-center text-[15px] leading-snug text-ink/80 hover:text-ink lg:min-h-9'

/** LinkedIn's own "in" mark (lucide no longer ships brand logos). */
function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <footer aria-labelledby="footer-title" className="theme-dark bg-black">
      <section id="contact" aria-labelledby="contact-title" className="edge-pad scroll-mt-0">
        <div className="grid border-t border-line lg:grid-cols-12">
          <div className="flex flex-col py-14 sm:py-20 lg:col-span-5 lg:border-r lg:border-line lg:py-24 lg:pr-12 xl:pr-20">
            <p className="eyebrow inline-flex items-center gap-2.5 text-ink/70">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              {contact.eyebrow}
            </p>
            <h2 id="contact-title" className="title-section mt-5">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-[24rem] text-base leading-relaxed text-pretty text-ink/70">{contact.intro}</p>
          </div>

          <div className="border-t border-line py-14 sm:py-20 lg:col-span-7 lg:border-t-0 lg:py-24 lg:pl-12 xl:pl-20">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Closing block: footer links, then the page ends on the Lake Analytics wordmark in glyphs. */}
      <div className="footer-sky relative isolate flex min-h-[clamp(40rem,96svh,56rem)] flex-col overflow-hidden">
        <div className="edge-pad relative">
          <div className="grid gap-x-8 gap-y-10 border-t border-line py-12 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
            <div className="sm:col-span-2 lg:col-span-4">
              <Logo className="h-10" />
              <p className="mt-3 max-w-[17rem] text-[15px] leading-relaxed text-ink/60">{t.footer.blurb}</p>
            </div>

            <div className="lg:col-span-2">
              <FooterColumn title={t.footer.navTitle}>
                {navOrder.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className={footerLinkClass}>
                      <span className="link-draw">{t.nav[id]}</span>
                    </a>
                  </li>
                ))}
              </FooterColumn>
            </div>

            <div className="lg:col-span-2">
              <FooterColumn title={t.footer.followTitle}>
                <li>
                  <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={`group gap-2.5 ${footerLinkClass}`}>
                    <LinkedInMark className="size-4 shrink-0" />
                    <span className="link-draw">LinkedIn</span>
                    <ArrowUpRight className="size-3.5 text-ink/50 transition-transform duration-150 ease-ui group-hover:translate-x-px group-hover:-translate-y-px" strokeWidth={1.75} aria-hidden="true" />
                    <span className="sr-only">({t.footer.newTab})</span>
                  </a>
                </li>
              </FooterColumn>
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <FooterColumn title={t.footer.certificationsTitle}>
                {certifications.map((certification) => (
                  <li key={certification} className="flex min-h-11 items-start gap-3 py-1.5 lg:min-h-9">
                    <BadgeCheck className="mt-0.5 size-[18px] shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="text-[15px] leading-snug text-ink/80">
                      <span className="block text-[13px] text-ink/50">{t.footer.certifiedBy}</span>
                      {certification}
                    </span>
                  </li>
                ))}
              </FooterColumn>
            </div>
          </div>

          <div className="grid items-center gap-x-6 gap-y-1 border-t border-line py-3 text-[13px] text-ink/55 sm:grid-cols-[1fr_auto_1fr]">
            <p>
              &copy; {new Date().getFullYear()} {brandName}. {t.footer.rights}
            </p>
            <h2 id="footer-title" className="sm:text-center">
              {t.footer.title}
            </h2>
            <a href="#main" className="group inline-flex min-h-11 items-center gap-2 transition-colors duration-150 hover:text-ink sm:justify-self-end">
              {t.footer.backToTop}
              <ArrowUp className="size-3.5 transition-transform duration-150 ease-ui group-hover:-translate-y-[3px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-auto w-full pt-32 pb-6 sm:pt-16">
          <GlyphWordmark label={brandName} />
        </div>
      </div>
    </footer>
  )
}
