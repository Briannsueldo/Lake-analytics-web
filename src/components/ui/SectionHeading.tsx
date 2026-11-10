import type { ReactNode } from 'react'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: ReactNode
  /** Supporting copy or a count, aligned to the title's baseline on wide screens. */
  aside?: ReactNode
  className?: string
}

/** Shared section header: eyebrow, title on the left; optional aside on the right; hairline below. */
export default function SectionHeading({ id, eyebrow, title, aside, className = '' }: SectionHeadingProps) {
  return (
    <div className={`grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-10 ${className}`}>
      <div className="lg:col-span-7">
        <p className="eyebrow inline-flex items-center gap-2.5 text-ink/70">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <h2 id={id} className="title-section mt-5 max-w-[16ch]">
          {title}
        </h2>
      </div>
      {aside && <div className="lg:col-span-4 lg:col-start-9 lg:pb-1.5">{aside}</div>}
    </div>
  )
}
