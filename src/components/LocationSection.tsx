import React, { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';
import { getChileClinicStatus, ClinicStatus } from '../utils/scheduleStatus';

export const LocationSection: React.FC = () => {
  const [clinicStatus, setClinicStatus] = useState<ClinicStatus>(() => getChileClinicStatus());

  useEffect(() => {
    // Update schedule status every minute
    const interval = setInterval(() => {
      setClinicStatus(getChileClinicStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="ubicacion"
      className="py-16 sm:py-24 bg-[#F7FAFA] border-y border-slate-200/70"
      aria-labelledby="location-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Ubicación y Horarios
          </span>
          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight mb-4"
          >
            Dónde y cuándo atendemos
          </h2>
          <p className="text-base sm:text-lg text-[#5B7175]">
            En el corazón cívico de Santiago, con excelente conectividad por Metro Moneda y Universidad de Chile.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          {/* Left Column: Address, Live Status, Schedule Table, Action Buttons */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-sm">
            {/* Address */}
            <div className="flex items-start gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5F6] text-[#0E6B73] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#13262A] mb-1">
                  Consulta Médica Rimed
                </h3>
                <p className="text-base text-[#13262A] font-medium">
                  {SITE_CONFIG.address}
                </p>
                <p className="text-xs text-[#5B7175] mt-1">
                  Código postal: {SITE_CONFIG.postalCode} · Región Metropolitana
                </p>
              </div>
            </div>

            {/* Live Chilean Time Status Pill */}
            <div className="mb-7 p-4 rounded-2xl bg-[#F7FAFA] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-3 h-3 rounded-full ${
                    clinicStatus.isOpen
                      ? 'bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.8)] animate-pulse'
                      : 'bg-amber-500'
                  }`}
                  aria-hidden="true"
                />
                <span className="font-bold text-sm text-[#13262A]">
                  {clinicStatus.statusLabel}
                </span>
                <span className="text-xs text-[#5B7175]">
                  ({clinicStatus.chileTimeFormatted})
                </span>
              </div>
              <span className="text-xs text-[#0E6B73] font-semibold">
                {clinicStatus.detailNote}
              </span>
            </div>

            {/* Schedule Table */}
            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#5B7175] mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0E6B73]" />
                <span>Horario de Atención</span>
              </h4>

              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-slate-100">
                    {SITE_CONFIG.scheduleDays.map((item, index) => {
                      const isToday = item.dayIndices.includes(clinicStatus.currentDayIndex);
                      return (
                        <tr
                          key={index}
                          className={`transition-colors ${
                            isToday
                              ? 'bg-[#EBF5F6]/70 font-semibold text-[#0A3F44]'
                              : 'hover:bg-slate-50 text-[#13262A]'
                          }`}
                        >
                          <td className="py-3.5 px-4 font-medium flex items-center gap-2">
                            <span>{item.days}</span>
                            {isToday && (
                              <span className="text-[11px] font-bold bg-[#0E6B73] text-white px-2 py-0.5 rounded-full">
                                Hoy
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            {item.hours}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_como_llegar')}
                className="inline-flex items-center justify-center gap-2 bg-[#0E6B73] hover:bg-[#0A3F44] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar (Maps)</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneLandlineRaw}`}
                onClick={() => trackEvent('click_llamar', { tipo: 'fijo', ubicacion: 'seccion_ubicacion' })}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#13262A] font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-4 h-4 text-[#0E6B73]" />
                <span>Llamar {SITE_CONFIG.phoneLandline}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneMobileRaw}`}
                onClick={() => trackEvent('click_llamar', { tipo: 'celular', ubicacion: 'seccion_ubicacion' })}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-[#13262A] font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>Celular {SITE_CONFIG.phoneMobile}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_ubicacion' })}
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp directo</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Lazy Loaded) */}
          <div className="lg:col-span-6 h-full min-h-[400px] lg:min-h-[480px] bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm relative flex flex-col">
            <iframe
              src={SITE_CONFIG.googleMapsEmbedUrl}
              title="Mapa de ubicación Consulta Médica Rimed Moneda 856 Santiago"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full flex-grow min-h-[380px] rounded-t-3xl"
            />
            <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-[#5B7175]">
              <span>Moneda 856, Of. 301, Santiago Centro (esquina San Antonio)</span>
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_como_llegar')}
                className="text-[#0E6B73] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA repeat */}
        <div className="text-center pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_ubicacion_final' })}
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
