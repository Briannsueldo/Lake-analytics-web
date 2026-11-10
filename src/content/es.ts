import type { SiteContent } from './types'

export const es: SiteContent = {
  meta: {
    title: 'Lake Analytics — Convertimos datos en decisiones',
    description:
      'Diseñamos e implementamos soluciones de Business Intelligence y aplicaciones que automatizan procesos, optimizan operaciones y aceleran la transformación digital de su negocio.',
  },
  a11y: {
    skipLink: 'Saltar al contenido',
    logoHome: 'volver al inicio',
    mainNav: 'Principal',
    mobileNav: 'Móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    toLight: 'Cambiar a modo claro',
    toDark: 'Cambiar a modo oscuro',
    switchLanguage: 'Switch to English',
    storyDetails: (company) => `Detalles del caso ${company}`,
    motorsportServicesList: 'Servicios de motorsport',
  },
  nav: { motorsport: 'Motorsport', cases: 'Casos', about: 'Nosotros' },
  talk: 'Hablemos',
  hero: {
    badge: 'Data Analytics',
    titleLead: 'Convertimos datos en',
    titleEnd: 'decisiones',
    paragraph:
      'Convertimos datos en decisiones. Diseñamos e implementamos soluciones de Business Intelligence y aplicaciones que automatizan procesos, optimizan operaciones y aceleran la transformación digital de su negocio.',
    primaryAction: 'Hablar con el equipo',
    secondaryAction: 'Ver casos de éxito',
    scrollHint: 'Desliza para descubrir',
  },
  services: [
    'Estrategia de datos',
    'Integración y automatización de procesos con IA',
    'Visualización y análisis de datos',
    'Desarrollo de aplicaciones web/móviles',
  ],
  brands: {
    label: 'Empresas con las que trabajamos',
    listLabel: 'Logos de empresas con las que trabajamos',
  },
  stories: {
    eyebrow: 'Casos',
    title: 'Casos de éxito',
    count: (n) => `${String(n).padStart(2, '0')} clientes`,
    summaries: {
      manpetrol:
        'Diseñamos la estrategia integral de datos de la compañía, incorporando espacios de trabajo digitales colaborativos en la nube, tableros e informes de alto nivel, y la automatización de tareas y procesos internos.',
      wps: 'Diseñamos e implementamos una estrategia de datos eficaz que permite a la dirección de la compañía seguir la rentabilidad de sus operaciones de oil & gas mediante reportes dinámicos en tiempo real.',
      gyp: 'Brindamos capacitaciones en Microsoft Power Platform y colaboramos en el desarrollo de recursos internos en Power BI para la visualización y el análisis de datos.',
      altamore:
        'Desarrollamos una serie de KPIs operativos y de negocio para que la dirección de la compañía comprenda sus datos y tome decisiones informadas, con bajos costos y plazos de entrega cortos.',
      physis:
        'Colaboramos con nuestro cliente en el desarrollo de una aplicación para tablet que permite evaluar en tiempo real instalaciones en yacimientos de oil & gas. La aplicación se apoya en una base de datos en la nube, y los datos se visualizan mediante reportes dinámicos en Power BI.',
    },
  },
  motorsport: {
    eyebrow: 'Motorsport',
    title: 'Datos para construir campeones',
    paragraph:
      'Trabajamos junto a equipos y pilotos de motorsport para desarrollar e implementar estrategias de datos que impulsan la toma de decisiones basada en datos y optimizan el rendimiento en pista.',
    imageAlt: 'Monoplaza de carreras a toda velocidad en pista, con el fondo desenfocado por el movimiento',
    services: [
      {
        title: 'Estrategia de datos para competición',
        description:
          'Potenciamos a equipos y pilotos con estrategias de datos a medida que mejoran el rendimiento, afinan la toma de decisiones y aportan una ventaja competitiva.',
      },
      {
        title: 'Análisis de Big Data para motorsport',
        description:
          'Aplicamos analítica avanzada y machine learning para convertir los datos de carrera y telemetría en información estratégica que mejora el rendimiento y la eficiencia.',
      },
      {
        title: 'Formación en motorsport',
        description:
          'Formamos a la próxima generación de ingenieros y analistas de datos para la industria del motorsport, con tecnologías de vanguardia.',
      },
      {
        title: 'Agentes de IA para motorsport',
        description:
          'Nuestros agentes de IA elevan la estrategia de carrera, el análisis de rendimiento y la toma de decisiones, para que equipos y pilotos alcancen su máximo rendimiento.',
      },
    ],
  },
  about: {
    eyebrow: 'Nosotros',
    lines: [
      ['Impulsados por los ', 'datos', '.'],
      ['Inspirados por las ', 'carreras', '.'],
      ['Construidos para el ', 'rendimiento', '.'],
    ],
    paragraph:
      'En Lake Analytics Motorsport aprovechamos el análisis de datos y la IA para potenciar a equipos y pilotos de competición, brindándoles las herramientas que necesitan para competir de forma más inteligente, más rápida y más fuerte.',
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    intro: 'Cuéntenos sobre sus datos y qué quiere lograr con ellos para su equipo.',
    fields: { name: 'Nombre', phone: 'Teléfono', email: 'Correo electrónico', message: 'Mensaje', optional: 'opcional' },
    placeholders: {
      name: 'Su nombre completo',
      phone: 'Su número de teléfono',
      email: 'usted@empresa.com',
      message: '¿Qué le gustaría lograr?',
    },
    errors: {
      name: 'Ingrese su nombre.',
      email: 'Ingrese un correo electrónico válido.',
      message: 'Escriba un mensaje.',
    },
    submit: 'Enviar mensaje',
    sent: 'Se está abriendo su aplicación de correo con el mensaje listo para enviar.',
    subject: (name) => `Contacto de ${name}`,
  },
  footer: {
    title: 'Convertimos datos en decisiones.',
    blurb: 'Soluciones y aplicaciones de Business Intelligence.',
    servicesTitle: 'Servicios',
    navTitle: 'Navegación',
    followTitle: 'Síguenos',
    certificationsTitle: 'Certificaciones',
    certifiedBy: 'Microsoft Certified',
    newTab: 'se abre en una pestaña nueva',
    rights: 'Todos los derechos reservados.',
    backToTop: 'Volver arriba',
  },
}
