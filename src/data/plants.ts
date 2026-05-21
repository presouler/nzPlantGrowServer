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
    notes: "Traditional NZ planting starts around Labour Weekend once frosts have passed and soil is warm. Choose full sun, stake early, rotate beds away from last season's tomatoes or potatoes, and water/feed consistently."
  },
  {
    id: 'lettuce',
    name: 'Lettuce',
    icon: 'lettuce',
    category: 'vegetable',
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Can be grown year-round with the right variety; give full sun in cool months and afternoon shade in summer. Harvest loose leaves from about six weeks.'
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
    notes: 'Cool-season bean suited to autumn and winter sowing in NZ. Plant in rich soil, keep watered, support in windy spots, and pick pods regularly in spring.'
  },
  {
    id: 'silverbeet',
    name: 'Silverbeet',
    icon: 'silverbeet',
    category: 'vegetable',
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sun: 'full sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Year-round NZ leafy staple; likes full sun, fertile moisture-retentive soil, and regular outer-leaf picking so it keeps regrowing.'
  },
  {
    id: 'coriander',
    name: 'Coriander',
    icon: 'coriander',
    category: 'herb',
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'medium',
    notes: 'Can be grown year-round but is best in cooler months; direct sow or transplant gently because roots dislike disturbance, and sow successions before plants bolt.'
  },
  {
    id: 'parsley',
    name: 'Parsley',
    icon: 'parsley',
    category: 'herb',
    plantingMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    sun: 'part sun',
    water: 'moderate',
    difficulty: 'easy',
    notes: 'Plant seedlings for an easier start in winter; grow near the kitchen in pots or beds, keep watered, and harvest outer stems from the base.'
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
    notes: 'NZ native understory shrub for semi-shade or shade, humus-rich free-draining soil, and shelter from frost/wind while young; keep moist during establishment.'
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
    notes: 'Fast cool-season leafy green; some varieties tolerate warmer weather, but best quality comes from rich soil, full sun to light shade, steady water, and frequent picking.'
  }
];

