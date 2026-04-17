import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { RevealSection, SectionHeading } from '../components/UI'

const gewerke = ['Maurer- & Betonbau', 'Neubau & Sanierung', 'Innenausbau & Trockenbau', 'Fassaden- & Putzarbeiten', 'Sonstiges']

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', gewerk: '', ortsteil: '', zeitraum: '', nachricht: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-charcoal">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Kostenlose Erstberatung</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6">
            Ihr Projekt<br /><span className="gold-text-gradient">startet hier</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Bauvorhaben in Leipzig geplant? Kontaktieren Sie Maurer- und Betonbauermeister Tim König —
            wir erstellen Ihnen ein kostenloses Festpreisangebot. Rückmeldung garantiert innerhalb von 24–48 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <RevealSection>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Projektanfrage</h2>
                <p className="text-gray-500 text-sm mb-8">Beschreiben Sie Ihr Vorhaben und wir erstellen Ihnen ein kostenloses Angebot.</p>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-black" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Vielen Dank!</h3>
                    <p className="text-gray-500">Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24–48 Stunden bei Ihnen.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name *</label>
                        <input
                          type="text" id="name" name="name" required
                          value={formData.name} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                          placeholder="Ihr vollständiger Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">E-Mail *</label>
                        <input
                          type="email" id="email" name="email" required
                          value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                          placeholder="ihre@email.de"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Telefon</label>
                        <input
                          type="tel" id="phone" name="phone"
                          value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                          placeholder="Ihre Telefonnummer"
                        />
                      </div>
                      <div>
                        <label htmlFor="gewerk" className="block text-sm font-medium text-gray-700 mb-1.5">Gewerk *</label>
                        <select
                          id="gewerk" name="gewerk" required
                          value={formData.gewerk} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm appearance-none bg-white cursor-pointer"
                        >
                          <option value="">Bitte wählen...</option>
                          {gewerke.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="ortsteil" className="block text-sm font-medium text-gray-700 mb-1.5">Ortsteil in Leipzig</label>
                        <input
                          type="text" id="ortsteil" name="ortsteil"
                          value={formData.ortsteil} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                          placeholder="z.B. Gohlis, Südvorstadt..."
                        />
                      </div>
                      <div>
                        <label htmlFor="zeitraum" className="block text-sm font-medium text-gray-700 mb-1.5">Gewünschter Zeitraum</label>
                        <input
                          type="text" id="zeitraum" name="zeitraum"
                          value={formData.zeitraum} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm"
                          placeholder="z.B. Ab Mai 2026"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-1.5">Ihre Nachricht *</label>
                      <textarea
                        id="nachricht" name="nachricht" required rows={5}
                        value={formData.nachricht} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm resize-none"
                        placeholder="Beschreiben Sie Ihr Vorhaben..."
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full justify-center text-base !py-4">
                      <Send size={18} />
                      Anfrage absenden
                    </button>
                  </form>
                )}
              </div>
            </RevealSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <RevealSection delay={200}>
              <div className="space-y-6">
                {/* Direct contact */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-6">Direkter Kontakt</h3>
                  <div className="space-y-5">
                    <a href="tel:01796849863" className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Telefon</div>
                        <div className="font-semibold group-hover:text-gold transition-colors">0179 684 98 63</div>
                      </div>
                    </a>
                    <a href="mailto:maurermeister.koenig@web.de" className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">E-Mail</div>
                        <div className="font-semibold group-hover:text-gold transition-colors text-sm">maurermeister.koenig@web.de</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Standort</div>
                        <div className="font-semibold">Leipzig, Sachsen</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Erreichbarkeit</div>
                        <div className="font-semibold">Mo–Fr: 07:00 – 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/4901796849863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-charcoal rounded-2xl p-8 text-center hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <MessageCircle size={32} className="text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white text-lg mb-2">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">Der kurze Dienstweg — schreiben Sie uns direkt per WhatsApp.</p>
                </a>

                {/* Promise */}
                <div className="bg-gold/10 rounded-2xl p-8 border border-gold/20 text-center">
                  <CheckCircle2 size={28} className="text-gold mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Unser Versprechen</h3>
                  <p className="text-gray-500 text-sm">Wir melden uns garantiert innerhalb von <strong>24–48 Stunden</strong> bei Ihnen.</p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 md:h-96 bg-gray-200 relative">
        <iframe
          title="Bauunternehmen König — Standort Leipzig"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438797045!2d12.237358326037966!3d51.34010055893394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f818200f2c73%3A0x93fb48b39b4a4f7!2sLeipzig!5e0!3m2!1sde!2sde!4v1680000000000!5m2!1sde!2sde"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </>
  )
}
