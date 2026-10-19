import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const FloatingWhatsApp: React.FC = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    setHasInteracted(true);
    setShowTooltip(false);
    trackEvent('click_whatsapp', { ubicacion: 'boton_flotante' });
  };

  const handleMouseEnter = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end pointer-events-auto">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="relative mb-2.5 bg-white text-[#13262A] px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span>¿Reservamos tu hora?</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Small arrow triangle */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-slate-200 transform rotate-45" />
        </div>
      )}

      {/* Pulsing WhatsApp circular button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={`w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${
          !hasInteracted ? 'animate-whatsapp-pulse' : ''
        }`}
        aria-label="Reservar hora por WhatsApp con Consulta Médica Rimed"
      >
        <MessageCircle className="w-8 h-8 fill-current" aria-hidden="true" />
      </a>
    </div>
  );
};
