import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Phone, Mail, ArrowLeft, Plus, Minus, Wrench, Ruler, ShieldCheck, PaintRoller, Frame, CheckSquare, HardHat, Home, FileText, Clock, ThumbsUp, Zap, Droplet, LayoutGrid, CheckCircle2, MapPin, Leaf, Sparkles } from 'lucide-react'
import { RevealSection, SectionHeading } from '../components/UI'
import { contactDetails } from '../data/contactDetails'
import SEO from '../components/SEO'

const iconMap = {
  Wrench, Ruler, ShieldCheck, PaintRoller, Frame, CheckSquare, HardHat, Home, FileText, Clock, ThumbsUp, Zap, Droplet, LayoutGrid, CheckCircle2, MapPin, Leaf, Sparkles
}

const serviceData = {
  'maurer-betonbau': {
    metaTitle: 'Maurer & Betonbauer Leipzig – Fundament & Mauerwerk vom Meister',
    metaDescription: 'Maurer- & Betonbauarbeiten in Leipzig vom Meisterbetrieb: Fundamente, tragendes Mauerwerk, Betondecken, Keller & Abdichtung. DIN-gerecht und mit Festpreisgarantie.',
    keywords: 'Maurer Leipzig, Betonbauer Leipzig, Fundament Leipzig, Mauerwerk Leipzig, Betonarbeiten Leipzig, Bodenplatte, Maurerarbeiten Sachsen',
    title: 'Präziser Maurer- & Betonbau für Ihr Fundament in Leipzig',
    eyebrow: 'Kernkompetenz Maurermeister',
    subtitle: 'Massive Bauweise, meisterhafte Ausführung und höchste Standfestigkeit für private und gewerbliche Bauprojekte.',
    showHeroCTAs: true,
    trustSignals: [
      { text: 'Meisterbetrieb', sub: 'HWK Leipzig', icon: 'ShieldCheck' },
      { text: 'Regional in Leipzig', sub: '& Umgebung', icon: 'MapPin' },
      { text: 'Meisterqualität', sub: 'Nach DIN-Norm', icon: 'CheckSquare' },
      { text: 'Festpreisgarantie', sub: 'Ohne Überraschungen', icon: 'CheckCircle2' }
    ],
    heroImage: '/images/maurer.png',
    intro: 'Als staatlich geprüfter Maurer- und Betonbauermeister (HWK Leipzig) ist Tim König Ihr Spezialist für präzise und DIN-gerechte Maurer- und Betonarbeiten in Leipzig und Umgebung. Ob Fundamente, tragendes Mauerwerk oder Betondecken — jede Arbeit wird mit höchster Sorgfalt, den richtigen Materialien und dem nötigen Fachwissen ausgeführt. Wir bauen auf Qualität, die Jahrzehnte hält.',
    details: [
      { title: 'Fundamente & Bodenplatten', desc: 'Zuverlässige und DIN-gerechte Basis für Ihr Bauwerk – ob für Garage, Anbau oder Einfamilienhaus.', icon: 'LayoutGrid' },
      { title: 'Tragendes Mauerwerk', desc: 'Ziegel, Kalksandstein oder Porenbeton: Fachgerechte Errichtung von statisch belastbaren Wänden.', icon: 'Home' },
      { title: 'Mauerwerkssanierung', desc: 'Reparaturarbeiten, Risssanierung und Instandsetzung von altem Mauerwerk.', icon: 'HardHat' },
      { title: 'Ringbalken & Stürze', desc: 'Sichere Lastabtragung für Fenster-, Türöffnungen und massive Dachkonstruktionen.', icon: 'Ruler' },
      { title: 'Keller & Abdichtung', desc: 'Schutz vor drückender Feuchtigkeit durch professionelle Perimeterdämmung und Bitumenabdichtung.', icon: 'Droplet' },
      { title: 'Schornsteinbau', desc: 'Formschöner und funktionaler Neubau oder Sanierung unter Einhaltung aktueller Brandschutzvorgaben.', icon: 'Wrench' },
    ],
    prozess: [
      { title: 'Begehung', desc: 'Besprechung vor Ort und Analyse der Statik- und Baugrundlagen.', icon: 'CheckSquare' },
      { title: 'Angebot', desc: 'Detailliertes Angebot mit verlässlicher und transparenter Kostenkalkulation.', icon: 'FileText' },
      { title: 'Ausführung', desc: 'Pünktliche Konstruktion durch unseren zertifizierten Meisterbetrieb.', icon: 'HardHat' },
      { title: 'Abnahme', desc: 'Gemeinsame Durchsicht der erbrachten Leistungen und Übergabe.', icon: 'ShieldCheck' },
    ],
    faq: [
      { q: 'Welche Arten von Mauerwerk und Betonarbeiten führen Sie aus?', a: 'Unser Leistungsspektrum deckt den gesamten massiven Rohbau ab. Vom klassischen Ziegel- und Kalksandsteinmauerwerk über hochdämmendes Porenbetonmauerwerk bis hin zu komplexen Stahlbetonarbeiten (Fundamente, Decken, Stützen) realisieren wir jede statische Herausforderung.' },
      { q: 'Wie stellen Sie die absolute Tragfähigkeit und Statik des Rohbaus sicher?', a: 'Jeder Rohbau wird von uns in engster Abstimmung mit Architekten und Prüfstatikern ausgeführt. Wir verwenden ausschließlich zertifizierten Bewehrungsstahl und Beton der geforderten Güteklassen. Jeder Bauabschnitt wird penibel dokumentiert, um maximale strukturelle Integrität zu gewährleisten.' },
      { q: 'Erstellen Sie auch Bodenplatten für Fertighäuser?', a: 'Ja. Eine hochpräzise Bodenplatte ist das Fundament jedes Fertighauses. Wir fertigen Streifenfundamente und Thermobodenplatten absolut maßhaltig und exakt nach den strengen Toleranzvorgaben Ihres Fertighausherstellers.' },
      { q: 'Bieten Sie auch Sichtbeton für höchste architektonische Ansprüche an?', a: 'Sichtbeton verlangt absolute Meisterklasse. Durch den Einsatz spezieller Schalungssysteme, exakt abgestimmter Betonrezepturen und präziser Verdichtungstechniken erzielen wir makellose, porenarme Oberflächen (Güteklasse SB2 bis SB4), die als puristische Designelemente wirken.' },
      { q: 'Wie wird die Trocknungsphase des Rohbaus in den Zeitplan integriert?', a: 'Die Aushärtungs- und Trocknungszeiten von Beton und Mauerwerk sind entscheidend für die Vermeidung von Bauschäden. Wir planen diese Phasen realistisch von Beginn an ein. Um Bauzeiten bei entsprechender Witterung zu verkürzen, setzen wir modernste technische Bauwerkstrocknung schonend und effizient ein.' }
    ],
    vorteile: [
      'Meisterbetrieb mit Expertise',
      'DIN-gerechte Umsetzung',
      'Hochwertige Baustoffe',
      'Millimeterpräzise Arbeit',
      'Transparente Kalkulation'
    ],
    qualityTitle: 'Massiv, solide & dauerhaft gebaut',
    lokalerHinweis: 'Wir führen Maurer- und Betonarbeiten in ganz Leipzig durch — von Gohlis bis Connewitz, von Plagwitz bis Reudnitz.',
  },
  'sanierung': {
    metaTitle: 'Sanierung Leipzig – Altbau, Energetisch & Komplett aus einer Hand',
    metaDescription: 'Sanierung & Modernisierung in Leipzig: Altbausanierung, energetische Sanierung, Grundrissoptimierung & Feuchtigkeitssanierung. Meisterbetrieb mit Gewerke-Koordination.',
    keywords: 'Sanierung Leipzig, Altbausanierung Leipzig, Modernisierung Leipzig, energetische Sanierung Leipzig, Komplettsanierung Leipzig, Denkmalsanierung',
    title: 'Ganzheitliche Sanierung & Modernisierung in Leipzig',
    eyebrow: 'Erhalt & Wertsteigerung im Bestand',
    subtitle: 'Werte erhalten, Wohnkomfort steigern: Wir sanieren Ihre Bestandsimmobilie fachgerecht und termintreu aus einer Hand.',
    showHeroCTAs: true,
    trustSignals: [
      { text: 'Meisterbetrieb', sub: 'HWK Leipzig', icon: 'ShieldCheck' },
      { text: 'Regional in Leipzig', sub: '& Umgebung', icon: 'MapPin' },
      { text: 'Alles aus einer Hand', sub: 'Gewerke-Koordination', icon: 'LayoutGrid' },
      { text: 'Termintreue', sub: 'Pünktlich garantiert', icon: 'Clock' }
    ],
    heroImage: '/images/sanierung.png',
    intro: 'Ob Sie eine Bestandsimmobilie in Leipzig modernisieren oder eine denkmalgerechte Sanierung planen — wir stehen Ihnen mit Fachwissen zur Seite. Vom kontrollierten Rückbau bis zur Instandsetzung koordinieren wir alle Gewerke. Wir sanieren Altbauten und Mehrfamilienhäuser mit dem nötigen Respekt vor der Bausubstanz und dem Blick für Langlebigkeit.',
    details: [
      { title: 'Altbausanierung', desc: 'Umfassende Modernisierung von Gründerzeithäusern und historischen Gebäuden unter Berücksichtigung der Substanz.', icon: 'Home' },
      { title: 'Grundrissoptimierung', desc: 'Wanddurchbrüche inkl. Stahlträger-Einbau für moderne, offene Raumkonzepte (Statik-konform).', icon: 'Ruler' },
      { title: 'Energetische Sanierung', desc: 'Dämmung und Optimierung der Gebäudehülle zur Senkung der Heizkosten und Wertsteigerung.', icon: 'Zap' },
      { title: 'Feuchte-/Schimmelsanierung', desc: 'Ursachenbekämpfung, Trockenlegung und fachgerechter Neuaufbau bei Feuchtigkeitsschäden.', icon: 'Droplet' },
      { title: 'Renovierung', desc: 'Dient der ästhetischen Verbesserung wie z.B. Streichen, Tapezieren oder Bodenbeläge erneuern.', icon: 'CheckSquare' },
      { title: 'Fassadenrenovierung', desc: 'Neuer Putz und Anstrich zur optischen und funktionellen Auffrischung des Gebäudeäußeren.', icon: 'PaintRoller' },
    ],
    prozess: [
      { title: 'Bestandsanalyse', desc: 'Gemeinsame Begehung und Ermittlung des genauen Sanierungsbedarfs.', icon: 'CheckSquare' },
      { title: 'Planung', desc: 'Erstellung eines detaillierten Sanierungskonzepts und Zeitplans.', icon: 'FileText' },
      { title: 'Bauphase', desc: 'Fachgerechter Rückbau und Neuaufbau aus einer Hand.', icon: 'HardHat' },
      { title: 'Schlüsselübergabe', desc: 'Besenreine Übergabe der modernisierten Räumlichkeiten.', icon: 'Clock' },
    ],
    faq: [
      { q: 'Haben Sie Erfahrung mit der Sanierung denkmalgeschützter Altbauten in Leipzig?', a: 'Absolut. Der historische Leipziger Gebäudebestand erfordert besonderes Feingefühl. Wir haben tiefe Expertise in der behutsamen Altbausanierung, stimmen uns eng mit den Denkmalschutzbehörden ab und bewahren die historische Substanz, während wir das Gebäude technisch auf den neuesten Stand bringen.' },
      { q: 'Was umfasst eine ganzheitliche energetische Modernisierung durch Ihr Unternehmen?', a: 'Wir betrachten Ihr Gebäude als energetisches Gesamtsystem. Das umfasst hochwirksame Fassaden-, Dach- und Kellerdeckendämmungen sowie modernste Fenstertechnik. Unser Ziel ist es, Ihre Energiekosten massiv zu senken und die Voraussetzungen für staatliche Förderungen (z. B. KfW, BAFA) zu erfüllen.' },
      { q: 'Wie schützen Sie uns vor Lärm und Schmutz, wenn wir im Haus wohnen bleiben?', a: 'Wir wissen, dass Sanierungen im bewohnten Bestand sensibel sind. Wir nutzen professionelle Staubschutzwände, Luftreiniger und garantieren eine besenreine Baustelle am Ende jedes Tages. Lärmintensive Abbrucharbeiten takten wir in enger zeitlicher Absprache mit Ihnen.' },
      { q: 'Lohnt sich eine Kernsanierung im Vergleich zu einem Abriss und Neubau?', a: 'In begehrten Lagen Leipzigs ist eine Kernsanierung wirtschaftlich oft hochattraktiv. Der massive Grundkörper und der Charme der Immobilie bleiben erhalten. Wir analysieren die Bausubstanz im Vorfeld detailliert und beraten Sie transparent zum zu erwartenden Wertzuwachs und den Investitionskosten.' },
      { q: 'Sanieren Sie auch gravierende Feuchtigkeits- und Schimmelschäden?', a: 'Ja. Bevor wir optisch modernisieren, muss die Bausubstanz gesund sein. Mit Horizontal- und Vertikalsperren (Injektionsverfahren), diffusionsoffenen Sanierputzsystemen und fachgerechter Schimmelbeseitigung legen wir Ihr Mauerwerk nachhaltig trocken.' }
    ],
    vorteile: [
      'Gewerkeübergreifend',
      'Respekt vor Bausubstanz',
      'Staubarmes Arbeiten',
      'Fester Ansprechpartner',
      'Termintreue Übergabe'
    ],
    qualityTitle: 'Substanz erhalten, Zukunft sichern',
    lokalerHinweis: 'Sanierungen in Leipzig-Südvorstadt, Schleußig, Gohlis und weiteren Altbau-Zentren sind unser Spezialgebiet.',
  },
  'innenausbau': {
    metaTitle: 'Innenausbau & Trockenbau Leipzig – Q2 bis Q4 Spachtelarbeiten',
    metaDescription: 'Professioneller Innenausbau & Trockenbau in Leipzig: Trennwände, abgehängte Decken, Dachgeschossausbau, Spachtelarbeiten Q2–Q4 und Trockenestrich vom Meisterbetrieb.',
    keywords: 'Innenausbau Leipzig, Trockenbau Leipzig, Spachtelarbeiten Leipzig, Q4 Spachtelung, Dachgeschossausbau Leipzig, Trockenestrich, Gipskarton Leipzig',
    title: 'Moderner Innenausbau & Trockenbau in Leipzig',
    eyebrow: 'Moderne Raumgestaltung',
    subtitle: 'Flexible Raumkonzepte, perfekte Q4-Oberflächen und ganzheitliche Lösungen für Ihre Innenräume.',
    showHeroCTAs: true,
    trustSignals: [
      { text: 'Meisterbetrieb', sub: 'HWK Leipzig', icon: 'ShieldCheck' },
      { text: 'Regional in Leipzig', sub: '& Umgebung', icon: 'MapPin' },
      { text: 'Q4-Oberflächen', sub: 'Perfektes Finish', icon: 'PaintRoller' },
      { text: 'Saubere Arbeit', sub: 'Täglich aufgeräumt', icon: 'Sparkles' }
    ],
    heroImage: '/images/innenausbau.png',
    intro: 'Der professionelle Innenausbau verwandelt Rohbauten in Wohnträume. Bauunternehmen König realisiert in Leipzig hochwertigen Trockenbau, perfekte Spachtelarbeiten (Q2 bis Q4) und durchdachte Raumgestaltung. Schnelle Bauzeit, keine zusätzliche Baufeuchte und hervorragende Dämmeigenschaften — das sind die Vorteile unseres modernen Trockenbaus.',
    details: [
      { title: 'Wände & Trennsysteme', desc: 'Flexible und stabile Trockenbauwände für eine individuelle Neugestaltung des Grundrisses.', icon: 'LayoutGrid' },
      { title: 'Spachtelarbeiten (Q2-Q4)', desc: 'Von tapetenfertig (Q2) bis zur makellos glatten Oberfläche (Q4) für direkte Anstriche oder Edelfinisches.', icon: 'PaintRoller' },
      { title: 'Abgehängte Decken', desc: 'Integration von indirekter Beleuchtung (Lichtvouten), Spots und Verbesserung der Raumakustik.', icon: 'Zap' },
      { title: 'Dachgeschossausbau', desc: 'Kompletter Ausbau inkl. Wärmedämmung und Dampfsperre zur Schaffung neuen Wohnraums.', icon: 'Home' },
      { title: 'Trockenstrich / Böden', desc: 'Vorbereitung für den finalen Bodenbelag ohne lange Trocknungszeiten (im Vergleich zu Nassestrich).', icon: 'Ruler' },
      { title: 'Brand- & Schallschutz', desc: 'Fachgerechter Einbau von Spezialsystemen nach neuesten Normen zur Geräuschminimierung.', icon: 'ShieldCheck' },
    ],
    prozess: [
      { title: 'Aufmaß', desc: 'Lasergenaues Aufmaß der Räume und Besprechung Ihrer Wohnideen.', icon: 'Ruler' },
      { title: 'Konstruktion', desc: 'Richten des Metall- oder Holzständerwerks inkl. Dämmungseinbau.', icon: 'Wrench' },
      { title: 'Beplankung', desc: 'Beidseitiges Verschließen mit Gipskarton oder Gipsfaserplatten.', icon: 'Frame' },
      { title: 'Finish', desc: 'Verspachteln und Schleifen auf die gewünschte Qualitätsstufe.', icon: 'PaintRoller' },
    ],
    faq: [
      { q: 'Welche gestalterischen Möglichkeiten bietet der moderne Trockenbau?', a: 'Der Trockenbau ist maximal flexibel. Wir realisieren für Sie neue Raumaufteilungen, abgehängte Decken mit indirekten Lichtkonzepten, Vorsatzschalen zur Kabelintegration sowie formschöne, geschwungene Designelemente. Es ist die effizienteste Methode für einen hochwertigen Innenausbau.' },
      { q: 'Erfüllen Ihre Trockenbaulösungen die strengen gesetzlichen Brandschutzvorschriften?', a: 'Brandschutz duldet keine Kompromisse, besonders bei Gewerbeobjekten oder Mehrfamilienhäusern. Wir verbauen rechtssicher zertifizierte Brandschutzsysteme (F30 bis F120) namhafter Hersteller und dokumentieren die fachgerechte Ausführung vorschriftsgemäß.' },
      { q: 'Kann man durch Trockenbau den Schallschutz zwischen Räumen verbessern?', a: 'Definitiv. Durch entkoppelte Ständerwerke, doppelte Beplankung und den Einsatz von speziellen Akustikplatten sowie hochwertiger Mineralwolldämmung reduzieren wir Tritt- und Luftschall massiv. Das sorgt für absolute Ruhe im privaten Wohnbereich oder konzentriertes Arbeiten in Büros.' },
      { q: 'Ist Trockenbau auch für Bäder und andere Feuchträume geeignet?', a: 'Selbstverständlich. In Feuchträumen verwenden wir speziell imprägnierte Gipskartonplatten oder hochbelastbare, zementgebundene Bauplatten. Diese sind schimmel- und feuchtigkeitsresistent und bilden den perfekten, formstabilen Untergrund für großformatige Premium-Fliesen.' },
      { q: 'Bereiten Sie die Wände auch direkt für den Maler vor?', a: 'Ja, wir bieten Oberflächenqualität auf höchstem Niveau. Unsere Experten spachteln Fugen und Flächen absolut plan (bis zu Qualitätsstufe Q4). Damit sind Wände und Decken perfekt vorbereitet für edle Tapeten, feine Pandomo-Spachteltechniken oder Streiflicht-anfällige Farbanstriche.' }
    ],
    vorteile: [
      'Glatte Q4-Oberflächen',
      'Keine Trocknungszeit',
      'Hoher Schallschutz',
      'Indirekte Beleuchtung',
      'Brandschutz geprüft'
    ],
    qualityTitle: 'Raum für neue Möglichkeiten',
    lokalerHinweis: 'Vom Dachausbau in Connewitz bis zur Praxiseinrichtung im Zentrum — wir schaffen neue Räume in Leipzig.',
  },
  'fassade': {
    metaTitle: 'Fassade & Putzarbeiten Leipzig – WDVS & Fassadensanierung',
    metaDescription: 'Fassaden- & Putzarbeiten in Leipzig: Wärmedämmverbundsysteme (WDVS), Fassadensanierung, Außenputz, Struktur- & Edelputze. GEG-konform vom Meisterbetrieb.',
    keywords: 'Fassade Leipzig, Fassadensanierung Leipzig, WDVS Leipzig, Wärmedämmung Leipzig, Putzarbeiten Leipzig, Außenputz Leipzig, Fassadendämmung',
    title: 'Professionelle Fassadengestaltung & Sanierung in Leipzig',
    eyebrow: 'Außengestaltung & Schutz',
    subtitle: 'Energieeffiziente Wärmedämmung und langlebiger Witterungsschutz für den Werterhalt Ihrer Immobilie.',
    showHeroCTAs: true,
    trustSignals: [
      { text: 'Meisterbetrieb', sub: 'Zertifizierte Qualität', icon: 'ShieldCheck' },
      { text: 'Regional in Leipzig', sub: '& Umgebung', icon: 'MapPin' },
      { text: 'Nach DIN-Norm', sub: 'Aktuelle Verarbeitung', icon: 'CheckSquare' },
      { text: 'Energieeffizient', sub: 'GEG-konform', icon: 'Leaf' }
    ],
    heroImage: '/images/fassade.png',
    intro: 'Die Fassade ist die Visitenkarte Ihres Gebäudes — und elementar für Energieeffizienz und Werterhalt. Als Fachbetrieb sind wir spezialisiert auf professionelle Putzarbeiten, Altbausanierung und Wärmedämmverbundsysteme (WDVS) in Leipzig. Wir verleihen Ihrem Haus ein makelloses, dauerhaftes Gesicht, das Wind und Wetter trotzt.',
    details: [
      { title: 'Wärmedämmung (WDVS)', desc: 'Erhebliche Heizkosteneinsparung durch fachgerecht angebrachte Dämmsysteme nach GEG-Standards.', icon: 'Zap' },
      { title: 'Außen- & Mineralputz', desc: 'Atmungsaktive Putzsysteme (Silikat, Kalk) zur Regulierung der Feuchtigkeit und Schutz des Mauerwerks.', icon: 'PaintRoller' },
      { title: 'Riss- & Fassadensanierung', desc: 'Abklopfen von losem Putz, Einlegen von Armierungsgewebe und nachhaltige Rissbeseitigung.', icon: 'Wrench' },
      { title: 'Struktur- & Edelputze', desc: 'Individuelle Oberflächengestaltung von rustikaler Kratzstruktur bis hin zum modernen Glattputz.', icon: 'LayoutGrid' },
      { title: 'Sockelabdichtung', desc: 'Spezifischer Spritzwasser- und Feuchteschutz im erdberührten Fassadenbereich.', icon: 'Droplet' },
      { title: 'Innenputz-Systeme', desc: 'Grundierung und professionelles Verputzen von Innenräumen für ein optimales Raumklima.', icon: 'Home' },
    ],
    prozess: [
      { title: 'Untergrundprüfung', desc: 'Prüfung der Fassade auf Tragfähigkeit und Feuchtigkeit.', icon: 'CheckSquare' },
      { title: 'Vorbereitung', desc: 'Gerüststellung, Abkleben von Fenstern und Anbringen der Grundierung.', icon: 'Wrench' },
      { title: 'Aufbau', desc: 'Dämmung kleben, Verdübeln und Einbetten von Armierungsgewebe.', icon: 'LayoutGrid' },
      { title: 'Oberputz', desc: 'Auftragen des finalen Edelputzes und farbliche Gestaltung.', icon: 'PaintRoller' },
    ],
    faq: [
      { q: 'Woran erkenne ich, dass meine Fassade dringend saniert werden sollte?', a: 'Warnsignale sind feine Haarrisse im Putz, abplatzende Farbe, Algenbefall, feuchte Innenwände oder schlichtweg sehr hohe Heizkosten. Wir begutachten Ihre Fassade in Leipzig kostenfrei und empfehlen Ihnen die technisch und wirtschaftlich sinnvollste Maßnahme.' },
      { q: 'Welche Art der Fassadendämmung (WDVS) empfehlen Sie?', a: 'Wir verbauen hochmoderne Wärmedämmverbundsysteme (WDVS), wahlweise auf Basis von EPS, Neopor oder unbrennbarer Mineralwolle. Wir analysieren Ihr bestehendes Mauerwerk exakt und empfehlen herstellerunabhängig das physikalisch beste System für maximales Raumklima und Energieeinsparung.' },
      { q: 'Wie verhindern Sie, dass sich Algen oder Pilze auf der neuen Fassade bilden?', a: 'Dicke Dämmschichten können das Begrünen der Fassade begünstigen, wenn falsch gearbeitet wird. Wir verhindern dies durch dickschichtige, hochwertige Putzsysteme (z. B. Mineral- oder Silikonharzputze), exzellente Trocknungseigenschaften und diffusionsfähige Schlussanstriche.' },
      { q: 'Restaurieren Sie auch Stuckfassaden an historischen Gebäuden in Leipzig?', a: 'Die Gründerzeithäuser prägen das Leipziger Stadtbild. Unsere erfahrenen Handwerker arbeiten Stuckelemente, Gesimse und Ornamentik mit größtem Respekt vor dem Original behutsam auf und integrieren alte Handwerkskunst perfekt in moderne Wetterschutzkonzepte.' },
      { q: 'Welche Farben setzen Sie für einen langlebigen Fassadenanstrich ein?', a: 'Wir machen keine Abstriche bei der Materialqualität. Es kommen ausschließlich Premium-Fassadenfarben auf Silikonharz- oder Silikatbasis zum Einsatz. Diese garantieren höchste Farbtonbeständigkeit, sind extrem schmutzabweisend ("Lotuseffekt") und schützen Ihr Gebäude jahrzehntelang vor Schlagregen.' }
    ],
    vorteile: [
      'Geringere Heizkosten',
      'Optimaler Witterungsschutz',
      'Keine Algenbildung',
      'Wertsteigerung',
      'Inklusive Gerüstkoordination'
    ],
    qualityTitle: 'Schön von außen, stark für Jahrzehnte',
    lokalerHinweis: 'Hochwertige Fassaden für Einfamilienhäuser und Villen in Leutzsch, Markkleeberg und ganz Leipzig.',
  },
}

