import { Link } from 'react-router-dom'
import { Mail, ArrowRight, ShieldCheck, Clock, Sparkles, Hammer, Building2, PaintBucket, Wrench, CheckCircle2, ChevronDown, Star, Quote } from 'lucide-react'
import { RevealSection, SectionHeading, ServiceCard, ProcessStep } from '../components/UI'
import { useState } from 'react'
import { contactDetails } from '../data/contactDetails'
import SEO from '../components/SEO'

const services = [
  {
    icon: Hammer,
    title: 'Maurer- & Betonbau',
    description: 'Präzise Maurer- und Betonarbeiten nach DIN-Normen. Vom Fundament bis zur Mauerkrone — meisterliche Qualität.',
    link: '/leistungen/maurer-betonbau',
    image: '/images/maurer.png',
  },
  {
    icon: Building2,
    title: 'Sanierung & Instandsetzung',
    description: 'Komplettsanierung, Altbaumodernisierung und Instandsetzung von Bestandsimmobilien — fachgerecht und termintreu aus einer Hand.',
    link: '/leistungen/sanierung',
    image: '/images/sanierung.png',
  },
  {
    icon: Wrench,
    title: 'Innenausbau & Trockenbau',
    description: 'Professioneller Innenausbau: Trockenbau, Spachtelarbeiten und moderne Raumgestaltung für Ihr Zuhause.',
    link: '/leistungen/innenausbau',
    image: '/images/innenausbau.png',
  },
  {
    icon: PaintBucket,
    title: 'Fassaden- & Putzarbeiten',
    description: 'Neue Fassaden, fachgerechte Putzarbeiten und Wärmedämmung. Wir geben Ihrem Gebäude ein neues Gesicht.',
    link: '/leistungen/fassade',
    image: '/images/fassade.png',
  },
]

const process = [
  { number: '01', title: 'Anfrage', description: <>Schildern Sie uns Ihr Vorhaben — bequem telefonisch unter <span className="whitespace-normal sm:whitespace-nowrap">{contactDetails.phoneDisplay}</span> oder über unser Online-Formular.</> },
  { number: '02', title: 'Vor-Ort-Termin', description: 'Wir besichtigen Ihr Projekt kostenlos und persönlich. So erhalten Sie eine ehrliche, individuelle Beratung.' },
  { number: '03', title: 'Festpreis-Angebot', description: 'Sie erhalten innerhalb von 48 Stunden ein verbindliches Angebot — schriftlich, transparent und ohne versteckte Kosten.' },
  { number: '04', title: 'Meisterhafte Ausführung', description: 'Pünktliche Fertigstellung, täglich aufgeräumte Baustelle und Qualität nach DIN-Normen — das ist unser Versprechen.' },
]

const faqs = [
  {
    question: 'In welchem Umkreis von Leipzig bieten Sie Ihre Bauleistungen an?',
    answer: 'Als regionales Premium-Bauunternehmen konzentrieren wir uns auf Leipzig und das umliegende Umland in einem Radius von ca. 50 Kilometern. Diese regionale Nähe garantiert Ihnen kurze Wege, schnelle Reaktionszeiten und eine enge, persönliche Betreuung Ihres Bauvorhabens direkt vor Ort.',
  },
  {
    question: 'Bieten Sie alle Bauleistungen aus einer Hand als Generalunternehmer an?',
    answer: 'Ja. Wir verstehen uns als Ihr zentraler Ansprechpartner für das gesamte Bauprojekt. Von der ersten Rohbauplanung bis hin zum schlüsselfertigen Innenausbau koordinieren wir alle Gewerke. Für Sie bedeutet das: Keine Kommunikationsverluste, feste Ansprechpartner und eine garantierte Termintreue bei höchster Qualität.',
  },
  {
    question: 'Wie läuft die erste Beratung beim Bauunternehmen König ab?',
    answer: 'Nach Ihrer unverbindlichen Anfrage vereinbaren wir einen Vor-Ort-Termin an Ihrem Objekt oder Grundstück in Leipzig. Wir analysieren die Gegebenheiten, besprechen Ihre architektonischen Visionen und prüfen die Machbarkeit. Darauf basierend erhalten Sie ein transparentes, detailliertes Angebot ohne versteckte Kosten.',
  },
  {
    question: 'Realisieren Sie Projekte für Privatkunden oder gewerbliche Auftraggeber?',
    answer: 'Unsere Expertise umfasst beide Segmente. Wir bauen anspruchsvolle Einfamilienhäuser und Villen für Privatkunden mit derselben Präzision und Zuverlässigkeit wie komplexe Gewerbe-, Büro- oder Industriebauten für Geschäftskunden. Höchste Bauqualität ist in jedem Maßstab unser Standard.',
  },
  {
    question: 'Welche Sicherheiten und Garantien geben Sie auf Ihre Leistungen?',
    answer: 'Wir arbeiten streng nach den anerkannten Regeln der Technik (VOB/BGB) und gewähren Ihnen umfassende Gewährleistungen auf alle ausgeführten Arbeiten. Durch die ausschließliche Verwendung zertifizierter Premium-Baustoffe und den Einsatz eigener, exzellent ausgebildeter Facharbeiter sichern wir ein Höchstmaß an Langlebigkeit und Wertbeständigkeit.',
  },
]

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

