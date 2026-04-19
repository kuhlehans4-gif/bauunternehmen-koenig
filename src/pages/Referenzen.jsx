import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection } from '../components/UI'
import { MapPin, Clock, Filter, Star, Quote, Mail } from 'lucide-react'
import SEO from '../components/SEO'

const projects = [
  { title: 'Komplettsanierung Altbau', location: 'Leipzig-Gohlis', type: 'Sanierung', duration: '6 Wochen', img: '/images/sanierung.png', desc: 'Umfassende Sanierung eines Gründerzeithauses inkl. neuer Fassade, Innenausbau und energetischer Modernisierung.' },
  { title: 'Kernsanierung Einfamilienhaus', location: 'Leipzig-Südvorstadt', type: 'Sanierung', duration: '14 Wochen', img: '/images/hero.png', desc: 'Umfassende Kernsanierung eines Einfamilienhauses inkl. Mauerwerk, Innenausbau und energetischer Modernisierung.' },
  { title: 'Fassadensanierung Mehrfamilienhaus', location: 'Leipzig-Connewitz', type: 'Fassade', duration: '4 Wochen', img: '/images/fassade.png', desc: 'Kompletterneuerung der Fassade inkl. WDVS und Strukturputz an einem 6-Parteien-Haus.' },
  { title: 'Innenausbau Dachgeschoss', location: 'Leipzig-Plagwitz', type: 'Innenausbau', duration: '5 Wochen', img: '/images/innenausbau.png', desc: 'Ausbau des Dachgeschosses zu 2 Wohneinheiten mit Trockenbau, Spachtelung Q3 und Trockenestrich.' },
  { title: 'Mauerwerksanierung', location: 'Leipzig-Lindenau', type: 'Maurer', duration: '3 Wochen', img: '/images/maurer.png', desc: 'Sanierung und Teilerneuerung des tragenden Mauerwerks an einer Gewerbeimmobilie.' },
  { title: 'Anbau Wintergarten', location: 'Leipzig-Mölkau', type: 'Maurer', duration: '8 Wochen', img: '/images/hero.png', desc: 'Errichtung eines massiven Wintergartens mit Fundamentarbeiten, Mauerwerk und Putzarbeiten.' },
]

const filterOptions = ['Alle', 'Sanierung', 'Fassade', 'Innenausbau', 'Maurer']

const googleReviews = [
  { author: 'Leonie W.', text: 'Sehr zuverlässiges Bauunternehmen! Die Renovierung von Schlafzimmer und Wohnzimmer wurde sauber und mit einer super Qualität ausgeführt. Wir sind rundum zufrieden und empfehlen das Team gerne weiter.', rating: 5, time: 'vor 3 Monaten' },
  { author: 'Tobias S.', text: 'Wir hatten im Zuge unserer Umbaumaßnahmen an der Fassade und im Innenausbau unseres Einfamilienhauses das Vergnügen mit Tim zusammenarbeiten. Er ist ein absoluter Profi und hat uns mit seiner Expertise einen super Überblick verschafft.', rating: 5, time: 'vor 11 Monaten' },
  { author: 'fit&fair Gesundheitszentrum', text: 'Wir sind absolut begeistert von der Arbeit dieses Bauunternehmens! Die Arbeit wurde professionell, termingerecht und mit viel Liebe zum Detail umgesetzt. Dabei wurde immer Freundlichkeit an den Tag gelegt.', rating: 5, time: 'vor einem Jahr' },
  { author: 'Colin J.', text: 'Ich bin super zufrieden mit der Arbeit von Herr König! Er war sehr kompetent im Erstgespräch und hat mich klasse beraten! Die Arbeiten wurden pünktlich, sauber und auf den Punkt genau erledigt.', rating: 5, time: 'vor einem Jahr' },
  { author: 'Niklas N.', text: 'Von der Kundenberatung über die Planung und Gestaltung bis zur tatsächlichen Umsetzung unseres Projektes, super professionelle und saubere Arbeit. Kann das Bauunternehmen König zu 100% weiterempfehlen!', rating: 5, time: 'vor einem Jahr' },
  { author: 'Markus L.', text: 'Ich habe nun schon zwei Aufträge bei Herrn König ausführen lassen. Nach einer super Beratung wurden die Arbeiten immer pünktlich und professionell umgesetzt.', rating: 5, time: 'vor 2 Jahren' },
  { author: 'Johann U.', text: 'Exzellente Planung und Umsetzung! Keine Mängel und äußerst zuverlässig, werde mich definitiv bei meinem nächsten Anliegen wieder hier melden!', rating: 5, time: 'vor einem Jahr' },
  { author: 'Cathleen W.', text: 'Sehr gute Arbeit, tolles Ergebnis. Absolut empfehlenswert.', rating: 5, time: 'vor 3 Monaten' }
]

