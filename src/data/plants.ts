import type { Plant } from '../types/plant.js';

export const plants: Plant[] = [
  {
    id: 'tomato',
    name: 'Tomato',
    icon: 'tomato',
    category: 'vegetable',
    plantingMonths: [9, 10, 11, 12],
    sun: 'full sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Plant after frost risk has passed. Stake plants and keep watering consistent.'
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    icon: 'lettuce',
    category: 'vegetable',
    plantingMonths: [2, 3, 4, 5, 8, 9, 10, 11],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Best in cooler months; provide afternoon shade in warm regions.'
  },
  {
    id: 'broad-bean',
    name: 'Broad Bean',
    icon: 'broad-beans',
    category: 'vegetable',
    plantingMonths: [3, 4, 5, 6, 7, 8],
    sun: 'full sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Good cool-season crop for New Zealand gardens. Support taller plants in windy areas.'
  },
  {
    id: 'silverbeet',
    name: 'Silverbeet',
    icon: 'silverbeet',
    category: 'vegetable',
    plantingMonths: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12],
    sun: 'full sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Reliable leafy green that grows through much of the year in many NZ regions.'
  },
  {
    id: 'coriander',
    name: 'Coriander',
    icon: 'coriander',
    category: 'herb',
    plantingMonths: [3, 4, 5, 8, 9, 10],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'medium',
    notes: 'Sow succession batches. Cooler weather helps prevent bolting.'
  },
  {
    id: 'parsley',
    name: 'Parsley',
    icon: 'parsley',
    category: 'herb',
    plantingMonths: [2, 3, 4, 5, 8, 9, 10, 11],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Slow to germinate but hardy once established; suitable for pots or garden beds.'
  },
  {
    id: 'kawakawa',
    name: 'Kawakawa',
    icon: 'kawakawa',
    category: 'native',
    plantingMonths: [3, 4, 5, 6, 7, 8, 9],
    sun: 'part shade',
    water: 'moderate',
    difficulty: 'medium',
    notes: 'Native shrub suited to sheltered, partially shaded spots with moist soil.'
  },
  {
    id: 'spinach',
    name: 'Spinach',
    icon: 'spinach',
    category: 'vegetable',
    plantingMonths: [3, 4, 5, 6, 7, 8, 9],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Prefers cool conditions; harvest leaves regularly to encourage new growth.'
  }
];
