import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, User, ShieldCheck, Sparkles, CheckCircle2, Mail, RefreshCw, MapPin, ClipboardCheck, Euro, AlertTriangle, Layers, Hammer, HelpCircle, ArrowRight } from 'lucide-react'
import { RevealSection } from '../components/UI'
import SEO from '../components/SEO'
import { resolvePublicImage } from '../utils/imageFallbacks'

const articlesData = {
  'fassadensanierung-leipzig-kosten-foerderung': {
    title: 'Fassaden sanieren in Leipzig: Kosten & Förderungen 2026',
    metaDescription: 'Fassadensanierung in Leipzig 2026: Kosten pro m², BAFA-Förderung, Schichtaufbau & Putzsysteme. Praxisleitfaden vom Leipziger Meisterbetrieb mit Fördertipps.',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '10. April 2026',
    dateISO: '2026-04-10',
    updated: '10. April 2026',
    updatedISO: '2026-04-10',
    author: 'Tim König',
    img: '/images/ratgeber/fassadensanierung-leipzig-kosten-foerderung.svg',
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
    metaDescription: 'Risse in Fassade und Mauerwerk in Leipzig richtig beurteilen: Haarrisse, Setz- & Treppenrisse erkennen, fachgerecht sanieren & Statik bewerten. Meister-Tipps.',
    category: 'Materialkunde',
    readTime: '5 Min.',
    date: '02. April 2026',
    dateISO: '2026-04-02',
    updated: '02. April 2026',
    updatedISO: '2026-04-02',
    author: 'Tim König',
    img: '/images/ratgeber/risse-fassade-mauerwerk-leipzig.svg',
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
    metaDescription: 'Trockenbau in Leipziger Altbau- & Gründerzeitwohnungen: Schallschutz, Brandschutz & schneller Raumgewinn ohne Baufeuchte. Praxis-Tipps vom Meister aus Leipzig.',
    category: 'Innenausbau',
    readTime: '6 Min.',
    date: '25. März 2026',
    dateISO: '2026-03-25',
    updated: '25. März 2026',
    updatedISO: '2026-03-25',
    author: 'Tim König',
    img: '/images/ratgeber/trockenbau-altbauwohnungen-leipzig.svg',
    content: `
      <h2>Mehr Raum und Komfort durch modernen Innenausbau</h2>
      <p>Die Sanierung alter Plattenbauten in Grünau oder klassischer Gründerzeithäuser im Leipziger Zentrum stellt Planer oft vor Herausforderungen.</p>
      <p>Der Trockenbau ist hier die absolute Wunderwaffe für schnelle, saubere und flexible Raumlösungen.</p>
      
      <h3>Vorteile des Trockenbaus im Altbau</h3>
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
    metaDescription: 'Schimmel & Feuchtigkeit in Leipziger Wohnungen dauerhaft beseitigen: die 7 häufigsten Ursachen und echte Sanierungsmaßnahmen mit Sanierputz vom Meisterbetrieb.',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '18. März 2026',
    dateISO: '2026-03-18',
    updated: '18. März 2026',
    updatedISO: '2026-03-18',
    author: 'Tim König',
    img: '/images/ratgeber/feuchtigkeit-schimmel-sanieren-leipzig.svg',
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
    metaDescription: 'Aktuelle Sanierungskosten Leipzig 2026: realistische Preise pro m² für Fassade, WDVS, Trockenbau, Q2-Spachtelung und Rissinjektion — transparent vom Meisterbetrieb.',
    category: 'Kosten',
    readTime: '7 Min.',
    date: '10. März 2026',
    dateISO: '2026-03-10',
    updated: '10. März 2026',
    updatedISO: '2026-03-10',
    author: 'Tim König',
    img: '/images/ratgeber/sanierungskosten-leipzig-2026.svg',
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
    metaDescription: 'Denkmalsanierung in Leipzig: Was das Denkmalamt erlaubt, welche Putze & Fenster zulässig sind und wie die Denkmal-AfA bis 90 % der Kosten steuerlich rettet.',
    category: 'Baugenehmigung',
    readTime: '7 Min.',
    date: '02. März 2026',
    dateISO: '2026-03-02',
    updated: '02. März 2026',
    updatedISO: '2026-03-02',
    author: 'Tim König',
    img: '/images/ratgeber/denkmalgeschuetzte-haeuser-sanieren-leipzig.svg',
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
    metaDescription: 'Trockenbau vs. Massivbau im direkten Vergleich: Welche Methode passt für Innenwände in Leipziger Wohnungen? Zeit, Kosten & Sauberkeit im Praxistest.',
    category: 'Innenausbau',
    readTime: '5 Min.',
    date: '25. Februar 2026',
    dateISO: '2026-02-25',
    updated: '25. Februar 2026',
    updatedISO: '2026-02-25',
    author: 'Tim König',
    img: '/images/ratgeber/innenwaende-modernisieren-trockenbau-massivbau.svg',
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
    metaDescription: 'Betonreparatur in Leipzig: Karbonatisierung, Rost im Stahl & fachgerechte Sanierung von Balkonen, Treppen und Stützen mit PCC-Mörtel vom Meisterbetrieb.',
    category: 'Materialkunde',
    readTime: '5 Min.',
    date: '18. Februar 2026',
    dateISO: '2026-02-18',
    updated: '18. Februar 2026',
    updatedISO: '2026-02-18',
    author: 'Tim König',
    img: '/images/ratgeber/betonreparatur-spachteln-statiker-leipzig.svg',
    content: `
      <h2>Wann kleine Abplatzer zur Gefahr werden</h2>
      <p>Offenfliegender, verrosteter Stahl an alten Kellertreppen, bröckelnde Balkonkanten oder Risse im Gerüstboden.</p>
      <p>Dies sind typische Schadbilder, die wir als Maurer- und Beton-Meisterbetrieb wöchentlich fachgerecht beheben.</p>
      
      <h3>Karbonatisierung: Der Endgegner des Betons</h3>
      <p>Beton schützt den inneren Stahl vor Rost. Sinkt der pH-Wert über die Jahrzehnte ab, beginnt der Stahl tief im Inneren zu korrodieren.</p>
      <p>Da Rost sein Volumen stark vergrößert, "sprengt" er den Beton von innen einfach ab. Das ist besonders bei älteren Balkonen kritisch.</p>
      
      <h3>Einfach nur Zement draufschmieren? Besser nicht.</h3>
      <p>Wer freiliegenden Stahl nur oberflächlich zuschmiert, betreibt Flickschusterei, die in kurzer Zeit wieder abfällt.</p>
      <p>Die fachgerechte Reparatur bei uns gliedert sich in drei saubere Arbeitsschritte.</p>
      <ul>
        <li>Vollständiges Freilegen und Entrosten des Stahls</li>
        <li>Auftragen eines speziellen mineralischen Korrosionsschutzes</li>
        <li>Reprofilierung der Kontur mit kunststoffmodifiziertem Reparaturmörtel (PCC)</li>
      </ul>

      <blockquote>
        <strong>Warnsignal:</strong> Sobald tragende Stützen oder Unterzüge tiefe, durchgehende Risse aufweisen, ziehen wir zur Sicherheit immer einen Statiker hinzu!
      </blockquote>
    `
  },
  'energieeffiziente-fassadendaemmung-leipzig': {
    title: 'Energieeffiziente Fassadendämmung: Was bringt sie 2026?',
    metaDescription: 'Fassadendämmung in Leipzig 2026: GEG-Pflicht ab 10 %, WDVS-Aufbau, bis zu 40 % Heizkosten sparen und BEG-Förderung bis 20 %. Meisterwissen klar erklärt.',
    category: 'Sanierung',
    readTime: '6 Min.',
    date: '10. Februar 2026',
    dateISO: '2026-02-10',
    updated: '10. Februar 2026',
    updatedISO: '2026-02-10',
    author: 'Tim König',
    img: '/images/ratgeber/energieeffiziente-fassadendaemmung-leipzig.svg',
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
    metaDescription: 'Die 8 teuersten Fehler bei der Sanierung in Leipzig: verpasste Förderungen, Asbest-Fallen & fehlende Leistungsverzeichnisse — wie Sie Planungsdesaster vermeiden.',
    category: 'Tipps',
    readTime: '8 Min.',
    date: '02. Februar 2026',
    dateISO: '2026-02-02',
    updated: '02. Februar 2026',
    updatedISO: '2026-02-02',
    author: 'Tim König',
    img: '/images/ratgeber/die-8-teuersten-fehler-sanierung-leipzig.svg',
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
  'keller-abdichten-feuchtigkeit-leipzig': {
    title: 'Keller abdichten in Leipzig: Innen oder außen sanieren?',
    metaDescription: 'Keller abdichten in Leipzig: Ursachen feuchter Kellerwände erkennen, Innenabdichtung vs. Außenabdichtung vergleichen, Kostenfaktoren und Ablauf vom Meisterbetrieb.',
    category: 'Sanierung',
    readTime: '7 Min.',
    date: '06. Mai 2026',
    dateISO: '2026-05-06',
    updated: '06. Mai 2026',
    updatedISO: '2026-05-06',
    author: 'Tim König',
    img: '/images/ratgeber/keller-abdichten-feuchtigkeit-leipzig.svg',
    content: `
      <h2>Erst die Ursache klären, dann abdichten</h2>
      <p>Feuchte Keller sind in Leipzig kein seltenes Bild: ältere Ziegelkeller, fehlende Horizontalsperren, dichter gewordene Fenster und punktuelle Schäden an der Außenabdichtung treffen oft aufeinander.</p>
      <p>Der wichtigste Schritt ist deshalb nicht der schnelle Sanierputz, sondern die Diagnose: Kommt Wasser seitlich durch die Wand, steigt Feuchtigkeit aus dem Mauerwerk auf oder entsteht Kondenswasser an kalten Bauteilen?</p>

      <h3>Typische Warnsignale</h3>
      <ul>
        <li>Salzausblühungen und abplatzender Putz im Sockelbereich</li>
        <li>Muffiger Geruch, obwohl regelmäßig gelüftet wird</li>
        <li>Dunkle Ränder an Außenwänden oder Boden-Wand-Anschlüssen</li>
        <li>Feuchte Stellen nach Starkregen oder Schneeschmelze</li>
      </ul>

      <h2>Innenabdichtung oder Außenabdichtung?</h2>
      <p>Eine Außenabdichtung ist bauphysikalisch oft die sauberste Lösung, weil Wasser gar nicht erst in die Wand eindringt. Sie ist aber nur sinnvoll, wenn die Außenwand erreichbar ist und der Aushub sicher ausgeführt werden kann.</p>
      <p>Eine Innenabdichtung kann eine gute Lösung sein, wenn Nachbarbebauung, enge Grundstücke oder befestigte Flächen den Aushub unwirtschaftlich machen. Wichtig ist dann ein abgestimmter Aufbau aus Untergrundvorbereitung, Dichtungsschlämme, Sanierputz und kontrollierter Trocknung.</p>

      <blockquote>
        <strong>Praxis-Tipp:</strong> Wer nur den feuchten Putz erneuert, löst meist nicht das Problem. Die Wand sieht kurzfristig gut aus, aber Salze und Feuchtigkeit drücken später wieder durch.
      </blockquote>
    `
  },
  'wanddurchbruch-tragende-wand-leipzig': {
    title: 'Wanddurchbruch in Leipzig: Kosten, Statik & Ablauf',
    metaDescription: 'Wanddurchbruch in Leipzig planen: tragende Wand erkennen, Statiker, Stahlträger, Staubschutz, Genehmigung und realistische Kostenfaktoren vom Maurermeister erklärt.',
    category: 'Maurer',
    readTime: '7 Min.',
    date: '06. Mai 2026',
    dateISO: '2026-05-06',
    updated: '06. Mai 2026',
    updatedISO: '2026-05-06',
    author: 'Tim König',
    img: '/images/ratgeber/wanddurchbruch-tragende-wand-leipzig.svg',
    content: `
      <h2>Der Durchbruch beginnt nicht mit dem Vorschlaghammer</h2>
      <p>Ein Wanddurchbruch kann Räume heller, großzügiger und moderner machen. Sobald die Wand tragend sein könnte, entscheidet aber die Statik über den Ablauf: Lasten müssen sicher abgefangen und über einen passenden Stahlträger oder Betonsturz weitergeleitet werden.</p>
      <p>Gerade in Leipziger Altbauten mit gemischtem Mauerwerk, Holzbalkendecken und früheren Umbauten lohnt sich eine saubere Prüfung vor dem ersten Schnitt.</p>

      <h3>Woran erkennt man eine tragende Wand?</h3>
      <ul>
        <li>Sie steht über mehrere Geschosse an gleicher Stelle</li>
        <li>Sie ist deutlich stärker als leichte Trennwände</li>
        <li>Deckenbalken oder Stahlträger liegen darauf auf</li>
        <li>Sie befindet sich nahe Treppenhaus, Kamin oder Gebäudemitte</li>
      </ul>

      <h2>So läuft ein sicherer Wanddurchbruch ab</h2>
      <p>Vor Ort werden Wandaufbau, Leitungen, Deckenrichtung und Lastabtragung geprüft. Danach legt der Statiker fest, welcher Träger benötigt wird und wie die Wand während der Arbeiten abgestützt wird.</p>
      <p>Erst dann folgen Staubschutz, Abstützung, kontrollierter Rückbau, Einbau des Trägers, Vermörtelung und die saubere Vorbereitung für Putz, Trockenbau oder Malerarbeiten.</p>

      <blockquote>
        <strong>Wichtig:</strong> Bei Eigentumswohnungen sollte zusätzlich geprüft werden, ob Gemeinschaftseigentum betroffen ist und ob die Zustimmung der Eigentümergemeinschaft erforderlich ist.
      </blockquote>
    `
  },
  'default': {
    title: 'Expertenwissen für Ihr Bauvorhaben',
    category: 'Tipps',
    readTime: '3 Min.',
    date: '01. Januar 2026',
    author: 'Tim König',
    img: '/images/ratgeber/die-8-teuersten-fehler-sanierung-leipzig.svg',
    content: `
      <h2>Wissenswertes rund ums Bauen in Leipzig</h2>
      <p>Bitte wählen Sie einen spezifischen Beitrag aus unserer Experten-Übersicht aus, um geballtes Fachwissen zu Bau und Sanierung abzurufen.</p>
      <p>Wenn Sie konkrete Fragen zu einem Projekt haben, kontaktieren Sie uns gerne – wir beraten Sie unverbindlich!</p>
    `
  }
};

const topicGuides = {
  'fassadensanierung-leipzig-kosten-foerderung': {
    value: 'Sehr starkes lokales Thema, weil Eigentümer vor einer Fassadensanierung fast immer Kosten, Förderfähigkeit und den richtigen Schichtaufbau verstehen wollen.',
    bestFor: 'Hausbesitzer mit rissigem, hohlem oder verwittertem Außenputz',
    summary: [
      'Eine belastbare Einschätzung beginnt mit Abklopfen, Feuchtemessung und Prüfung des Altputzes.',
      'Förderung wird relevant, sobald die Fassade energetisch verbessert wird und der Antrag vor Start steht.',
      'In Leipziger Gründerzeitlagen müssen Putzstruktur, Farbe und Detailausbildung oft besonders sauber abgestimmt werden.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Hohler Putz, tiefe Risse, Algen und feuchte Sockelzonen.' },
      { label: 'Nicht vergessen', text: 'Gerüst, Fensteranschlüsse, Sockelabdichtung und Regenrinnen gehören in die Kalkulation.' },
      { label: 'Nächster Schritt', text: 'Fassade abschnittsweise prüfen lassen und Förderfähigkeit vor Angebot klären.' }
    ],
    steps: ['Bestandsaufnahme vor Ort', 'Putzsystem und ggf. Dämmaufbau festlegen', 'Förderung und Denkmalfragen klären', 'Gerüst, Untergrund, Armierung und Oberputz ausführen'],
    costDrivers: ['Gerüsthöhe und Zugänglichkeit', 'Anteil hohler Altputzflächen', 'Sockel- und Anschlussdetails', 'Dämmstoff, Putzsystem und Oberflächenstruktur'],
    faq: [
      { q: 'Reicht ein neuer Anstrich bei einer alten Fassade?', a: 'Nur wenn der Putz tragfähig, trocken und rissarm ist. Hohle oder sandende Flächen müssen vorher fachgerecht saniert werden.' },
      { q: 'Wann lohnt sich Förderung?', a: 'Sobald die Gebäudehülle energetisch verbessert wird. Der Antrag muss vor Beauftragung und Baustart vorbereitet werden.' },
      { q: 'Muss bei jedem neuen Putz gedämmt werden?', a: 'Nicht bei jeder kleinen Reparatur. Wird eine relevante Bauteilfläche erneuert, müssen die GEG-Anforderungen geprüft werden.' }
    ],
    related: ['energieeffiziente-fassadendaemmung-leipzig', 'risse-fassade-mauerwerk-leipzig', 'sanierungskosten-leipzig-2026']
  },
  'risse-fassade-mauerwerk-leipzig': {
    value: 'Hoher praktischer Nutzen, weil der Artikel Besitzern hilft, harmlose Putzrisse von echten Bauschäden zu unterscheiden.',
    bestFor: 'Eigentümer, die Risse an Fassade, Innenwand oder Mauerwerk entdeckt haben',
    summary: [
      'Rissbreite, Verlauf und Tiefe sagen mehr aus als die reine Länge.',
      'Treppenrisse, wiederkehrende Risse und Feuchtigkeit sind Warnsignale.',
      'Eine dauerhafte Reparatur braucht Kraftschluss, Armierung oder konstruktive Sicherung statt nur Acryl.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Risse fotografieren, markieren und nach Regen oder Frost erneut kontrollieren.' },
      { label: 'Nicht vergessen', text: 'Rissursache klären, bevor neu verputzt oder gestrichen wird.' },
      { label: 'Nächster Schritt', text: 'Bei durchgehenden oder wachsenden Rissen eine fachliche Begutachtung einplanen.' }
    ],
    steps: ['Rissbild aufnehmen', 'Ursache und Feuchtebelastung prüfen', 'Sanierungsverfahren auswählen', 'Riss schließen, armieren und Oberfläche wiederherstellen'],
    costDrivers: ['Risstiefe und Wandaufbau', 'Zugänglichkeit der Schadstelle', 'Notwendige Spiralanker oder Injektion', 'Nacharbeiten an Putz und Farbe'],
    faq: [
      { q: 'Sind Haarrisse gefährlich?', a: 'Meist nicht, wenn sie oberflächlich bleiben und sich nicht verändern. Sie sollten trotzdem beobachtet werden.' },
      { q: 'Wann braucht man einen Statiker?', a: 'Bei breiten, wachsenden, treppenförmigen oder durchgehenden Rissen sowie bei Rissen an tragenden Bauteilen.' },
      { q: 'Warum kommen Risse nach dem Streichen wieder?', a: 'Weil Farbe keine Bewegung aufnimmt. Ohne passende Risssanierung arbeitet die Ursache weiter.' }
    ],
    related: ['fassadensanierung-leipzig-kosten-foerderung', 'betonreparatur-spachteln-statiker-leipzig', 'die-8-teuersten-fehler-sanierung-leipzig']
  },
  'trockenbau-altbauwohnungen-leipzig': {
    value: 'Sehr passend für Leipzig, weil viele Umbauten in Altbauwohnungen schnelle Raumänderung, Schallschutz und geringe Baufeuchte brauchen.',
    bestFor: 'Wohnungseigentümer, Vermieter und Familien mit Grundrissänderungen',
    summary: [
      'Trockenbau ist ideal, wenn Umbauten in bewohnten Wohnungen sauber und schnell laufen sollen.',
      'Schall- und Brandschutz entstehen durch Systemaufbau, Dämmung und Beplankung, nicht nur durch Plattenstärke.',
      'Krumme Altbaudecken und hohe Räume müssen vor dem Zuschnitt sauber vermessen werden.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Deckenhöhe, Bodenaufbau, Leitungen und gewünschte Türposition.' },
      { label: 'Nicht vergessen', text: 'Q-Stufe der Oberfläche, Schallschutzdämmung und Anschlüsse an krumme Wände.' },
      { label: 'Nächster Schritt', text: 'Grundriss skizzieren und gewünschte Nutzung pro Raum festlegen.' }
    ],
    steps: ['Aufmaß und Leitungsprüfung', 'Ständerwerk und Dämmung planen', 'Beplankung, Türen und Anschlüsse ausführen', 'Spachtelqualität und Oberfläche herstellen'],
    costDrivers: ['Wandhöhe und Raumzuschnitt', 'Einfach oder doppelt beplankt', 'Schall- und Brandschutzanforderung', 'Oberflächenqualität Q2 bis Q4'],
    faq: [
      { q: 'Ist Trockenbau schlechter als eine gemauerte Wand?', a: 'Nein. Richtig aufgebaut erreicht Trockenbau sehr gute Schallwerte und ist für viele Innenräume die bessere Lösung.' },
      { q: 'Kann man schwere Regale befestigen?', a: 'Ja, wenn Verstärkungen oder passende Dübel von Anfang an eingeplant werden.' },
      { q: 'Wie lange dauert eine neue Trockenbauwand?', a: 'Kleine Raumteilungen sind oft in wenigen Tagen inklusive Spachtelung umsetzbar.' }
    ],
    related: ['innenwaende-modernisieren-trockenbau-massivbau', 'sanierungskosten-leipzig-2026', 'die-8-teuersten-fehler-sanierung-leipzig']
  },
  'feuchtigkeit-schimmel-sanieren-leipzig': {
    value: 'Starkes Vertrauens-Thema, weil es Ängste reduziert und zeigt, dass Bauunternehmen König Ursachen statt nur Oberflächen behandelt.',
    bestFor: 'Bewohner und Eigentümer mit muffigen Räumen, feuchten Ecken oder wiederkehrendem Schimmel',
    summary: [
      'Schimmel ist ein Symptom; entscheidend ist die Feuchtequelle.',
      'Sanierputz hilft nur, wenn Untergrund, Salze und Trocknung berücksichtigt werden.',
      'Lüften allein löst keine undichte Fassade, keine defekte Abdichtung und keine Wärmebrücke.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Außenwand, Fensteranschlüsse, Sockelzone, Keller und Regenentwässerung.' },
      { label: 'Nicht vergessen', text: 'Nach Wasserschäden braucht es Trocknung und Feuchtemessung, nicht nur neue Farbe.' },
      { label: 'Nächster Schritt', text: 'Schadstelle dokumentieren und Ursache vor der Oberflächensanierung klären.' }
    ],
    steps: ['Feuchtequelle eingrenzen', 'Befall und Putzschäden entfernen', 'Untergrund behandeln und trocknen', 'Geeigneten Putzaufbau und Oberfläche herstellen'],
    costDrivers: ['Größe der Schadfläche', 'Tiefe der Putzdurchfeuchtung', 'Notwendige Trocknung', 'Außenabdichtung oder Anschlussreparaturen'],
    faq: [
      { q: 'Kann man Schimmel einfach überstreichen?', a: 'Nein. Das verdeckt die Oberfläche, beseitigt aber weder Feuchte noch Myzel im Putz.' },
      { q: 'Wann ist Sanierputz sinnvoll?', a: 'Wenn der Untergrund vorbereitet ist und die Feuchteursache kontrolliert wird. Er ist kein Ersatz für Abdichtung.' },
      { q: 'Wer ist zuständig, Handwerker oder Gutachter?', a: 'Bei unklarer Ursache kann zuerst eine fachliche Sichtprüfung helfen; bei Streitfällen ist ein unabhängiger Gutachter sinnvoll.' }
    ],
    related: ['keller-abdichten-feuchtigkeit-leipzig', 'fassadensanierung-leipzig-kosten-foerderung', 'die-8-teuersten-fehler-sanierung-leipzig']
  },
  'sanierungskosten-leipzig-2026': {
    value: 'Sehr hilfreich, weil transparente Kosten Orientierung geben und früh zeigen, welche Leistungen wirklich ins Budget gehören.',
    bestFor: 'Bauherren, die ein realistisches Erstbudget für Leipzig brauchen',
    summary: [
      'Quadratmeterpreise sind nur ein Startpunkt; Details entscheiden über den echten Endpreis.',
      'Ein gutes Angebot trennt Material, Arbeitszeit, Nebenleistungen und Unvorhergesehenes klar.',
      'Vor-Ort-Prüfung verhindert, dass wichtige Leistungen später als Nachtrag auftauchen.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Fläche, Zustand, Zugänglichkeit und gewünschter Qualitätsstandard.' },
      { label: 'Nicht vergessen', text: 'Gerüst, Entsorgung, Schutzmaßnahmen und Nebenarbeiten gehören ins Budget.' },
      { label: 'Nächster Schritt', text: 'Leistungsumfang schriftlich klären und vergleichbare Angebote einholen.' }
    ],
    steps: ['Projektumfang definieren', 'Mengen aufnehmen', 'Qualitätsstandard festlegen', 'Festpreis oder Regie sauber vereinbaren'],
    costDrivers: ['Untergrundzustand', 'Baustellenzugang und Schutz', 'Materialsystem', 'Termin- und Trocknungszeiten'],
    faq: [
      { q: 'Warum unterscheiden sich Angebote so stark?', a: 'Oft werden Nebenleistungen, Vorarbeiten oder Qualitätsstufen unterschiedlich berücksichtigt.' },
      { q: 'Ist ein Festpreis immer besser?', a: 'Bei klarer Leistung ja. Bei unbekannter Substanz kann eine transparente Regiephase fairer sein.' },
      { q: 'Wie vermeide ich Nachträge?', a: 'Durch genaue Bestandsaufnahme, klare Mengen und ein verständliches Leistungsverzeichnis.' }
    ],
    related: ['die-8-teuersten-fehler-sanierung-leipzig', 'fassadensanierung-leipzig-kosten-foerderung', 'wanddurchbruch-tragende-wand-leipzig']
  },
  'denkmalgeschuetzte-haeuser-sanieren-leipzig': {
    value: 'Gutes Leipziger Autoritätsthema, weil Denkmalschutz lokal stark geprägt ist und Eigentümer früh praktische Orientierung brauchen.',
    bestFor: 'Eigentümer von Gründerzeit- und Altbauobjekten mit geschützter Substanz',
    summary: [
      'Vor sichtbaren Änderungen sollte die Abstimmung mit dem Denkmalamt erfolgen.',
      'Mineralische, diffusionsoffene Baustoffe sind bei historischer Substanz oft die bessere Wahl.',
      'Saubere Dokumentation hilft bei Genehmigung, Ausführung und steuerlichen Nachweisen.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Denkmalstatus, Erhaltungssatzung und vorhandene historische Details.' },
      { label: 'Nicht vergessen', text: 'Fenster, Stuck, Putzstruktur und Farbton können genehmigungsrelevant sein.' },
      { label: 'Nächster Schritt', text: 'Vor Angebot klären, welche Bauteile wirklich verändert werden dürfen.' }
    ],
    steps: ['Denkmalstatus prüfen', 'Bestand fotografisch dokumentieren', 'Materialkonzept abstimmen', 'Ausführung und Nachweise sauber sammeln'],
    costDrivers: ['Detailgrad der Fassade', 'Handwerkliche Wiederherstellung', 'Genehmigungsauflagen', 'Spezialmaterialien und Musterflächen'],
    faq: [
      { q: 'Darf ich denkmalgeschützte Fenster einfach tauschen?', a: 'In der Regel nicht ohne Abstimmung. Häufig sind Erhalt, Reparatur oder nachgebildete Lösungen gefordert.' },
      { q: 'Warum sind moderne Kunstharzputze problematisch?', a: 'Sie können historische, feuchteempfindliche Substanz einsperren und Schäden verschärfen.' },
      { q: 'Wann sollte das Denkmalamt eingebunden werden?', a: 'Vor sichtbaren Änderungen und idealerweise vor finaler Angebotskalkulation.' }
    ],
    related: ['fassadensanierung-leipzig-kosten-foerderung', 'bauantrag-leipzig', 'die-8-teuersten-fehler-sanierung-leipzig']
  },
  'innenwaende-modernisieren-trockenbau-massivbau': {
    value: 'Sinnvoll, weil es eine konkrete Bauherrenentscheidung erklärt und typische Innenausbau-Fragen direkt beantwortet.',
    bestFor: 'Wohnungen, Praxen und Büros, die Räume neu aufteilen möchten',
    summary: [
      'Trockenbau ist schnell, sauber und belastet alte Decken weniger.',
      'Massivbau kann sinnvoll sein, wenn Robustheit, Feuchtebeständigkeit oder Schallschutz anders geplant werden müssen.',
      'Die beste Lösung hängt von Nutzung, Lasten, Oberfläche und Zeitplan ab.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Nutzung, Türposition, gewünschte Lasten und Schallschutz.' },
      { label: 'Nicht vergessen', text: 'Steckdosen, Leitungen und spätere Befestigungen vorab einplanen.' },
      { label: 'Nächster Schritt', text: 'Grundrissvariante mit Maßen erstellen und Wandaufbau passend wählen.' }
    ],
    steps: ['Nutzung klären', 'Wandaufbau vergleichen', 'Leitungen und Türen planen', 'Oberfläche und Abnahmequalität festlegen'],
    costDrivers: ['Wandlänge und Höhe', 'Türöffnungen', 'Schallschutzdämmung', 'Spachtelqualität und Malervorbereitung'],
    faq: [
      { q: 'Ist Trockenbau für Mietwohnungen geeignet?', a: 'Ja, wenn Rückbau, Schallschutz und Befestigungen mitgedacht werden.' },
      { q: 'Wann ist Massivbau besser?', a: 'Bei sehr hoher mechanischer Belastung, bestimmten Feuchtebereichen oder wenn es konstruktiv gefordert ist.' },
      { q: 'Wie bleibt die Baustelle sauber?', a: 'Durch Staubschutz, Zuschnittplanung und tägliches Aufräumen. Trockenbau bringt deutlich weniger Baufeuchte ein.' }
    ],
    related: ['trockenbau-altbauwohnungen-leipzig', 'sanierungskosten-leipzig-2026', 'wanddurchbruch-tragende-wand-leipzig']
  },
  'betonreparatur-spachteln-statiker-leipzig': {
    value: 'Nischig, aber wertvoll: Beton- und Treppenschäden sind konkrete Problemfälle mit hoher Beratungsnotwendigkeit.',
    bestFor: 'Balkone, Treppen, Garagen, Stützen und Kellerbereiche mit Betonabplatzungen',
    summary: [
      'Freiliegender Stahl ist mehr als ein optischer Mangel.',
      'PCC-Mörtel, Korrosionsschutz und Untergrundvorbereitung müssen zusammenpassen.',
      'Tragende Bauteile sollten bei tiefen Rissen oder Verformungen statisch bewertet werden.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Roststellen, Hohlklang, Abplatzungen und Wasserbelastung.' },
      { label: 'Nicht vergessen', text: 'Ursache der Korrosion beseitigen, sonst kommt der Schaden zurück.' },
      { label: 'Nächster Schritt', text: 'Schadstelle öffnen lassen und Sanierungstiefe festlegen.' }
    ],
    steps: ['Schadstelle freilegen', 'Bewehrung entrosten und schützen', 'Kontur mit Reparaturmörtel aufbauen', 'Oberfläche schützen und Wasserführung prüfen'],
    costDrivers: ['Tiefe der Abplatzung', 'Anteil freiliegender Bewehrung', 'Arbeitsgerüst oder Zugang', 'Oberflächenschutz und Abdichtung'],
    faq: [
      { q: 'Kann man Beton einfach überspachteln?', a: 'Nur bei oberflächlichen Schäden. Freiliegender Stahl braucht Entrostung und Korrosionsschutz.' },
      { q: 'Wann ist ein Statiker Pflicht?', a: 'Bei tragenden Bauteilen, starken Rissen, Verformungen oder großflächiger Bewehrungskorrosion.' },
      { q: 'Wie lange hält eine Betonreparatur?', a: 'Dauerhaft nur, wenn Wasserführung, Korrosionsschutz und Reparaturmörtel fachgerecht abgestimmt sind.' }
    ],
    related: ['risse-fassade-mauerwerk-leipzig', 'wanddurchbruch-tragende-wand-leipzig', 'sanierungskosten-leipzig-2026']
  },
  'energieeffiziente-fassadendaemmung-leipzig': {
    value: 'Starkes Beratungsthema, weil GEG, Förderung, Heizkosten und Fassadenaufbau zusammen gedacht werden müssen.',
    bestFor: 'Eigentümer, die Fassade, Dämmung und Energieplanung verbinden möchten',
    summary: [
      'Eine Fassadendämmung lohnt sich besonders, wenn ohnehin Putz, Gerüst und Anschlüsse erneuert werden.',
      'GEG und Förderung sollten vor Angebot und Baubeginn geprüft werden.',
      'Bei Altbauten entscheidet der passende Systemaufbau über Dauerhaftigkeit und Optik.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Flächenanteil, Wandaufbau, Feuchte, Sockelzone und Dachüberstände.' },
      { label: 'Nicht vergessen', text: 'Fensterbänke, Laibungen, Fallrohre und Anschlüsse verändern sich durch Dämmstärke.' },
      { label: 'Nächster Schritt', text: 'Energieberater und Fachbetrieb früh zusammenbringen.' }
    ],
    steps: ['Gebäudehülle bewerten', 'Dämmstärke und System wählen', 'Förderung vor Start sichern', 'Anschlüsse, Armierung und Oberputz ausführen'],
    costDrivers: ['Dämmstoff und Stärke', 'Anschlussdetails', 'Gerüst und Arbeitshöhe', 'Sockelabdichtung und Putzstruktur'],
    faq: [
      { q: 'Bringt Fassadendämmung immer etwas?', a: 'Bei ungedämmten Außenwänden meist ja, aber Wirtschaftlichkeit und Bauphysik hängen vom Gebäude ab.' },
      { q: 'Was bedeutet die 10-Prozent-Regel?', a: 'Bei größeren Änderungen an einer Bauteilgruppe müssen energetische Mindestanforderungen geprüft werden.' },
      { q: 'Kann Förderung mit normalen Putzarbeiten kombiniert werden?', a: 'Begleitende Arbeiten können förderfähig sein, wenn sie Teil einer geförderten energetischen Maßnahme sind.' }
    ],
    related: ['fassadensanierung-leipzig-kosten-foerderung', 'sanierungskosten-leipzig-2026', 'denkmalgeschuetzte-haeuser-sanieren-leipzig']
  },
  'die-8-teuersten-fehler-sanierung-leipzig': {
    value: 'Sehr gutes Beratungsthema, weil es Risiken vor dem Auftrag erklärt und Vertrauen durch ehrliche Warnungen schafft.',
    bestFor: 'Bauherren vor Kauf, Umbau oder größerer Sanierung',
    summary: [
      'Die teuersten Fehler entstehen fast immer vor Baustart.',
      'Unklare Leistungsbeschreibungen führen zu Streit, Nachträgen und Verzögerungen.',
      'Förderung, Schadstoffe und Genehmigungen müssen früh geprüft werden.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Bausubstanz, Förderfristen, Genehmigungspflichten und Schadstoffverdacht.' },
      { label: 'Nicht vergessen', text: 'Ein gutes Angebot beschreibt Mengen, Materialien und Nebenleistungen verständlich.' },
      { label: 'Nächster Schritt', text: 'Vor Baubeginn eine kurze Risiko- und Ablaufprüfung machen lassen.' }
    ],
    steps: ['Projektziel festlegen', 'Risiken prüfen', 'Leistungsverzeichnis sauber aufbauen', 'Zeitplan, Schutz und Abnahme klären'],
    costDrivers: ['Unbekannte Substanz', 'Nachträge durch unklare Leistungen', 'Förderverlust durch zu frühen Start', 'Stillstand durch fehlende Genehmigungen'],
    faq: [
      { q: 'Was ist der häufigste Sanierungsfehler?', a: 'Zu früh zu beauftragen, bevor Förderfähigkeit, Substanz und Leistungsumfang geklärt sind.' },
      { q: 'Warum sind billige Angebote riskant?', a: 'Oft fehlen Nebenleistungen, Schutzmaßnahmen oder Qualitätsstufen, die später nachberechnet werden.' },
      { q: 'Wie erkenne ich ein gutes Angebot?', a: 'Es ist verständlich, vollständig und nennt Materialien, Mengen, Vorarbeiten und klare Ausschlüsse.' }
    ],
    related: ['sanierungskosten-leipzig-2026', 'feuchtigkeit-schimmel-sanieren-leipzig', 'bauantrag-leipzig']
  },
  'keller-abdichten-feuchtigkeit-leipzig': {
    value: 'Sehr hohes lokales Praxisthema, weil feuchte Keller ein akutes Problem sind und fachliche Diagnose echten Nutzen liefert.',
    bestFor: 'Altbaukeller, Souterrainräume und Häuser mit feuchten Sockelzonen',
    summary: [
      'Innenabdichtung und Außenabdichtung lösen unterschiedliche Situationen.',
      'Salze, Putzschäden und Feuchtequelle müssen gemeinsam betrachtet werden.',
      'Nach Starkregen auftretende Feuchte ist ein wichtiger Hinweis auf seitlichen Wassereintritt.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Feuchtebild nach Regen, Sockel außen, Fallrohre und Boden-Wand-Anschluss.' },
      { label: 'Nicht vergessen', text: 'Sanierputz ersetzt keine Abdichtung gegen drückende oder seitlich eindringende Feuchte.' },
      { label: 'Nächster Schritt', text: 'Feuchtequelle eingrenzen und entscheiden, ob innen oder außen gearbeitet wird.' }
    ],
    steps: ['Feuchtebild aufnehmen', 'Ursache und Salzbelastung prüfen', 'Abdichtungsart festlegen', 'Putzaufbau, Trocknung und Lüftung abstimmen'],
    costDrivers: ['Außen freilegbar oder nicht', 'Tiefe und Länge der Kellerwand', 'Drainage und Wasserführung', 'Putzabtrag und Innenausbau'],
    faq: [
      { q: 'Ist eine Außenabdichtung immer besser?', a: 'Sie ist oft bauphysikalisch sauberer, aber nicht immer erreichbar oder wirtschaftlich. Innenabdichtung kann dann sinnvoll sein.' },
      { q: 'Warum blüht der Putz weiß aus?', a: 'Feuchtigkeit transportiert Salze aus dem Mauerwerk an die Oberfläche. Beim Trocknen kristallisieren sie aus.' },
      { q: 'Kann ein Keller komplett trocken werden?', a: 'Das hängt von Wandaufbau, Nutzung und Abdichtung ab. Ziel ist ein dauerhaft nutzbarer, schadensarmer Zustand.' }
    ],
    related: ['feuchtigkeit-schimmel-sanieren-leipzig', 'sanierungskosten-leipzig-2026', 'die-8-teuersten-fehler-sanierung-leipzig']
  },
  'wanddurchbruch-tragende-wand-leipzig': {
    value: 'Sehr handlungsnahes Maurer-Thema: Wer danach sucht, steht meist kurz vor einem konkreten Umbau.',
    bestFor: 'Eigentümer, die Küche, Wohnzimmer oder Gewerbeflächen öffnen möchten',
    summary: [
      'Tragende Wände brauchen statische Prüfung, Abstützung und passenden Träger.',
      'Leitungen, Staubschutz und Entsorgung sollten vor dem Angebot geklärt werden.',
      'Bei Eigentumswohnungen können Zustimmung und Gemeinschaftseigentum relevant sein.'
    ],
    check: [
      { label: 'Sofort prüfen', text: 'Wanddicke, Deckenrichtung, Installationen und darüberliegende Geschosse.' },
      { label: 'Nicht vergessen', text: 'Statiker, Stahlträger, Brandschutz und Oberflächenanschluss einplanen.' },
      { label: 'Nächster Schritt', text: 'Vor-Ort-Termin mit Aufmaß und statischer Vorprüfung vereinbaren.' }
    ],
    steps: ['Wand und Lasten prüfen', 'Statik und Träger festlegen', 'Baustelle staubarm vorbereiten', 'Abstützen, öffnen, Träger setzen und sauber schließen'],
    costDrivers: ['Tragend oder nicht tragend', 'Trägergröße und Auflager', 'Staubschutz und bewohnte Räume', 'Putz-, Trockenbau- und Maleranschlüsse'],
    faq: [
      { q: 'Kann man eine tragende Wand entfernen?', a: 'Oft ja, aber nur mit statischer Berechnung, Abstützung und geeignetem Träger.' },
      { q: 'Was kostet ein Wanddurchbruch?', a: 'Das hängt stark von Breite, Statik, Träger, Zugang und Nacharbeiten ab. Ein Vor-Ort-Aufmaß ist fast immer nötig.' },
      { q: 'Braucht man eine Genehmigung?', a: 'Bei statischen Eingriffen, Eigentumswohnungen oder Nutzungsänderungen sollte das vorab geprüft werden.' }
    ],
    related: ['innenwaende-modernisieren-trockenbau-massivbau', 'betonreparatur-spachteln-statiker-leipzig', 'sanierungskosten-leipzig-2026']
  }
}

const fallbackGuide = {
  value: 'Praxisnahes Thema mit lokalem Bezug und konkretem Nutzen für Bauherren in Leipzig.',
  bestFor: 'Bauherren mit konkreter Planungs- oder Sanierungsfrage',
  summary: [
    'Erst Ursache und Ziel klären, dann Material und Ausführung festlegen.',
    'Ein Vor-Ort-Termin verhindert Missverständnisse und unnötige Nachträge.',
    'Saubere Planung spart in der Ausführung meist mehr Geld als ein vorschneller Start.'
  ],
  check: [
    { label: 'Sofort prüfen', text: 'Bausubstanz, Maße, Nutzung und sichtbare Schäden.' },
    { label: 'Nicht vergessen', text: 'Nebenleistungen, Trocknungszeiten und Anschlüsse mitdenken.' },
    { label: 'Nächster Schritt', text: 'Projekt kurz dokumentieren und fachlich einschätzen lassen.' }
  ],
  steps: ['Bestand prüfen', 'Lösung auswählen', 'Angebot und Ablauf klären', 'Ausführung und Abnahme sauber dokumentieren'],
  costDrivers: ['Fläche und Zugänglichkeit', 'Untergrundzustand', 'Materialsystem', 'Qualitätsstandard'],
  faq: []
}

export default function RatgeberDetail() {
  const { slug } = useParams()
  const isKnown = Boolean(articlesData[slug])
  const article = articlesData[slug] || articlesData['default']
  const guide = topicGuides[slug] || fallbackGuide
  const siteUrl = 'https://www.bauunternehmen-koenig.com'
  const pagePath = isKnown ? `/ratgeber/${slug}` : '/ratgeber'
  const allArticles = Object.entries(articlesData).filter(([key]) => key !== 'default')
  const relatedArticles = (guide.related || [])
    .map((relatedSlug) => articlesData[relatedSlug] ? [relatedSlug, articlesData[relatedSlug]] : null)
    .filter(Boolean)
  const fallbackRelated = allArticles
    .filter(([key, item]) => key !== slug && item.category === article.category)
    .slice(0, 3)
  const visibleRelated = (relatedArticles.length ? relatedArticles : fallbackRelated).slice(0, 3)
  const faqItems = guide.faq || []

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.metaDescription || article.title,
        image: `${siteUrl}${resolvePublicImage(article.img)}`,
        author: { '@type': 'Person', name: article.author, url: `${siteUrl}/ueber-uns` },
        publisher: {
          '@type': 'Organization',
          name: 'Bauunternehmen König',
          logo: { '@type': 'ImageObject', url: `${siteUrl}/favicon.png` },
        },
        datePublished: article.dateISO || '2026-01-01',
        dateModified: article.updatedISO || article.dateISO || '2026-01-01',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteUrl}${pagePath}` },
        inLanguage: 'de-DE',
        articleSection: article.category,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Ratgeber', item: `${siteUrl}/ratgeber` },
          { '@type': 'ListItem', position: 3, name: article.title, item: `${siteUrl}${pagePath}` },
        ],
      },
      ...(faqItems.length ? [{
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }] : []),
    ],
  }

  return (
    <>
      <SEO
        title={`${article.title} | Bauunternehmen König Leipzig`}
        description={article.metaDescription || article.title}
        path={pagePath}
        image={`${siteUrl}${resolvePublicImage(article.img)}`}
        type="article"
        noindex={!isKnown}
        article={{
          publishedTime: article.dateISO,
          modifiedTime: article.updatedISO || article.dateISO,
          author: article.author,
          section: article.category,
        }}
        jsonLd={articleJsonLd}
      />
      {/* Dark Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={resolvePublicImage(article.img)} alt="" className="w-full h-full object-cover" fetchPriority="high" decoding="async" />
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-tight mb-6 md:mb-8">
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
            {article.updated && article.updated !== article.date && (
              <span className="flex items-center gap-2">
                <RefreshCw size={16} className="text-gold" />
                Aktualisiert: {article.updated}
              </span>
            )}
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-gold" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            {/* Hero Image */}
            <div className="my-10 md:my-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[260px] sm:h-[340px] md:h-[460px]">
              <img src={resolvePublicImage(article.img)} alt={article.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>

            {/* Practical Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
              {guide.summary.map((item, index) => (
                <div key={item} className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 min-w-0">
                  <span className="text-gold font-900 text-lg font-heading block mb-2">
                    0{index + 1}
                  </span>
                  <p className="text-sm text-gray-600 leading-relaxed break-words">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Local Project Compass */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 mb-12 md:mb-16">
              <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-7 overflow-hidden relative min-w-0">
                <div className="absolute inset-x-0 top-0 h-px gold-gradient" />
                <div className="flex items-start gap-3 mb-4 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 flex-shrink-0">
                    <MapPin size={22} className="text-gold" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-gold font-bold">Leipziger Projekt-Kompass</span>
                    <h2 className="text-xl md:text-2xl font-900 text-charcoal mt-1 break-words">Warum dieses Thema wichtig ist</h2>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 break-words">
                  {guide.value}
                </p>
                <div className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 min-w-0">
                  <Hammer size={20} className="text-gold mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600 leading-relaxed break-words">
                    <strong className="text-charcoal">Besonders hilfreich für:</strong> {guide.bestFor}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <ClipboardCheck size={22} className="text-gold" />
                  <h2 className="text-xl md:text-2xl font-900 text-charcoal">Projekt-Check</h2>
                </div>
                <div className="space-y-4">
                  {guide.check.map((item, index) => {
                    const Icon = [AlertTriangle, Layers, CheckCircle2][index] || CheckCircle2
                    return (
                      <div key={item.label} className="flex gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100">
                          <Icon size={18} className="text-gold" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-bold text-charcoal block">{item.label}</span>
                          <p className="text-sm text-gray-500 leading-relaxed break-words">{item.text}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Process and Cost Drivers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mt-14 md:mt-16">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <Layers size={22} className="text-gold" />
                  <h2 className="text-xl md:text-2xl font-900 text-charcoal">Ablauf aus der Praxis</h2>
                </div>
                <div className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <div key={step} className="flex gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-full gold-gradient text-black font-900 flex items-center justify-center flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed pt-1 break-words">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-7 min-w-0">
                <div className="flex items-center gap-3 mb-5">
                  <Euro size={22} className="text-gold" />
                  <h2 className="text-xl md:text-2xl font-900 text-charcoal">Was den Preis bewegt</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {guide.costDrivers.map((driver) => (
                    <div key={driver} className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 p-3 min-w-0">
                      <CheckCircle2 size={17} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed break-words">{driver}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {faqItems.length > 0 && (
              <div className="mt-14 md:mt-16">
                <div className="flex items-center gap-3 mb-5">
                  <HelpCircle size={24} className="text-gold" />
                  <h2 className="text-xl md:text-2xl font-900 text-charcoal">Häufige Fragen</h2>
                </div>
                <div className="space-y-3">
                  {faqItems.map((item) => (
                    <div key={item.q} className="bg-white border border-gray-100 rounded-xl p-4 md:p-5 min-w-0">
                      <h3 className="text-base md:text-lg font-bold text-charcoal mb-2 break-words">{item.q}</h3>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed break-words">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {visibleRelated.length > 0 && (
              <div className="mt-14 md:mt-16">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl md:text-2xl font-900 text-charcoal">Passende nächste Themen</h2>
                  <Link to="/ratgeber" className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-gold">
                    Alle ansehen
                    <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {visibleRelated.map(([relatedSlug, related]) => (
                    <Link key={relatedSlug} to={`/ratgeber/${relatedSlug}`} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 min-w-0">
                      <div className="h-36 overflow-hidden">
                        <img src={resolvePublicImage(related.img)} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{related.category}</span>
                        <h3 className="text-base font-bold text-charcoal mt-2 group-hover:text-gold transition-colors break-words">{related.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
             
            {/* Inline Footer CTA (Trust Bar + Contact) */}
            <div className="mt-16 bg-gray-50 rounded-2xl p-5 sm:p-7 md:p-8 border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-800 text-gray-900 mb-6">
                  Haben Sie Fragen zu Ihrem <span className="gold-text-gradient">Projekt?</span>
                </h3>
                
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    {[
                      { icon: ShieldCheck, text: 'Meisterbetrieb', sub: 'HWK Leipzig' },
                      { icon: Clock, text: 'Termintreue', sub: 'Pünktlich garantiert' },
                      { icon: Sparkles, text: 'Saubere Arbeit', sub: 'Täglich aufgeräumt' },
                      { icon: CheckCircle2, text: 'Festpreisgarantie', sub: 'Keine Überraschungen' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-gray-100 flex-shrink-0">
                          <item.icon size={20} className="text-gold" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold text-gray-900 block break-words">{item.text}</span>
                          <span className="text-xs text-gray-500 break-words">{item.sub}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="w-full lg:w-auto flex flex-col items-center justify-center gap-4 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 lg:pl-8">
                    <p className="text-sm text-gray-500 text-center">
                      Beratung & Festpreis-<br />Angebot in 48 Stunden.
                    </p>
                    <Link to="/kontakt" className="btn-primary w-full">
                      <Mail size={18} />
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
