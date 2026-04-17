import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react'
import logoWhite from '../assets/logo/Transparent weiß neu.png'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Gold accent line */}
      <div className="h-1 gold-gradient w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="Bauunternehmen König" className="h-14 w-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Ihr Maurer- und Betonbauermeister in Leipzig. Qualität, Zuverlässigkeit und faire Preise — darauf bauen wir.
            </p>
          </div>

          {/* Leistungen */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">Leistungen</h4>
            <ul className="space-y-3">
              {[
                { name: 'Maurer- & Betonbau', path: '/leistungen/maurer-betonbau' },
                { name: 'Sanierung & Modernisierung', path: '/leistungen/sanierung' },
                { name: 'Innenausbau & Trockenbau', path: '/leistungen/innenausbau' },
                { name: 'Fassaden- & Putzarbeiten', path: '/leistungen/fassade' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Startseite', path: '/' },
                { name: 'Referenzen', path: '/referenzen' },
                { name: 'Über uns', path: '/ueber-uns' },
                { name: 'Kontakt', path: '/kontakt' },
                { name: 'Impressum', path: '/impressum' },
                { name: 'Datenschutz', path: '/datenschutz' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:01796849863" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  0179 684 98 63
                </a>
              </li>
              <li>
                <a href="mailto:maurermeister.koenig@web.de" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  maurermeister.koenig@web.de
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>August-Bebel-Siedlung 45<br />04288 Leipzig</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-gold flex-shrink-0" />
                Mo–Fr: 07:00 – 18:00
              </li>
            </ul>
          </address>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Bauunternehmen König. Alle Rechte vorbehalten.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-gold transition-colors duration-300 text-xs cursor-pointer"
            aria-label="Nach oben scrollen"
          >
            Nach oben
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
