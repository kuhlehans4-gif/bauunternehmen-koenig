import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, Clock } from 'lucide-react'
import logoWhite from '../assets/logo/Logo weiß transparent.png'
import { contactDetails } from '../data/contactDetails'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Gold accent line */}
      <div className="h-1 gold-gradient w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="relative h-8 w-40 sm:h-10 sm:w-48 mb-6 sm:mb-8">
              <img
                src={logoWhite}
                alt="Bauunternehmen König"
                className="absolute top-0 left-0 w-full h-full object-contain object-left scale-[1.18] sm:scale-[1.28] origin-left"
                loading="lazy"
                decoding="async"
              />
            </div>
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
                <a href={contactDetails.phoneHref} className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm break-words">
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  {contactDetails.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={contactDetails.emailHref} className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors duration-300 text-sm break-all">
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  {contactDetails.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>{contactDetails.addressLine1}<br />{contactDetails.addressLine2}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Clock size={16} className="text-gold flex-shrink-0" />
                {contactDetails.openingHoursDisplay}
              </li>
            </ul>
          </address>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
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
