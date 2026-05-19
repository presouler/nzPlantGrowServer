import { plants } from '../data/plants.js';
import { getNzMonth, getNzSeason, NZ_TIME_ZONE, toNzDateString } from './seasonService.js';
import type { CurrentRecommendationsResponse, Plant } from '../types/plant.js';

export function getPlantsForMonth(month: number): Plant[] {
  return plants.filter((plant) => plant.plantingMonths.includes(month));
}

export function getCurrentRecommendations(now: Date = new Date()): CurrentRecommendationsResponse {
  const month = getNzMonth(now);

  return {
    date: toNzDateString(now),
    timezone: NZ_TIME_ZONE,
    season: getNzSeason(month),
    month,
    recommendations: getPlantsForMonth(month)
  };
}
