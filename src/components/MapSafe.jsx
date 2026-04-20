import { useState } from 'react'
import { MapPin, ShieldCheck, Lock } from 'lucide-react'

export default function MapSafe() {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoadMap = () => {
    setIsLoaded(true)
  }

  if (isLoaded) {
    return (
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
    )
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gray-100 group">
      {/* Dynamic Placeholder Image (Visual representation of a map) */}
      <img
        src="/images/map-placeholder.png"
        alt="Map Placeholder"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-60 group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 max-w-lg w-full mx-4 glass-card p-8 rounded-3xl text-center border-white/40 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold/20">
          <Lock size={32} className="text-black" />
        </div>
        
        <h3 className="text-xl font-bold text-black mb-3">Google Maps aktivieren?</h3>
        
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Um Ihre Privatsphäre zu schützen, haben wir das Laden von Google Maps unterbunden. 
          Beim Aktivieren der Karte werden Ihre IP-Adresse und weitere Daten an Google übertragen. 
          Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-gold font-medium hover:underline">Datenschutzerklärung</a>.
        </p>
        
        <button
          onClick={handleLoadMap}
          className="btn-primary w-full group/btn"
        >
          <MapPin size={18} className="group-hover/btn:translate-y-[-2px] transition-transform" />
          Karte jetzt laden
        </button>
        
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
          <ShieldCheck size={12} className="text-green-500" />
          DSGVO-konforme Einbindung
        </div>
      </div>
    </div>
  )
}