// Accordion Component für FAQs
function FAQAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {faq.map((item, i) => (
        <div key={i} className={`bg-white rounded-xl border transition-colors duration-300 ${openIndex === i ? 'border-gold shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
          >
            <span className="font-semibold text-gray-900 pr-8">{item.q}</span>
            <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${openIndex === i ? 'bg-gold rotate-180' : 'bg-gray-100'}`}>
              {openIndex === i ? <Minus size={16} className="text-black" /> : <Plus size={16} className="text-gray-600" />}
            </div>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="p-6 pt-0 text-gray-600 leading-relaxed">
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function LeistungDetail() {
  const { slug } = useParams()
  const data = serviceData[slug]

  if (!data) {
    return (
      <>
        <SEO
          title="Seite nicht gefunden"
          description="Die angeforderte Leistungsseite existiert nicht."
          path={`/leistungen/${slug || ''}`}
          noindex
        />
        <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-52">
          <div className="text-center px-4">
            <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-charcoal">Dienstleistung nicht gefunden</h1>
            <p className="text-gray-500 mb-8">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
            <Link to="/leistungen" className="btn-primary">Alle Leistungen ansehen</Link>
          </div>
        </div>
      </>
    )
  }

  const pagePath = `/leistungen/${slug}`
  const siteUrl = 'https://www.bauunternehmen-koenig.com'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: data.title,
        description: data.metaDescription || data.subtitle,
        provider: {
          '@type': 'HomeAndConstructionBusiness',
          name: 'Bauunternehmen König',
          url: siteUrl,
          telephone: contactDetails.phoneIntl,
          address: {
            '@type': 'PostalAddress',
            streetAddress: contactDetails.addressLine1,
            postalCode: '04288',
            addressLocality: 'Leipzig',
            addressRegion: 'Sachsen',
            addressCountry: 'DE',
          },
        },
        areaServed: { '@type': 'City', name: 'Leipzig' },
        image: `${siteUrl}${data.heroImage}`,
        url: `${siteUrl}${pagePath}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${siteUrl}/leistungen` },
          { '@type': 'ListItem', position: 3, name: data.title, item: `${siteUrl}${pagePath}` },
        ],
      },
      ...(data.faq && data.faq.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: data.faq.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }]
        : []),
    ],
  }

  return (
    <>
      <SEO
        title={data.metaTitle || data.title}
        description={data.metaDescription || data.subtitle}
        keywords={data.keywords}
        path={pagePath}
        image={`${siteUrl}${data.heroImage}`}
        jsonLd={jsonLd}
      />
      {/* Hero Section */}
      <section className="relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.25]">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover grayscale brightness-50" fetchpriority="high" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/90 to-charcoal" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Link to="/leistungen" className="inline-flex items-center gap-2 text-gray-400 hover:text-gold transition-colors mb-8 text-sm group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-gold/10 border border-gold/20 text-gold font-medium rounded-full text-xs uppercase tracking-widest mb-6 border-solid">
              {data.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-[1.1] mb-5 max-w-[15ch] sm:max-w-none">{data.title}</h1>
            {data.subtitle && (
              <h2 className="text-base sm:text-lg md:text-2xl font-light text-gray-300 leading-relaxed mt-5 md:mt-6 max-w-[280px] sm:max-w-3xl">
                {data.subtitle}
              </h2>
            )}
            {data.showHeroCTAs && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
                <Link to="/kontakt" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-gold text-black font-bold rounded-xl hover:bg-white hover:text-black transition-all shadow-lg text-base sm:text-lg text-center">
                  Kostenlose Vor-Ort-Beratung anfragen
                </Link>
                <Link to="/referenzen" className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 bg-transparent border border-gray-500 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-base sm:text-lg text-center">
                  Unsere Referenzen ansehen
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Trust Bar conditionally rendered */}
      {data.trustSignals && (
        <section className="relative -mt-8 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <RevealSection delay={300}>
            <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 border border-gold/40 shadow-[0_8px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(180,144,60,0.15)]">
              {data.trustSignals.map((signal, i) => {
                const Icon = iconMap[signal.icon]
                return (
                  <div key={i} className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                      {Icon && <Icon size={22} className="text-gold" />}
                    </div>
                    <div>
                      <span className="text-base font-semibold text-gray-900 block">{signal.text}</span>
                      {signal.sub && <span className="text-xs text-gray-400">{signal.sub}</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          </RevealSection>
        </section>
      )}

      {/* Intro & Philosophy */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <RevealSection>
            <div>
              <SectionHeading
                eyebrow="Meisterqualität"
                title={data.qualityTitle || 'Präzision in jeder Phase'}
                center={false}
              />
              <div className="prose prose-lg text-gray-600 mb-8">
                <p className="leading-relaxed">{data.intro}</p>
              </div>
              
              {data.lokalerHinweis && (
                <div className="flex flex-col sm:flex-row items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Home size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">Ihr Partner vor Ort</h4>
                    <p className="text-sm text-gray-600">{data.lokalerHinweis}</p>
                  </div>
                </div>
              )}

              <Link to="/kontakt" className="btn-primary inline-flex">
                <Mail size={18} />
                Kostenlose Beratung sichern
              </Link>
            </div>
          </RevealSection>
          
          <RevealSection delay={200}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/0 transition-colors z-10 duration-500"></div>
              <img src={data.heroImage} alt={data.title} className="w-full h-[320px] sm:h-[400px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" decoding="async" />
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Bento Grid: Im Detail */}
      <section className="section-padding bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionHeading
              eyebrow="Leistungsspektrum"
              title="Unsere Expertise im Detail"
              description="Transparenz und Fachwissen. Diese Bau- und Sanierungsleistungen führen wir professionell für Sie durch."
            />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-12">
            {data.details.map((item, i) => {
              const IconComponent = iconMap[item.icon] || CheckCircle2
              return (
                <RevealSection key={item.title} delay={i * 100}>
                  <div className="h-full bg-white p-6 md:p-8 rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors">
                      <IconComponent size={24} className="text-gold group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEW: Der Prozess (Timeline) */}
      <section className="section-padding bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
             <SectionHeading
                eyebrow="Zusammenarbeit"
                title="Unser Prozess"
                description="Klar definiert, transparent und termintreu. So läuft die Umsetzung Ihres Projekts ab."
              />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mt-12 md:mt-16 lg:mt-24">
            {data.prozess.map((step, i) => {
              const IconComp = iconMap[step.icon] || CheckCircle2
              return (
                <RevealSection key={step.title} delay={i * 100}>
                  <div className="relative text-center group h-full">
                    {/* Connecting line visible on LG */}
                    {i !== data.prozess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-100 -z-10 group-hover:bg-gold/30 transition-colors"></div>
                    )}
                    
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-gray-50 rounded-full text-2xl font-bold text-black mb-6 shadow-sm group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                      <IconComp size={32} strokeWidth={1.5} className="text-gold" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-charcoal text-white flex items-center justify-center text-xs font-bold ring-4 ring-white shadow-sm">
                        0{i + 1}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                    <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">{step.desc}</p>
                  </div>
                </RevealSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* NEW: FAQ & Vorteile Split Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* FAQ Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <RevealSection>
              <h2 className="text-3xl font-bold text-charcoal mb-2">Häufige Fragen</h2>
              <p className="text-gray-600 mb-8 text-lg">Was unsere Kunden rund um das Thema {data.title} oft wissen möchten.</p>
              <FAQAccordion faq={data.faq} />
            </RevealSection>
          </div>

          {/* Vorteile Column (Right sidebar style) */}
          <div className="lg:col-span-5">
            <RevealSection delay={200}>
              <div className="bg-charcoal rounded-3xl p-6 md:p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -bottom-10 -right-10 p-8 opacity-5">
                  <ShieldCheck size={250} />
                </div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10 text-gold">Warum mit uns bauen?</h3>
                
                <ul className="space-y-6 relative z-10">
                  {data.vorteile.map((v, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                        <CheckCircle2 size={16} className="text-gold" />
                      </div>
                      <span className="font-semibold text-gray-100 text-base sm:text-lg">{v}</span>
                    </li>
                  ))}
                </ul>

                <hr className="border-gray-700/50 my-10 relative z-10" />
                
                <div className="relative z-10">
                  <p className="text-sm text-gray-400 mb-4 font-medium uppercase tracking-wider">Lassen Sie uns Ihr Vorhaben besprechen:</p>
                  <a href={contactDetails.phoneHref} className="inline-flex flex-wrap items-center gap-3 text-gold hover:text-white transition-colors font-bold text-xl sm:text-2xl group mb-8 break-words">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <Phone size={20} />
                    </div>
                    {contactDetails.phoneDisplay}
                  </a>
                  
                  <Link to="/kontakt" className="btn-primary w-full flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                    <Mail size={18} />
                    Kostenlose Beratung sichern
                  </Link>
                </div>
              </div>
            </RevealSection>
          </div>

        </div>
      </section>

      {/* CTA */}
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
