export type PlantCategory = 'vegetable' | 'herb' | 'flower' | 'native' | 'fruit';

export type SunRequirement = 'full sun' | 'part sun' | 'part shade' | 'shade';

export type WaterRequirement = 'low' | 'moderate' | 'high';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type PlantIcon =
  | 'broad-beans'
  | 'spinach'
  | 'garlic'
  | 'kale'
  | 'parsley'
  | 'lettuce'
  | 'tomato'
  | 'silverbeet'
  | 'coriander'
  | 'kawakawa';

export interface Plant {
  id: string;
  name: string;
  icon: PlantIcon;
  category: PlantCategory;
  plantingMonths: number[];
  sun: SunRequirement;
  water: WaterRequirement;
  difficulty: Difficulty;
  notes: string;
}

export interface PlantDetailSection {
  id: string;
  title: string;
  body: string;
}

export interface PlantGrowthStage {
  id: string;
  label: string;
  headline: string;
  description: string;
  tip: string;
  visualHint: 'seed' | 'sprout' | 'leafy' | 'flowering' | 'fruiting' | 'harvest' | 'herb' | 'native';
}

export interface PlantDetailResponse extends Plant {
  plantingWindowLabel: string;
  careTips: string[];
  detailSections: PlantDetailSection[];
  growthStages: PlantGrowthStage[];
}

export type NzSeason = 'summer' | 'autumn' | 'winter' | 'spring';

export interface CurrentRecommendationsResponse {
  date: string;
  timezone: string;
  season: NzSeason;
  month: number;
  recommendations: Plant[];
}
