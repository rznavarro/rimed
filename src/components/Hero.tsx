import React from 'react';
import { MessageCircle, Phone, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0A3F44] text-white min-h-[580px] lg:min-h-[660px] flex items-center"
      aria-label="Presentación de Consulta Médica Rimed"
    >
      {/* Background Image with Ken Burns / Slow Zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={SITE_CONFIG.heroImageUrl}
          alt="Instalaciones de Consulta Médica Rimed en Santiago Centro"
          className="w-full h-full object-cover object-center animate-slow-zoom opacity-35 filter brightness-90 contrast-105"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
        />

        {/* Deep brand gradient overlays for clinical clarity & high contrast AA */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A3F44]/95 via-[#0E6B73]/90 to-[#0A3F44]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A3F44] via-transparent to-transparent opacity-80" />

        {/* Moving organic blurred light blobs for depth */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#0E6B73]/40 blur-3xl pointer-events-none animate-float-1"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F2A541]/20 blur-3xl pointer-events-none animate-float-2"
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Pre-title */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Consulta médica en Santiago Centro · desde 2010</span>
          </div>

          {/* Unique H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            Baja de peso con control médico y cuida tu salud mental, en Santiago Centro
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#EBF5F6]/95 leading-relaxed font-normal mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-900">
            Medicina general, tratamiento de la obesidad, psiquiatría y psicología en un solo lugar. Te atendemos en <strong className="font-semibold text-white">Moneda 856, of. 301</strong>.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-10 animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'hero' })}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-2xl shadow-lg shadow-black/25 hover:shadow-xl transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 text-center"
            >
              <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" aria-hidden="true" />
              <span>Reservar hora por WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'hero' })}
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-white/90 hover:text-white text-base font-semibold group focus:outline-none focus:ring-2 focus:ring-white/40 rounded-xl px-3 py-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F2A541] group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>
                o llámanos al <span className="underline decoration-[#F2A541] underline-offset-4 font-bold">{SITE_CONFIG.phoneLandline}</span>
              </span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3.5 py-2.5 border border-white/10">
              <Award className="w-5 h-5 text-[#F2A541] flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                +15 años atendiendo en Santiago
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3.5 py-2.5 border border-white/10">
              <ShieldCheck className="w-5 h-5 text-[#25D366] flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                Director médico con +30 años de experiencia
              </span>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-3.5 py-2.5 border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-[#F2A541] flex-shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight">
                Certificación en obesidad SOCHOB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
