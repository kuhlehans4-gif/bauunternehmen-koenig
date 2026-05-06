import { Link, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import LeistungDetail from './pages/LeistungDetail'
import Referenzen from './pages/Referenzen'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import Ratgeber from './pages/Ratgeber'
import RatgeberDetail from './pages/RatgeberDetail'
import { Impressum, Datenschutz } from './pages/Legal'
import SEO from './components/SEO'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <>
      <SEO
        title="Seite nicht gefunden"
        description="Die angeforderte Seite wurde nicht gefunden."
        path="/404"
        noindex
      />
      <section className="min-h-[70vh] bg-gray-50 pt-40 sm:pt-48 md:pt-52 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">404</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-900 text-charcoal mb-6">Diese Seite gibt es nicht mehr</h1>
          <p className="text-gray-500 mb-8">
            Manche alten Google-Treffer werden nach dem Relaunch automatisch auf passende neue Inhalte weitergeleitet.
          </p>
          <Link to="/" className="btn-primary">Zur Startseite</Link>
        </div>
      </section>
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/leistungen/:slug" element={<LeistungDetail />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/ratgeber" element={<Ratgeber />} />
          <Route path="/ratgeber/:slug" element={<RatgeberDetail />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
