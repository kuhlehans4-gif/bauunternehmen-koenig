import { Link, useParams } from 'react-router-dom'
import { Phone, MapPin, ShieldCheck, CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { RevealSection, SectionHeading } from '../components/UI'
import { contactDetails } from '../data/contactDetails'
import SEO from '../components/SEO'

const standortData = {
  markkleeberg: {
    name: 'Markkleeberg',
    metaTitle: 'Maurer & Bauunternehmen Markkleeberg – Sanierung vom Meisterbetrieb',
    metaDescription:
      'Bauunternehmen König: Maurer-, Sanierungs- und Fassadenarbeiten in Markkleeberg. Meisterbetrieb aus dem Leipziger Süden — kurze Anfahrt, Festpreisgarantie, kostenlose Beratung.',
    keywords:
      'Maurer Markkleeberg, Bauunternehmen Markkleeberg, Sanierung Markkleeberg, Fassade Markkleeberg, Handwerker Markkleeberg, Trockenbau Markkleeberg',
    eyebrow: 'Ihr Meisterbetrieb für Markkleeberg',
    title: 'Maurer- & Bauarbeiten in Markkleeberg',
    subtitle: 'Vom Leipziger Süden direkt an den Cospudener See — Meisterqualität ohne lange Anfahrtswege.',
    intro:
      'Markkleeberg gehört zu den gefragtesten Wohnlagen im Leipziger Umland — mit gepflegten Villenvierteln, Gründerzeithäusern und einer wachsenden Zahl an Ein- und Zweifamilienhäusern rund um Cospudener und Markkleeberger See. Genau hier sind gute Handwerker knapp. Unser Firmensitz liegt im Leipziger Südosten: Nach Markkleeberg sind es für uns nur wenige Minuten, kurzfristige Vor-Ort-Termine und eine Betreuung ohne Anfahrtspauschalen sind daher selbstverständlich.',
    absatz2:
      'Ob die Sanierung eines Altbaus in der Gautzscher Ortslage, eine neue Klinkerfassade, ein Wanddurchbruch im Siedlungshaus oder Trockenbau im Dachgeschoss: Als Maurer- und Betonbauermeisterbetrieb (HWK Leipzig) führen wir alle Arbeiten DIN-gerecht, termintreu und mit Festpreisgarantie aus. Viele unserer Referenzprojekte liegen im Leipziger Süden — auf Wunsch zeigen wir Ihnen gern ausgeführte Arbeiten in Ihrer Nähe.',
    highlights: [
      'Wenige Minuten Anfahrt aus dem Leipziger Südosten',
      'Erfahrung mit Altbau- und Villensubstanz',
      'Kostenlose Vor-Ort-Beratung in ganz Markkleeberg',
      'Festpreisangebot innerhalb von 48 Stunden',
    ],
    faqs: [
      {
        q: 'Berechnen Sie eine Anfahrtspauschale nach Markkleeberg?',
        a: 'Nein. Markkleeberg liegt direkt in unserem Kerngebiet — Anfahrt und Erstberatung vor Ort sind für Sie kostenlos und unverbindlich.',
      },
      {
        q: 'Übernehmen Sie auch Sanierungen älterer Villen und Gründerzeithäuser?',
        a: 'Ja, die Arbeit im Bestand ist eine unserer Kernkompetenzen: Mauerwerkssanierung, Risssanierung, Putz- und Fassadenarbeiten sowie Kellerabdichtung führen wir regelmäßig an historischer Bausubstanz aus.',
      },
      {
        q: 'Wie schnell bekomme ich einen Termin in Markkleeberg?',
        a: 'In der Regel können wir eine Besichtigung innerhalb weniger Werktage anbieten. Das verbindliche Festpreisangebot erhalten Sie anschließend innerhalb von 48 Stunden.',
      },
    ],
  },
  taucha: {
    name: 'Taucha',
    metaTitle: 'Maurer & Bauunternehmen Taucha – Mauerwerk, Sanierung & Fassade',
    metaDescription:
      'Bauunternehmen König: Maurerarbeiten, Sanierung, Innenausbau und Fassaden in Taucha. Meisterbetrieb aus Leipzig — schnelle Termine, Festpreisgarantie, kostenlose Erstberatung.',
    keywords:
      'Maurer Taucha, Bauunternehmen Taucha, Sanierung Taucha, Fassade Taucha, Handwerker Taucha, Anbau Taucha, Trockenbau Taucha',
    eyebrow: 'Ihr Meisterbetrieb für Taucha',
    title: 'Maurer- & Bauarbeiten in Taucha',
    subtitle: 'Für Eigenheime, Anbauten und Bestandssanierung im Leipziger Nordosten — meisterhaft und termintreu.',
    intro:
      'Taucha wächst: Neue Wohngebiete, junge Familien im Eigenheim und zugleich ein historischer Stadtkern mit sanierungsbedürftiger Bausubstanz. Für beides braucht es einen Baupartner, der sowohl Neubauqualität als auch Bestandserfahrung mitbringt. Vom Leipziger Stadtgebiet aus sind wir über die B87 in kurzer Zeit bei Ihnen — für Besichtigung, Beratung und Ausführung.',
    absatz2:
      'Typische Projekte, die wir in Taucha und Umgebung übernehmen: Fundamente und Bodenplatten für Garagen und Anbauten, tragendes Mauerwerk, Wanddurchbrüche mit Stahlträgereinbau, Kellerabdichtung gegen Feuchtigkeit sowie komplette Fassaden- und Putzarbeiten. Als eingetragener Meisterbetrieb der Handwerkskammer Leipzig arbeiten wir nach geltenden DIN-Normen — mit schriftlichem Festpreisangebot statt böser Überraschungen.',
    highlights: [
      'Schnell erreichbar über die B87',
      'Neubau-Nebenleistungen und Bestandssanierung aus einer Hand',
      'Wanddurchbrüche, Anbauten & Fundamente für Eigenheime',
      'Schriftliches Festpreisangebot in 48 Stunden',
    ],
    faqs: [
      {
        q: 'Führen Sie in Taucha auch kleinere Maurerarbeiten aus?',
        a: 'Ja. Vom reparierten Giebelmauerwerk über den Garagenanbau bis zur Komplettsanierung — kein Projekt ist zu klein, um sauber und meisterhaft ausgeführt zu werden.',
      },
      {
        q: 'Machen Sie Wanddurchbrüche in bewohnten Häusern?',
        a: 'Ja, inklusive Statikabstimmung und Stahlträgereinbau. Wir arbeiten staubarm, sichern die Baustelle täglich und halten die vereinbarten Termine ein.',
      },
      {
        q: 'Betreuen Sie auch Neubauvorhaben in den Tauchaer Wohngebieten?',
        a: 'Wir übernehmen Rohbau- und Maurerarbeiten, Fundamente und Bodenplatten sowie die Koordination mit Ihrem Architekten oder Fertighausanbieter.',
      },
    ],
  },
  schkeuditz: {
    name: 'Schkeuditz',
    metaTitle: 'Maurer & Bauunternehmen Schkeuditz – Sanierung & Mauerwerk vom Meister',
    metaDescription:
      'Bauunternehmen König: Maurer-, Beton- und Sanierungsarbeiten in Schkeuditz. Meisterbetrieb aus Leipzig — kostenlose Vor-Ort-Beratung, Festpreisgarantie, DIN-gerechte Ausführung.',
    keywords:
      'Maurer Schkeuditz, Bauunternehmen Schkeuditz, Sanierung Schkeuditz, Fassade Schkeuditz, Handwerker Schkeuditz, Kellerabdichtung Schkeuditz',
    eyebrow: 'Ihr Meisterbetrieb für Schkeuditz',
    title: 'Maurer- & Bauarbeiten in Schkeuditz',
    subtitle: 'Zuverlässiges Bauhandwerk für Wohnhäuser und Gewerbe im Leipziger Nordwesten.',
    intro:
      'Zwischen Auenlandschaft und Flughafen ist Schkeuditz ein gefragter Wohn- und Gewerbestandort — mit vielen Bestandsgebäuden aus unterschiedlichen Baujahrzehnten, die regelmäßig Sanierung, Abdichtung oder eine neue Fassade brauchen. Über die B6 und A9 sind wir aus Leipzig schnell vor Ort und betreuen Projekte in Schkeuditz, Glesien, Radefeld und den umliegenden Ortsteilen.',
    absatz2:
      'Unsere Schwerpunkte vor Ort: Mauerwerks- und Risssanierung, Kellerabdichtung gegen drückende Feuchtigkeit — ein häufiges Thema in Elster-Luppe-Nähe —, Putz- und Fassadenarbeiten sowie Innenausbau und Trockenbau. Auch für Gewerbeobjekte wie Büros, Hallen-Sozialräume oder Praxen sind wir der richtige Ansprechpartner. Meisterbetrieb der HWK Leipzig, Festpreisgarantie, saubere Baustelle — darauf können Sie bauen.',
    highlights: [
      'Schnelle Anbindung über B6 und A9',
      'Spezialist für Kellerabdichtung & Feuchtigkeitsschäden',
      'Privat- und Gewerbekunden',
      'Kostenlose Erstberatung vor Ort',
    ],
    faqs: [
      {
        q: 'Mein Keller in Schkeuditz ist feucht — können Sie helfen?',
        a: 'Ja, Abdichtungsarbeiten gehören zu unseren Kernleistungen: von der Ursachenanalyse über Horizontalsperren bis zur vollständigen Perimeterabdichtung mit Aufgraben des Sockels.',
      },
      {
        q: 'Arbeiten Sie auch für Firmen und Hausverwaltungen in Schkeuditz?',
        a: 'Ja. Wir betreuen gewerbliche Auftraggeber und Hausverwaltungen bei Instandsetzung, Sanierung und Umbauten — zuverlässig terminiert und mit transparenter Abrechnung.',
      },
      {
        q: 'Was kostet eine Fassadensanierung in Schkeuditz?',
        a: 'Das hängt von Zustand, Fläche und gewünschtem System ab. Nach einer kostenlosen Besichtigung erhalten Sie von uns ein verbindliches Festpreisangebot — ohne versteckte Kosten.',
      },
    ],
  },
}

const leistungen = [
  { name: 'Maurer- & Betonbau', path: '/leistungen/maurer-betonbau' },
  { name: 'Sanierung & Instandsetzung', path: '/leistungen/sanierung' },
  { name: 'Innenausbau & Trockenbau', path: '/leistungen/innenausbau' },
  { name: 'Fassaden- & Putzarbeiten', path: '/leistungen/fassade' },
]

export default function StandortDetail() {
  const { slug } = useParams()
  const data = standortData[slug]

  if (!data) {
    return (
      <section className="min-h-[60vh] bg-gray-50 pt-40 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl font-900 text-charcoal mb-6">Standort nicht gefunden</h1>
          <Link to="/" className="btn-primary">Zur Startseite</Link>
        </div>
      </section>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: `Maurer- und Bauarbeiten in ${data.name}`,
        provider: { '@id': 'https://www.bauunternehmen-koenig.com/#business' },
        areaServed: { '@type': 'City', name: data.name },
        serviceType: 'Maurerarbeiten, Sanierung, Innenausbau, Fassadenarbeiten',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://www.bauunternehmen-koenig.com/' },
          { '@type': 'ListItem', position: 2, name: data.name, item: `https://www.bauunternehmen-koenig.com/standorte/${slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <SEO
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={data.keywords}
        path={`/standorte/${slug}`}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative bg-charcoal pt-40 sm:pt-48 md:pt-52 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.webp')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-charcoal"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <MapPin size={14} className="text-gold" />
              <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{data.eyebrow}</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-900 text-white leading-tight tracking-tight mb-5 max-w-4xl">
              {data.title}
            </h1>
            <p className="text-gold/80 text-lg md:text-2xl font-semibold max-w-3xl mb-10">{data.subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/kontakt" className="btn-primary">Kostenlose Beratung sichern</Link>
              <a href={contactDetails.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-gold/60 transition-colors">
                <Phone size={16} className="text-gold" /> {contactDetails.phoneDisplay}
              </a>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* INTRO + HIGHLIGHTS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <RevealSection>
            <SectionHeading
              eyebrow="Vor Ort für Sie da"
              title={`Bauen & Sanieren in ${data.name}`}
              center={false}
            />
            <p className="text-gray-500 leading-relaxed mb-6">{data.intro}</p>
            <p className="text-gray-500 leading-relaxed">{data.absatz2}</p>
          </RevealSection>
          <RevealSection delay={200}>
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-10">
              <h3 className="font-heading text-xl font-800 text-charcoal mb-6">Ihre Vorteile in {data.name}</h3>
              <ul className="space-y-4 mb-8">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <ShieldCheck size={18} className="text-gold" /> Meisterbetrieb — {contactDetails.tradeRegistrationLabel}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Clock size={18} className="text-gold" /> {contactDetails.openingHoursDisplay}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeading
              eyebrow="Leistungen"
              title={`Unsere Leistungen in ${data.name}`}
              description="Alle Gewerke aus einer Hand — vom Fundament bis zur fertigen Fassade."
            />
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {leistungen.map((l, i) => (
              <RevealSection key={l.path} delay={i * 100}>
                <Link
                  to={l.path}
                  className="group flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-6 hover:border-gold/40 hover:shadow-lg transition-all duration-300"
                >
                  <span className="font-heading font-700 text-charcoal text-sm md:text-base">{l.name}</span>
                  <ArrowRight size={18} className="text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection>
            <SectionHeading
              eyebrow="FAQ"
              title={`Häufige Fragen aus ${data.name}`}
            />
          </RevealSection>
          <div className="space-y-6 mt-10">
            {data.faqs.map((f, i) => (
              <RevealSection key={f.q} delay={i * 100}>
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                  <h3 className="font-heading font-700 text-charcoal mb-3">{f.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <RevealSection>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-6">
              Ihr Projekt in <span className="gold-text-gradient">{data.name}</span>?
            </h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Kostenlose Vor-Ort-Beratung, verbindliches Festpreisangebot in 48 Stunden und meisterhafte Ausführung — sprechen Sie uns an.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="btn-primary">Kostenlose Beratung anfragen</Link>
              <a href={contactDetails.phoneHref} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:border-gold/60 transition-colors">
                <Phone size={16} className="text-gold" /> {contactDetails.phoneDisplay}
              </a>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
