import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronUp, X } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const MobileBottomBar: React.FC = () => {
  const [showCallOptions, setShowCallOptions] = useState(false);

  return (
    <>
      {/* Optional popup sheet when tapping Call to choose Fijo vs Celular */}
      {showCallOptions && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:hidden animate-in fade-in duration-200"
          onClick={() => setShowCallOptions(false)}
        >
          <div
            className="w-full bg-white rounded-t-3xl p-6 shadow-2xl border-t border-slate-200 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-base font-bold text-[#13262A]">
                ¿A qué número deseas llamar?
              </h4>
              <button
                type="button"
                onClick={() => setShowCallOptions(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
                aria-label="Cerrar opciones de llamada"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => {
                trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'barra_movil_modal' });
                setShowCallOptions(false);
              }}
              className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-[#EBF5F6] rounded-2xl border border-slate-200 text-[#13262A] font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E6B73]/10 text-[#0E6B73] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Teléfono Fijo</div>
                  <div className="text-xs text-[#5B7175]">{SITE_CONFIG.phoneLandline}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#0E6B73]">Llamar &rarr;</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneMobileRaw}`}
              onClick={() => {
                trackEvent('click_llamar', { tipo: 'celular', ubicacion: 'barra_movil_modal' });
                setShowCallOptions(false);
              }}
              className="flex items-center justify-between p-3.5 bg-slate-50 hover:bg-[#EBF5F6] rounded-2xl border border-slate-200 text-[#13262A] font-semibold text-sm transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Celular / Móvil</div>
                  <div className="text-xs text-[#5B7175]">{SITE_CONFIG.phoneMobile}</div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#25D366]">Llamar &rarr;</span>
            </a>
          </div>
        </div>
      )}

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Call button (min height 48px) */}
          <button
            type="button"
            onClick={() => setShowCallOptions(true)}
            className="flex items-center justify-center gap-2 h-12 rounded-xl bg-white border border-[#0E6B73]/30 text-[#0E6B73] font-bold text-sm shadow-xs hover:bg-[#EBF5F6] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
            aria-label="Llamar a la consulta"
          >
            <Phone className="w-4 h-4" />
            <span>Llamar</span>
            <ChevronUp className="w-3.5 h-3.5 text-slate-400 -mr-1" />
          </button>

          {/* WhatsApp button (min height 48px) */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'barra_movil' })}
            className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Reservar hora por WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
