import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Clock, Calendar, ChevronRight, User, ShieldCheck, Sparkles, CheckCircle2, Phone } from 'lucide-react'
import { RevealSection } from '../components/UI'

const articlesData = {
  'fassadensanierung-leipzig-kosten-foerderung': {
    title: 'Fassaden sanieren in Leipzig: Kosten & Förderungen 2026',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '10. April 2026',
    author: 'Tim König',
    img: '/images/article_fassade.png',
    content: `
      <h2>Wann eine Fassadensanierung unumgänglich wird</h2>
      <p>Gerade in Leipzig prägen historische Putzfassaden und Altbauten das Stadtbild. Doch woran erkennt man, dass die Fassade nicht nur verschmutzt ist, sondern eine echte Sanierung braucht?</p>
      <p>Wenn Putz abplatzt, tiefe Risse sichtbar werden oder Algen massiv in die Dämmschicht eindringen, ist oft schnelles Handeln gefragt, um die Bausubstanz zu schützen.</p>
      
      <h3>Putzarbeiten Leipzig: Wann ist eine Komplettsanierung sinnvoll?</h3>
      <p>Oft reicht ein einfacher Neuanstrich nicht mehr aus. Ist der Altputz hohl, sandet stark ab oder weist netzartige Risse auf, muss er abgeschlagen und neu aufgebaut werden.</p>
      <p>Wir setzen hierbei auf einen Schichtaufbau inklusive Gewebeeinbettung zur Rissüberbrückung. Nur so ist eine dauerhafte Witterungsbeständigkeit über Jahrzehnte garantiert.</p>
      
      <h3>Fördermittel 2026 für Leipziger Bauherren</h3>
      <p>Wer seine Fassade saniert und dabei energetisch aufwertet (Dämmung), kann massive Förderungen abrufen.</p>
      <p>Über die <strong>BEG (Bundesförderung für effiziente Gebäude)</strong> gibt es vom BAFA bis zu 20% Zuschuss auf die Maßnahmen. Wichtig: Der Antrag muss zwingend vor Baubeginn gestellt werden.</p>

      <blockquote>
        <strong>Tipp vom Meister:</strong> Speziell in Leipzigs historischen Vierteln (Leipzig-Südvorstadt, Waldstraßenviertel) greifen oft Sonderregeln bei Straßenfassaden. Nutzen Sie unsere Erfahrung bei der Auswahl denkmalgerechter Putzsysteme.
      </blockquote>
    `
  },
  'risse-fassade-mauerwerk-leipzig': {
    title: 'Risse in Fassade & Mauerwerk richtig sanieren',
    category: 'Materialkunde',
    readTime: '5 Min.',
    date: '02. April 2026',
    author: 'Tim König',
    img: '/images/article_risse.png',
    content: `
      <h2>Panikmache oder echtes Problem?</h2>
      <p>Ein Riss im heimischen Mauerwerk löst bei vielen Hausbesitzern in Leipzig sofort Panik aus. Doch nicht jeder Riss bedeutet den sofortigen Einsturz.</p>
      <p>Wir erklären Ihnen, welche Risse lediglich optische Mängel sind und wann der Profi zur Sicherung der Statik sofort ran muss.</p>
      
      <h3>Haarrisse vs. Setzrisse</h3>
      <p>Oberflächliche Haarrisse (Dicke unter 0,2 mm) im Putz sind oft produktionsbedingt oder durch Witterung entstanden und statisch meist harmlos.</p>
      <p>Handelt es sich jedoch um sogenannte <strong>Setzrisse oder Treppenrisse</strong>, die den Fugen des Ziegelmauerwerks folgen, ist die Statik beeinträchtigt. Ursache ist oft Trockenheit oder Bewegung im Fundament.</p>
      
      <h3>Kann man Risse selbst reparieren?</h3>
      <p>Einen kleinen Haarriss können Sie oft selbst mit Acryl ausspritzen und überstreichen.</p>
      <p>Sind die Risse jedoch tief oder wandern auf die Innenseite durch, muss ein Fachbetrieb ran. Wir wenden hier z.B. <strong>Spiralanker-Systeme</strong> an, um das Mauerwerk kraftschlüssig wieder zu verbinden.</p>

      <blockquote>
        <strong>Tipp:</strong> Ignorieren Sie tiefe Risse an der Wetterseite niemals! Eindringender Regen in Kombination mit Frost sprengt im Winter den Putz großflächig ab (Frostabsprengung).
      </blockquote>
    `
  },
  'trockenbau-altbauwohnungen-leipzig': {
    title: 'Trockenbau in Altbauwohnungen Leipzig',
    category: 'Innenausbau',
    readTime: '6 Min.',
    date: '25. März 2026',
    author: 'Tim König',
    img: '/images/article_trockenbau.png',
    content: `
      <h2>Mehr Raum und Komfort durch modernen Innenausbau</h2>
      <p>Die Sanierung alter Plattenbauten in Grünau oder klassischer Gründerzeithäuser im Leipziger Zentrum stellt Planer oft vor Herausforderungen.</p>
      <p>Der Trockenbau ist hier die absolute Wunderwaffe für schnelle, saubere und flexible Raumlösungen.</p>
      
      <h3>Voreile des Trockenbaus im Altbau</h3>
      <p>Im Gegensatz zu gemauerten Wänden bringt Trockenbau kaum Zusatzgewicht auf die alten Holz- oder Betondecken.</p>
      <p>Zudem wird keine "Baufeuchte" durch Mörtel in die Räume getragen – die neuen Wände sind nach dem Verspachteln sofort bereit für Tapete oder Farbe.</p>
      
      <h3>Worauf man unbedingt achten muss: Schall- und Brandschutz</h3>
      <p>In Altbauten ziehen wir Wände daher oft als <strong>doppelt beplankte Ständerwerke</strong> hoch und füllen den Hohlraum komplett mit schwerer Akustik-Dämmwolle.</p>
      <p>So erreichen wir Schallschutzwerte, die massive Ziegelwände locker übertreffen und für echte Ruhe in der Wohnung sorgen.</p>

      <blockquote>
        <strong>Problem-Lösung für Leipzig:</strong> Alte Decken sind oft krumm und extrem hoch (> 3,00 m). Das fachgerechte Abhängen der Decke spart nicht nur massiv Heizkosten, sondern verbirgt auch alte Elektrik unsichtbar.
      </blockquote>
    `
  },
  'feuchtigkeit-schimmel-sanieren-leipzig': {
    title: 'Feuchtigkeit & Schimmel dauerhaft und fachgerecht sanieren',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '18. März 2026',
    author: 'Tim König',
    img: '/images/article_schimmel.png',
    content: `
      <h2>Warum drüberstreichen niemals hilft</h2>
      <p>Schwarze Ränder an den Ecken oder muffiger Geruch im Schlafzimmer: Schimmel ist ein echter Endgegner in vielen Leipziger Wohnungen.</p>
      <p>Wir zeigen Ihnen, warum herkömmliche Baumarkt-Mittel oft kläglich scheitern und das Problem meist nur oberflächlich verdecken.</p>
      
      <h3>Die 7 häufigsten Ursachen für Schimmel</h3>
      <ul>
        <li>Aufsteigende Feuchte aus dem Keller (kaputte Horizontalsperre)</li>
        <li>Defekte, undichte Regenrinnen an der Fassade</li>
        <li>Kondenswasserbildung an "Kältebrücken" (z.B. unisolierten Stahlträgern)</li>
        <li>Extreme Luftfeuchtigkeit kombiniert mit dicht schließenden Fenstern ohne Lüftungskonzept</li>
        <li>Möbel direkt an kalten Außenwänden</li>
        <li>Haarrisse im Außenputz (Schlagregen dringt ein)</li>
        <li>Wasserschäden, die nie professionell getrocknet wurden</li>
      </ul>
      
      <h3>Echte Sanierungsmaßnahmen (Mauer- & Betonarbeiten)</h3>
      <p>Oberflächliches Abledern reicht nicht aus, da die Schimmelwurzeln (Myzel) oft tief im Putz sitzen.</p>
      <p>Als Profis schlagen wir den betroffenen Putz großzügig ab. Danach wird die Wand alkalisch desinfiziert und mit speziellen <strong>Sanierputzen</strong> neu aufgebaut.</p>
      <p>Diese wirken feuchtigkeitsregulierend und sind von Natur aus pilzhemmend.</p>
    `
  },
  'sanierungskosten-leipzig-2026': {
    title: 'Sanierungskosten Leipzig 2026: Ein Praxischeck',
    category: 'Kosten',
    readTime: '7 Min.',
    date: '10. März 2026',
    author: 'Tim König',
    img: '/images/article_kosten.png',
    content: `
      <h2>Transparente Baupreise für den Großraum Leipzig</h2>
      <p>Was kostet der Handwerker heute? Bevor ein Bauunternehmen beauftragt wird, ist die Budgetfrage die wichtigste.</p>
      <p>Hier sind aktuelle und realistische Preisspannen (Stand 2026) für typische Aufträge, die wir in Leipzig realisieren.</p>
      
      <h3>Fassadenputz & Sanierung</h3>
      <p>Für eine professionelle Fassadensanierung inkl. Gerüst, Putzabschlag und neuem Edelputz sollten Sie mit etwa <strong>85 € bis 115 € pro m²</strong> kalkulieren.</p>
      <p>Muss zusätzlich gedämmt werden (WDVS), steigen die Kosten auf ca. 140 € bis 180 € pro m² – abzüglich staatlicher Förderungen.</p>
      
      <h3>Trockenbau & Innenausbau</h3>
      <p>Eine einfache Ständerwand (doppelt beplankt, inkl. Dämmung & Spachteln Q2) liegt aktuell bei ca. <strong>65 € bis 85 € pro m²</strong>.</p>
      <p>Abgehängte Decken beginnen bei etwa 55 € pro m², je nach Komplexität und Deckenhöhe.</p>
      
      <h3>Rissinjektion & Betonreparatur</h3>
      <p>Da diese Arbeiten sehr individuell sind, wird hier oft nach Aufwand gerechnet.</p>
      <p>Eine klassische Rissverpressung startet bei ca. 180 € pro laufendem Meter, inklusive Material und meisterlicher Ausführung.</p>

      <blockquote>
        <strong>Wichtig für die Planung:</strong> Diese Preise sind Richtwerte. Jedes Gebäude in Leipzig hat seine Eigenheiten. Fordern Sie unser detailliertes Festpreisangebot an!
      </blockquote>
    `
  },
  'denkmalgeschuetzte-haeuser-sanieren-leipzig': {
    title: 'Denkmalgeschützte Häuser sanieren',
    category: 'Baugenehmigung',
    readTime: '7 Min.',
    date: '02. März 2026',
    author: 'Tim König',
    img: '/images/article_denkmal.png',
    content: `
      <h2>Was erlaubt ist und was extrem teuer werden kann</h2>
      <p>Leipzig besitzt eines der größten geschlossenen Gründerzeitensembles Europas.</p>
      <p>Die Denkmalsanierung ist extrem reizvoll, verlangt aber tiefgehendes Wissen über historische Baustoffe und starke Nerven bei der Genehmigung.</p>
      
      <h3>Das strenge Regiment des Denkmalamts Leipzig</h3>
      <p>Jede Veränderung am Erscheinungsbild einer denkmalgeschützten Immobilie erfordert eine Vorab-Genehmigung.</p>
      <p>Ein häufiger Fehler: Der ungenehmigte Austausch historischer Fenster gegen Kunststoffmodelle. Die Folge ist oft ein sofortiger Baustopp und die Verpflichtung zum teuren Rückbau.</p>
      
      <h3>Putz und Fassade: Originalgetreue Wiederherstellung</h3>
      <p>Alte Stuckelemente dürfen niemals mit modernen, steifen Kunstharzputzen überzogen werden.</p>
      <p>Oft schreiben die Ämter mineralische Kalkziegelputze vor, um die historische Bausubstanz atmungsaktiv und gesund zu erhalten.</p>
      
      <h3>Hohe Rendite dank Denkmalschutz-AfA</h3>
      <p>Der staatliche Bonus für diesen Mehraufwand ist enorm: Durch die Sonder-AfA können Selbstnutzer über 10 Jahre hinweg 90% der reinen Sanierungskosten steuerlich geltend machen.</p>
      <p>Wir begleiten Sie beim korrekten Nachweis der Rechnungen bei den Ämtern für eine reibungslose Erstattung.</p>
    `
  },
  'innenwaende-modernisieren-trockenbau-massivbau': {
    title: 'Innenwände modernisieren ohne Baustaub-Chaos',
    category: 'Innenausbau',
    readTime: '5 Min.',
    date: '25. Februar 2026',
    author: 'Tim König',
    img: '/images/article_innenwand.png',
    content: `
      <h2>Trockenbau vs. Massivbau: Der direkte Vergleich</h2>
      <p>Sie möchten aus einem großen Zimmer zwei Kinderzimmer machen oder Räume neu aufteilen?</p>
      <p>Die entscheidende Frage ist oft: Steine kleben oder schrauben? Wir vergleichen beide Methoden für den privaten Innenausbau.</p>
      
      <h3>Der klassische Massivbau (Porenbeton / Ytong)</h3>
      <p>Eine 11er Wand aus Porenbeton ist sehr robust. Der massive Nachteil: Sie bringen extrem viel Feuchtigkeit und Bau-Müllstaub in bewohnte Räume.</p>
      <p>Zudem muss die Wand oft Wochen austrocknen, bevor sie gestrichen oder tapeziert werden kann – ein No-Go bei schnellen Sanierungen.</p>
      
      <h3>Der Sieger für bewohnte Räume: Trockenbau</h3>
      <p>Trockenbau besticht durch absolute Geschwindigkeit und Sauberkeit. Die Platten werden trocken verschraubt und gespachtelt.</p>
      <p>Innerhalb von drei Tagen ist oft eine komplette neue Raumabteilung inklusive Tür-Zarge und bezugsfertiger Oberfläche erstellt.</p>

      <blockquote>
        <strong>Unser Fazit:</strong> Solang keine enormen statischen Lasten getragen werden müssen, empfehlen wir für den schnellen Umbau in Leipziger Wohnungen ausschließlich den Trockenbau!
      </blockquote>
    `
  },
  'betonreparatur-spachteln-statiker-leipzig': {
    title: 'Betonreparatur Leipzig: Spachteln oder Statiker?',
    category: 'Materialkunde',
    readTime: '5 Min.',
    date: '18. Februar 2026',
    author: 'Tim König',
    img: '/images/article_beton.png',
    content: `
      <h2>Wann kleine Abplatzer zur Gefahr werden</h2>
      <p>Offenfliegender, verrosteter Stahl an alten Kellertreppen, bröckelnde Balkonkanten oder Risse im Gerüstboden.</p>
      <p>Dies sind typische Schadbilder, die wir als Maurer- und Beton-Meisterbetrieb wöchentlich fachgerecht beheben.</p>
      
      <h3>Karbonatisierung: Der Endgegner des Betons</h3>
      <p>Beton schützt den inneren Stahl vor Rost. Sinkt der pH-Wert über die Jahrzehnte ab, beginnt der Stahl tief im Inneren zu korrodieren.</p>
      <p>Da Rost sein Volumen stark vergrößert, "sprengt" er den Beton von innen einfach ab. Das ist besonders bei älteren Balkonen kritisch.</p>
      
      <h3>Einfach nur Zement draufschmieren? Besser nicht.</h3>
      <p>Wer freiliegenden Stahl nur oberflächlich zuschmiert, betreibt Flickschusterei, die in kurzer Zeit wieder abfällt.</p>
      <p>Die fachgerechte Reparatur bei uns gliedert sich in:
        <ul>
          <li>Vollständiges Freilegen und Entrosten des Stahls</li>
          <li>Auftragen eines speziellen mineralischen Korrosionsschutzes</li>
          <li>Reprofilierung der Kontur mit kunststoffmodifiziertem Reparaturmörtel (PCC)</li>
        </ul>
      </p>

      <blockquote>
        <strong>Warnsignal:</strong> Sobald tragende Stützen oder Unterzüge tiefe, durchgehende Risse aufweisen, ziehen wir zur Sicherheit immer einen Statiker hinzu!
      </blockquote>
    `
  },
  'energieeffiziente-fassadendaemmung-leipzig': {
    title: 'Energieeffiziente Fassadendämmung: Was bringt sie 2026?',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '10. Februar 2026',
    author: 'Tim König',
    img: '/images/article_daemmung.png',
    content: `
      <h2>GEG-Vorgaben und smarte Kombinationen</h2>
      <p>Wer seine Fassade in Leipzig neu verputzen muss, kommt am Gebäudeenergiegesetz (GEG) heute kaum noch vorbei.</p>
      <p>Wir erklären Ihnen, ab wann gedämmt werden MUSS und welche Systeme für Leipziger Altbauten wirklich sinnvoll sind.</p>
      
      <h3>Die 10-Prozent-Regel (GEG)</h3>
      <p>Wenn Sie planen, mehr als 10 Prozent der gesamten Fassadenfläche neu zu verputzen, greift gesetzlich die Pflicht zur energetischen Dämmung nach aktuellem Standard.</p>
      <p>Dies gilt jedoch nur, wenn der Altputz wirklich abgeschlagen wird. Wer nur "streicht" oder lokale Stellen ausbessert, umgeht dies oft noch rechtssicher.</p>
      
      <h3>WDVS: Der Standard für Effizienz</h3>
      <p>Auf die Wand werden moderne Dämmplatten geklebt und gedübelt. Darauf folgt eine Armierungsschicht und der finale wetterfeste Oberputz.</p>
      <p>Dies senkt Ihre Heizkosten je nach Alt-Zustand um bis zu 40% und sorgt für ein deutlich behaglicheres Raumklima.</p>
      
      <h3>KfW-Fördermittel intelligent kombinieren</h3>
      <p>Nutzen Sie die staatliche BEG-Förderung! Wenn Sie eine energetische Dämmung aufbringen lassen, bezuschusst der Staat aktuell bis zu 20 % der förderfähigen Kosten.</p>
      <p>Dazu zählen auch Gerüst-, Putz- und Malerarbeiten, die im Zuge der Dämmung anfallen. Wir helfen Ihnen, diese Mittel sicher abzurufen.</p>
    `
  },
  'die-8-teuersten-fehler-sanierung-leipzig': {
    title: 'Die 8 teuersten Fehler bei der Sanierung in Leipzig',
    category: 'Tipps',
    readTime: '8 Min.',
    date: '02. Februar 2026',
    author: 'Tim König',
    img: '/images/article_fehler.png',
    content: `
      <h2>Planungsdesaster von Anfang an vermeiden</h2>
      <p>Sanieren ist eine Investition – doppelt zu sanieren hingegen ist ein finanzielles Desaster.</p>
      <p>Nach unzähligen geretteten Projekten haben wir hier die fatalsten Fehler gesammelt, die uns in der täglichen Praxis begegnen.</p>
      
      <h3>Nr. 1: Förderung NACH Baubeginn beantragen</h3>
      <p>KfW und BAFA kennen kein Erbarmen: Wer den Förderantrag erst stellt, wenn das Gerüst steht, verliert unwiderruflich sämtliche (oft zehntausende Euro) Zuschüsse.</p>
      
      <h3>Nr. 2: Bausubstanz & Gifte unterschätzen</h3>
      <p>Alte Leipziger Plattenbauten sind oft asbestbelastet. Das unkontrollierte Herausreißen durch Hobby-Handwerker ist extrem strafbar und krebserregend.</p>
      <p>Lassen Sie die Substanz im Zweifel immer vorab durch einen Profi prüfen.</p>
      
      <h3>Nr. 3: Fehlende Detailplanung</h3>
      <p>Aufträge ohne detailliertes Leistungsverzeichnis enden oft in endlosen Nachforderungen. Verlangen Sie von Ihrem Handwerker exakte Einheitspreise und klare Beschreibungen.</p>

      <blockquote>
        <strong>Bauen Sie auf Sicherheit:</strong> Das Bauunternehmen König koordiniert für Sie alle Gewerke aus einer Hand. So haben Sie nur einen Ansprechpartner und volle Planungssicherheit.
      </blockquote>
    `
  },
  'default': {
    title: 'Expertenwissen für Ihr Bauvorhaben',
    category: 'Tipps',
    readTime: '3 Min.',
    date: '01. Januar 2026',
    author: 'Tim König',
    img: '/images/article_fehler.png',
    content: `
      <h2>Wissenswertes rund ums Bauen in Leipzig</h2>
      <p>Bitte wählen Sie einen spezifischen Beitrag aus unserer Experten-Übersicht aus, um geballtes Fachwissen zu Bau und Sanierung abzurufen.</p>
      <p>Wenn Sie konkrete Fragen zu einem Projekt haben, rufen Sie uns gerne an – wir beraten Sie unverbindlich!</p>
    `
  }
};

