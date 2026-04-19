import { Link } from 'react-router-dom'
import { Phone, Award, Heart, Shield, Users } from 'lucide-react'
import { RevealSection, SectionHeading } from '../components/UI'
import { contactDetails } from '../data/contactDetails'

const values = [
  { icon: Shield, title: 'Qualität nach DIN', desc: 'Jede Arbeit wird nach den aktuellen DIN-Normen und Höchststandards ausgeführt — keine Abkürzungen.' },
  { icon: Heart, title: 'Leidenschaft', desc: 'Das Handwerk ist unsere Berufung. Diese Leidenschaft spiegelt sich in jedem Stein und jeder Naht wider.' },
  { icon: Users, title: 'Kundennähe', desc: 'Ein fester Ansprechpartner für Ihr gesamtes Projekt — ehrlich, unkompliziert und auf Augenhöhe.' },
  { icon: Award, title: 'Meisterkompetenz', desc: 'Als geprüfter Meisterbetrieb (HWK Leipzig) garantieren wir Ihnen höchste handwerkliche Qualifikation.' },
]

export default function UeberUns() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-52 pb-20 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/tim-portrait.png" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Über uns</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Die Person hinter<br /><span className="gold-text-gradient">der Marke</span>
          </h1>
        </div>
      </section>

      {/* About Tim */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="/images/tim-portrait.png" alt="Tim König — Maurer- und Betonbauermeister" className="w-full h-[500px] object-cover" />
            </div>
          </RevealSection>
          <RevealSection delay={200}>
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Maurer- und Betonbauermeister Leipzig</span>
              <h2 className="text-3xl md:text-4xl font-800 mb-6">
                Bauen, Sanieren und<br />Gestalten mit Leidenschaft
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Herzlich willkommen! Mein Name ist <strong className="text-gray-700">Tim König</strong>. Als{' '}
                  <strong className="text-gray-700">Maurer- und Betonbauermeister</strong> sowie angehender{' '}
                  <strong className="text-gray-700">Geprüfter Betriebswirt (HwO)</strong> stehe ich für handwerkliche Präzision, Zuverlässigkeit und fundiertes Fachwissen. Seit nunmehr <strong className="text-gray-700">drei Jahren</strong> führe ich mit großem Stolz mein eigenes Bauunternehmen, um die Visionen und Wohnträume meiner Kunden Wirklichkeit werden zu lassen.
                </p>
                <p>
                  Mit einem starken Netzwerk und in enger Zusammenarbeit mit hochqualifizierten Partnerfirmen haben wir uns auf <strong className="text-gray-700">umfassende Sanierung</strong> sowie <strong className="text-gray-700">professionelle Fassadenarbeiten</strong> spezialisiert — für optimalen Schutz, verbesserte Energieeffizienz und eine ansprechende Optik Ihres Zuhauses. Alles aus einer Hand.
                </p>
                <p>
                  Unser Credo: <strong className="text-gray-700">Kein Projekt ist uns zu klein</strong>, und jedes Vorhaben verdient unsere allterhöchste Aufmerksamkeit. Eine gute Partnerschaft beginnt mit einer ehrlichen Beratung — deshalb sind Erstberatung und Angebot für Sie immer <strong className="text-gray-700">kostenlos und unverbindlich</strong>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-900 gold-text-gradient">3+</div>
                  <div className="text-sm text-gray-400 mt-1">Jahre Betrieb</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-900 gold-text-gradient">Leipzig</div>
                  <div className="text-sm text-gray-400 mt-1">Standort</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-900 gold-text-gradient">100%</div>
                  <div className="text-sm text-gray-400 mt-1">Meisterqualität</div>
                </div>
              </div>
              <div className="mt-8 p-5 bg-gold/5 border border-gold/20 rounded-2xl space-y-1">
                <p className="text-sm text-gray-700 font-semibold">
                  🏆 Bauunternehmen König — Einzelunternehmen
                </p>
                <p className="text-xs text-gray-500">{contactDetails.addressSingleLine}</p>
                <p className="text-xs text-gray-500">{contactDetails.tradeRegistrationLabel} · IdNr.: {contactDetails.tradeRegistrationId}</p>
                <p className="text-xs text-gray-400 mt-1">Geprüfte Qualifikation · Ausbildungsberechtigung · Haftpflichtversichert</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <RevealSection>
            <SectionHeading
              eyebrow="Unsere Werte"
              title="Worauf wir bauen"
              description="Diese Grundsätze leiten uns bei jedem Projekt — vom ersten Gespräch bis zur Schlüsselübergabe."
            />
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealSection key={v.title} delay={i * 100} className="h-full">
                <div className="text-center p-8 bg-white rounded-2xl border border-gray-100 card-hover h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-5">
                    <v.icon size={24} className="text-black" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-95" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <RevealSection>
            <h2 className="text-3xl md:text-4xl font-800 text-black mb-6">
              Lernen Sie uns kennen
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Vereinbaren Sie einen unverbindlichen Kennenlern-Termin. Wir freuen uns auf Ihr Projekt.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-charcoal transition-all duration-300 hover:-translate-y-1">
              <Phone size={20} />
              Kostenlose Beratung sichern
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  )
}
