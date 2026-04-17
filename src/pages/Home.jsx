import { Link } from 'react-router-dom'
import { Phone, ArrowRight, ShieldCheck, Clock, Sparkles, Hammer, Building2, PaintBucket, Wrench, CheckCircle2, ChevronDown } from 'lucide-react'
import { RevealSection, SectionHeading, ServiceCard, ProcessStep } from '../components/UI'
import { useState } from 'react'

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
    title: 'Neubau & Sanierung',
    description: 'Vom Neubau bis zur Komplettsanierung — wir verwandeln Ihre Vision in solide Realität. Schlüsselfertig aus einer Hand.',
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
  { number: '01', title: 'Anfrage', description: 'Schildern Sie uns Ihr Vorhaben — bequem telefonisch unter 0179 684 98 63 oder über unser Online-Formular.' },
  { number: '02', title: 'Vor-Ort-Termin', description: 'Wir besichtigen Ihr Projekt kostenlos und persönlich. So erhalten Sie eine ehrliche, individuelle Beratung.' },
  { number: '03', title: 'Festpreis-Angebot', description: 'Sie erhalten innerhalb von 48 Stunden ein verbindliches Angebot — schriftlich, transparent und ohne versteckte Kosten.' },
  { number: '04', title: 'Meisterhafte Ausführung', description: 'Pünktliche Fertigstellung, täglich aufgeräumte Baustelle und Qualität nach DIN-Normen — das ist unser Versprechen.' },
]

const faqs = [
  {
    question: 'In welchen Leipziger Stadtteilen sind Sie tätig?',
    answer: 'Wir arbeiten in ganz Leipzig und Umgebung — darunter Gohlis, Südvorstadt, Lindenau, Plagwitz, Connewitz, Schleußig, Mölkau, Reudnitz und mehr. Auch Projekte im Umland (z.B. Markkleeberg, Taucha, Schkeuditz) realisieren wir gerne.',
  },
  {
    question: 'Was kostet eine Erstberatung bei Bauunternehmen König?',
    answer: 'Die Erstberatung und der Vor-Ort-Termin sind für Sie völlig kostenlos und unverbindlich. Erst nach klarer Leistungsvereinbarung erhalten Sie ein schriftliches Festpreisangebot.',
  },
  {
    question: 'Wie lange dauert es bis zum Projektstart?',
    answer: 'Nach Ihrer Anfrage erhalten Sie innerhalb von 24–48 Stunden eine Rückmeldung. Je nach Auftragslage starten wir Ihr Projekt in der Regel innerhalb von 2–4 Wochen nach Angebotsannnahme.',
  },
  {
    question: 'Führen Sie auch kleine Reparaturen und Einzelgewerke durch?',
    answer: 'Ja — von der kleinen Mauerwerkssanierung bis zur Komplettbaustelle. Kein Auftrag ist zu klein oder zu groß. Sprechen Sie uns an und wir finden die beste Lösung für Ihr Projekt.',
  },
  {
    question: 'Welche Qualifikationen hat Tim König?',
    answer: 'Tim König ist staatlich geprüfter Maurer- und Betonbauermeister (HWK Leipzig). Dieser Meisterbrief garantiert Ihnen geprüfte Fachkompetenz, Ausbildungsberechtigung und die Einhaltung aller geltenden DIN-Normen.',
  },
]

