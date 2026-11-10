import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from '../content/en'
import { es } from '../content/es'
import type { Language, SiteContent } from '../content/types'

const dictionaries: Record<Language, SiteContent> = { en, es }
const STORAGE_KEY = 'lake-lang'

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es') return saved
  } catch {
    // Storage unavailable: fall back to the browser language.
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

interface LanguageContextValue {
  lang: Language
  t: SiteContent
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(initialLanguage)
  const t = dictionaries[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // The choice still applies for this visit.
    }
  }, [lang, t])

  const toggleLanguage = useCallback(() => setLang((current) => (current === 'en' ? 'es' : 'en')), [])
  const value = useMemo(() => ({ lang, t, toggleLanguage }), [lang, t, toggleLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