export const fallbackGrowthStages: PlantGrowthStage[] = [
  {
    id: 'seed',
    label: 'Seed or planting',
    headline: 'Start with good soil and the right season',
    description: 'Plant into compost-rich, free-draining soil during the recommended local planting window.',
    tip: 'Water gently after planting and mulch lightly once seedlings are established.',
    timeLabel: 'Week 0',
    startDay: 0,
    endDay: 0,
    visualHint: 'seed'
  },
  {
    id: 'sprout',
    label: 'Sprout',
    headline: 'Keep young roots evenly moist',
    description: 'Seedlings need steady moisture, protection from slugs and wind, and enough light to grow strongly.',
    tip: 'Thin crowded seedlings so air can move and each plant has space.',
    timeLabel: 'Week 1–2',
    startDay: 7,
    endDay: 14,
    visualHint: 'sprout'
  },
  {
    id: 'leafy',
    label: 'Leafy growth',
    headline: 'Build healthy leaves before harvest',
    description: 'The plant puts energy into leaves and roots; regular watering and light feeding support this stage.',
    tip: 'Mulch to hold moisture and reduce weeds around the root zone.',
    timeLabel: 'Week 3–6',
    startDay: 21,
    endDay: 42,
    visualHint: 'leafy'
  },
  {
    id: 'flowering',
    label: 'Flowering or seed stage',
    headline: 'Watch for flowers, bolting, or seed heads',
    description: 'Some crops flower before fruiting, while leafy crops may bolt when stressed by heat or dryness.',
    tip: 'Keep watering consistent and harvest leafy crops regularly to delay bolting.',
    timeLabel: 'Varies by crop',
    startDay: 42,
    endDay: 70,
    visualHint: 'flowering'
  },
  {
    id: 'harvest',
    label: 'Harvest',
    headline: 'Pick at the best eating stage',
    description: 'Harvest when leaves, stems, pods, fruit, or herbs are fresh and before quality declines.',
    tip: 'Pick little and often where possible to encourage more productive growth.',
    timeLabel: 'Crop-specific harvest window',
    startDay: 60,
    endDay: 100,
    visualHint: 'harvest'
  },
  {
    id: 'mature',
    label: 'Mature plant',
    headline: 'Maintain, renew, or save seed',
    description: 'Mature plants may keep producing, set seed, or finish their seasonal life cycle.',
    tip: 'Remove tired plants to compost if disease-free, or leave selected flowers for pollinators and seed.',
    timeLabel: 'End of crop cycle',
    startDay: 90,
    endDay: 140,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Grow sturdy seedlings',
      description: 'Small tomato seedlings need bright light, gentle watering, and protection from cold nights.',
      tip: 'Pot on deeply if stems get leggy; tomatoes can root from buried stems.',
      timeLabel: 'Day 7–14',
      startDay: 7,
      endDay: 14,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Build the vine and support it early',
      description: 'The plant grows stems and leaves quickly once soil warms and roots establish.',
      tip: 'Stake or cage early, mulch after watering, and feed regularly once growth is strong.',
      timeLabel: 'Week 3–8',
      startDay: 21,
      endDay: 56,
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Yellow flowers set the crop',
      description: 'Flowers appear on trusses and need steady moisture and good airflow to set fruit well.',
      tip: 'Avoid irregular watering because it can lead to split fruit and blossom-end stress.',
      timeLabel: 'Week 6–10',
      startDay: 42,
      endDay: 70,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick ripe fruit through summer',
      description: 'Fruit swells and ripens from green to its mature colour during warm settled weather.',
      tip: 'Pick often when tomatoes colour up; remove diseased leaves promptly.',
      timeLabel: 'Day 90–130',
      startDay: 90,
      endDay: 130,
      visualHint: 'fruiting'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Keep productive until autumn cools',
      description: 'Older vines keep fruiting until cold weather, disease pressure, or shorter days slow growth.',
      tip: 'Late in the season, remove tiny new flowers so energy goes into ripening existing fruit.',
      timeLabel: 'Late summer to autumn',
      startDay: 130,
      endDay: 180,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Protect tender seedlings',
      description: 'Seedlings emerge with soft leaves that need even moisture and slug protection.',
      tip: 'Thin gently so each lettuce has airflow and room to form leaves or heads.',
      timeLabel: 'Day 5–8',
      startDay: 5,
      endDay: 8,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Fast leaf production',
      description: 'Plants focus on tender leaf growth in cool weather with morning sun or light afternoon shade.',
      tip: 'Water regularly and mulch lightly to prevent dry-soil stress.',
      timeLabel: 'Week 2–5',
      startDay: 14,
      endDay: 35,
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting risk',
      headline: 'Heat can trigger seed stems',
      description: 'Warm, dry, or crowded conditions can make lettuce stretch upward and turn bitter.',
      tip: 'Harvest promptly before bolting; use shade cloth during sudden hot spells.',
      timeLabel: 'After harvest window / heat stress',
      startDay: 45,
      endDay: 70,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut leaves while young and crisp',
      description: 'Loose-leaf types can be picked leaf by leaf, while heading types are cut when firm enough.',
      tip: 'Harvest in the morning for the crispest leaves.',
      timeLabel: 'Around day 35–45',
      startDay: 35,
      endDay: 45,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Refresh the patch',
      description: 'Older lettuce becomes coarse or bolts, so the bed is best replanted in succession.',
      tip: 'Compost spent plants if healthy and re-sow for the next cool-season cycle.',
      timeLabel: 'After 6–10 weeks',
      startDay: 42,
      endDay: 70,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Strong shoots break through',
      description: 'Seedlings produce sturdy stems and rounded leaves as roots anchor in cool soil.',
      tip: 'Keep the bed weed-free while plants are small.',
      timeLabel: 'Day 7–10',
      startDay: 7,
      endDay: 10,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Tall stems need support',
      description: 'Plants grow upright leafy stems and may need strings or stakes in windy gardens.',
      tip: 'Shelter exposed beds and water during dry winter or spring spells.',
      timeLabel: 'Week 3–8',
      startDay: 21,
      endDay: 56,
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Flowers attract pollinators',
      description: 'White and black flowers form along stems before pods start swelling.',
      tip: 'Avoid high-nitrogen feeding now; healthy soil is usually enough.',
      timeLabel: 'Week 8–12',
      startDay: 56,
      endDay: 84,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick pods young or shell mature beans',
      description: 'Pods can be picked young and tender or left longer for larger beans inside.',
      tip: 'Harvest regularly to keep plants producing.',
      timeLabel: 'Around day 115',
      startDay: 105,
      endDay: 125,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Finish and feed the soil',
      description: 'Mature plants slow after pod production and can be cut down at soil level.',
      tip: 'Leave roots in the soil where practical to return organic matter and nodules.',
      timeLabel: 'After main pod harvest',
      startDay: 120,
      endDay: 150,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Thin clustered seedlings',
      description: 'Several seedlings may emerge from one seed cluster and need thinning for strong plants.',
      tip: 'Snip extras rather than pulling if roots are tangled.',
      timeLabel: 'Day 10–15',
      startDay: 10,
      endDay: 15,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Big leaves and colourful stems',
      description: 'Plants develop broad leaves and fleshy stems with steady moisture and fertile soil.',
      tip: 'Mulch and feed lightly after repeated picking.',
      timeLabel: 'Week 3–7',
      startDay: 21,
      endDay: 49,
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting or seed stage',
      headline: 'Older plants may send up seed stalks',
      description: 'Stress, age, or seasonal change can trigger tall seed stems and tougher leaves.',
      tip: 'Remove seed stalks early or replace old plants with fresh seedlings.',
      timeLabel: 'Mostly age/stress triggered',
      startDay: 90,
      endDay: 180,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick outer leaves continuously',
      description: 'Harvest outside leaves as needed while leaving the central crown to keep growing.',
      tip: 'Regular picking gives a longer, cleaner harvest than waiting for very large leaves.',
      timeLabel: 'Day 60–90 onward',
      startDay: 60,
      endDay: 90,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Long-lived leafy staple',
      description: 'Established silverbeet can keep producing for months if watered and refreshed.',
      tip: 'Remove old yellow leaves to improve airflow and reduce pests.',
      timeLabel: 'Multi-month picking plant',
      startDay: 120,
      endDay: 240,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Fine seedlings establish quickly',
      description: 'Seedlings need light, even moisture, and protection from drying wind.',
      tip: 'Avoid overwatering pots; damp but not soggy is ideal.',
      timeLabel: 'Day 7–10',
      startDay: 7,
      endDay: 10,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy herb growth',
      headline: 'Harvest soft aromatic leaves',
      description: 'Cool conditions encourage leafy growth and better flavour before the plant runs to seed.',
      tip: 'Sow succession batches because individual plants are short-lived.',
      timeLabel: 'Week 3–7',
      startDay: 21,
      endDay: 49,
      visualHint: 'herb'
    },
    {
      id: 'flowering',
      label: 'Bolting / flowers',
      headline: 'Heat pushes coriander to flower',
      description: 'Plants stretch, produce feathery leaves, and form white flowers when stressed or warm.',
      tip: 'Use flowers for pollinators and let some seed mature for coriander seed or re-sowing.',
      timeLabel: 'Around week 6–9 in warmth',
      startDay: 42,
      endDay: 63,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut leaves young and often',
      description: 'Pick outer leaves before flower stems dominate, or harvest whole young plants.',
      tip: 'Keep harvested bunches cool and use quickly for best flavour.',
      timeLabel: 'Around day 40–65',
      startDay: 40,
      endDay: 65,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature seed plant',
      headline: 'Save seed for the next crop',
      description: 'Mature plants dry down after flowering and form round coriander seed.',
      tip: 'Bag drying seed heads if you want to collect seed before it drops.',
      timeLabel: 'Seed set after flowering',
      startDay: 70,
      endDay: 100,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Small seedlings grow slowly at first',
      description: 'Young parsley forms delicate leaves before building a stronger root system.',
      tip: 'Keep weeds away so seedlings do not compete for light.',
      timeLabel: 'Day 7–14+',
      startDay: 7,
      endDay: 21,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy herb growth',
      headline: 'Steady bunches of fresh leaves',
      description: 'Established parsley grows strongly in part sun with compost-rich soil and regular moisture.',
      tip: 'Feed lightly after heavy picking to support new leaf growth.',
      timeLabel: 'Week 5–8',
      startDay: 35,
      endDay: 56,
      visualHint: 'herb'
    },
    {
      id: 'flowering',
      label: 'Flowering / seed stem',
      headline: 'Second-year plants may bolt',
      description: 'Parsley is biennial and can send up flower stems as it ages or after stress.',
      tip: 'Replace older plants once leaf quality drops, or let one flower for beneficial insects.',
      timeLabel: 'Usually second year / stress',
      startDay: 240,
      endDay: 420,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Cut outer stems from the base',
      description: 'Harvest mature outer stems while leaving the central growing point intact.',
      tip: 'Pick regularly rather than stripping the whole plant at once.',
      timeLabel: 'Around day 60 onward',
      startDay: 60,
      endDay: 90,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Refresh with new seedlings',
      description: 'Older parsley becomes tougher and less leafy after flowering begins.',
      tip: 'Start replacement plants before old ones finish so the kitchen supply continues.',
      timeLabel: 'Biennial second-year plant',
      startDay: 365,
      endDay: 540,
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
      timeLabel: 'Planting day',
      startDay: 0,
      endDay: 0,
      visualHint: 'native'
    },
    {
      id: 'sprout',
      label: 'Establishing',
      headline: 'Build roots before height',
      description: 'The shrub settles in slowly, extending roots into leafy, organic soil under partial shade.',
      tip: 'Mulch with leaf mould or composted bark, keeping mulch away from the stem.',
      timeLabel: 'First 2–6 months',
      startDay: 60,
      endDay: 180,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Canopy growth',
      headline: 'Glossy native foliage fills out',
      description: 'Healthy kawakawa develops heart-shaped leaves and a shrubby canopy in a sheltered microclimate.',
      tip: 'Water during dry periods and avoid hard pruning while the plant is young.',
      timeLabel: '6–18 months',
      startDay: 180,
      endDay: 540,
      visualHint: 'native'
    },
    {
      id: 'flowering',
      label: 'Flowering',
      headline: 'Small flower spikes appear',
      description: 'Established plants may form upright flower spikes, with male and female flowers on separate plants.',
      tip: 'Plant more than one kawakawa where possible if berries are desired.',
      timeLabel: 'Established plants, seasonal',
      startDay: 365,
      endDay: 1095,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Berries',
      headline: 'Female plants can carry orange fruit',
      description: 'Pollinated female plants may develop soft orange berries that support native garden ecology.',
      tip: 'Leave berries for birds and natural regeneration unless you have a specific harvest purpose.',
      timeLabel: 'Berries after flowering on female plants',
      startDay: 450,
      endDay: 1200,
      visualHint: 'fruiting'
    },
    {
      id: 'mature',
      label: 'Mature shelter',
      headline: 'A sheltered native understory shrub',
      description: 'Mature kawakawa provides lush structure in semi-shaded native or food-forest plantings.',
      tip: 'Maintain mulch, protect from frost pockets, and prune lightly only to shape or remove damage.',
      timeLabel: '2–5 years',
      startDay: 730,
      endDay: 1825,
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
      timeLabel: 'Day 0',
      startDay: 0,
      endDay: 0,
      visualHint: 'seed'
    },
    {
      id: 'sprout',
      label: 'Sprout',
      headline: 'Tender seedlings need moisture',
      description: 'Seedlings form small rounded leaves and need protection from slugs, birds, and drying winds.',
      tip: 'Thin plants early so leaves can expand without crowding.',
      timeLabel: 'Day 7–14',
      startDay: 7,
      endDay: 14,
      visualHint: 'sprout'
    },
    {
      id: 'leafy',
      label: 'Leafy growth',
      headline: 'Quick, soft leaf production',
      description: 'Spinach grows best in mild weather with rich soil and consistent water.',
      tip: 'Use compost and mulch to keep the root zone cool and moist.',
      timeLabel: 'Week 3–6',
      startDay: 21,
      endDay: 42,
      visualHint: 'leafy'
    },
    {
      id: 'flowering',
      label: 'Bolting / seed stage',
      headline: 'Heat and long days trigger bolting',
      description: 'Plants send up a central flower stalk and leaves become smaller or bitter.',
      tip: 'Harvest heavily before warm spells; switch to a new cool-season sowing later.',
      timeLabel: 'Heat/long-day triggered',
      startDay: 45,
      endDay: 75,
      visualHint: 'flowering'
    },
    {
      id: 'harvest',
      label: 'Harvest',
      headline: 'Pick baby or mature leaves',
      description: 'Harvest outer leaves regularly or cut whole young plants for baby spinach.',
      tip: 'Pick in the morning and cool leaves quickly after harvesting.',
      timeLabel: 'Day 42–56 for baby leaves; 45–70 for mature leaves',
      startDay: 42,
      endDay: 70,
      visualHint: 'harvest'
    },
    {
      id: 'mature',
      label: 'Mature plant',
      headline: 'Short-lived but productive',
      description: 'Mature spinach finishes quickly once conditions warm or flowering starts.',
      tip: 'Remove spent plants and re-sow when cool, moist conditions return.',
      timeLabel: 'After 7–10 weeks',
      startDay: 50,
      endDay: 75,
      visualHint: 'leafy'
    }
  ]
};
