import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { RevealSection, SectionHeading } from './UI'

export function TrustBar({ signals, iconMap }) {
  if (!signals || signals.length === 0) return null

  return (
    <section className="bg-white border-b border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-between items-center gap-6 md:gap-4">
          {signals.map((signal, i) => {
            const Icon = iconMap ? iconMap[signal.icon] : signal.icon
            return (
              <div key={i} className="flex items-center gap-3 w-full sm:w-auto">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  {Icon && <Icon size={20} className="text-gold" />}
                  {!Icon && <span className="text-xl">{signal.emoji}</span>}
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{signal.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ServiceGrid({ details, iconMap }) {
  if (!details || details.length === 0) return null
  
  return (
    <section className="section-padding bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <RevealSection>
          <SectionHeading
            eyebrow="Unsere Leistungen"
            title="Die passenden Lösungen für Ihr Projekt"
            description="Alle Kernkompetenzen im Überblick. Profitieren Sie von unserer Erfahrung und modernen Bautechniken."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {details.map((item, i) => {
            const IconComponent = iconMap[item.icon]
            return (
              <RevealSection key={item.title} delay={i * 100}>
                <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-colors">
                    {IconComponent && <IconComponent size={24} className="text-gold group-hover:text-black transition-colors" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </RevealSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProcessSteps({ processData, iconMap }) {
  if (!processData || processData.length === 0) return null

  return (
    <section className="section-padding bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <RevealSection>
          <SectionHeading
            eyebrow="Zusammenarbeit"
            title="So arbeiten wir"
            description="Klar definiert, transparent und professionell. Ihr Projekt in sicheren Händen."
          />
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mt-16">
          {processData.map((step, i) => {
            const IconComp = iconMap[step.icon]
            const isLast = i === processData.length - 1
            return (
              <RevealSection key={step.title} delay={i * 100}>
                <div className="relative text-center group h-full">
                  {!isLast && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-100 -z-10 group-hover:bg-gold/30 transition-colors"></div>
                  )}
                  
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white border-4 border-gray-50 rounded-full text-2xl font-bold text-black mb-6 shadow-sm group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                    {IconComp && <IconComp size={32} strokeWidth={1.5} className="text-gold" />}
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
  )
}

export function ReferenceSection({ testimonial }) {
  if (!testimonial) return null

  return (
    <section id="referenzen" className="section-padding bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <RevealSection>
          <SectionHeading
            eyebrow="Social Proof"
            title="Unsere Referenzen"
            description="Ergebnisse, die für sich sprechen."
          />
        </RevealSection>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Placeholder */}
          <RevealSection delay={100}>
             <div className="relative rounded-3xl overflow-hidden shadow-xl group aspect-video bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div className="text-center">
                    <span className="text-gray-500 font-bold block mb-2">Vorher / Nachher Slider</span>
                    <span className="text-sm text-gray-400">Placeholder Image</span>
                  </div>
                </div>
                {/* Visual split line for mock purpose */}
                <div className="absolute inset-y-0 left-1/2 w-1 bg-white/50 -translate-x-1/2 cursor-ew-resize hidden sm:block"></div>
                <div className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded backdrop-blur-sm">Vorher</div>
                <div className="absolute bottom-4 right-4 bg-gold/90 text-black text-xs font-bold px-3 py-1 rounded backdrop-blur-sm">Nachher</div>
             </div>
          </RevealSection>

          {/* Testimonial */}
          <RevealSection delay={200}>
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
              <div className="text-gold opacity-20 text-6xl font-serif absolute top-6 left-6 leading-none">"</div>
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed relative z-10 italic mb-8 mt-4">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <div className="flex text-gold text-sm mt-1">
                    ★★★★★
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}

export function FAQAccordionSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null)
  
  if (!faq || faq.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <RevealSection>
            <SectionHeading
              eyebrow="Hilfe & Klarheit"
              title="Ihre Fragen, unsere Antworten"
              description="Wir räumen typische Unklarheiten aus dem Weg, damit Ihr Projekt reibungslos starten kann."
            />
        </RevealSection>

        <div className="mt-12 space-y-4">
          <RevealSection delay={100}>
            {faq.map((item, i) => (
              <div key={i} className={`mb-4 bg-white rounded-xl border transition-colors duration-300 ${openIndex === i ? 'border-gold shadow-md' : 'border-gray-200 hover:border-gray-300'}`}>
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
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
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
