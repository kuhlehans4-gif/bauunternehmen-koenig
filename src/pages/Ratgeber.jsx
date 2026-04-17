import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection, SectionHeading } from '../components/UI'
import { BookOpen, Clock, Filter, ArrowRight } from 'lucide-react'

const articles = [
  {
    slug: 'foerdermittel-sanierung-2026',
    title: 'Fördermittel für die Sanierung 2026',
    category: 'Sanierung',
    readTime: '5 Min.',
    img: '/images/sanierung.png',
    excerpt: 'Ein Überblick über die aktuellen KfW- und BAFA-Förderungen für energetische Sanierungen und wie Sie diese beantragen.'
  },
  {
    slug: 'bauantrag-leipzig',
    title: 'Der Weg zum Bauantrag in Leipzig',
    category: 'Baugenehmigung',
    readTime: '7 Min.',
    img: '/images/hero.png',
    excerpt: 'Welche Unterlagen werden benötigt und wie lange dauert die Bearbeitung beim Bauamt Leipzig? Wir klären auf.'
  },
  {
    slug: 'trockenbau-q-stufen',
    title: 'Trockenbau Spachtelqualität: Q2, Q3 oder Q4?',
    category: 'Materialkunde',
    readTime: '4 Min.',
    img: '/images/innenausbau.png',
    excerpt: 'Worin sich die verschiedenen Qualitätsstufen im Trockenbau unterscheiden und welche Sie für Ihr Projekt benötigen.'
  },
  {
    slug: 'putzarten-vergleich',
    title: 'Welcher Außenputz ist der richtige?',
    category: 'Materialkunde',
    readTime: '6 Min.',
    img: '/images/fassade.png',
    excerpt: 'Mineralputz, Silikatputz oder Kunstharzputz: Ein Vergleich der gängigsten Putzarten für eine langlebige Fassade.'
  },
  {
    slug: 'keller-abdichten',
    title: 'Feuchten Keller richtig abdichten',
    category: 'Sanierung',
    readTime: '5 Min.',
    img: '/images/maurer.png',
    excerpt: 'Ursachen für nasse Keller und wie man sie nachhaltig von innen oder außen abdichtet.'
  },
  {
    slug: 'hausbau-trends',
    title: 'Hausbau-Trends des Jahres',
    category: 'Tipps',
    readTime: '3 Min.',
    img: '/images/hero.png',
    excerpt: 'Von Smart Home bis hin zu nachhaltigen Baustoffen: Das sind die wichtigsten Trends im modernen Hausbau.'
  }
]

const filterOptions = ['Alle', 'Sanierung', 'Baugenehmigung', 'Materialkunde', 'Tipps']

export default function Ratgeber() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = activeFilter === 'Alle'
    ? articles
    : articles.filter(a => a.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-52 pb-20 bg-charcoal">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Expertenwissen & Tipps</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Der Bau-<span className="gold-text-gradient">Ratgeber</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fundiertes Wissen rund ums Bauen, Sanieren und Renovieren aus Meisterhand. 
            Informieren Sie sich über aktuelle Baustandards, Materialien und Fördermöglichkeiten.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          
          {/* Intro Text */}
          <RevealSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-gray-500 leading-relaxed">
                Willkommen im Ratgeber des <strong className="text-gray-700">Bauunternehmen König</strong>. Hier teilen wir unsere Erfahrung als Leipziger Handwerksbetrieb mit Ihnen. Egal ob Sie Unterstützung bei der Baugenehmigung brauchen oder sich über geeignete Baumaterialien informieren möchten – hier werden Sie fündig.
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

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((article, i) => (
              <RevealSection key={article.slug} delay={i * 100}>
                <Link to={`/ratgeber/${article.slug}`} className="block group h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col">
                    <div className="h-56 overflow-hidden relative flex-shrink-0">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold text-black bg-gold px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-gold" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BookOpen size={14} className="text-gold" />
                          Meister-Tipp
                        </span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-gold font-semibold text-sm group/link mt-auto">
                        Artikel lesen
                        <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
