import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection } from '../components/UI'
import { MapPin, Filter, Star, Quote, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import { resolvePublicImage } from '../utils/imageFallbacks'

const projects = [
  {
    title: 'Klinkertreppe neu aufmauern',
    location: 'Leipzig & Umgebung',
    type: 'Maurer',
    img: '/images/arbeiten/klinkertreppe-nachher.jpg',
    desc: 'Abgenutzte Außentreppe zurückgebaut und als saubere Klinkertreppe neu aufgemauert.',
    images: [
      { src: '/images/arbeiten/klinkertreppe-nachher.jpg', alt: 'Neu aufgemauerte Klinkertreppe', label: 'Nachher' },
      { src: '/images/arbeiten/klinkertreppe-vorher.jpg', alt: 'Klinkertreppe vor dem Neuaufmauern', label: 'Vorher' },
    ],
  },
  {
    title: 'Abdichtungsmaßnahmen am Sockel',
    location: 'Leipzig & Umgebung',
    type: 'Maurer',
    img: '/images/arbeiten/sockel-abdichtung-fertig.jpg',
    desc: 'Sockelbereich freigelegt, vorbereitet und dauerhaft gegen Feuchtigkeit geschützt.',
    images: [
      { src: '/images/arbeiten/sockel-abdichtung-fertig.jpg', alt: 'Fertig abgedichteter Sockelbereich', label: 'Fertig' },
      { src: '/images/arbeiten/sockel-abdichtung-bestand.jpg', alt: 'Sockelbereich vor den Abdichtungsmaßnahmen', label: 'Bestand' },
      { src: '/images/arbeiten/sockel-abdichtung-aufgraben.jpg', alt: 'Freigelegter Sockelbereich während der Abdichtung', label: 'Freilegen' },
    ],
  },
  {
    title: 'Kompletter Aufbau einer Salzgrotte',
    location: 'Leipzig & Umgebung',
    type: 'Innenausbau',
    img: '/images/arbeiten/salzgrotte-fertig.jpg',
    desc: 'Innenausbau mit vorbereiteten Wandflächen, Salzstein-Elementen und stimmungsvoller Beleuchtung.',
    images: [
      { src: '/images/arbeiten/salzgrotte-fertig.jpg', alt: 'Fertiggestellte Salzgrotte mit warmer Beleuchtung', label: 'Fertig' },
      { src: '/images/arbeiten/salzgrotte-rohraum.jpg', alt: 'Rohraum vor dem Aufbau der Salzgrotte', label: 'Rohraum' },
      { src: '/images/arbeiten/salzgrotte-salzsteine.jpg', alt: 'Salzsteine während des Aufbaus der Salzgrotte', label: 'Aufbau' },
      { src: '/images/arbeiten/salzgrotte-licht.jpg', alt: 'Beleuchtete Wandfläche in der Salzgrotte', label: 'Licht' },
      { src: '/images/arbeiten/salzgrotte-eingang.jpg', alt: 'Eingangsbereich der fertiggestellten Salzgrotte', label: 'Eingang' },
      { src: '/images/arbeiten/salzgrotte-wand.jpg', alt: 'Strukturierte Salzsteinwand in der Salzgrotte', label: 'Wand' },
    ],
  },
  {
    title: 'Trockenbau während einer Haussanierung',
    location: 'Leipzig & Umgebung',
    type: 'Innenausbau',
    img: '/images/arbeiten/trockenbau-treppe-nachher-2.jpg',
    desc: 'Treppenhaus vom Rohzustand bis zu hellen, sauberen Wand- und Deckenflächen ausgebaut.',
    images: [
      { src: '/images/arbeiten/trockenbau-treppe-nachher-2.jpg', alt: 'Fertig ausgebautes Treppenhaus mit hellen Oberflächen', label: 'Fertig' },
      { src: '/images/arbeiten/trockenbau-treppe-vorher.jpg', alt: 'Treppenhaus vor dem Ausbau', label: 'Start' },
      { src: '/images/arbeiten/trockenbau-treppe-rohbau.jpg', alt: 'Treppenhaus während des Rohbaus', label: 'Rohbau' },
      { src: '/images/arbeiten/trockenbau-treppe-nachher-1.jpg', alt: 'Ausgebautes Treppenhaus nach den Trockenbauarbeiten', label: 'Ausbau' },
      { src: '/images/arbeiten/trockenbau-treppe-nachher-3.jpg', alt: 'Fertiggestellter Treppenbereich nach der Sanierung', label: 'Fertig' },
    ],
  },
  {
    title: 'Erneuerung eines Terrassenbelags',
    location: 'Leipzig & Umgebung',
    type: 'Sanierung',
    img: '/images/arbeiten/terrassenbelag-nachher.jpg',
    desc: 'Abgenutzten Belag erneuert und die Terrasse wieder sauber, belastbar und gepflegt hergestellt.',
    images: [
      { src: '/images/arbeiten/terrassenbelag-nachher.jpg', alt: 'Neu verlegter Terrassenbelag', label: 'Nachher' },
      { src: '/images/arbeiten/terrassenbelag-vorher.jpg', alt: 'Terrassenbelag vor der Erneuerung', label: 'Vorher' },
    ],
  },
  {
    title: 'Fassadensanierung nach Horizontalabdichtung',
    location: 'Leipzig & Umgebung',
    type: 'Fassade',
    img: '/images/arbeiten/fassade-horizontalabdichtung-fertig.jpg',
    desc: 'Sockelbereich freigelegt, instandgesetzt und nach der Abdichtung wieder sauber aufgebaut.',
    images: [
      { src: '/images/arbeiten/fassade-horizontalabdichtung-fertig.jpg', alt: 'Fertig instandgesetzter Fassadensockel', label: 'Fertig' },
      { src: '/images/arbeiten/fassade-horizontalabdichtung-bestand-1.jpg', alt: 'Beschädigter Fassadensockel vor der Instandsetzung', label: 'Bestand' },
      { src: '/images/arbeiten/fassade-horizontalabdichtung-bestand-2.jpg', alt: 'Freigelegter Sockelbereich am Gebäude', label: 'Freilegen' },
      { src: '/images/arbeiten/fassade-horizontalabdichtung-aufbau-1.jpg', alt: 'Neu aufgebauter Sockelbereich während der Sanierung', label: 'Aufbau' },
      { src: '/images/arbeiten/fassade-horizontalabdichtung-aufbau-2.jpg', alt: 'Fassadensockel während der Abdichtungsarbeiten', label: 'Abdichtung' },
    ],
  },
  {
    title: 'Sanierung einer Klinkerfassade',
    location: 'Leipzig & Umgebung',
    type: 'Fassade',
    img: '/images/arbeiten/klinkerfassade-sanierung-3.jpg',
    desc: 'Mehrgeschossige Klinkerfassade mit Gerüststellung und schrittweiser Bearbeitung der Fassadenflächen.',
    images: [
      { src: '/images/arbeiten/klinkerfassade-sanierung-3.jpg', alt: 'Klinkerfassade im fortgeschrittenen Sanierungszustand', label: 'Fortschritt' },
      { src: '/images/arbeiten/klinkerfassade-sanierung-1.jpg', alt: 'Klinkerfassade mit Gerüst zu Beginn der Sanierung', label: 'Start' },
      { src: '/images/arbeiten/klinkerfassade-sanierung-2.jpg', alt: 'Klinkerfassade während der Sanierungsarbeiten', label: 'Bearbeitung' },
    ],
  },
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

function ProjectCard({ project }) {
  const finishedIndex = project.images.findIndex((image) => image.src === project.img)
  const [activeIndex, setActiveIndex] = useState(finishedIndex >= 0 ? finishedIndex : 0)
  const activeImage = project.images[activeIndex]
  const activeImageSrc = resolvePublicImage(activeImage.src)
  const hasMultipleImages = project.images.length > 1

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? project.images.length - 1 : current - 1))
  }

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % project.images.length)
  }

  return (
    <div className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm card-hover">
      <div className="relative h-64 flex-shrink-0 overflow-hidden bg-gray-100">
        <img
          src={activeImageSrc}
          alt={activeImage.alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black">
            {project.type}
          </span>
        </div>
        {activeImage.label && (
          <div className="absolute bottom-4 left-4 rounded-lg bg-black/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            {activeImage.label}
          </div>
        )}
        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              className="absolute left-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-colors hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`Vorheriges Bild von ${project.title}`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="absolute right-3 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gray-900 shadow-lg transition-colors hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label={`Nächstes Bild von ${project.title}`}
            >
              <ChevronRight size={20} />
            </button>
            <div className="absolute right-4 bottom-4 flex gap-1.5">
              {project.images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full shadow-sm transition-all ${
                    activeIndex === index ? 'w-5 bg-gold' : 'w-1.5 bg-white/80'
                  }`}
                  aria-label={`Bild ${index + 1} von ${project.title} anzeigen`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 min-h-[3.25rem] text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-gold">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">{project.desc}</p>
        <div className="mt-auto flex items-center gap-1.5 text-xs text-gray-400">
          <MapPin size={14} className="text-gold" />
          {project.location}
        </div>
      </div>
    </div>
  )
}

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
            image: `https://www.bauunternehmen-koenig.com${resolvePublicImage(p.img)}`,
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
              <RevealSection key={project.title} delay={i * 100} className="h-full">
                <ProjectCard project={project} />
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