export default function Home() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <SEO
        title="Bauunternehmen König | Maurermeister & Betonbauer in Leipzig"
        description="Bauunternehmen König – Ihr Maurer- und Betonbauermeister in Leipzig. ✓ Neubau ✓ Sanierung ✓ Innenausbau ✓ Fassadenarbeiten. Festpreisgarantie & kostenlose Erstberatung. Jetzt Angebot anfragen!"
        keywords="Bauunternehmen Leipzig, Maurermeister Leipzig, Betonbauer Leipzig, Neubau Leipzig, Sanierung Leipzig, Innenausbau Leipzig, Fassade Leipzig, Handwerker Leipzig, Tim König, Maurer Leipzig"
        path="/"
        jsonLd={faqJsonLd}
      />
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Bauunternehmen König — Baustelle in Leipzig"
            className="w-full h-full object-cover animate-[scaleInSimple_30s_infinite_alternate]"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 md:pt-48 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <RevealSection delay={100}>
              <div className="inline-flex flex-wrap items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 md:mb-10 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-gold border border-gold-light animate-pulse"></span>
                <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Meisterbetrieb in Leipzig</span>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-900 text-white leading-[0.95] tracking-tightest mb-5 md:mb-6 max-w-[12ch] sm:max-w-none">
                Bauen in<br />
                <span className="gold-text-gradient">Leipzig.</span>
              </h1>
              <p className="font-heading text-base sm:text-xl md:text-3xl text-gold/80 font-semibold tracking-wide mb-8 md:mb-10 uppercase">
                Handwerk aus Meisterhand.
              </p>
            </RevealSection>
            
            <RevealSection delay={300}>
              <p className="text-base sm:text-lg md:text-2xl text-gray-200/90 mb-10 md:mb-12 max-w-[300px] sm:max-w-3xl leading-relaxed font-light">
                Tim&nbsp;König — Maurer- und Betonbauermeister aus&nbsp;Leipzig.<br className="hidden sm:block" />
                Ihr Partner für Mauerwerk, Sanierung, Fassade und&nbsp;Innenausbau.<br />
                Kostenlose Erstberatung<br />
                & Festpreisgarantie.
              </p>
            </RevealSection>
            
            <RevealSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <Link to="/kontakt" className="btn-primary text-base w-full sm:w-auto">
                  <Mail size={18} />
                  Kostenlose Beratung sichern
                </Link>
                <Link to="/leistungen" className="btn-secondary text-base group w-full sm:w-auto">
                  Unsere Leistungen
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>

        </section>

      {/* ========== TRUST BAR LAYER ========== */}
      <section className="relative -mt-8 sm:-mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <RevealSection>
          <div className="bg-white rounded-3xl overflow-hidden p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 border border-gold/40 shadow-[0_8px_40px_rgba(0,0,0,0.18),0_0_0_1px_rgba(180,144,60,0.15)]">
            {[
              { icon: ShieldCheck, text: 'Meisterbetrieb', sub: 'HWK Leipzig' },
              { icon: Clock, text: 'Termintreue', sub: 'Pünktlich garantiert' },
              { icon: Sparkles, text: 'Saubere Arbeit', sub: 'Täglich aufgeräumt' },
              { icon: CheckCircle2, text: 'Festpreisgarantie', sub: 'Keine Überraschungen' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 flex-shrink-0">
                  <item.icon size={22} className="text-gold" />
                </div>
                <div>
                  <span className="text-base font-semibold text-gray-900 block">{item.text}</span>
                  <span className="text-xs text-gray-400">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* ========== SERVICES (BENTO GRID STYLE) ========== */}
      <section className="section-padding bg-gray-50 rounded-t-[2rem] sm:rounded-t-[3rem] -mt-24 sm:-mt-32 pt-32 sm:pt-40">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionHeading
              eyebrow="Expertise"
              title="Kompetenz in jedem Gewerk"
              description="Von der Grundsteinlegung bis zur fertigen Fassade — wir bieten Ihnen das volle Leistungsspektrum rund um Ihr Bauprojekt."
            />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <RevealSection delay={400}>
            <div className="text-center mt-12 md:mt-16">
              <Link to="/leistungen" className="btn-primary gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Alle Leistungen ansehen
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
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

      {/* ========== PROBLEM / SOLUTION ========== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-5">
              <RevealSection>
                <span className="inline-block text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Warum König?</span>
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight leading-tight mb-6 text-gray-900">
                  Schluss mit<br />Baustellen-Chaos.
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Unzuverlässige Handwerker, unübersichtliche Kosten und endlose Wartezeiten? Das muss nicht sein. Bei Bauunternehmen König garantieren wir einen reibungslosen Ablauf.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Fester Ansprechpartner für alle Gewerke',
                    'Transparente Kostenvoranschläge ohne Überraschungen',
                    'Täglich aufgeräumte Baustellen',
                    'Kostenlose & unverbindliche Erstberatung',
                    'Starkes Netzwerk mit qualifizierten Partnerfirmen'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium font-heading">
                      <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 size={14} className="text-gold" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </RevealSection>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {[
                { icon: Clock, title: 'Termintreue', desc: 'Wir halten, was wir versprechen. Pünktlich fertig.' },
                { icon: Sparkles, title: 'Saubere Arbeit', desc: 'Eine saubere Baustelle ist für uns selbstverständlich.' },
                { icon: ShieldCheck, title: 'Transparenz', desc: 'Festpreis-Angebot schützt Sie vor bösen Überraschungen.' },
                { icon: CheckCircle2, title: 'Qualität', desc: 'Meisterliche Ausführung nach geltenden DIN-Normen.' }
              ].map((item, i) => (
                <RevealSection key={item.title} delay={i * 150}>
                  <div className="p-6 md:p-8 rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gold flex items-center justify-center mb-6">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section className="section-padding bg-charcoal rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] opacity-[0.03] object-cover mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealSection>
            <SectionHeading
              eyebrow="Ablauf"
              title="Der Weg zum Ziel"
              description="In 4 einfachen Schritten zu Ihrem Bauprojekt — transparent, planbar und absolut zuverlässig."
              light
            />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {process.map((step, i) => (
              <ProcessStep key={step.number} {...step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE AREA ========== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionHeading
              eyebrow="Unser Einsatzgebiet"
              title="Wir bauen in ganz Leipzig"
              description="Als lokaler Meisterbetrieb kennen wir Leipzig wie unsere Westentasche — und sind in allen Stadtteilen für Sie da."
            />
          </RevealSection>
          <RevealSection delay={200}>
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              {['Gohlis', 'Südvorstadt', 'Lindenau', 'Plagwitz', 'Connewitz', 'Schleußig', 'Reudnitz', 'Mölkau', 'Möckern', 'Leutzsch', 'Grünau', 'Paunsdorf', 'Markkleeberg', 'Taucha', 'Schkeuditz'].map((ort) => (
                <span key={ort} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-gray-700 hover:border-gold/40 hover:bg-gold/5 transition-all duration-300">
                  {ort}
                </span>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-6">Nicht dabei? <Link to="/kontakt" className="text-gold hover:underline font-medium">Einfach anfragen</Link> — wir fahren auch in die Umgebung.</p>
          </RevealSection>
        </div>
      </section>

      {/* ========== FOUNDER (IHR MEISTER VOR ORT) ========== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <RevealSection delay={200}>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                <img src="/images/tim-portrait.png" alt="Tim König auf der Baustelle" className="w-full h-[380px] sm:h-[500px] object-cover grayscale brightness-75" loading="lazy" decoding="async" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 z-20">
                  <h3 className="text-white text-2xl sm:text-3xl font-heading font-bold mb-1">Tim König</h3>
                  <p className="text-gold font-medium">Maurer- und Betonbauermeister</p>
                </div>
              </div>
            </RevealSection>
            
            <div>
              <RevealSection>
                <SectionHeading
                  eyebrow="Ihr Meister vor Ort"
                  title="Das Gesicht hinter der Qualität"
                  center={false}
                />
                <div className="prose prose-lg text-gray-600 mb-8 mt-2">
                  <p className="leading-relaxed font-light text-lg md:text-xl italic text-gray-800 border-l-4 border-gold pl-4 md:pl-6 mb-8">
                    "Mein Name steht für die Qualität auf Ihrer Baustelle. Keine anonymen Subunternehmer, keine versteckten Kosten — bei uns arbeitet der Chef noch selbst mit und bürgt für meisterhafte Ausführung."
                  </p>
                  <p className="leading-relaxed mb-6">
                    Mit dem Meisterbrief der Handwerkskammer Leipzig in der Tasche und jahrelanger Erfahrung auf Groß- und Kleinbaustellen habe ich das Bauunternehmen König gegründet, um das Handwerk wieder dorthin zu bringen, wo es hingehört: Verlässlichkeit, Pünktlichkeit und echte Wertarbeit.
                  </p>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mt-10">
                    <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-full border border-gray-200 shadow-sm flex-shrink-0">
                      <ShieldCheck size={28} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 font-heading text-lg">Zertifizierte Qualität</h4>
                      <p className="text-sm text-gray-500">Staatlich geprüfter Meisterbetrieb (HWK)</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>


      {/* ========== FAQ ========== */}
      <FaqSection />

      {/* ========== FINAL CTA (HIGH CONVERTING) ========== */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <RevealSection>
            <div className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 gold-gradient"></div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-6 sm:mt-8">
                <div>
                  <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-800 tracking-tight text-gray-900 mb-6 leading-tight">
                    Bereit für etwas <span className="gold-text-gradient">Großes?</span>
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 font-light leading-relaxed">
                    Der nächste Schritt ist ganz einfach. Buchen Sie jetzt Ihr Erstgespräch und erhalten Sie Klarheit für Ihr Bauvorhaben.
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {[
                      'Rückruf innerhalb von 24 Stunden',
                      'Kostenloser Vor-Ort-Termin auf der Baustelle',
                      'Verbindliches Festpreisangebot ohne versteckte Kosten'
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-4 text-gray-700 font-medium font-heading">
                        <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold font-bold text-sm border border-gold/20">
                          {i + 1}
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/kontakt" className="btn-primary text-base !px-5 !py-3 sm:!px-8 sm:!py-5 w-full sm:w-auto flex-1 shadow-[0_4px_20px_rgba(212,175,55,0.4)]">
                      <Mail size={18} />
                      Kostenlose Beratung anfragen
                    </Link>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm font-medium text-amber-700 bg-amber-50 p-3 sm:p-4 rounded-xl border border-amber-100">
                    <Clock size={16} className="flex-shrink-0" />
                    <p>Aufgrund hoher Nachfrage können wir aktuell nur noch <span className="font-bold underline decoration-amber-300">wenige Bauprojekte</span> annehmen.</p>
                  </div>
                </div>
                
                <div className="hidden lg:block relative text-center">
                  <div className="absolute inset-0 bg-gold/5 rounded-full blur-[60px] transform scale-150 -z-10"></div>
                  <img src="/images/logo-cta.png" alt="Bauunternehmen König" className="w-full max-w-[400px] h-auto mx-auto object-contain drop-shadow-xl" loading="lazy" decoding="async" />
                  
                  <div className="absolute -top-12 -right-4 bg-white px-5 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="text-left font-heading">
                      <span className="block text-xs text-gray-400 font-medium uppercase tracking-wider">Meisterbetrieb</span>
                      <span className="block text-sm font-bold text-gray-900">Termintreue garantiert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  )
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <RevealSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Häufig gestellte Fragen"
            description="Antworten auf die wichtigsten Fragen rund um Ihr Bauprojekt in Leipzig."
          />
        </RevealSection>
        <div className="space-y-3 mt-8">
          {faqs.map((faq, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-gray-900 pr-4 group-hover:text-gold transition-colors duration-200">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  )
}
