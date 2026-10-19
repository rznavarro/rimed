import React, { useState, useEffect, useRef } from 'react';
import { Award, ShieldCheck, Play, MessageCircle, Stethoscope } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const SocialProofSection: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animated counters state
  const [yearCount, setYearCount] = useState(1990);
  const [experienceCount, setExperienceCount] = useState(0);
  const [specialtiesCount, setSpecialtiesCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate Year to 2010
          let currentYear = 1990;
          const targetYear = 2010;
          const yearInterval = setInterval(() => {
            currentYear += 1;
            if (currentYear >= targetYear) {
              setYearCount(targetYear);
              clearInterval(yearInterval);
            } else {
              setYearCount(currentYear);
            }
          }, 35);

          // Animate Experience to 30
          let currentExp = 0;
          const targetExp = 30;
          const expInterval = setInterval(() => {
            currentExp += 1;
            if (currentExp >= targetExp) {
              setExperienceCount(targetExp);
              clearInterval(expInterval);
            } else {
              setExperienceCount(currentExp);
            }
          }, 40);

          // Animate Specialties to 4
          let currentSpec = 0;
          const targetSpec = 4;
          const specInterval = setInterval(() => {
            currentSpec += 1;
            if (currentSpec >= targetSpec) {
              setSpecialtiesCount(targetSpec);
              clearInterval(specInterval);
            } else {
              setSpecialtiesCount(currentSpec);
            }
          }, 180);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[#F7FAFA] border-y border-slate-200/70"
      aria-labelledby="social-proof-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Trayectoria y Confianza
          </span>
          <h2
            id="social-proof-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight mb-4"
          >
            Más de 15 años cuidando la salud de Santiago
          </h2>
          <p className="text-base sm:text-lg text-[#5B7175]">
            Un equipo médico comprometido con la excelencia clínica, la cercanía en el trato y tratamientos basados en evidencia científica.
          </p>
        </div>

        {/* Animated Counter Stats Block */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm">
            <span className="text-4xl sm:text-5xl font-black text-[#0E6B73] tracking-tight block mb-2 font-heading">
              {hasAnimated ? yearCount : 2010}
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#13262A] leading-snug">
              abrimos nuestras puertas en Santiago Centro
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm">
            <span className="text-4xl sm:text-5xl font-black text-[#0E6B73] tracking-tight block mb-2 font-heading">
              +{hasAnimated ? experienceCount : 30}
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#13262A] leading-snug">
              años de experiencia de nuestro director médico
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 text-center border border-slate-200/80 shadow-sm">
            <span className="text-4xl sm:text-5xl font-black text-[#0E6B73] tracking-tight block mb-2 font-heading">
              {hasAnimated ? specialtiesCount : 4}
            </span>
            <p className="text-sm sm:text-base font-semibold text-[#13262A] leading-snug">
              especialidades en un mismo lugar
            </p>
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#13262A]">
              Equipo Médico
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SITE_CONFIG.doctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:border-[#0E6B73]/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#EBF5F6] border-2 border-[#0E6B73]/20 flex items-center justify-center flex-shrink-0 text-[#0E6B73]">
                      <Stethoscope className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#13262A]">
                        {doctor.name}
                      </h4>
                      <p className="text-sm font-semibold text-[#0E6B73]">
                        {doctor.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-[#5B7175] text-sm sm:text-base leading-relaxed mb-4">
                    {doctor.description}
                  </p>

                  {doctor.certification && (
                    <div className="p-3.5 bg-[#EBF5F6]/70 border border-[#0E6B73]/20 rounded-2xl flex items-start gap-2.5 text-xs text-[#0A3F44] font-medium leading-relaxed">
                      <Award className="w-4 h-4 text-[#F2A541] flex-shrink-0 mt-0.5" />
                      <span>{doctor.certification}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-[#5B7175]">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0E6B73]" />
                    Atención presencial en Santiago
                  </span>
                  <a
                    href={getWhatsAppUrl(`Hola, me gustaría agendar una hora con el ${doctor.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_whatsapp', { ubicacion: `doctor_${index}` })}
                    className="font-bold text-[#0E6B73] hover:underline"
                  >
                    Consultar hora &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Block: Lite YouTube Embed P7yRrVCoH34 */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#13262A]">
              Conoce Rimed
            </h3>
            <p className="text-sm text-[#5B7175]">
              Recorre nuestra consulta y conoce el compromiso de nuestro equipo médico.
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 group">
            {!videoLoaded ? (
              <button
                type="button"
                onClick={() => {
                  setVideoLoaded(true);
                  trackEvent('click_video_play', { video_id: SITE_CONFIG.youtubeVideoId });
                }}
                className="w-full h-full relative cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#0E6B73] block text-left"
                aria-label="Reproducir video institucional de Consulta Médica Rimed"
              >
                <img
                  src={`https://img.youtube.com/vi/${SITE_CONFIG.youtubeVideoId}/maxresdefault.jpg`}
                  alt="Video institucional Conoce Rimed en Santiago Centro"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-85"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${SITE_CONFIG.youtubeVideoId}/hqdefault.jpg`;
                  }}
                  width={1280}
                  height={720}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#0E6B73] group-hover:bg-[#0A3F44] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-xs sm:text-sm flex items-center justify-between">
                  <span>Conoce Rimed — Consulta Médica Santiago Centro</span>
                  <span className="text-[#F2A541] font-semibold">Ver video institucional</span>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${SITE_CONFIG.youtubeVideoId}?autoplay=1&rel=0`}
                title="Conoce Rimed — Consulta Médica en Santiago Centro"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            )}
          </div>
        </div>

        {/* WhatsApp CTA repeat */}
        <div className="text-center pt-4">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_socialproof_final' })}
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
