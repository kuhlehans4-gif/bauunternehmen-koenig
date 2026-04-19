import { useState } from 'react'
import { Link } from 'react-router-dom'
import { RevealSection } from '../components/UI'
import { BookOpen, Clock, Filter, ArrowRight, Mail } from 'lucide-react'
import SEO from '../components/SEO'

const articles = [
  {
    slug: 'fassadensanierung-leipzig-kosten-foerderung',
    title: 'Fassaden sanieren in Leipzig: Kosten & Förderungen 2026',
    category: 'Sanierung',
    readTime: '6 Min.',
    img: '/images/article_fassade.png',
    excerpt: 'Wann eine Komplettsanierung sinnvoll ist, welche Förderungen es gibt und woran man erkennt, dass Putz und Fassade Probleme machen.'
  },
  {
    slug: 'risse-fassade-mauerwerk-leipzig',
    title: 'Risse in Fassade & Mauerwerk richtig sanieren',
    category: 'Materialkunde',
    readTime: '5 Min.',
    img: '/images/article_risse.png',
    excerpt: 'Setzungen oder Feuchtigkeit? Ursachen für Risse in Leipziger Altbauten erkennen und wann zur Sicherheit der Profi ran muss.'
  },
  {
    slug: 'trockenbau-altbauwohnungen-leipzig',
    title: 'Trockenbau in Altbauwohnungen Leipzig',
    category: 'Innenausbau',
    readTime: '6 Min.',
    img: '/images/article_trockenbau.png',
    excerpt: 'Schallschutz, Brandschutz und schneller Raumgewinn: Was man bei Leipziger Plattenbauten oder Gründerzeit-Häusern beachten muss.'
  },
  {
    slug: 'feuchtigkeit-schimmel-sanieren-leipzig',
    title: 'Feuchtigkeit & Schimmel dauerhaft beheben',
    category: 'Sanierung',
    readTime: '6 Min.',
    img: '/images/article_schimmel.png',
    excerpt: 'Die 7 häufigsten Ursachen, warum einfach Putz drüberstreichen rein gar nichts bringt und welche echten Sanierungsmaßnahmen wirklich helfen.'
  },
  {
    slug: 'sanierungskosten-leipzig-2026',
    title: 'Sanierungskosten Leipzig 2026: Ein Praxischeck',
    category: 'Kosten',
    readTime: '7 Min.',
    img: '/images/article_kosten.png',
    excerpt: 'Realistische Preisspannen pro m² für kleinere bis mittlere Aufträge wie Fassadenputz, Trockenbau oder nachhaltige Rissverpressung.'
  },
  {
    slug: 'denkmalgeschuetzte-haeuser-sanieren-leipzig',
    title: 'Denkmalgeschützte Häuser sanieren',
    category: 'Baugenehmigung',
    readTime: '7 Min.',
    img: '/images/article_denkmal.png',
    excerpt: 'Denkmalsanierung in Leipzig: Was bei Fassade, Putz und Innenwänden genehmigt wird und wie der Umbau ohne teure Überraschungen gelingt.'
  },
  {
    slug: 'innenwaende-modernisieren-trockenbau-massivbau',
    title: 'Innenwände modernisieren ohne Baustaub-Chaos',
    category: 'Innenausbau',
    readTime: '5 Min.',
    img: '/images/article_innenwand.png',
    excerpt: 'Zeitaufwand, Kosten und der direkte Vergleich: Wann schlanker Trockenbau in der Wohnung die weitaus bessere Alternative zum Massivbau ist.'
  },
  {
    slug: 'betonreparatur-spachteln-statiker-leipzig',
    title: 'Betonreparatur Leipzig: Spachteln oder Statiker?',
    category: 'Materialkunde',
    readTime: '5 Min.',
    img: '/images/article_beton.png',
    excerpt: 'Risse im Beton an alten Treppen, Balkonen und Garagen beurteilen und typische Leipziger Schadstellen nachhaltig abdichten.'
  },
  {
    slug: 'energieeffiziente-fassadendaemmung-leipzig',
    title: 'Energieeffiziente Fassadendämmung: Was bringt sie?',
    category: 'Sanierung',
    readTime: '6 Min.',
    img: '/images/article_daemmung.png',
    excerpt: 'Fassade dämmen in Leipzig: GEG-Vorgaben, was bei Altbauten überhaupt möglich ist und wie man Putz mit intelligenter Dämmung kombiniert.'
  },
  {
    slug: 'die-8-teuersten-fehler-sanierung-leipzig',
    title: 'Die 8 teuersten Fehler bei der Sanierung',
    category: 'Tipps',
    readTime: '8 Min.',
    img: '/images/article_fehler.png',
    excerpt: 'Falscher Putz, fehlende Abnahmen, Förderungen verpasst. Wir zeigen, wie Sie diese Planungsdesaster beim Hausumbau von Anfang an vermeiden.'
  }
]

const filterOptions = ['Alle', 'Sanierung', 'Innenausbau', 'Kosten', 'Baugenehmigung', 'Materialkunde', 'Tipps']

export default function Ratgeber() {
  const [activeFilter, setActiveFilter] = useState('Alle')

  const filtered = activeFilter === 'Alle'
    ? articles
    : articles.filter(a => a.category === activeFilter)

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Bau-Ratgeber | Bauunternehmen König',
    description: 'Expertenwissen rund ums Bauen, Sanieren und Renovieren aus Leipzig.',
    url: 'https://www.bauunternehmen-koenig.com/ratgeber',
    publisher: {
      '@type': 'Organization',
      name: 'Bauunternehmen König',
      url: 'https://www.bauunternehmen-koenig.com',
    },
    blogPost: articles.map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `https://www.bauunternehmen-koenig.com/ratgeber/${a.slug}`,
      image: `https://www.bauunternehmen-koenig.com${a.img}`,
      author: { '@type': 'Person', name: 'Tim König' },
    })),
  }

  return (
    <>
      <SEO
        title="Bau-Ratgeber Leipzig – Experten-Tipps zu Sanierung, Bauantrag & Förderung"
        description="Fundierter Bau-Ratgeber aus Leipzig: Förderungen 2026, Bauantrag, Fassadensanierung, Trockenbau, Schimmelbeseitigung & mehr. Meisterwissen aus der Praxis."
        keywords="Bauratgeber Leipzig, Sanierung Tipps, Bauantrag Leipzig, KfW Förderung, Fassadensanierung Tipps, Trockenbau Ratgeber"
        path="/ratgeber"
        jsonLd={blogJsonLd}
      />
      {/* Hero */}
      <section className="relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Expertenwissen & Tipps</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Der Bau-<span className="gold-text-gradient">Ratgeber</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((article, i) => (
              <RevealSection key={article.slug} delay={i * 100}>
                <Link to={`/ratgeber/${article.slug}`} className="block group h-full">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover h-full flex flex-col">
                    <div className="h-56 overflow-hidden relative flex-shrink-0">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs font-semibold text-black bg-gold px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
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
