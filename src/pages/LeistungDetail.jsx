import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Phone, ArrowLeft, Wrench, Ruler, ShieldCheck, PaintRoller, Frame, CheckSquare, HardHat, Home, FileText, Clock, ThumbsUp, Zap, Droplet, LayoutGrid, CheckCircle2, MapPin, Leaf, Users } from 'lucide-react'
import { RevealSection } from '../components/UI'
import { contactDetails } from '../data/contactDetails'
import { TrustBar, ServiceGrid, ProcessSteps, ReferenceSection, FAQAccordionSection } from '../components/ServiceComponents'

const iconMap = {
  Wrench, Ruler, ShieldCheck, PaintRoller, Frame, CheckSquare, HardHat, Home, FileText, Clock, ThumbsUp, Zap, Droplet, LayoutGrid, CheckCircle2, MapPin, Leaf, Users, Phone
}

const serviceData = {
  'maurer-betonbau': {
    title: 'Maurer- & Betonbau',
    eyebrow: 'Kernkompetenz Maurermeister',
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
      { q: 'Erstellen Sie auch Fundamente für Fertighäuser?', a: 'Ja, wir betonieren hochpräzise Bodenplatten nach Toleranzen des Hochbaus, die exakt auf die Vorgaben von Fertighausherstellern abgestimmt sind.' },
      { q: 'Bringen Sie alle Materialien selbst mit?', a: 'Selbstverständlich. Wir arbeiten eng mit dem regionalen Baustofffachhandel zusammen und kümmern uns um die gesamte Logistik von Beton, Stahl und Steinen.' },
      { q: 'Ist ein Festpreis möglich?', a: 'Ja, nach Einsicht in die verbindlichen Ausführungspläne und Statik erstellen wir Ihnen ein verlässliches Festpreisangebot.' }
    ],
    vorteile: [
      'Meisterbetrieb mit Expertise',
      'DIN-gerechte Umsetzung',
      'Hochwertige Baustoffe',
      'Millimeterpräzise Arbeit',
      'Transparente Kalkulation'
    ],
    lokalerHinweis: 'Wir führen Maurer- und Betonarbeiten in ganz Leipzig durch — von Gohlis bis Connewitz, von Plagwitz bis Reudnitz.',
  },
  'sanierung': {
    title: 'Sanierung & Instandsetzung',
    eyebrow: 'Erhalt & Wertsteigerung im Bestand',
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
      { q: 'Übernehmen Sie auch die Gewerke-Koordination (Sanitär, Elektro)?', a: 'Ja, als Ihr Hauptansprechpartner koordinieren wir auf Wunsch Fachfirmen aus unserem festen Leipziger Netzwerk (Elektriker, Klempner), damit alles reibungslos läuft.' },
      { q: 'Wird Baustaub vermieden?', a: 'Wir arbeiten mit modernen Absauganlagen und Staubschutzwänden, um die Belastung in bewohnten Gebäuden so gering wie möglich zu halten.' },
      { q: 'Sind auch kleine Sanierungen möglich?', a: 'Absolut. Wir rücken auch für die Teilsanierung einzelner Zimmer oder Badezimmer an.' }
    ],
    vorteile: [
      'Gewerkeübergreifend',
      'Respekt vor Bausubstanz',
      'Staubarmes Arbeiten',
      'Fester Ansprechpartner',
      'Termintreue Übergabe'
    ],
    lokalerHinweis: 'Sanierungen in Leipzig-Südvorstadt, Schleußig, Gohlis und weiteren Altbau-Zentren sind unser Spezialgebiet.',
  },
  'innenausbau': {
    title: 'Innenausbau & Trockenbau',
    eyebrow: 'Moderne Raumgestaltung',
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
      { q: 'Was bedeutet Q2, Q3 und Q4?', a: 'Das sind Qualitätsstufen der Spachtelung. Q2 ist Standard unter Raufaser, Q3 unter feiner Strukturtapete und Q4 ist spiegelglatt für matte Anstriche oder Spachteltechniken.' },
      { q: 'Eignet sich Trockenbau auch im Feuchtraum (Bad)?', a: 'Ja, hierfür verwenden wir spezielle, imprägnierte Platten (meist grün markiert), die speziell für Küchen und Bäder ausgelegt sind.' },
      { q: 'Wie gut ist die Schalldämmung?', a: 'Hervorragend. Durch doppelbeplankte Wände und eingelegte Mineralwolle erreichen Trockenbauwände teils bessere Schallschutzwerte als massives Mauerwerk gleicher Dicke.' }
    ],
    vorteile: [
      'Glatte Q4-Oberflächen',
      'Keine Trocknungszeit',
      'Hoher Schallschutz',
      'Indirekte Beleuchtung',
      'Brandschutz geprüft'
    ],
    lokalerHinweis: 'Vom Dachausbau in Connewitz bis zur Praxiseinrichtung im Zentrum — wir schaffen neue Räume in Leipzig.',
  },
  'fassade': {
    title: 'Professionelle Fassadengestaltung & Sanierung in Leipzig',
    eyebrow: 'Außengestaltung & Schutz',
    subtitle: 'Energieeffiziente Wärmedämmung und langlebiger Witterungsschutz für den Werterhalt Ihrer Immobilie.',
    heroImage: '/images/fassade.png',
    trustSignals: [
      { icon: 'ShieldCheck', text: 'Meisterbetrieb' },
      { icon: 'MapPin', text: 'Regional in Leipzig & Umgebung' },
      { icon: 'CheckSquare', text: 'Verarbeitung nach aktueller DIN-Norm' },
      { icon: 'Leaf', text: 'Energieeffizient (GEG-konform)' }
    ],
    details: [
      { title: 'Wärmedämmverbundsysteme (WDVS)', desc: 'Senken Sie Ihre Heizkosten deutlich durch fachgerechte Dämmung nach aktuellen Energiestandards.', icon: 'Zap' },
      { title: 'Putz- & Stuckarbeiten', desc: 'Optische Aufwertung und Schutz Ihrer Fassade mit atmungsaktiven, witterungsbeständigen Putzen.', icon: 'PaintRoller' },
      { title: 'Fassadensanierung', desc: 'Sichere Beseitigung von Rissen, Feuchtigkeitsschäden und Algen für einen langlebigen Werterhalt.', icon: 'Wrench' },
    ],
    prozess: [
      { title: 'Unverbindliche Anfrage', desc: 'Sie schildern uns Ihr Projekt und Ihre Wünsche für die Fassade.', icon: 'Phone' },
      { title: 'Vor-Ort-Termin & Angebot', desc: 'Wir prüfen die Bausubstanz in Leipzig und erstellen ein transparentes Festpreisangebot.', icon: 'CheckSquare' },
      { title: 'Fachgerechte Umsetzung', desc: 'Pünktliche Fertigstellung durch unsere qualifizierten Facharbeiter.', icon: 'HardHat' },
    ],
    testimonial: {
      quote: 'Das Team von Herrn König hat unsere Fassade nicht nur energetisch auf den neuesten Stand gebracht, sondern auch den Zeitplan exakt eingehalten.',
      author: 'Max Mustermann, Leipzig'
    },
    faq: [
      { q: 'Bieten Sie auch die Stellung des Gerüsts an?', a: 'Ja, wir organisieren in Zusammenarbeit mit lokalen Gerüstbauern das exakt auf das Haus zugeschnittene Gerüst, sodass Sie sich um nichts kümmern müssen.' },
      { q: 'Wie lange dauert eine durchschnittliche Fassadensanierung?', a: 'Die Dauer hängt von der Größe und dem Zustand des Gebäudes ab, in der Regel planen wir bei einem Einfamilienhaus etwa 2 bis 4 Wochen.' },
      { q: 'Können Sie bei der Beantragung von Fördermitteln (KfW) helfen?', a: 'Wir unterstützen Sie gerne mit den nötigen Nachweisen und Fachunternehmererklärungen, damit Sie Ihre Förderung (z. B. für WDVS) erfolgreich beantragen können.' }
    ],
    ctaText: "Bereit für eine neue Fassade? Lassen Sie uns über Ihr Projekt in Leipzig sprechen."
  },
}

