import type { Plant, PlantGrowthStage } from '../types/plant.js';

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

export const fallbackGrowthStages: PlantGrowthStage[] = [
  {
    id: 'seed',
    label: 'Seed or planting',
    headline: 'Start with good soil and the right season',
    description: 'Plant into compost-rich, free-draining soil during the recommended local planting window.',
    tip: 'Water gently after planting and mulch lightly once seedlings are established.',
    visualHint: 'seed'
  },
  {
    id: 'sprout',
    label: 'Sprout',
    headline: 'Keep young roots evenly moist',
    description: 'Seedlings need steady moisture, protection from slugs and wind, and enough light to grow strongly.',
    tip: 'Thin crowded seedlings so air can move and each plant has space.',
    visualHint: 'sprout'
  },
  {
    id: 'leafy',
    label: 'Leafy growth',
    headline: 'Build healthy leaves before harvest',
    description: 'The plant puts energy into leaves and roots; regular watering and light feeding support this stage.',
    tip: 'Mulch to hold moisture and reduce weeds around the root zone.',
    visualHint: 'leafy'
  },
  {
    id: 'flowering',
    label: 'Flowering or seed stage',
    headline: 'Watch for flowers, bolting, or seed heads',
    description: 'Some crops flower before fruiting, while leafy crops may bolt when stressed by heat or dryness.',
    tip: 'Keep watering consistent and harvest leafy crops regularly to delay bolting.',
    visualHint: 'flowering'
  },
  {
    id: 'harvest',
    label: 'Harvest',
    headline: 'Pick at the best eating stage',
    description: 'Harvest when leaves, stems, pods, fruit, or herbs are fresh and before quality declines.',
    tip: 'Pick little and often where possible to encourage more productive growth.',
    visualHint: 'harvest'
  },
  {
    id: 'mature',
    label: 'Mature plant',
    headline: 'Maintain, renew, or save seed',
    description: 'Mature plants may keep producing, set seed, or finish their seasonal life cycle.',
    tip: 'Remove tired plants to compost if disease-free, or leave selected flowers for pollinators and seed.',
    visualHint: 'leafy'
  }
];

