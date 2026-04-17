import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import LeistungDetail from './pages/LeistungDetail'
import Referenzen from './pages/Referenzen'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import Ratgeber from './pages/Ratgeber'
import RatgeberDetail from './pages/RatgeberDetail'
import { Impressum, Datenschutz } from './pages/Legal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main>
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
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
