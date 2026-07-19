import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

export function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useReveal(0.05)

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-sm'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function SectionHeading({ eyebrow, title, description, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} max-w-2xl ${center ? 'mx-auto' : ''} mb-10 md:mb-16 lg:mb-20`}>
      {eyebrow && (
        <span className="inline-block text-gold font-semibold text-xs md:text-sm uppercase tracking-[0.25em] mb-4 md:mb-6">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-5xl lg:text-6xl font-800 tracking-tight leading-[1.1] mb-5 md:mb-6 ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed font-light ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export function ServiceCard({ icon: Icon, title, description, link, image, index = 0 }) {
  const [ref, isVisible] = useReveal(0.05)

  return (
    <div
      ref={ref}
      className={`group relative bg-white rounded-3xl overflow-hidden glass-card card-hover transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-sm'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {image && (
        <div className="h-64 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <div className="p-6 md:p-10 relative bg-white">
        {Icon && (
          <div className="absolute -top-8 right-6 md:-top-10 md:right-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-20">
            <Icon size={28} className="text-gold flex-shrink-0 md:w-8 md:h-8" />
          </div>
        )}
        <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-gold transition-colors duration-300 pr-12 md:pr-16">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">{description}</p>
        {link && (
          <Link to={link} className="inline-flex items-center gap-2 text-black font-semibold text-sm uppercase tracking-wide group/link">
            Details ansehen
            <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/link:bg-gold group-hover/link:text-white transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}

export function ProcessStep({ number, title, description, index = 0 }) {
  const [ref, isVisible] = useReveal(0.05)

  return (
    <div
      ref={ref}
      className={`relative p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-700 ease-out glass-card-dark border border-white/5 hover:border-gold/30 hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0 blur-none' : 'opacity-0 translate-y-12 blur-sm'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-4xl md:text-5xl font-heading font-900 text-white/5 mb-6 absolute top-4 right-5 md:right-6 pointer-events-none select-none">
        {number}
      </div>
      <div className="w-14 h-14 rounded-2xl gold-gradient flex items-center justify-center mb-6 text-black text-xl font-bold shadow-lg shadow-gold/20">
        {number}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