export default function LeistungDetail() {
  const { slug } = useParams()
  const data = serviceData[slug]

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-52">
        <div className="text-center px-4">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-charcoal">Dienstleistung nicht gefunden</h1>
          <p className="text-gray-500 mb-8">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
          <Link to="/leistungen" className="btn-primary">Alle Leistungen ansehen</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="relative pt-52 pb-24 bg-charcoal overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-[0.25]">
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover grayscale brightness-50" />
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white leading-tight mb-6">
              {data.title}
            </h1>
            
            {data.subtitle ? (
              <h2 className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-10 max-w-3xl">
                {data.subtitle}
              </h2>
            ) : (
              <h2 className="text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-10 max-w-3xl">
                {data.intro}
              </h2>
            )}

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-black font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1 shadow-lg text-lg">
                <Phone size={20} />
                Kostenlose Vor-Ort-Beratung anfragen
              </Link>
              
              {data.testimonial && (
                <a href="#referenzen" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-gray-500 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white transition-all duration-300 text-lg">
                  Unsere Referenzen ansehen
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustBar signals={data.trustSignals} iconMap={iconMap} />
      
      <ServiceGrid details={data.details} iconMap={iconMap} />
      
      <ProcessSteps processData={data.prozess} iconMap={iconMap} />
      
      <ReferenceSection testimonial={data.testimonial} />
      
      <FAQAccordionSection faq={data.faq} />

      {/* CTA Layer - Generic or specific text */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-900 text-black mb-6 tracking-tight">
              {data.ctaText || "Bereit für den Baustart?"}
            </h2>
            <p className="text-black/80 text-lg md:text-xl font-medium mb-10 max-w-xl mx-auto leading-relaxed">
              {data.ctaSubText || "Kontaktieren Sie uns für eine kostenlose Objektbegehung vor Ort. Wir kalkulieren transparent und fair."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-charcoal/20 text-lg">
                Jetzt Kontakt aufnehmen
              </Link>
            </div>
            {data.ctaSubText && (
              <p className="text-sm font-semibold text-black/60 mt-6 flex items-center justify-center gap-2">
                <CheckCircle2 size={16} /> Wir melden uns innerhalb von 24 Stunden zurück.
              </p>
            )}
          </RevealSection>
        </div>
      </section>
    </>
  )
}
