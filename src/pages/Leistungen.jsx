import { Link } from 'react-router-dom'
import { Hammer, Building2, Wrench, PaintBucket, ArrowRight, Phone } from 'lucide-react'
import { RevealSection, SectionHeading, ServiceCard } from '../components/UI'

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
    title: 'Neubau & Sanierung',
    description: 'Ihr Traumhaus oder die Komplettsanierung Ihrer Bestandsimmobilie. Vom Rohbau bis zum schlüsselfertigen Objekt.',
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
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Unser Leistungsspektrum</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Kompetenz in<br /><span className="gold-text-gradient">jedem Gewerk</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Von der Grundsteinlegung bis zur fertigen Fassade — Bauunternehmen König ist Ihr Partner für alle Bauleistungen in Leipzig.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              description="Egal ob Neubau, Sanierung oder Innenausbau — sprechen Sie uns an. Die Erstberatung ist kostenlos."
              light
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="btn-primary">
                <Phone size={18} />
                Kostenlose Beratung anfordern
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