export default function RatgeberDetail() {
  const { slug } = useParams()
  const article = articlesData[slug] || articlesData['default']

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": "2026-01-01",
    "image": `https://bauunternehmen-koenig-leipzig.de${article.img}`,
    "publisher": {
      "@type": "Organization",
      "name": "Bauunternehmen König",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bauunternehmen-koenig-leipzig.de/logo.png"
      }
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* Dark Hero */}
      <section className="relative pt-40 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={article.img} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/ratgeber" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-medium mb-10 block">
            <ArrowLeft size={16} />
            Zurück zur Übersicht
          </Link>
          <span className="inline-block px-3 py-1 bg-gold/20 text-gold font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            {article.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-tight mb-8">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
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
      </section>

      {/* Article Content */}
      <article className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            {/* Hero Image */}
            <div className="my-12 rounded-3xl overflow-hidden shadow-xl h-[400px] md:h-[500px]">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <div
              className="prose prose-lg md:prose-xl max-w-none text-gray-600 prose-headings:text-charcoal prose-headings:font-bold prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-10 prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-p:leading-relaxed prose-p:mb-10 prose-p:text-gray-500 prose-p:font-light prose-a:text-gold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-gold prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-gray-800 prose-blockquote:my-12 prose-li:marker:text-gold prose-li:mb-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Inline Footer CTA (Trust Bar + Contact) */}
            <div className="mt-16 bg-white rounded-3xl p-8 md:p-10 border border-gold/40 shadow-[0_8px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(180,144,60,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[80px] z-0 translate-x-1/3 -translate-y-1/3" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-800 text-gray-900 mb-8">
                  Haben Sie Fragen zu Ihrem <span className="gold-text-gradient">Projekt?</span>
                </h3>
                
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    {[
                      { icon: ShieldCheck, text: 'Meisterbetrieb', sub: 'HWK Leipzig' },
                      { icon: Clock, text: 'Termintreue', sub: 'Pünktlich garantiert' },
                      { icon: Sparkles, text: 'Saubere Arbeit', sub: 'Täglich aufgeräumt' },
                      { icon: CheckCircle2, text: 'Festpreisgarantie', sub: 'Keine Überraschungen' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                          <item.icon size={22} className="text-gold" />
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-900 block">{item.text}</span>
                          <span className="text-xs text-gray-500">{item.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="w-full md:w-auto flex flex-col items-center justify-center gap-4 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0 md:pl-10">
                    <p className="text-sm text-gray-500 text-center">
                      Beratung & Festpreis-<br />Angebot in 48 Stunden.
                    </p>
                    <Link to="/kontakt" className="btn-primary w-full shadow-[0_4px_20px_rgba(212,175,55,0.3)] whitespace-nowrap">
                      <Phone size={18} />
                      Unverbindlich anfragen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </article>
      
      <div className="h-12 bg-white"></div>
    </>
  )
}