export default function Referenzen() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = activeFilter === 'Alle'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  const reviewsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Referenzprojekte Bauunternehmen König Leipzig',
        itemListElement: projects.map((p, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'CreativeWork',
            name: p.title,
            description: p.desc,
            locationCreated: { '@type': 'Place', name: p.location },
            image: `https://www.bauunternehmen-koenig.com${p.img}`,
          },
        })),
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.bauunternehmen-koenig.com/#business',
        name: 'Bauunternehmen König',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: googleReviews.length,
          bestRating: '5',
          worstRating: '1',
        },
        review: googleReviews.map(r => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.author },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: '5' },
          reviewBody: r.text,
        })),
      },
    ],
  }

  return (
    <>
      <SEO
        title="Referenzen Leipzig – Bauprojekte & Kundenbewertungen | Bauunternehmen König"
        description="Abgeschlossene Bauprojekte in Leipzig: Altbausanierung, Fassade & Innenausbau in Gohlis, Connewitz, Plagwitz. 5,0-Sterne-Bewertungen echter Kunden aus Leipzig."
        keywords="Bauunternehmen Leipzig Referenzen, Sanierung Referenzen Leipzig, Fassade Projekte Leipzig, Kundenbewertungen Bauunternehmen, Bauprojekte Leipzig"
        path="/referenzen"
        jsonLd={reviewsJsonLd}
      />
      {/* Hero */}
      <section className="relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Abgeschlossene Projekte</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Referenzen &<br /><span className="gold-text-gradient">Bautagebuch Leipzig</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst: Ausgewählte Projekte aus Leipzig und Umgebung —
            von der Altbausanierung in Gohlis bis zum Fassadenprojekt in Connewitz.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* Intro Text */}
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-gray-500 leading-relaxed">
                Bauunternehmen König hat in Leipzig und Umgebung bereits über 100 Projekte erfolgreich abgeschlossen — von der kleinen Mauerwerkssanierung bis zur Komplettsanierung von Mehrfamilienhäusern. Hier finden Sie eine Auswahl ausgewählter Referenzprojekte. Jedes Projekt wurde von <strong className="text-gray-700">Maurer- und Betonbauermeister Tim König</strong> persönlich begleitet und in Meisterqualität ausgeführt.
              </p>
            </div>
          </RevealSection>

          {/* Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Filter size={18} className="text-gray-400" />
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setActiveFilter(option)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeFilter === option
                    ? 'bg-gold text-black shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project, i) => (
              <RevealSection key={project.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-black bg-gold px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.desc}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-gold" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-gold" />
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== GOOGLE REVIEWS (MARQUEE) ========== */}
      <section className="section-padding bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <RevealSection>
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-medium rounded-full text-xs uppercase tracking-widest mb-4">
              Kundenstimmen
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-white mb-4">
              Das sagen unsere <span className="gold-text-gradient">Bauherren</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white font-bold text-2xl mt-1">5.0</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-gold text-gold" />)}
              </div>
            </div>
            <p className="text-gray-400 text-sm">Basierend auf echten Kundenbewertungen</p>
          </RevealSection>
        </div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden group">
          {/* Gradients to fade out edges */}
          <div className="absolute top-0 left-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-charcoal to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-charcoal to-transparent z-10 pointer-events-none"></div>
          
          <div className="animate-marquee hover:pause whitespace-nowrap py-3 md:py-4">
            {/* Double the array to ensure smooth infinite scrolling effect */}
            {[...googleReviews, ...googleReviews].map((review, i) => (
              <div key={i} className="inline-block mx-4 whitespace-normal align-top">
                <div className="w-[280px] xs:w-[320px] md:w-[400px] h-full bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 hover:border-gold/30 transition-colors duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-lg font-heading flex-shrink-0">
                        {review.author.charAt(0)}
                       </div>
                      <div>
                        <h4 className="text-white font-bold font-heading">{review.author}</h4>
                        <span className="text-gray-500 text-xs">{review.time}</span>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, idx) => <Star key={idx} size={14} className="fill-gold text-gold" />)}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote size={32} className="absolute -top-4 -left-2 text-gold/10 -z-10" />
                    <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <span className="font-bold uppercase tracking-[0.2em] text-black/60 text-sm mb-4 block">Festpreis oder Regie</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-900 text-black mb-6 tracking-tight">
              Bereit für den Baustart?
            </h2>
            <p className="text-black/80 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Kontaktieren Sie uns für eine kostenlose Objektbegehung vor Ort. Wir kalkulieren transparent und fair.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakt" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-base sm:text-lg text-center">
                <Mail size={20} className="mr-2" />
                Kostenlose Beratung sichern
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
