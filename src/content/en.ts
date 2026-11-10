import type { SiteContent } from './types'

export const en: SiteContent = {
  meta: {
    title: 'Lake Analytics — We turn data into decisions',
    description:
      "We design and implement Business Intelligence solutions and applications that automate processes, optimize operations, and accelerate your business's digital transformation.",
  },
  a11y: {
    skipLink: 'Skip to content',
    logoHome: 'back to top',
    mainNav: 'Main',
    mobileNav: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    switchLanguage: 'Cambiar a español',
    storyDetails: (company) => `${company} case details`,
    motorsportServicesList: 'Motorsport services',
  },
  nav: { motorsport: 'Motorsport', cases: 'Cases', about: 'About' },
  talk: 'Let’s talk',
  hero: {
    badge: 'Data Analytics',
    titleLead: 'We turn data into',
    titleEnd: 'decisions',
    paragraph:
      "Turning data into decisions. We design and implement Business Intelligence solutions and applications that automate processes, optimize operations, and accelerate your business's digital transformation.",
    primaryAction: 'Talk to our team',
    secondaryAction: 'See success stories',
    scrollHint: 'Scroll to discover',
  },
  services: [
    'Data strategy',
    'Integration and automation of process with AI',
    'Visualization and Data analysis',
    'Development of web/mobile applications',
  ],
  brands: {
    label: 'Companies we’ve worked with',
    listLabel: 'Logos of companies we have worked with',
  },
  stories: {
    eyebrow: 'Cases',
    title: 'Success stories',
    count: (n) => `${String(n).padStart(2, '0')} clients`,
    summaries: {
      manpetrol:
        "We craft the company's comprehensive data strategy, incorporating collaborative digital workspaces in the cloud, high-level dashboards, and reports, along with automating internal tasks and processes.",
      wps: "We designed and implemented an effective data strategy that enables the company's management to track the profitability of their oil & gas operations through dynamic real-time reports.",
      gyp: 'We offer training on Microsoft Power Platform and collaborate in the development of internal resources within the Power BI tool for data visualization and analysis.',
      altamore:
        "We developed a series of operational and business KPIs to help the company's management understand their data and make informed decisions, all at low costs and with short delivery times.",
      physis:
        'We collaborate with our client to develop a tablet application for real-time assessment of installations in oil & gas fields. The application is powered by a cloud-based database, and data insights are visualized through dynamic reports using Power BI.',
    },
  },
  motorsport: {
    eyebrow: 'Motorsport',
    title: 'Data to build champions',
    paragraph:
      'We partner with motorsport teams and drivers to develop and implement data strategies that enable data-driven decision-making, optimizing performance on the track.',
    imageAlt: 'Single-seater race car at speed on track, background blurred by motion',
    services: [
      {
        title: 'Racing Data Strategy',
        description:
          'We empower teams and drivers with custom data strategies that boost performance, refine decision-making, and deliver a competitive advantage.',
      },
      {
        title: 'Big Data Analysis for Motorsport',
        description:
          'We use advanced analytics and machine learning to turn race and telemetry data into strategic insights that improve performance and efficiency.',
      },
      {
        title: 'Motorsport Education',
        description:
          'We train the next generation of data engineers and analysts for the motorsport industry, leveraging cutting-edge technologies.',
      },
      {
        title: 'AI Agents for Motorsport',
        description:
          'Our AI agents elevate race strategy, performance analysis, and decision-making—enabling teams and drivers to reach peak performance.',
      },
    ],
  },
  about: {
    eyebrow: 'About us',
    lines: [
      ['Driven by ', 'data', '.'],
      ['Inspired by ', 'racing', '.'],
      ['Built for ', 'performance', '.'],
    ],
    paragraph:
      'At Lake Analytics Motorsport, we harness data analytics and AI to empower racing teams and drivers, delivering the tools they need to compete smarter, faster, and stronger.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk.',
    intro: 'Tell us about your data and what you want it to do for your team.',
    fields: { name: 'Name', phone: 'Phone', email: 'Email', message: 'Message', optional: 'optional' },
    placeholders: {
      name: 'Your full name',
      phone: 'Your phone number',
      email: 'you@company.com',
      message: 'What would you like to achieve?',
    },
    errors: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      message: 'Please write a message.',
    },
    submit: 'Send message',
    sent: 'Your email app is opening with the message ready to send.',
    subject: (name) => `Contact from ${name}`,
  },
  footer: {
    title: 'Turning data into decisions.',
    blurb: 'Business Intelligence solutions and applications.',
    servicesTitle: 'Services',
    navTitle: 'Navigate',
    followTitle: 'Follow',
    certificationsTitle: 'Certifications',
    certifiedBy: 'Microsoft Certified',
    newTab: 'opens in a new tab',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
}
