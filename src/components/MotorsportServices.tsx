import { useLanguage } from '../i18n/LanguageContext'
import { useInView } from '../hooks/useInView'
import { asset } from '../lib/asset'
import TelemetryOverlay from './TelemetryOverlay'
import SectionHeading from './ui/SectionHeading'

export default function MotorsportServices() {
  const { ref, inView } = useInView<HTMLDivElement>()
  const { t } = useLanguage()
  const { motorsport } = t

  return (
    <section id="motorsport" aria-labelledby="motorsport-title" className="bg-void pb-20 sm:pb-28 lg:pb-32">
      <div className="page-wrap">
        <div className="border-t border-line pt-20 sm:pt-28 lg:pt-32">
          <SectionHeading
            id="motorsport-title"
            eyebrow={motorsport.eyebrow}
            title={motorsport.title}
            className="border-b-0 lg:pb-10"
            aside={<p className="max-w-[34rem] text-[15px] leading-relaxed text-pretty text-ink/75 sm:text-base">{motorsport.paragraph}</p>}
          />
        </div>

        <div ref={ref} className="theme-dark relative isolate aspect-[3/2] overflow-hidden bg-surface sm:aspect-[16/9] lg:aspect-[21/9]">
          <img
            src={asset('images/f1-1600.webp')}
            srcSet={`${asset('images/f1-800.webp')} 800w, ${asset('images/f1-1600.webp')} 1600w, ${asset('images/f1-2400.webp')} 1920w`}
            sizes="(min-width: 1280px) 1200px, 100vw"
            alt={motorsport.imageAlt}
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="motorsport-photo absolute inset-0 -z-10 size-full object-cover object-left"
          />
          <div aria-hidden="true" className="motorsport-tint absolute inset-0 -z-10" />
          <div aria-hidden="true" className="motorsport-scanlines absolute inset-0 -z-10" />
          <div aria-hidden="true" className="story-halftone absolute inset-0 -z-10" />
          <div aria-hidden="true" className="grain absolute inset-0 -z-10" />
          <TelemetryOverlay active={inView} />
        </div>

        <ol aria-label={t.a11y.motorsportServicesList} className="grid border-b border-line sm:grid-cols-2 lg:grid-cols-4">
          {motorsport.services.map((service, index) => (
            <li
              key={service.title}
              className="border-line py-8 not-last:border-b sm:nth-[odd]:border-r sm:nth-[odd]:pr-6 sm:nth-[even]:pl-6 sm:nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:px-6 lg:py-10 lg:not-last:border-r lg:first:pl-0 lg:last:pr-0"
            >
              <span aria-hidden="true" className="font-mono text-xs text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-lg leading-snug font-medium tracking-[-0.01em] text-ink lg:mt-8">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-pretty text-ink/65">{service.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
