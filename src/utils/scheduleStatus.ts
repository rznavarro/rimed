/**
 * Utilities to compute clinic status in America/Santiago timezone
 */

export interface ClinicStatus {
  isOpen: boolean;
  statusLabel: 'Abierto ahora' | 'Cerrado ahora';
  currentDayIndex: number; // 0=Sun, 1=Mon, ..., 6=Sat
  currentDayName: string;
  chileTimeFormatted: string;
  detailNote: string;
}

export function getChileClinicStatus(): ClinicStatus {
  // Use Intl.DateTimeFormat to reliably get the current time in Chile (America/Santiago)
  const now = new Date();
  
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Santiago',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  let weekdayStr = '';
  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === 'weekday') weekdayStr = part.value.toLowerCase();
    if (part.type === 'hour') hour = parseInt(part.value, 10);
    if (part.type === 'minute') minute = parseInt(part.value, 10);
  }

  // Day indices: 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat
  const dayMap: Record<string, number> = {
    sun: 0,
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
  };

  const dayIndex = dayMap[weekdayStr.slice(0, 3)] ?? now.getDay();
  const timeInMinutes = hour * 60 + minute;

  const dayNamesEs = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const currentDayName = dayNamesEs[dayIndex] || 'Hoy';

  const timeFormatted = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} hrs (hora Chile)`;

  let isOpen = false;
  let detailNote = '';

  // Monday (1), Tuesday (2), Wednesday (3): 11:00-14:30 (660-870) and 17:00-19:00 (1020-1140)
  if (dayIndex >= 1 && dayIndex <= 3) {
    const morningStart = 11 * 60; // 660
    const morningEnd = 14 * 60 + 30; // 870
    const afternoonStart = 17 * 60; // 1020
    const afternoonEnd = 19 * 60; // 1140

    if (timeInMinutes >= morningStart && timeInMinutes < morningEnd) {
      isOpen = true;
      detailNote = 'Atendiendo jornada de mañana hasta las 14:30';
    } else if (timeInMinutes >= afternoonStart && timeInMinutes < afternoonEnd) {
      isOpen = true;
      detailNote = 'Atendiendo jornada de tarde hasta las 19:00';
    } else if (timeInMinutes < morningStart) {
      detailNote = 'Abre hoy a las 11:00';
    } else if (timeInMinutes >= morningEnd && timeInMinutes < afternoonStart) {
      detailNote = 'Reabre hoy a las 17:00 para atención de tarde';
    } else {
      detailNote = dayIndex === 3 ? 'Abre mañana a las 11:00' : 'Abre mañana a las 11:00';
    }
  } 
  // Thursday (4), Friday (5): 11:00-14:30 (660-870)
  else if (dayIndex === 4 || dayIndex === 5) {
    const morningStart = 11 * 60;
    const morningEnd = 14 * 60 + 30;

    if (timeInMinutes >= morningStart && timeInMinutes < morningEnd) {
      isOpen = true;
      detailNote = 'Atendiendo hasta las 14:30';
    } else if (timeInMinutes < morningStart) {
      detailNote = 'Abre hoy a las 11:00';
    } else {
      detailNote = dayIndex === 4 ? 'Abre mañana a las 11:00' : 'Abre el lunes a las 11:00';
    }
  } 
  // Saturday (6), Sunday (0): Closed
  else {
    isOpen = false;
    detailNote = 'Abre el lunes a las 11:00';
  }

  return {
    isOpen,
    statusLabel: isOpen ? 'Abierto ahora' : 'Cerrado ahora',
    currentDayIndex: dayIndex,
    currentDayName,
    chileTimeFormatted: timeFormatted,
    detailNote,
  };
}
