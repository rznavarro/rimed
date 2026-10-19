import React, { useState } from 'react';
import { MessageCircle, CheckCircle, Calendar, MapPin, Send, User, PhoneCall, ChevronDown } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    specialty: 'Tratamiento de la obesidad',
    honeypot: '', // invisible honeypot against bots
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.whatsapp.trim()) {
      return;
    }

    trackEvent('submit_form', {
      especialidad: formData.specialty,
    });

    const prefilledMessage = `Hola, soy ${formData.name.trim()}. Quiero una hora de ${formData.specialty}. Mi número es ${formData.whatsapp.trim()}.`;
    const targetUrl = getWhatsAppUrl(prefilledMessage);

    setFormSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="como-reservar"
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="booking-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Atención Rápida y Directa
          </span>
          <h2
            id="booking-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight mb-4"
          >
            Pedir tu hora es simple
          </h2>
          <p className="text-base sm:text-lg text-[#5B7175]">
            Sin filas ni trámites complicados. Te respondemos rápidamente para coordinar el horario más cómodo para ti.
          </p>
        </div>

        {/* 3 Step Sequence with Connecting Line */}
        <div className="relative mb-16 max-w-5xl mx-auto">
          {/* Desktop connecting line */}
          <div
            className="hidden md:block absolute top-12 left-16 right-16 h-1 bg-gradient-to-r from-[#0E6B73] via-[#25D366] to-[#0E6B73] -z-0 rounded-full opacity-30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Step 1 */}
            <div className="bg-[#F7FAFA] rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm relative group hover:border-[#0E6B73]/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#0E6B73] text-white flex items-center justify-center mx-auto mb-5 text-2xl font-black shadow-md group-hover:scale-105 transition-transform font-heading">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#13262A] mb-2">
                Escríbenos por WhatsApp
              </h3>
              <p className="text-sm text-[#5B7175] leading-relaxed">
                Cuéntanos qué especialidad necesitas y si prefieres mañana o tarde.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#F7FAFA] rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm relative group hover:border-[#0E6B73]/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mx-auto mb-5 text-2xl font-black shadow-md group-hover:scale-105 transition-transform font-heading">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#13262A] mb-2">
                Te confirmamos día y hora
              </h3>
              <p className="text-sm text-[#5B7175] leading-relaxed">
                Te respondemos para dejar tu cita agendada de forma clara y oportuna.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#F7FAFA] rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm relative group hover:border-[#0E6B73]/40 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-[#0A3F44] text-white flex items-center justify-center mx-auto mb-5 text-2xl font-black shadow-md group-hover:scale-105 transition-transform font-heading">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#13262A] mb-2">
                Te atendemos en Moneda 856, of. 301
              </h3>
              <p className="text-sm text-[#5B7175] leading-relaxed">
                En pleno Santiago Centro, con fácil acceso y la calidez de siempre.
              </p>
            </div>
          </div>

          {/* Primary WhatsApp Button for Steps */}
          <div className="text-center mt-10">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('click_whatsapp', { ubicacion: 'pasos_reserva' })}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
            >
              <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
              <span>Reservar hora por WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Alternative 3-Field Fast Booking Form */}
        <div className="max-w-2xl mx-auto mt-16 bg-gradient-to-b from-[#EBF5F6]/60 to-white rounded-3xl p-6 sm:p-10 border border-[#0E6B73]/20 shadow-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#13262A] mb-2">
              ¿Prefieres dejarnos tus datos?
            </h3>
            <p className="text-sm text-[#5B7175]">
              Completa estos 3 datos y abriremos tu WhatsApp con la reserva ya redactada.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Honeypot field (hidden from screen and screen readers) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website-url">No llenar si eres humano</label>
              <input
                id="website-url"
                type="text"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Field 1: Name */}
            <div>
              <label
                htmlFor="patient-name"
                className="block text-sm font-semibold text-[#13262A] mb-1.5"
              >
                Nombre completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  id="patient-name"
                  required
                  placeholder="Ej: Camila Soto"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-[#13262A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6B73] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Field 2: WhatsApp Number */}
            <div>
              <label
                htmlFor="patient-whatsapp"
                className="block text-sm font-semibold text-[#13262A] mb-1.5"
              >
                WhatsApp (+56 9 ...)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <input
                  type="tel"
                  id="patient-whatsapp"
                  required
                  placeholder="+56 9 1234 5678"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-[#13262A] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6B73] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Field 3: Specialty Select */}
            <div>
              <label
                htmlFor="patient-specialty"
                className="block text-sm font-semibold text-[#13262A] mb-1.5"
              >
                Especialidad
              </label>
              <div className="relative">
                <select
                  id="patient-specialty"
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-slate-300 rounded-xl text-[#13262A] text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#0E6B73] focus:border-transparent transition-all"
                >
                  <option value="Tratamiento de la obesidad y control de peso">
                    Tratamiento de la obesidad y control de peso
                  </option>
                  <option value="Medicina general">Medicina general</option>
                  <option value="Psiquiatría">Psiquiatría</option>
                  <option value="Psicología">Psicología</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0E6B73] hover:bg-[#0A3F44] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-[#0E6B73]/30"
              >
                <Send className="w-4 h-4" />
                <span>Quiero mi hora</span>
              </button>
            </div>

            <p className="text-center text-xs text-[#5B7175] pt-1">
              Te contactamos para confirmar tu cita.
            </p>
          </form>

          {formSubmitted && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-800 text-xs">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Abriendo WhatsApp con tus datos para confirmar tu cita...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