export default function Home() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Bauunternehmen König — Baustelle in Leipzig"
            className="w-full h-full object-cover animate-[scaleInSimple_30s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-20">
          <div className="max-w-3xl">
            <RevealSection delay={100}>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-10 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-gold border border-gold-light animate-pulse"></span>
                <span className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Meisterbetrieb in Leipzig</span>
              </div>
            </RevealSection>
            
            <RevealSection delay={200}>
              <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[6rem] font-900 text-white leading-[0.95] tracking-tightest mb-6">
                Ihr Maurer<br />
                <span className="gold-text-gradient">in Leipzig.</span>
              </h1>
              <p className="font-heading text-2xl md:text-3xl text-gold/80 font-semibold tracking-wide mb-10 uppercase">
                Handwerk aus Meisterhand.
              </p>
            </RevealSection>
            
            <RevealSection delay={300}>
              <p className="text-xl md:text-2xl text-gray-200/90 mb-12 max-w-xl leading-relaxed font-light">
                Mein Name ist Tim König — Maurer- und Betonbauermeister aus Leipzig. Für Mauerwerk, Sanierung, Fassade und Innenausbau. Kostenlose Erstberatung & Festpreisgarantie.
              </p>
            </RevealSection>
            
            <RevealSection delay={400}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/kontakt" className="btn-primary text-base">
                  <Phone size={18} />
                  Offerte anfragen
                </Link>
                <Link to="/leistungen" className="btn-secondary text-base group">
                  Unsere Leistungen
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </RevealSection>
          </div>
        </div>

        </section>

      {/* ========== TRUST BAR LAYER ========== */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <RevealSection>
          <div className="glass-card bg-white rounded-3xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-6">
            {[
              { icon: ShieldCheck, text: 'Meisterbetrieb', sub: 'HWK Leipzig' },
              { icon: Clock, text: 'Termintreue', sub: 'Pünktlich garantiert' },
              { icon: Sparkles, text: 'Saubere Arbeit', sub: 'Täglich aufgeräumt' },
              { icon: CheckCircle2, text: 'Festpreisgarantie', sub: 'Keine Überraschungen' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-4 flex-1 min-w-[200px]">
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
      <section className="section-padding bg-gray-50 rounded-t-[3rem] -mt-32 pt-40">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionHeading
              eyebrow="Expertise"
              title="Kompetenz in jedem Gewerk"
              description="Von der Grundsteinlegung bis zur fertigen Fassade — wir bieten Ihnen das volle Leistungsspektrum rund um Ihr Bauprojekt."
            />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <RevealSection delay={400}>
            <div className="text-center mt-16">
              <Link to="/leistungen" className="btn-primary gap-3 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                Alle Leistungen ansehen
                <ArrowRight size={18} />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ========== PROBLEM / SOLUTION ========== */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <RevealSection>
                <span className="inline-block text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4">Warum König?</span>
                <h2 className="font-heading text-4xl md:text-5xl font-800 tracking-tight leading-tight mb-6 text-gray-900">
                  Schluss mit Baustellen-Chaos.
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
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: 'Termintreue', desc: 'Wir halten, was wir versprechen. Pünktlich fertig.' },
                { icon: Sparkles, title: 'Saubere Arbeit', desc: 'Eine saubere Baustelle ist für uns selbstverständlich.' },
                { icon: ShieldCheck, title: 'Transparenz', desc: 'Festpreis-Angebot schützt Sie vor bösen Überraschungen.' },
                { icon: CheckCircle2, title: 'Qualität', desc: 'Meisterliche Ausführung nach geltenden DIN-Normen.' }
              ].map((item, i) => (
                <RevealSection key={item.title} delay={i * 150}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:border-gold/20 transition-all duration-500 hover:-translate-y-1">
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

      {/* ========== FAQ ========== */}
      <FaqSection />

      {/* ========== CTA ========== */}
      <section className="relative py-32 overflow-hidden bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <RevealSection>
            <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 gold-gradient"></div>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight text-gray-900 mb-6">
                Bereit für etwas <span className="gold-text-gradient">Großes?</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                Lassen Sie uns über Ihr Bauprojekt in Leipzig sprechen. Die Erstberatung ist komplett kostenlos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/kontakt" className="btn-primary text-base px-10 py-5">
                  <Phone size={20} />
                  Projekt starten
                </Link>
                <a href="tel:01796849863" className="btn-secondary text-base px-10 py-5 !text-gray-900 !border-gray-200 hover:!border-gold hover:!bg-gray-50">
                  0179 684 98 63
                </a>
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
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
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
