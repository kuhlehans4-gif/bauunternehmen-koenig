import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Hammer, Building2, Wrench, PaintBucket, ChevronDown } from 'lucide-react'
import logoWhite from '../assets/logo/Logo weiß transparent.png'

const navLinks = [
  { name: 'Startseite', path: '/' },
  { 
    name: 'Leistungen', 
    path: '/leistungen',
    subLinks: [
      { name: 'Maurer- & Betonbau', path: '/leistungen/maurer-betonbau', icon: Hammer },
      { name: 'Sanierung & Instandsetzung', path: '/leistungen/sanierung', icon: Building2 },
      { name: 'Innenausbau & Trockenbau', path: '/leistungen/innenausbau', icon: Wrench },
      { name: 'Fassaden- & Putzarbeiten', path: '/leistungen/fassade', icon: PaintBucket },
    ]
  },
  { name: 'Referenzen', path: '/referenzen' },
  { name: 'Über uns', path: '/ueber-uns' },
  { name: 'Ratgeber', path: '/ratgeber' },
  { name: 'Kontakt', path: '/kontakt' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  const closeMenus = () => {
    setIsOpen(false)
    setMobileServicesOpen(false)
  }

  const toggleMenu = () => {
    if (isOpen) {
      setMobileServicesOpen(false)
    }

    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = isOpen ? 'hidden' : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'glass-nav shadow-2xl shadow-black/20 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" onClick={closeMenus} className="flex items-center relative z-[80] group max-w-full">
            <div className={`relative flex items-center transition-all duration-500 ${
               scrolled 
                ? 'h-8 w-24 sm:w-28 md:h-10 md:w-36' 
                : 'h-8 w-24 sm:h-10 sm:w-32 md:h-14 md:w-48 lg:h-16 lg:w-56'
             }`}>
              <img
                src={logoWhite}
                alt="Bauunternehmen König"
                className="absolute inset-0 w-full h-full object-contain -ml-[4%] sm:-ml-[10%] md:-ml-[15%] lg:-ml-[20%] scale-[1.08] sm:scale-[1.2] md:scale-[1.3] lg:scale-[1.35] origin-center drop-shadow-2xl group-hover:scale-[1.11] sm:group-hover:scale-[1.23] md:group-hover:scale-[1.33] lg:group-hover:scale-[1.38] transition-all duration-500"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group/nav-item">
                <div className="flex items-center gap-1 group">
                  <Link
                    to={link.path}
                    onClick={closeMenus}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold relative ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                        ? 'text-gold'
                        : 'text-white/80'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300 rounded-full ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                  {link.subLinks && (
                    <ChevronDown size={14} className="text-white/40 group-hover:text-gold transition-colors duration-300 group-hover:rotate-180" />
                  )}
                </div>

                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 group-hover/nav-item:opacity-100 group-hover/nav-item:visible group-hover/nav-item:translate-y-0 transition-all duration-300">
                    <div className="w-64 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-2">
                      {link.subLinks.map((sub) => {
                        const SubIcon = sub.icon
                        return (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={closeMenus}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 text-white/70 hover:text-gold transition-all duration-300 group/sub"
                          >
                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover/sub:bg-gold/20 transition-colors">
                              <SubIcon size={16} className="group-hover/sub:text-gold" />
                            </div>
                            <span className="text-sm font-medium">{sub.name}</span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link to="/kontakt" onClick={closeMenus} className="btn-primary !px-5 !py-2.5 text-sm ml-2 font-heading">
              <Phone size={16} />
              Kostenlose Beratung sichern
            </Link>
          </div>

          {/* Mobile Actions & Toggle */}
          <div className="lg:hidden flex items-center gap-3 relative z-[120]">
            <Link 
              to="/kontakt" 
              onClick={closeMenus} 
              className="btn-primary !px-3 !py-2 !text-[10px] sm:!text-xs uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-[0_4px_15px_rgba(212,175,55,0.2)]"
            >
              <Phone size={14} />
              <span className="hidden xs:inline">Beratung sichern</span>
              <span className="xs:hidden">Anfragen</span>
            </Link>
            
            <button
              onClick={toggleMenu}
              className="text-white p-1 hover:text-gold transition-colors flex items-center justify-center"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Separated from the filtered nav header */}
      <div
        className={`lg:hidden fixed inset-0 z-[110] bg-black/95 backdrop-blur-2xl transition-all duration-700 overflow-y-auto ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={closeMenus}
          className="absolute top-5 right-4 z-[120] rounded-full border border-white/10 bg-white/5 p-2 text-white hover:text-gold transition-colors"
          aria-label="Menü schließen"
        >
          <X size={28} />
        </button>

        <div className="w-full max-w-sm mx-auto min-h-full flex flex-col items-center justify-center gap-5 px-6 py-24">
          {navLinks.map((link, i) => (
            <div key={link.path} className="w-full text-center">
              {link.subLinks ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <Link
                      to={link.path}
                      onClick={closeMenus}
                      className={`text-2xl sm:text-3xl font-heading font-semibold tracking-tight transition-all duration-500 ${
                        location.pathname.startsWith(link.path) ? 'text-gold' : 'text-white/70'
                      }`}
                    >
                      {link.name}
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        setMobileServicesOpen(!mobileServicesOpen)
                      }}
                      className={`p-2 rounded-full bg-white/5 text-gold transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    >
                      <ChevronDown size={24} />
                    </button>
                  </div>
                  
                  {/* Mobile Submenu */}
                  <div className={`overflow-hidden transition-all duration-500 w-full flex flex-col items-center gap-2 ${
                     mobileServicesOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                   }`}>
                    {link.subLinks.map((sub) => {
                      const SubIcon = sub.icon
                      return (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMenus}
                          className="flex items-center justify-center gap-3 text-base sm:text-lg text-white/50 hover:text-gold text-center whitespace-normal"
                        >
                          <SubIcon size={18} />
                          {sub.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <Link
                  to={link.path}
                  onClick={closeMenus}
                  className={`text-2xl sm:text-3xl font-heading font-semibold tracking-tight transition-all duration-500 hover:scale-105 ${
                    location.pathname === link.path ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${i * 100}ms` : '0ms',
                    transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link 
            to="/kontakt" 
            onClick={closeMenus}
            className="btn-primary mt-4 text-base sm:text-lg !py-3 !px-5 sm:!py-4 sm:!px-8 w-full"
            style={{ 
              transitionDelay: isOpen ? `${navLinks.length * 100}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            <Phone size={20} />
            Kostenlose Beratung sichern
          </Link>
        </div>
      </div>
    </>
  )
}
