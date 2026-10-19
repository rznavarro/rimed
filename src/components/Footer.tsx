import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#13262A] text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Logo & Business description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block bg-white/95 p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E6B73]">
              <img
                src={SITE_CONFIG.logoUrl}
                alt="Consulta Médica Rimed"
                className="h-10 w-auto object-contain"
                width={160}
                height={40}
                loading="lazy"
              />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Consulta médica privada en Santiago Centro fundada en 2010. Tratamiento integral de la obesidad, medicina general, psiquiatría y psicología clínica.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0E6B73] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
                aria-label="Facebook de Consulta Médica Rimed"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0E6B73] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
                aria-label="Instagram de Consulta Médica Rimed"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-[#0E6B73] text-slate-300 hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
                aria-label="Canal de YouTube de Consulta Médica Rimed"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#especialidades" className="hover:text-[#25D366] transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-[#25D366] transition-colors">
                  Equipo Médico
                </a>
              </li>
              <li>
                <a href="#como-reservar" className="hover:text-[#25D366] transition-colors">
                  Cómo Reservar
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-[#25D366] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-[#25D366] transition-colors">
                  Ubicación y Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ubicación y Horario (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Contacto y Dirección
            </h4>

            <div className="flex items-start gap-2.5 text-sm">
              <MapPin className="w-4 h-4 text-[#0E6B73] flex-shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.address}</span>
            </div>

            <div className="flex items-start gap-2.5 text-sm">
              <Clock className="w-4 h-4 text-[#0E6B73] flex-shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p>Lun a Mié: 11:00–14:30 y 17:00–19:00</p>
                <p>Jue y Vie: 11:00–14:30</p>
                <p className="text-slate-500">Sáb y Dom: Cerrado</p>
              </div>
            </div>
          </div>

          {/* Col 4: Teléfonos Directos (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Reserva Directa
            </h4>

            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'footer' })}
              className="flex items-center gap-2.5 text-sm hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
            >
              <Phone className="w-4 h-4 text-[#0E6B73]" />
              <span>Fijo: {SITE_CONFIG.phoneLandline}</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phoneMobileRaw}`}
              onClick={() => trackEvent('click_llamar', { tipo: 'celular', ubicacion: 'footer' })}
              className="flex items-center gap-2.5 text-sm hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
            >
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>Celular: {SITE_CONFIG.phoneMobile}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'footer' })}
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] px-4 py-2.5 rounded-xl transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp de Consulta</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & legal disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2010–2026 Consulta Médica Rimed. Todos los derechos reservados.</p>
          <p className="text-slate-400 font-medium">
            La información de este sitio no reemplaza una consulta médica.
          </p>
        </div>
      </div>
    </footer>
  );
};
