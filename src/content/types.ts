import type { NavId, StoryId } from './site'

export type Language = 'en' | 'es'

export interface SiteContent {
  meta: { title: string; description: string }
  a11y: {
    skipLink: string
    logoHome: string
    mainNav: string
    mobileNav: string
    openMenu: string
    closeMenu: string
    toLight: string
    toDark: string
    switchLanguage: string
    storyDetails: (company: string) => string
    motorsportServicesList: string
  }
  nav: Record<NavId, string>
  talk: string
  hero: {
    badge: string
    titleLead: string
    titleEnd: string
    paragraph: string
    primaryAction: string
    secondaryAction: string
    scrollHint: string
  }
  services: string[]
  brands: { label: string; listLabel: string }
  stories: {
    eyebrow: string
    title: string
    count: (n: number) => string
    summaries: Record<StoryId, string>
  }
  motorsport: {
    eyebrow: string
    title: string
    paragraph: string
    imageAlt: string
    services: { title: string; description: string }[]
  }
  about: {
    eyebrow: string
    /** Each line is split around one emphasised word: [before, emphasis, after]. */
    lines: [string, string, string][]
    paragraph: string
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    fields: { name: string; phone: string; email: string; message: string; optional: string }
    placeholders: { name: string; phone: string; email: string; message: string }
    errors: { name: string; email: string; message: string }
    submit: string
    sent: string
    subject: (name: string) => string
  }
  footer: {
    title: string
    blurb: string
    servicesTitle: string
    navTitle: string
    followTitle: string
    certificationsTitle: string
    certifiedBy: string
    newTab: string
    rights: string
    backToTop: string
  }
}
