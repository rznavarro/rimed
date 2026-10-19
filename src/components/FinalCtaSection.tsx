import React from 'react';
import { MessageCircle, Phone, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const FinalCtaSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0E6B73] via-[#0A3F44] to-[#0A3F44] text-white py-20 sm:py-28"
      aria-label="Llamado a la acción final"
    >
      {/* Decorative blurred animated blobs */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#25D366]/20 blur-3xl pointer-events-none animate-float-1"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#F2A541]/15 blur-3xl pointer-events-none animate-float-2"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EBF5F6] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full inline-block mb-6 border border-white/15">
          Atención en Santiago Centro
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-3xl mx-auto font-heading">
          Tu salud no puede seguir esperando
        </h2>

        <p className="text-lg sm:text-xl text-[#EBF5F6]/95 leading-relaxed font-normal mb-10 max-w-2xl mx-auto">
          Escríbenos hoy y agenda tu hora en Rimed, Santiago Centro.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'cta_final' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" aria-hidden="true" />
            <span>Reservar hora por WhatsApp</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
            onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'cta_final' })}
            className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white text-base font-semibold group focus:outline-none focus:ring-2 focus:ring-white/40 rounded-xl px-4 py-3 transition-colors"
          >
            <Phone className="w-5 h-5 text-[#F2A541] group-hover:scale-110 transition-transform" aria-hidden="true" />
            <span>
              o llama al <span className="underline decoration-[#F2A541] underline-offset-4 font-bold">{SITE_CONFIG.phoneLandline}</span>
            </span>
          </a>
        </div>

        {/* Quick summary badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 border-t border-white/15 text-xs sm:text-sm text-[#EBF5F6]/80">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F2A541]" />
            Moneda 856, of. 301, Santiago Centro
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#25D366]" />
            Horario continuo mañanas y tardes
          </span>
        </div>
      </div>
    </section>
  );
};
