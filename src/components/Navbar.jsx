import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Hammer, Building2, Wrench, PaintBucket, ChevronDown } from 'lucide-react'
import logoWhite from '../assets/logo/Transparent weiß neu.png'

const navLinks = [
  { name: 'Startseite', path: '/' },
  { 
    name: 'Leistungen', 
    path: '/leistungen',
    subLinks: [
      { name: 'Maurer- & Betonbau', path: '/leistungen/maurer-betonbau', icon: Hammer },
      { name: 'Neubau & Sanierung', path: '/leistungen/sanierung', icon: Building2 },
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-nav shadow-2xl shadow-black/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link to="/" onClick={closeMenus} className="flex items-center relative z-10 group">
          <div className={`relative flex items-center transition-all duration-500 ${
            scrolled 
              ? 'h-14 w-40 md:h-16 md:w-56' 
              : 'h-20 w-48 md:h-28 md:w-72 lg:h-32 lg:w-80'
          }`}>
            <img
              src={logoWhite}
              alt="Bauunternehmen König"
              className="absolute inset-0 w-full h-full object-contain -ml-[15%] md:-ml-[22%] lg:-ml-[28%] scale-[1.6] sm:scale-[1.8] md:scale-[2.0] lg:scale-[2.2] origin-center drop-shadow-2xl group-hover:scale-[1.63] sm:group-hover:scale-[1.83] md:group-hover:scale-[2.03] lg:group-hover:scale-[2.23] transition-all duration-500"
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

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-10 text-white p-2 hover:text-gold transition-colors"
          aria-label="Menü öffnen"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-700 flex flex-col items-center justify-center gap-4 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full max-w-xs flex flex-col items-center gap-4">
          {navLinks.map((link, i) => (
            <div key={link.path} className="w-full text-center">
              {link.subLinks ? (
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3">
                    <Link
                      to={link.path}
                      onClick={closeMenus}
                      className={`text-3xl font-heading font-semibold tracking-tight transition-all duration-500 ${
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
                  <div className={`overflow-hidden transition-all duration-500 w-full flex flex-col items-center gap-3 ${
                    mobileServicesOpen ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    {link.subLinks.map((sub) => {
                      const SubIcon = sub.icon
                      return (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={closeMenus}
                          className="flex items-center gap-3 text-lg text-white/50 hover:text-gold"
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
                  className={`text-3xl font-heading font-semibold tracking-tight transition-all duration-500 hover:scale-105 ${
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
            className="btn-primary mt-6 text-lg !py-4 !px-8 w-full"
            style={{ 
              transitionDelay: isOpen ? `${navLinks.length * 100}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0
            }}
          >
            <Phone size={20} />
            Jetzt anrufen
          </Link>
        </div>
      </div>
    </nav>
  )
}