export const plantGrowthStages: Record<string, PlantGrowthStage[]> = {
  tomato: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Start warm after winter',
      description: 'Sow tomato seed in warm seed mix or plant seedlings after frost risk has passed in spring.',
      tip: 'Choose a sunny, sheltered NZ garden spot with compost-rich, free-draining soil.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Grow sturdy seedlings',
      description: 'Small tomato seedlings need bright light, gentle watering, and protection from cold nights.',
      tip: 'Pot on deeply if stems get leggy; tomatoes can root from buried stems.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Build the vine and support it early',
      description: 'The plant grows stems and leaves quickly once soil warms and roots establish.',
      tip: 'Stake or cage early, mulch after watering, and feed regularly once growth is strong.',
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Yellow flowers set the crop',
      description: 'Flowers appear on trusses and need steady moisture and good airflow to set fruit well.',
      tip: 'Avoid irregular watering because it can lead to split fruit and blossom-end stress.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick ripe fruit through summer',
      description: 'Fruit swells and ripens from green to its mature colour during warm settled weather.',
      tip: 'Pick often when tomatoes colour up; remove diseased leaves promptly.',
      visualHint: 'fruiting'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Keep productive until autumn cools',
      description: 'Older vines keep fruiting until cold weather, disease pressure, or shorter days slow growth.',
      tip: 'Late in the season, remove tiny new flowers so energy goes into ripening existing fruit.',
      visualHint: 'fruiting'
    }
  ],
  lettuce: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Sow in cool, rich soil',
      description: 'Lettuce germinates best in mild conditions with fine, moist soil and light coverage.',
      tip: 'Sow small batches every few weeks for a steady salad supply.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Protect tender seedlings',
      description: 'Seedlings emerge with soft leaves that need even moisture and slug protection.',
      tip: 'Thin gently so each lettuce has airflow and room to form leaves or heads.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Fast leaf production',
      description: 'Plants focus on tender leaf growth in cool weather with morning sun or light afternoon shade.',
      tip: 'Water regularly and mulch lightly to prevent dry-soil stress.',
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting risk',
      headline: 'Heat can trigger seed stems',
      description: 'Warm, dry, or crowded conditions can make lettuce stretch upward and turn bitter.',
      tip: 'Harvest promptly before bolting; use shade cloth during sudden hot spells.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut leaves while young and crisp',
      description: 'Loose-leaf types can be picked leaf by leaf, while heading types are cut when firm enough.',
      tip: 'Harvest in the morning for the crispest leaves.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Refresh the patch',
      description: 'Older lettuce becomes coarse or bolts, so the bed is best replanted in succession.',
      tip: 'Compost spent plants if healthy and re-sow for the next cool-season cycle.',
      visualHint: 'leafy'
    }
  ],
  'broad-bean': [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Sow large seeds in cool months',
      description: 'Broad beans suit autumn and winter sowing in NZ, with seeds planted into fertile, free-draining soil.',
      tip: 'Push seeds deep enough to stay moist and protect from birds if needed.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Strong shoots break through',
      description: 'Seedlings produce sturdy stems and rounded leaves as roots anchor in cool soil.',
      tip: 'Keep the bed weed-free while plants are small.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Tall stems need support',
      description: 'Plants grow upright leafy stems and may need strings or stakes in windy gardens.',
      tip: 'Shelter exposed beds and water during dry winter or spring spells.',
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Flowers attract pollinators',
      description: 'White and black flowers form along stems before pods start swelling.',
      tip: 'Avoid high-nitrogen feeding now; healthy soil is usually enough.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick pods young or shell mature beans',
      description: 'Pods can be picked young and tender or left longer for larger beans inside.',
      tip: 'Harvest regularly to keep plants producing.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Finish and feed the soil',
      description: 'Mature plants slow after pod production and can be cut down at soil level.',
      tip: 'Leave roots in the soil where practical to return organic matter and nodules.',
      visualHint: 'leafy'
    }
  ],
  silverbeet: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Sow a reliable leafy crop',
      description: 'Silverbeet seed clusters germinate in mild soil and suit many NZ home gardens most of the year.',
      tip: 'Soak seed briefly before sowing if conditions are dry.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Thin clustered seedlings',
      description: 'Several seedlings may emerge from one seed cluster and need thinning for strong plants.',
      tip: 'Snip extras rather than pulling if roots are tangled.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Big leaves and colourful stems',
      description: 'Plants develop broad leaves and fleshy stems with steady moisture and fertile soil.',
      tip: 'Mulch and feed lightly after repeated picking.',
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting or seed stage',
      headline: 'Older plants may send up seed stalks',
      description: 'Stress, age, or seasonal change can trigger tall seed stems and tougher leaves.',
      tip: 'Remove seed stalks early or replace old plants with fresh seedlings.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick outer leaves continuously',
      description: 'Harvest outside leaves as needed while leaving the central crown to keep growing.',
      tip: 'Regular picking gives a longer, cleaner harvest than waiting for very large leaves.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Long-lived leafy staple',
      description: 'Established silverbeet can keep producing for months if watered and refreshed.',
      tip: 'Remove old yellow leaves to improve airflow and reduce pests.',
      visualHint: 'leafy'
    }
  ],
  coriander: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Direct sow for best results',
      description: 'Coriander dislikes root disturbance, so sow seed directly into cool, free-draining soil or pots.',
      tip: 'Crush seed pods gently before sowing to improve germination.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Fine seedlings establish quickly',
      description: 'Seedlings need light, even moisture, and protection from drying wind.',
      tip: 'Avoid overwatering pots; damp but not soggy is ideal.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy herb growth',
      headline: 'Harvest soft aromatic leaves',
      description: 'Cool conditions encourage leafy growth and better flavour before the plant runs to seed.',
      tip: 'Sow succession batches because individual plants are short-lived.',
      visualHint: 'herb'
    },
    {
      id: 'flowering',
      label: 'Bolting / flowers',
      headline: 'Heat pushes coriander to flower',
      description: 'Plants stretch, produce feathery leaves, and form white flowers when stressed or warm.',
      tip: 'Use flowers for pollinators and let some seed mature for coriander seed or re-sowing.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut leaves young and often',
      description: 'Pick outer leaves before flower stems dominate, or harvest whole young plants.',
      tip: 'Keep harvested bunches cool and use quickly for best flavour.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature seed plant',
      headline: 'Save seed for the next crop',
      description: 'Mature plants dry down after flowering and form round coriander seed.',
      tip: 'Bag drying seed heads if you want to collect seed before it drops.',
      visualHint: 'herb'
    }
  ],
  parsley: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Be patient with germination',
      description: 'Parsley is slow to germinate but rewards steady moisture and fine seed-raising mix.',
      tip: 'Soak seed overnight and keep the surface damp until seedlings appear.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Small seedlings grow slowly at first',
      description: 'Young parsley forms delicate leaves before building a stronger root system.',
      tip: 'Keep weeds away so seedlings do not compete for light.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy herb growth',
      headline: 'Steady bunches of fresh leaves',
      description: 'Established parsley grows strongly in part sun with compost-rich soil and regular moisture.',
      tip: 'Feed lightly after heavy picking to support new leaf growth.',
      visualHint: 'herb'
    },
    {
      id: 'flowering',
      label: 'Flowering / seed stem',
      headline: 'Second-year plants may bolt',
      description: 'Parsley is biennial and can send up flower stems as it ages or after stress.',
      tip: 'Replace older plants once leaf quality drops, or let one flower for beneficial insects.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut outer stems from the base',
      description: 'Harvest mature outer stems while leaving the central growing point intact.',
      tip: 'Pick regularly rather than stripping the whole plant at once.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Refresh with new seedlings',
      description: 'Older parsley becomes tougher and less leafy after flowering begins.',
      tip: 'Start replacement plants before old ones finish so the kitchen supply continues.',
      visualHint: 'herb'
    }
  ],
  kawakawa: [
    {
      id: 'seed',
      label: 'Seedling',
      headline: 'Start in sheltered semi-shade',
      description: 'Young kawakawa suits filtered light, humus-rich soil, and protection from frost and strong wind.',
      tip: 'Keep soil moist but free-draining; avoid exposed, hot, dry positions.',
      visualHint: 'native'
    },
    {
      id: 'sprout',
      label: 'Establishing',
      headline: 'Build roots before height',
      description: 'The shrub settles in slowly, extending roots into leafy, organic soil under partial shade.',
      tip: 'Mulch with leaf mould or composted bark, keeping mulch away from the stem.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Canopy growth',
      headline: 'Glossy native foliage fills out',
      description: 'Healthy kawakawa develops heart-shaped leaves and a shrubby canopy in a sheltered microclimate.',
      tip: 'Water during dry periods and avoid hard pruning while the plant is young.',
      visualHint: 'native'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Small flower spikes appear',
      description: 'Established plants may form upright flower spikes, with male and female flowers on separate plants.',
      tip: 'Plant more than one kawakawa where possible if berries are desired.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Berries',
      headline: 'Female plants can carry orange fruit',
      description: 'Pollinated female plants may develop soft orange berries that support native garden ecology.',
      tip: 'Leave berries for birds and natural regeneration unless you have a specific harvest purpose.',
      visualHint: 'fruiting'
    },
    {
      id: 'mature',
      label: 'Mature shelter',
      headline: 'A sheltered native understory shrub',
      description: 'Mature kawakawa provides lush structure in semi-shaded native or food-forest plantings.',
      tip: 'Maintain mulch, protect from frost pockets, and prune lightly only to shape or remove damage.',
      visualHint: 'native'
    }
  ],
  spinach: [
    {
      id: 'seed',
      label: 'Seed',
      headline: 'Sow for cool-season leaves',
      description: 'Spinach prefers cool soil, steady moisture, and a fertile bed or container.',
      tip: 'Avoid sowing into hot dry soil because germination and flavour suffer.',
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Tender seedlings need moisture',
      description: 'Seedlings form small rounded leaves and need protection from slugs, birds, and drying winds.',
      tip: 'Thin plants early so leaves can expand without crowding.',
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Quick, soft leaf production',
      description: 'Spinach grows best in mild weather with rich soil and consistent water.',
      tip: 'Use compost and mulch to keep the root zone cool and moist.',
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting / seed stage',
      headline: 'Heat and long days trigger bolting',
      description: 'Plants send up a central flower stalk and leaves become smaller or bitter.',
      tip: 'Harvest heavily before warm spells; switch to a new cool-season sowing later.',
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick baby or mature leaves',
      description: 'Harvest outer leaves regularly or cut whole young plants for baby spinach.',
      tip: 'Pick in the morning and cool leaves quickly after harvesting.',
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Short-lived but productive',
      description: 'Mature spinach finishes quickly once conditions warm or flowering starts.',
      tip: 'Remove spent plants and re-sow when cool, moist conditions return.',
      visualHint: 'leafy'
    }
  ]
};
