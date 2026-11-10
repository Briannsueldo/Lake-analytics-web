import type { ReactNode } from 'react'

const handles = ['-top-[3.5px] -left-[3.5px]', '-top-[3.5px] -right-[3.5px]', '-bottom-[3.5px] -left-[3.5px]', '-bottom-[3.5px] -right-[3.5px]']

interface RegistrationFrameProps {
  children: ReactNode
  className?: string
}

/** Hairline box with the square corner handles of a design-tool selection. */
export default function RegistrationFrame({ children, className = '' }: RegistrationFrameProps) {
  return (
    <div className={`relative border-y border-line ${className}`}>
      {handles.map((position) => (
        <span key={position} aria-hidden="true" className={`absolute size-[7px] bg-ink ${position}`} />
      ))}
      {children}
    </div>
  )
}
