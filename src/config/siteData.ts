/**
 * Configuration and source-of-truth data for Consulta Médica Rimed.
 * All phone numbers, hours, copy, and clean data are centralized here.
 */

export interface SpecialtyItem {
  id: string;
  title: string;
  description: string;
  whatsappMessage: string;
  imageUrl: string;
  imageAlt: string;
  badge?: string;
}

export interface DoctorItem {
  name: string;
  role: string;
  description: string;
  certification?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONFIG = {
  name: 'Consulta Médica Rimed',
  shortName: 'Rimed',
  slogan: 'Baja de peso con control médico y cuida tu salud mental, en Santiago Centro',
  sinceYear: 2010,
  yearsOfService: '+15',
  
  // Addresses and location
  address: 'Moneda 856, oficina 301, Santiago Centro, Región Metropolitana',
  postalCode: '8320000',
  coordinates: {
    lat: -33.44177,
    lng: -70.65080,
  },
  googleMapsUrl: 'https://maps.google.com/?q=Moneda+856+oficina+301+Santiago+Centro+Chile',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.2891114251765!2d-70.65337492348574!3d-33.44177000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a14d567ad1%3A0x6b63dc4e9fa2d6e3!2sMoneda%20856%2C%20Oficina%20301%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1710000000000!5m2!1ses!2scl',

  // Contact
  phoneLandline: '+56 2 2632 2824',
  phoneLandlineRaw: '+56226322824',
  phoneMobile: '+56 9 3300 7312',
  phoneMobileRaw: '+56933007312',
  whatsappNumber: '56933007312',
  defaultWhatsappText: 'Hola, quiero reservar una hora en Rimed',

  // Media URLs
  logoUrl: 'https://www.consultamedicarimed.cl/images/template/logo.png',
  heroImageUrl: 'https://www.consultamedicarimed.cl/pictures/pages/1/rimed.jpg',
  youtubeVideoId: 'P7yRrVCoH34',
  youtubeVideoUrl: 'https://www.youtube.com/watch?v=P7yRrVCoH34',

  // Social Links
  social: {
    facebook: 'https://www.facebook.com/consultarimed/',
    instagram: 'https://www.instagram.com/consultarimed/',
    youtube: 'https://www.youtube.com/channel/UC6CXexRMT5V2HIQMMkqeoFg',
  },

  // Trust Badges
  trustBadges: [
    { text: '+15 años atendiendo en Santiago', icon: 'award' },
    { text: 'Director médico con +30 años de experiencia', icon: 'shield-check' },
    { text: 'Certificación en obesidad SOCHOB', icon: 'check-circle-2' },
  ],

  // Specialties
  specialties: [
    {
      id: 'obesidad',
      title: 'Tratamiento de la obesidad y control de peso',
      description:
        'Buscamos la causa de tu sobrepeso —ansiedad, hormonas, alimentación o sedentarismo— y armamos un plan médico para bajar de peso sin pasar hambre y sin efecto rebote, con controles periódicos.',
      whatsappMessage: 'Hola, quiero una hora para el tratamiento de obesidad.',
      imageUrl: 'https://www.consultamedicarimed.cl/pictures/pages/2/tratamiento-contra-la-obesisdad.jpg',
      imageAlt: 'Consulta médica para tratamiento de la obesidad y control de peso en Rimed, Santiago Centro',
    },
    {
      id: 'medicina-general',
      title: 'Medicina general',
      description:
        'Tu primer paso en salud: chequeos, evaluación de síntomas y detección de factores de riesgo. Atendemos desde niños hasta adultos mayores y, si hace falta, te derivamos al especialista correcto.',
      whatsappMessage: 'Hola, quiero una hora de medicina general.',
      imageUrl: 'https://www.consultamedicarimed.cl/pictures/pages/3/medicina-general.jpg',
      imageAlt: 'Atención de medicina general en Santiago Centro',
    },
    {
      id: 'psiquiatria',
      title: 'Psiquiatría',
      description:
        'Evaluación, diagnóstico y tratamiento de salud mental: trastornos del ánimo y depresión, ansiedad y adicciones (alcohol, drogas, tabaco). Tratamiento con medicamentos y/o psicoterapia, según lo que necesites.',
      whatsappMessage: 'Hola, quiero una hora de psiquiatría.',
      imageUrl: 'https://www.consultamedicarimed.cl/pictures/pages/4/consulta-de-psiquiatria.jpg',
      imageAlt: 'Consulta de psiquiatría y salud mental en Rimed',
    },
    {
      id: 'psicologia',
      title: 'Psicología',
      description:
        'Psicodiagnóstico y terapia para niños, adolescentes y adultos, y terapia de pareja. Te ayudamos a entender lo que te pasa y a trabajar en ello.',
      whatsappMessage: 'Hola, quiero una hora de psicología.',
      imageUrl: 'https://www.consultamedicarimed.cl/pictures/pages/8/consulta-de-psicologia.jpg',
      imageAlt: 'Consulta de psicología clínica y terapia de pareja en Santiago Centro',
    },
  ] as SpecialtyItem[],

  mentalHealthEmergencyNotice:
    'Si estás en una emergencia o crisis, llama al 131 (SAMU) o a la línea *4141, o acude al servicio de urgencia más cercano.',

  // Problem triggers ("¿Te identificas?")
  problemItems: [
    {
      id: '1',
      title: 'Has probado dietas y el peso siempre vuelve.',
      subtitle: 'Enfoque médico integral que trata las causas de fondo, no solo la comida.',
      icon: 'scale',
    },
    {
      id: '2',
      title: 'Andas con ánimo bajo, ansiedad o te cuesta dormir.',
      subtitle: 'Acompañamiento profesional en psiquiatría y psicología clínica.',
      icon: 'brain',
    },
    {
      id: '3',
      title: 'Necesitas un chequeo y no sabes por dónde partir.',
      subtitle: 'Medicina general con diagnóstico cercano, claro y resolutivo.',
      icon: 'stethoscope',
    },
    {
      id: '4',
      title: 'Tu hijo, tu pareja o tú necesitan apoyo psicológico.',
      subtitle: 'Espacio seguro y confidencial para niños, adolescentes, adultos y parejas.',
      icon: 'users',
    },
  ],

  // Team
  doctors: [
    {
      name: 'Dr. César Martínez Narváez',
      role: 'Director Médico',
      description:
        'Más de tres décadas de experiencia en medicina, especializado en control de peso y tratamiento de la obesidad.',
      certification:
        'Certificado de aprobación de educación continua en obesidad otorgado por la Sociedad Chilena de Obesidad (SOCHOB).',
    },
    {
      name: 'Dr. Carlos Paz y Miño',
      role: 'Médico del Equipo',
      description:
        'Médico del equipo Rimed, con amplia experiencia en tratamiento integral de la obesidad y seguimiento clínico.',
    },
  ] as DoctorItem[],

  // Booking steps
  bookingSteps: [
    {
      step: '1',
      title: 'Escríbenos por WhatsApp',
      desc: 'Cuéntanos qué especialidad necesitas y si prefieres mañana o tarde.',
    },
    {
      step: '2',
      title: 'Te confirmamos día y hora',
      desc: 'Te respondemos a la brevedad para dejar tu cita agendada.',
    },
    {
      step: '3',
      title: 'Te atendemos en Moneda 856, of. 301',
      desc: 'En pleno centro de Santiago, a pasos del Metro y locomoción.',
    },
  ],

  // FAQs
  faqs: [
    {
      question: '¿Dónde queda Rimed?',
      answer: 'En Moneda 856, oficina 301, Santiago Centro, Región Metropolitana.',
    },
    {
      question: '¿Cuál es el horario de atención?',
      answer:
        'Lunes a miércoles de 11:00 a 14:30 y de 17:00 a 19:00. Jueves y viernes de 11:00 a 14:30. Sábado y domingo cerrado.',
    },
    {
      question: '¿Cómo reservo una hora?',
      answer:
        'Escríbenos al WhatsApp +56 9 3300 7312 o llama al +56 2 2632 2824. Te confirmamos día y hora.',
    },
    {
      question: '¿Atienden a niños y adolescentes?',
      answer:
        'Sí. Medicina general atiende desde niños hasta adultos mayores, y en psicología tenemos apoyo para niños, adolescentes, adultos y terapia de pareja.',
    },
    {
      question: '¿Cuánto cuesta la consulta y atienden Fonasa o Isapre?',
      answer:
        'Escríbenos directamente por WhatsApp y te informamos el valor según la especialidad, además de los datos para emisión de boleta médica para tu reembolso.',
    },
  ] as FaqItem[],

  // Schedule table data
  scheduleDays: [
    {
      days: 'Lunes a Miércoles',
      dayIndices: [1, 2, 3], // 1=Mon, 2=Tue, 3=Wed
      hours: '11:00 – 14:30 y 17:00 – 19:00',
      shifts: [
        { start: '11:00', end: '14:30' },
        { start: '17:00', end: '19:00' },
      ],
    },
    {
      days: 'Jueves y Viernes',
      dayIndices: [4, 5], // 4=Thu, 5=Fri
      hours: '11:00 – 14:30',
      shifts: [{ start: '11:00', end: '14:30' }],
    },
    {
      days: 'Sábado y Domingo',
      dayIndices: [6, 0], // 6=Sat, 0=Sun
      hours: 'Cerrado',
      shifts: [],
    },
  ],
};

/**
 * Builds a direct WhatsApp URL with custom text
 */
export function getWhatsAppUrl(text: string = SITE_CONFIG.defaultWhatsappText): string {
  const encoded = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${SITE_CONFIG.whatsappNumber}&text=${encoded}`;
}

/**
 * DataLayer tracking helper for Google Analytics 4
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  try {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });
      if (process.env.NODE_ENV !== 'production') {
        console.log(`[Analytics Event] ${eventName}:`, params);
      }
    }
  } catch (e) {
    // Silent fail
  }
}
