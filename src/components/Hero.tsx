import { contactHref } from '../content/site'
import { useLanguage } from '../i18n/LanguageContext'
import BrandMarquee from './BrandMarquee'
import SiteHeader from './SiteHeader'
import ButtonLink from './ui/ButtonLink'
import RegistrationFrame from './ui/RegistrationFrame'

const dataRows = [
  { text: 'SIGNAL  DATA  10011  INSIGHT  001010', className: 'text-[11px] tracking-[0.5em] text-ink/[0.07]' },
  { text: '10110  MODEL  00101  PROCESS  110001', className: 'text-base tracking-[0.42em] text-ink/[0.08]' },
  { text: '01101  SIGNAL  10110  DECISION  001101', className: 'text-[22px] tracking-[0.36em] text-ink/[0.06]' },
]

function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="grain absolute inset-0 -z-10 overflow-hidden bg-void">
      <div className="blueprint-grid absolute inset-0" />
      <div className="burst-rays animate-dawn" />
      <div className="burst-core animate-dawn" />
      <div className="absolute inset-x-0 top-[104px] flex flex-col items-center gap-9 font-mono whitespace-nowrap">
        {dataRows.map((row) => (
          <span key={row.text} className={row.className}>
            {row.text}
          </span>
        ))}
      </div>
      <div className="copy-veil absolute inset-0" />
    </div>
  )
}

export default function Hero() {
  const { t } = useLanguage()
  const { hero } = t

  return (
    <section aria-labelledby="hero-title" className="flex min-h-svh flex-col bg-void">
      <div className="relative isolate flex flex-1 flex-col">
        <HeroBackdrop />
        <SiteHeader />

        <span
          aria-hidden="true"
          className="absolute bottom-10 left-6 hidden font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase [writing-mode:vertical-rl] xl:block"
        >
          {hero.scrollHint}
        </span>

        <div className="page-wrap flex flex-1">
          <div className="flex flex-1 items-center py-10 md:border-x md:border-line md:py-12">
            <RegistrationFrame className="w-full px-1 py-10 sm:py-12 lg:py-14">
              <div className="flex flex-col items-center text-center">
                <p className="eyebrow inline-flex animate-rise items-center gap-2.5 rounded-full border border-ink/20 bg-void/50 px-3.5 py-1.5 text-ink/85 backdrop-blur-sm">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                  {hero.badge}
                </p>

                <h1
                  id="hero-title"
                  className="title-display mt-6 sm:mt-7"
                >
                  <span className="block animate-rise [animation-delay:90ms]">{hero.titleLead}</span>
                  <span className="title-accent block animate-rise text-ink/80 [animation-delay:180ms]">{hero.titleEnd}</span>
                </h1>

                <p className="mt-5 max-w-[41rem] animate-rise text-[15px] leading-relaxed text-pretty text-ink/80 [animation-delay:300ms] sm:mt-6 sm:text-base">
                  {hero.paragraph}
                </p>

                <div className="mt-7 flex w-full animate-rise flex-col items-stretch gap-1 [animation-delay:400ms] sm:mt-8 sm:w-auto sm:flex-row sm:items-center sm:gap-8">
                  <ButtonLink href={contactHref}>{hero.primaryAction}</ButtonLink>
                  <a href="#cases" className="flex min-h-11 items-center justify-center text-sm text-ink/90">
                    <span className="link-draw py-0.5">{hero.secondaryAction}</span>
                  </a>
                </div>
              </div>
            </RegistrationFrame>
          </div>
        </div>
      </div>

      <div className="relative border-t border-line bg-void">
        <div className="page-wrap">
          <BrandMarquee />
        </div>
      </div>
    </section>
  )
}
