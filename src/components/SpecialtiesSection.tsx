import React from 'react';
import { MessageCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const SpecialtiesSection: React.FC = () => {
  return (
    <section
      id="especialidades"
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="specialties-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Especialidades Médicas
          </span>
          <h2
            id="specialties-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight mb-4"
          >
            Especialidades en Rimed, Santiago Centro
          </h2>
          <p className="text-base sm:text-lg text-[#5B7175]">
            Cuatro áreas complementarias bajo un mismo techo para cuidar tu salud física y bienestar emocional de manera integral.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12">
          {SITE_CONFIG.specialties.map((specialty) => (
            <article
              key={specialty.id}
              className="group bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0E6B73]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image container with 1.05 scale hover */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={specialty.imageUrl}
                    alt={specialty.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-[#0A3F44] shadow-sm">
                      Santiago Centro
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#13262A] mb-3 group-hover:text-[#0E6B73] transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-[#5B7175] text-base leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-4">
                <a
                  href={getWhatsAppUrl(specialty.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('click_whatsapp', {
                      ubicacion: `especialidad_${specialty.id}`,
                    })
                  }
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-[#EBF5F6] hover:bg-[#0E6B73] text-[#0E6B73] hover:text-white font-bold rounded-xl transition-all duration-200 group-hover:shadow-sm active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 fill-current text-[#25D366] group-hover:text-white" />
                    <span>Pedir hora</span>
                  </div>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Mental Health Emergency Notice */}
        <div className="max-w-3xl mx-auto mb-14 p-4 sm:p-5 bg-rose-50/80 border border-rose-200 rounded-2xl flex items-start gap-3.5 text-rose-900 text-sm leading-relaxed">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <strong className="font-semibold">Aviso de seguridad:</strong> {SITE_CONFIG.mentalHealthEmergencyNotice}
          </p>
        </div>

        {/* Repeat WhatsApp CTA at end of section */}
        <div className="text-center pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_especialidades_final' })}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-8 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Reservar hora por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
