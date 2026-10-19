import React from 'react';
import { Scale, Brain, Stethoscope, Users2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, trackEvent } from '../config/siteData';

export const ProblemSection: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: 'Has probado dietas y el peso siempre vuelve.',
      icon: Scale,
      tag: 'Control de peso',
      desc: 'Buscamos la causa biológica y emocional de fondo con seguimiento médico continuo.',
    },
    {
      id: 2,
      title: 'Andas con ánimo bajo, ansiedad o te cuesta dormir.',
      icon: Brain,
      tag: 'Salud mental',
      desc: 'Atención respetuosa y diagnósticos certeros en psiquiatría y psicología clínica.',
    },
    {
      id: 3,
      title: 'Necesitas un chequeo y no sabes por dónde partir.',
      icon: Stethoscope,
      tag: 'Medicina general',
      desc: 'Evaluación integral de salud para todas las edades, exámenes y derivaciones oportunas.',
    },
    {
      id: 4,
      title: 'Tu hijo, tu pareja o tú necesitan apoyo psicológico.',
      icon: Users2,
      tag: 'Psicología y terapia',
      desc: 'Terapia individual para niños, adolescentes y adultos, además de terapia de pareja.',
    },
  ];

  return (
    <section
      id="problema"
      className="py-16 sm:py-24 bg-[#F7FAFA] border-b border-slate-200/60"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Atención integral y personalizada
          </span>
          <h2
            id="problem-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight"
          >
            ¿Te pasa alguna de estas cosas?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80 hover:border-[#0E6B73]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EBF5F6] text-[#0E6B73] flex items-center justify-center mb-5 group-hover:bg-[#0E6B73] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-semibold text-[#0E6B73] uppercase tracking-wider block mb-2">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#13262A] leading-snug mb-3">
                    "{card.title}"
                  </h3>
                  <p className="text-sm text-[#5B7175] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre statement and WhatsApp CTA */}
        <div className="bg-gradient-to-br from-[#EBF5F6] to-white rounded-3xl p-8 sm:p-10 border border-[#0E6B73]/20 shadow-sm text-center max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl font-medium text-[#13262A] mb-6 leading-relaxed">
            No tienes que resolverlo solo. En Rimed vemos tu salud física y mental en un mismo lugar.
          </p>

          <a
            href={getWhatsAppUrl('Hola, quiero consultar sobre mi situación de salud en Rimed')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_problema' })}
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
            <span>Cuéntanos qué necesitas por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
