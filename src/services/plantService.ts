import { plants } from '../data/plants.js';
import type { Plant, PlantDetailResponse } from '../types/plant.js';

const MONTH_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatPlantingWindow(months: number[]): string {
  const labels = months
    .filter((month) => Number.isInteger(month) && month >= 1 && month <= 12)
    .map((month) => MONTH_LABELS[month - 1]);

  return labels.length > 0 ? labels.join(', ') : 'Check local conditions';
}

function getSunTip(plant: Plant): string {
  switch (plant.sun) {
    case 'full sun':
      return `${plant.name} prefers a bright position with at least 6 hours of direct sun.`;
    case 'part sun':
      return `${plant.name} grows best with morning sun and some protection from harsh afternoon heat.`;
    case 'part shade':
      return `${plant.name} suits a sheltered spot with filtered light or partial shade.`;
    case 'shade':
      return `${plant.name} can grow in a shaded position away from intense direct sun.`;
  }
}

function getWaterTip(plant: Plant): string {
  switch (plant.water) {
    case 'low':
      return 'Water lightly once established, increasing only during long dry spells.';
    case 'moderate':
      return 'Keep soil evenly moist, especially while seedlings establish and during dry weather.';
    case 'high':
      return 'Water frequently so the root zone stays consistently moist but not waterlogged.';
  }
}

function getDifficultyTip(plant: Plant): string {
  switch (plant.difficulty) {
    case 'easy':
      return 'Good choice for beginners and regular home garden maintenance.';
    case 'medium':
      return 'Plan for a little extra attention to timing, position, or harvest rhythm.';
    case 'hard':
      return 'Best for gardeners ready to monitor conditions closely.';
  }
}

function toPlantDetail(plant: Plant): PlantDetailResponse {
  const plantingWindowLabel = formatPlantingWindow(plant.plantingMonths);
  const careTips = [getSunTip(plant), getWaterTip(plant), getDifficultyTip(plant)];

  return {
    ...plant,
    plantingWindowLabel,
    careTips,
    detailSections: [
      {
        id: 'planting-window',
        title: 'Planting window',
        body: `Best months to plant: ${plantingWindowLabel}.`
      },
      {
        id: 'care',
        title: 'Care',
        body: careTips.join(' ')
      },
      {
        id: 'notes',
        title: 'Notes',
        body: plant.notes
      }
    ]
  };
}

export function getPlantById(id: string): PlantDetailResponse | undefined {
  const plant = plants.find((candidate) => candidate.id === id);

  return plant ? toPlantDetail(plant) : undefined;
}
