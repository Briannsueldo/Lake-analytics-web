import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex min-h-12 items-center justify-center gap-4 bg-ink px-6 text-sm font-medium text-void shadow-[0_0_36px_rgb(255_255_255/0.14)] transition duration-150 ease-ui hover:-translate-y-px hover:bg-ink/90 active:translate-y-px active:scale-[0.985]"
    >
      {children}
      <ArrowRight className="size-4 transition-transform duration-150 ease-ui group-hover:translate-x-[3px]" strokeWidth={1.75} aria-hidden="true" />
    </a>
  )
}
