import type { NzSeason } from '../types/plant.js';

export const NZ_TIME_ZONE = 'Pacific/Auckland';

export function getNzDate(now: Date = new Date()): Date {
  const nzDateTime = now.toLocaleString('en-NZ', { timeZone: NZ_TIME_ZONE });
  return new Date(nzDateTime);
}

export function getNzSeason(month: number): NzSeason {
  if ([12, 1, 2].includes(month)) return 'summer';
  if ([3, 4, 5].includes(month)) return 'autumn';
  if ([6, 7, 8].includes(month)) return 'winter';
  return 'spring';
}

export function toNzDateString(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: NZ_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}

export function getNzMonth(date: Date): number {
  return Number(
    new Intl.DateTimeFormat('en-NZ', {
      timeZone: NZ_TIME_ZONE,
      month: 'numeric'
    }).format(date)
  );
}
