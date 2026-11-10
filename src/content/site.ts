/** Language-independent data. Text lives in en.ts and es.ts. */

export const brandName = 'Lake Analytics'

export const contactHref = '#contact'

// Stand-in: confirm or replace with the company's real LinkedIn page.
export const linkedinUrl = 'https://www.linkedin.com/company/lake-analytics'

/** Microsoft certifications held by the team (official names, shown in the footer). */
export const certifications = ['Power BI Data Analyst Associate', 'Azure Data Fundamentals']

// Stand-in address: replace with the company's real inbox.
export const contactEmail = 'hello@lake.example'

export type NavId = 'motorsport' | 'cases' | 'about'

export const navOrder: NavId[] = ['motorsport', 'cases', 'about']

export interface Brand {
  id: string
  name: string
  /** Trimmed logo size in px (public/images/brands/<id>.webp), used to balance logo weights. */
  width: number
  height: number
}

/** Companies Lake Analytics has worked with. Originals in public/images/carrousel. */
export const brands: Brand[] = [
  { id: 'manpetrol', name: 'Manpetrol', width: 343, height: 38 },
  { id: 'wps', name: 'Wellbore Petrol Services', width: 149, height: 122 },
  { id: 'gyp', name: 'Gas y Petróleo del Neuquén', width: 274, height: 124 },
  { id: 'altamore', name: 'Altamore', width: 231, height: 160 },
  { id: 'physis', name: 'Physis', width: 294, height: 97 },
  { id: 'adeneu', name: 'Centro PyME-ADENEU', width: 290, height: 93 },
  { id: 'ecoargentina', name: 'Eco Argentina', width: 274, height: 103 },
  { id: 'cerronegro', name: 'Cerro Negro S.A.', width: 278, height: 115 },
  { id: 'grupoinsys', name: 'Grupo Insys', width: 241, height: 104 },
  { id: 'inse', name: 'INSE', width: 226, height: 104 },
  { id: 'afla', name: 'Alfa Construcciones', width: 169, height: 150 },
  { id: 'acme', name: 'ACME', width: 145, height: 132 },
  { id: 'cin', name: 'CIN', width: 177, height: 149 },
  { id: 'nyt', name: 'N&T', width: 144, height: 142 },
  { id: 'supply', name: 'Supply', width: 171, height: 100 },
]

export type StoryId = 'manpetrol' | 'wps' | 'gyp' | 'altamore' | 'physis'

export interface StoryMeta {
  id: StoryId
  company: string
  /** Base name of the photo in /public/images, served as `<image>-800.webp` and `<image>-1600.webp`. */
  image: string
  /** Crop focus for object-position. */
  focus?: string
}

export const storyMeta: StoryMeta[] = [
  { id: 'manpetrol', company: 'MANPETROL', image: 'manpetrol', focus: '50% 42%' },
  { id: 'wps', company: 'Wellbore Petrol Services', image: 'wps', focus: '62% 60%' },
  { id: 'gyp', company: 'GAS Y PETROLEO DEL NEUQUÉN', image: 'gyp' },
  { id: 'altamore', company: 'Altamore', image: 'altamore' },
  { id: 'physis', company: 'PHYSIS', image: 'physis', focus: '45% 50%' },
]
