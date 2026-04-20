import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { RevealSection } from '../components/UI'
import { contactDetails } from '../data/contactDetails'
import SEO from '../components/SEO'
import MapSafe from '../components/MapSafe'


const gewerke = ['Maurer- & Betonbau', 'Sanierung & Instandsetzung', 'Innenausbau & Trockenbau', 'Fassaden- & Putzarbeiten', 'Sonstiges']

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', gewerk: '', ortsteil: '', zeitraum: '', nachricht: ''
  })
  const [status, setStatus] = useState('idle') // 'idle', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/maurermeister.koenig@web.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Telefon: formData.phone || 'Nicht angegeben',
          Gewerk: formData.gewerk,
          Ortsteil: formData.ortsteil || 'Nicht angegeben',
          Zeitraum: formData.zeitraum || 'Nicht angegeben',
          Nachricht: formData.nachricht,
          _subject: `Neue Projektanfrage über Website: ${formData.name}`,
          _template: 'box'
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', gewerk: '', ortsteil: '', zeitraum: '', nachricht: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontakt – Bauunternehmen König Leipzig',
    url: 'https://www.bauunternehmen-koenig.com/kontakt',
    mainEntity: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Bauunternehmen König',
      telephone: contactDetails.phoneIntl,
      email: contactDetails.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contactDetails.addressLine1,
        postalCode: '04288',
        addressLocality: 'Leipzig',
        addressRegion: 'Sachsen',
        addressCountry: 'DE',
      },
    },
  }

  return (
    <>
      <SEO
        title="Kontakt – Kostenlose Beratung & Angebot | Bauunternehmen König Leipzig"
        description="Kontaktieren Sie Bauunternehmen König in Leipzig: Telefon 0179 684 98 63, E-Mail oder Formular. Kostenlose Erstberatung & Festpreisangebot innerhalb von 48 Stunden."
        keywords="Bauunternehmen Kontakt Leipzig, Maurer Leipzig anfragen, Bauunternehmen König Telefon, kostenlose Bauberatung Leipzig"
        path="/kontakt"
        jsonLd={contactJsonLd}
      />
      {/* Hero */}
      <section className="relative pt-40 sm:pt-48 md:pt-52 pb-16 sm:pb-20 bg-charcoal overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-4 block">Kostenlose Erstberatung</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6 leading-tight max-w-[12ch] mx-auto sm:max-w-none">
            Ihr Projekt<br className="hidden sm:block" /> <span className="gold-text-gradient">startet hier</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Bauvorhaben in Leipzig geplant? Kontaktieren Sie Maurer- und Betonbauermeister Tim König —
            wir erstellen Ihnen ein kostenloses Festpreisangebot. Rückmeldung garantiert innerhalb von 24–48 Stunden.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <RevealSection>
              <div className="bg-white rounded-2xl overflow-hidden p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-2">Projektanfrage</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Beschreiben Sie uns Ihr Vorhaben. Wir melden uns umgehend bei Ihnen zurück.
                </p>
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

                  <button 
                    type="submit" 
                    disabled={status === 'submitting' || status === 'success'}
                    className={`btn-primary w-full justify-center text-base !py-3 sm:!py-4 transition-all duration-300 ${
                      status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                    } ${status === 'success' ? '!bg-green-600 hover:!bg-green-700 border-green-600' : ''}`}
                  >
                    {status === 'submitting' ? (
                      'Wird gesendet...'
                    ) : status === 'success' ? (
                      <>
                        <CheckCircle2 size={18} />
                        Erfolgreich gesendet
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Anfrage absenden
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm mt-3 text-center">
                      Es gab ein Problem beim Senden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.
                    </p>
                  )}
                </form>
              </div>
            </RevealSection>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <RevealSection delay={200}>
              <div className="space-y-6">
                {/* Direct contact */}
                <div className="bg-white rounded-2xl overflow-hidden p-6 sm:p-8 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-lg mb-6">Direkter Kontakt</h3>
                  <div className="space-y-5">
                    <a href={contactDetails.phoneHref} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Telefon</div>
                        <div className="font-semibold group-hover:text-gold transition-colors">{contactDetails.phoneDisplay}</div>
                      </div>
                    </a>
                    <a href={contactDetails.emailHref} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">E-Mail</div>
                        <div className="font-semibold group-hover:text-gold transition-colors text-sm break-all">{contactDetails.email}</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Standort</div>
                        <div className="font-semibold">{contactDetails.city}, {contactDetails.region}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                        <Clock size={20} className="text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Erreichbarkeit</div>
                        <div className="font-semibold">{contactDetails.openingHoursDisplay}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={contactDetails.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-charcoal rounded-2xl overflow-hidden p-6 sm:p-8 text-center hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <MessageCircle size={32} className="text-green-400 mx-auto mb-4" />
                  <h3 className="font-bold text-white text-lg mb-2">WhatsApp</h3>
                  <p className="text-gray-400 text-sm">Der kurze Dienstweg — schreiben Sie uns direkt per WhatsApp.</p>
                </a>

                {/* Promise */}
                <div className="bg-gold/10 rounded-2xl overflow-hidden p-6 sm:p-8 border border-gold/20 text-center">
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
      <section className="h-[400px] md:h-[500px] bg-gray-200 relative">
        <MapSafe />
      </section>
    </>
  )
}

