import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Calendar, ChevronRight, User } from 'lucide-react'
import { RevealSection } from '../components/UI'

const articlesData = {
  'foerdermittel-sanierung-2026': {
    title: 'Fördermittel für die Sanierung 2026',
    category: 'Sanierung',
    readTime: '5 Min.',
    date: '12. Mai 2026',
    author: 'Tim König',
    img: '/images/sanierung.png',
    content: `
      <h2>Warum sich eine energetische Sanierung 2026 besonders lohnt</h2>
      <p>Die Richtlinien für energetische Gebäudesanierungen ändern sich stetig. Im aktuellen Jahr 2026 gibt es wieder attraktive Zuschüsse, sowohl von der KfW (Kreditanstalt für Wiederaufbau) als auch vom BAFA (Bundesamt für Wirtschaft und Ausfuhrkontrolle). Wir zeigen Ihnen, wo Sie die besten Fördermittel abgreifen können.</p>
      
      <h3>1. Bundesförderung für effiziente Gebäude (BEG)</h3>
      <p>Die BEG fasst frühere Programme zusammen. Hier können Sie Einzelmaßnahmen (z.B. den Tausch von Fenstern oder die Dämmung der Fassade) fördern lassen. Wichtig hierbei ist, dass die Anträge <strong>vor Beginn der Maßnahmen</strong> gestellt werden. Ein Energieeffizienz-Experte muss hierfür hinzugezogen werden.</p>
      
      <h3>2. Steuerliche Förderung</h3>
      <p>Wussten Sie, dass Sie energetische Sanierungsmaßnahmen an selbstgenutztem Wohneigentum auch steuerlich geltend machen können? Bis zu 20 % der Aufwendungen (maximal 40.000 Euro) lassen sich über drei Jahre verteilt von der Steuerschuld abziehen.</p>

      <h3>3. KfW-Förderkredite</h3>
      <p>Sollten Sie eine Komplettsanierung zum KfW-Effizienzhaus planen, bietet die KfW zinsgünstige Kredite mit attraktiven Tilgungszuschüssen an. Je besser der energetische Standard (z.B. Effizienzhaus 55), desto höher fällt der Zuschuss aus.</p>

      <blockquote>
        Tipp vom Meister: Kümmern Sie sich frühzeitig um die Förderanträge, oft dauern die Bewilligungsprozesse mehrere Wochen. Wir unterstützen Sie gerne in der Kommunikation mit den Energieberatern.
      </blockquote>
      
      <h3>Fazit</h3>
      <p>Energetisch zu sanieren schont nicht nur die Umwelt und Ihren Geldbeutel auf lange Sicht, sondern wird auch massiv vom Staat bezuschusst. Nutzen Sie die Möglichkeiten 2026, um den Wert Ihrer Immobilie zu steigern.</p>
    `
  },
  'bauantrag-leipzig': {
    title: 'Der Weg zum Bauantrag in Leipzig',
    category: 'Baugenehmigung',
    readTime: '7 Min.',
    date: '03. April 2026',
    author: 'Tim König',
    img: '/images/hero.png',
    content: `
      <h2>Darauf müssen Sie in Leipzig achten</h2>
      <p>Wer in Leipzig bauen oder umfangreich sanieren möchte, kommt um einen Bauantrag oft nicht herum. Das Bauaufsichtsamt der Stadt Leipzig prüft dabei, ob das Vorhaben dem öffentlichen Baurecht entspricht. So gelingt der Antrag reibungslos.</p>
      
      <h3>Brauche ich überhaupt eine Genehmigung?</h3>
      <p>Nicht jedes Vorhaben ist genehmigungspflichtig ("verfahrensfrei"). Kleinere Vorhaben wie Carports (bis zu einer bestimmten Größe), kleine Gartenhäuser oder einfache Instandhaltungsarbeiten können ohne Antrag gebaut werden. Bei Umbauten an der Statik, Nutzungsänderungen oder Neubauten wird jedoch eine Genehmigung fällig.</p>

      <h3>Benötigte Unterlagen</h3>
      <p>Ein vollständiger Bauantrag (wird meist über einen Architekten oder bauvorlageberechtigten Ingenieur/Handwerksmeister eingereicht) enthält in der Regel:</p>
      <ul>
        <li>Bauantragsformular</li>
        <li>Auszug aus dem Flurkartensystem / Liegenschaftskataster</li>
        <li>Lageplan</li>
        <li>Bauzeichnungen (Grundrisse, Schnitte, Ansichten)</li>
        <li>Baubeschreibung</li>
        <li>Statische Berechnungen</li>
      </ul>

      <blockquote>
        Tipp: Leipzig hat sehr restriktive Baumschutzsatzungen. Klären Sie frühzeitig, ob geschützte Bäume auf Ihrem Grundstück von der Baumaßnahme betroffen sind!
      </blockquote>

      <h3>Dauer des Verfahrens</h3>
      <p>Je nach Komplexität und Vollständigkeit der Unterlagen kann die Bearbeitung in Leipzig zwischen 1 und 4 Monaten dauern. Reichen Sie die Dokumente daher immer sorgfältig geprüft ein.</p>
    `
  },
  'trockenbau-q-stufen': {
    title: 'Trockenbau Spachtelqualität: Q2, Q3 oder Q4?',
    category: 'Materialkunde',
    readTime: '4 Min.',
    date: '21. März 2026',
    author: 'Tim König',
    img: '/images/innenausbau.png',
    content: `
      <h2>Das 1x1 der Spachtelqualitäten</h2>
      <p>Im Trockenbau tauchen immer wieder die Bezeichnungen Q1 bis Q4 auf. Diese definieren die Oberflächenqualität von Gipskartonwänden. Wir erklären den Unterschied und helfen bei der Entscheidung.</p>
      
      <h3>Q1: Grundverspachtelung</h3>
      <p>Dies ist die unterste Stufe. Fugen werden gefüllt und die Werkzeugspuren bleiben sichtbar. Q1 reicht völlig aus, wenn später Fliesen, Putz oder Vorwandsysteme wie Holzverkleidungen angebracht werden.</p>

      <h3>Q2: Standardverspachtelung (Tapezierfähig)</h3>
      <p>Der Standard im Neubau. Fugen und Schraublöcher werden stufenlos an die Plattenoberfläche angeglichen. Abformungen von Werkzeugen sind nicht erlaubt. Diese Oberfläche eignet sich für strukturierte Wandbekleidungen wie Raufasertapeten oder strukturierten Streichputz.</p>
      
      <h3>Q3: Sonderverspachtelung</h3>
      <p>Höhere Ansprüche, z.B. für feine Tapeten oder matte, füllende Anstriche. Hier wird die Q2-Spachtelung zusätzlich breitflächig überspachtelt. Die Oberfläche wird sehr gleichmäßig.</p>

      <h3>Q4: Vollflächige Verspachtelung (Premium)</h3>
      <p>Die höchste Qualitätsstufe. Die gesamte Trockenbauwand wird komplett (mindestens 1 mm dick) mit einer Spachtelschicht überzogen. Perfekt für hochglänzende Farben, Glättetechniken oder feine Vliestapeten. Q4 minimiert den Lichteinfall durch Streiflicht enorm.</p>

      <blockquote>
        Achtung: Eine 100%ige Vermeidung von Streiflicht (Beleuchtung direkt an der Wand) ist selbst bei Q4 physikalisch fast nicht möglich, mindert Schattenbildung aber auf ein absolutes Minimum.
      </blockquote>
    `
  },
  // Default fallback for others:
  'default': {
    title: 'Expertenwissen für Ihr Bauvorhaben',
    category: 'Tipps',
    readTime: '3 Min.',
    date: '10. Januar 2026',
    author: 'Tim König',
    img: '/images/hero.png',
    content: `
      <h2>Wissenswertes rund ums Bauen</h2>
      <p>Wir arbeiten noch daran, diesen Ratgeber-Artikel mit detailliertem Expertenwissen zu füllen. Schauen Sie bald wieder vorbei, um nützliche Tipps für die Praxis zu erhalten.</p>
      <p>Wenn Sie konkrete Fragen zu einem Projekt haben, rufen Sie uns gerne an!</p>
    `
  }
}

export default function RatgeberDetail() {
  const { slug } = useParams()
  const article = articlesData[slug] || articlesData['default']

  return (
    <>
      {/* Header Spacer */}
      <div className="pt-32 pb-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/ratgeber" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-white pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            {/* Meta & Title */}
            <div className="pt-8 pb-10 border-b border-gray-100">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-charcoal leading-tight mb-8">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-gold" />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-gold" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} className="text-gold" />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="my-12 rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <div 
              className="prose prose-lg md:prose-xl max-w-none text-gray-600 prose-headings:text-charcoal prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-gold prose-blockquote:bg-gray-50 prose-blockquote:p-6 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-gray-800 prose-li:marker:text-gold"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />
          </RevealSection>
        </div>
      </article>

      {/* Footer CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-800 text-black mb-6">
              Haben Sie Fragen zu Ihrem Projekt?
            </h2>
            <p className="text-black/80 text-lg mb-8 max-w-xl mx-auto">
              Profitieren Sie von unserer Erfahrung. Wir beraten Sie gerne unverbindlich zu Ihrem Bau- oder Sanierungsvorhaben in Leipzig.
            </p>
            <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-lg">
              <BookOpen size={20} className="mr-2" />
              Kostenlose Beratung sichern
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
