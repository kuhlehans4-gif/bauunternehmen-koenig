import { Link } from 'react-router-dom'
import { Hammer, Building2, Wrench, PaintBucket, Mail, ArrowRight } from 'lucide-react'
import { RevealSection, SectionHeading, ServiceCard } from '../components/UI'
import SEO from '../components/SEO'

const services = [
  {
    icon: Hammer,
    title: 'Maurer- & Betonbauarbeiten',
    description: 'Präzise Maurer- und Betonarbeiten nach DIN-Normen. Fundamente, Mauern, Betondecken und mehr — alles aus Meisterhand.',
    link: '/leistungen/maurer-betonbau',
    image: '/images/maurer.png',
  },
  {
    icon: Building2,
    title: 'Sanierung & Instandsetzung',
    description: 'Komplettsanierung, Altbaumodernisierung und Instandsetzung von Bestandsimmobilien. Fachgerecht und termintreu aus einer Hand.',
    link: '/leistungen/sanierung',
    image: '/images/sanierung.png',
  },
  {
    icon: Wrench,
    title: 'Innenausbau & Trockenbau',
    description: 'Trockenbau, Spachtelarbeiten in Q2–Q4, Trockenestrich und moderne Raumgestaltung für Wohn- und Gewerberäume.',
    link: '/leistungen/innenausbau',
    image: '/images/innenausbau.png',
  },
  {
    icon: PaintBucket,
    title: 'Fassaden- & Putzarbeiten',
    description: 'Professionelle Fassadengestaltung, Außenputz, Wärmedämmverbundsysteme und Renovierung bestehender Fassaden.',
    link: '/leistungen/fassade',
    image: '/images/fassade.png',
  },
]

export default function Leistungen() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://www.bauunternehmen-koenig.com${s.link}`,
      name: s.title,
    })),
  }

  return (
    <>
      <SEO
        title="Leistungen – Bauunternehmen König Leipzig"
        description="Unser Leistungsspektrum aus Leipzig: Maurer- & Betonbau, Sanierung, Innenausbau & Trockenbau, Fassaden- & Putzarbeiten. Meisterqualität nach DIN mit Festpreisgarantie."
        keywords="Bauleistungen Leipzig, Maurerarbeiten Leipzig, Sanierung Leipzig, Innenausbau Leipzig, Fassadenarbeiten Leipzig, Trockenbau Leipzig, WDVS Leipzig"
        path="/leistungen"
        jsonLd={servicesJsonLd}
      />
      {/* Hero */}
      <section className="relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero.png" alt="" className="w-full h-full object-cover" fetchpriority="high" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Unser Leistungsspektrum</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Kompetenz in<br /><span className="gold-text-gradient">jedem Gewerk</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Von der Grundsteinlegung bis zur fertigen Fassade — Bauunternehmen König ist Ihr Partner für alle Bauleistungen in Leipzig.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/kontakt" className="btn-primary text-base w-full sm:w-auto">
              <Mail size={18} />
              Kostenlose Beratung sichern
            </Link>
            <Link to="/referenzen" className="btn-secondary text-base group w-full sm:w-auto">
              Unsere Referenzen ansehen
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-3xl mx-auto px-4">
          <RevealSection>
            <SectionHeading
              eyebrow="Projekt geplant?"
              title="Wir beraten Sie gerne"
              description="Egal ob Sanierung, Instandsetzung oder Innenausbau — sprechen Sie uns an. Die Erstberatung ist kostenlos."
              light
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary">
                <Mail size={18} />
                Kostenlose Beratung sichern
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
