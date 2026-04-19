import { useState } from 'react'
import { RevealSection, SectionHeading } from '../components/UI'
import { MapPin, Clock, Filter } from 'lucide-react'

const projects = [
  { title: 'Komplettsanierung Altbau', location: 'Leipzig-Gohlis', type: 'Sanierung', duration: '6 Wochen', img: '/images/sanierung.png', desc: 'Umfassende Sanierung eines Gründerzeithauses inkl. neuer Fassade, Innenausbau und energetischer Modernisierung.' },
  { title: 'Kernsanierung Einfamilienhaus', location: 'Leipzig-Südvorstadt', type: 'Sanierung', duration: '14 Wochen', img: '/images/hero.png', desc: 'Umfassende Kernsanierung eines Einfamilienhauses inkl. Mauerwerk, Innenausbau und energetischer Modernisierung.' },
  { title: 'Fassadensanierung Mehrfamilienhaus', location: 'Leipzig-Connewitz', type: 'Fassade', duration: '4 Wochen', img: '/images/fassade.png', desc: 'Kompletterneuerung der Fassade inkl. WDVS und Strukturputz an einem 6-Parteien-Haus.' },
  { title: 'Innenausbau Dachgeschoss', location: 'Leipzig-Plagwitz', type: 'Innenausbau', duration: '5 Wochen', img: '/images/innenausbau.png', desc: 'Ausbau des Dachgeschosses zu 2 Wohneinheiten mit Trockenbau, Spachtelung Q3 und Trockenestrich.' },
  { title: 'Mauerwerksanierung', location: 'Leipzig-Lindenau', type: 'Maurer', duration: '3 Wochen', img: '/images/maurer.png', desc: 'Sanierung und Teilerneuerung des tragenden Mauerwerks an einer Gewerbeimmobilie.' },
  { title: 'Anbau Wintergarten', location: 'Leipzig-Mölkau', type: 'Maurer', duration: '8 Wochen', img: '/images/hero.png', desc: 'Errichtung eines massiven Wintergartens mit Fundamentarbeiten, Mauerwerk und Putzarbeiten.' },
]

const filterOptions = ['Alle', 'Sanierung', 'Fassade', 'Innenausbau', 'Maurer']

export default function Referenzen() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = activeFilter === 'Alle'
    ? projects
    : projects.filter(p => p.type === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-52 pb-20 bg-charcoal">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Abgeschlossene Projekte</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Referenzen &<br /><span className="gold-text-gradient">Bautagebuch Leipzig</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <RevealSection key={project.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover">
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                    <div className="flex items-center gap-4 text-xs text-gray-400">
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
    </>
  )
}
