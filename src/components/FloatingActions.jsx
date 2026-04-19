import { Phone, MessageCircle } from 'lucide-react'
import { contactDetails } from '../data/contactDetails'

export default function FloatingActions() {
  return (
    <>
      {/* WhatsApp FAB - Visible on all devices */}
      <a
        href={contactDetails.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 sm:bottom-8 sm:right-8 z-[9999] group flex flex-col items-center gap-2"
        aria-label="WhatsApp Kontakt"
      >
        {/* Tooltip on hover */}
        <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl border border-white/10 uppercase tracking-wider hidden sm:block">
          Was kann ich für Sie tun?
        </span>
        
        {/* Main Button */}
        <div className="relative group">
          {/* Pulse animation rings */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:opacity-0 transition-opacity" />
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-40 group-hover:opacity-0 transition-opacity" />
          
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 border-b-2 border-green-700">
            <MessageCircle size={28} className="sm:hidden" />
            <MessageCircle size={32} className="hidden sm:block" />
          </div>
        </div>
      </a>
    </>
  )
}
