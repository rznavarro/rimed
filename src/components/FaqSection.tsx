import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, getWhatsAppUrl, trackEvent } from '../config/siteData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="preguntas"
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0E6B73] bg-[#EBF5F6] px-3.5 py-1.5 rounded-full inline-block mb-3">
            Resolvemos tus dudas
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#13262A] tracking-tight mb-4"
          >
            Preguntas frecuentes
          </h2>
          <p className="text-base sm:text-lg text-[#5B7175]">
            Todo lo que necesitas saber antes de tu primera consulta médica en Rimed.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-14" role="region" aria-label="Lista de preguntas frecuentes">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:border-[#0E6B73]/30"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-5 px-6 sm:px-7 flex items-center justify-between gap-4 bg-white hover:bg-slate-50/80 focus:outline-none focus:ring-2 focus:ring-[#0E6B73] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#13262A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center bg-[#EBF5F6] text-[#0E6B73] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0E6B73] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-[#5B7175] text-base leading-relaxed border-t border-slate-100 bg-[#F7FAFA]/40">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA repeat */}
        <div className="text-center pt-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('click_whatsapp', { ubicacion: 'seccion_faq_final' })}
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
