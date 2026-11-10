import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MotorsportServices from './components/MotorsportServices'
import SuccessStories from './components/SuccessStories'
import { useLanguage } from './i18n/LanguageContext'

export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <a href="#main" className="skip-link">
        {t.a11y.skipLink}
      </a>
      <main id="main">
        <Hero />
        <SuccessStories />
        <MotorsportServices />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
