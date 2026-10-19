import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Cómo reservar', href: '#como-reservar' },
    { label: 'Preguntas', href: '#preguntas' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-[#0E6B73]/10'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#0E6B73] rounded-lg p-1"
            aria-label="Ir al inicio de Consulta Médica Rimed"
          >
            <img
              src={SITE_CONFIG.logoUrl}
              alt="Consulta Médica Rimed"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? 'h-9 w-auto' : 'h-11 w-auto'
              }`}
              width={160}
              height={44}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[#13262A] hover:text-[#0E6B73] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E6B73] rounded px-1.5 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'header' })}
              className="flex items-center gap-2 text-sm font-semibold text-[#0E6B73] hover:text-[#0A3F44] transition-colors px-2 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
              title="Llamar al teléfono fijo de la consulta"
            >
              <Phone className="w-4 h-4 text-[#0E6B73]" aria-hidden="true" />
              <span>{SITE_CONFIG.phoneLandline}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'header' })}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" aria-hidden="true" />
              <span>Reservar por WhatsApp</span>
            </a>
          </div>

          {/* Mobile Action Icons & Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'header_movil' })}
              className="p-2.5 text-[#0E6B73] bg-[#EBF5F6] rounded-xl hover:bg-[#0E6B73]/15 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E6B73]"
              aria-label="Llamar al +56 2 2632 2824"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'header_movil' })}
              className="p-2.5 text-white bg-[#25D366] rounded-xl hover:bg-[#1EBE5D] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              aria-label="Reservar hora por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#13262A] hover:text-[#0E6B73] focus:outline-none focus:ring-2 focus:ring-[#0E6B73] rounded-xl"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white/98 backdrop-blur-md px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3.5 pt-2" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-semibold text-[#13262A] hover:text-[#0E6B73] py-2 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-3 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#5B7175]">
              <MapPin className="w-3.5 h-3.5 text-[#0E6B73]" />
              <span>Moneda 856, of. 301, Santiago Centro</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#5B7175]">
              <Clock className="w-3.5 h-3.5 text-[#0E6B73]" />
              <span>Lun-Mié 11:00-14:30 y 17:00-19:00 | Jue-Vie 11:00-14:30</span>
            </div>

            <a
              href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
              onClick={() => {
                trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'menu_movil' });
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-[#0E6B73]/30 rounded-xl text-sm font-semibold text-[#0E6B73] hover:bg-[#EBF5F6] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Llamar al {SITE_CONFIG.phoneLandline}</span>
            </a>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent('click_whatsapp', { ubicacion: 'menu_movil' });
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reservar hora por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
