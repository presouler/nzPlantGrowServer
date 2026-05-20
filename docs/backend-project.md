# nzPlant Backend Project Notes

## Repository

- Git SSH: `git@github.com:presouler/nzPlantGrowServer.git`
- Local path: `/Users/leonkang/.openclaw/workspace/nzPlant/backend`
- Branch: `main`
- Repository status at setup: empty repository, no commits yet
- SSH access: configured and verified through GitHub user `presouler`

## Stack

- Node.js >= 20
- TypeScript
- Express 5
- CORS
- tsx for development watch mode
- pnpm 11.1.2
- Static seed data for MVP recommendations
- MySQL + Prisma planned for future persistence

## Runtime

Default backend runtime:

- Host: `0.0.0.0`
- Port: `3000`

Local URLs:

- `http://127.0.0.1:3000/health`
- `http://127.0.0.1:3000/api/recommendations/current`
- `http://127.0.0.1:3000/api/plants/:id`
- `http://127.0.0.1:3000/api/weather/auckland`

## Commands

From `/Users/leonkang/.openclaw/workspace/nzPlant/backend`:

```bash
pnpm install
pnpm run dev        # local development with tsx watch
pnpm run typecheck  # TypeScript check without emitting files
pnpm run build      # compile TypeScript to dist/
pnpm start          # run compiled server
```

## Project Structure

```text
backend/
  package.json
  pnpm-lock.yaml
  pnpm-workspace.yaml
  tsconfig.json
  src/
    app.ts
    server.ts
    data/
      plants.ts
    routes/
      health.ts
      plants.ts
      recommendations.ts
      weather.ts
    services/
      plantService.ts
      recommendationService.ts
      seasonService.ts
      weatherService.ts
    types/
      plant.ts
      weather.ts
```

## Source Files

- `src/app.ts` — creates Express app, registers middleware and routes
- `src/server.ts` — reads host/port env and starts HTTP server
- `src/routes/health.ts` — health endpoint
- `src/routes/recommendations.ts` — recommendation endpoint
- `src/routes/plants.ts` — single plant detail endpoint
- `src/routes/weather.ts` — Auckland current weather endpoint
- `src/services/plantService.ts` — plant lookup and detail response assembly
- `src/services/seasonService.ts` — New Zealand timezone, date, month, season helpers
- `src/services/recommendationService.ts` — recommendation filtering and response assembly
- `src/services/weatherService.ts` — Open-Meteo Auckland weather fetch, validation, and mapping
- `src/data/plants.ts` — static MVP plant seed data
- `src/types/plant.ts` — plant recommendation API/data TypeScript types
- `src/types/weather.ts` — weather API TypeScript types

## API Routes

### `GET /health`

Returns basic service status.

Response:

```json
{
  "status": "ok"
}
```

### `GET /api/recommendations/current`

Returns the current New Zealand local date, timezone, season, month number, and plants whose `plantingMonths` include the current NZ month.

Response shape:

```json
{
  "date": "2026-05-18",
  "timezone": "Pacific/Auckland",
  "season": "autumn",
  "month": 5,
  "recommendations": [
    {
      "id": "lettuce",
      "name": "Lettuce",
      "icon": "lettuce",
      "category": "vegetable",
      "plantingMonths": [2, 3, 4, 5, 8, 9, 10, 11],
      "sun": "part sun",
      "water": "moderate",
      "difficulty": "easy",
      "notes": "Best in cooler months; provide afternoon shade in warm regions."
    }
  ]
}
```

### `GET /api/plants/:id`

Returns a single plant detail record from the static MVP plant seed data. No database is used. The response includes all base plant fields plus stable detail-page fields for display, including static growth simulator stages.

Success response shape:

```json
{
  "id": "lettuce",
  "name": "Lettuce",
  "icon": "lettuce",
  "category": "vegetable",
  "plantingMonths": [2, 3, 4, 5, 8, 9, 10, 11],
  "sun": "part sun",
  "water": "moderate",
  "difficulty": "easy",
  "notes": "Best in cooler months; provide afternoon shade in warm regions.",
  "plantingWindowLabel": "Feb, Mar, Apr, May, Aug, Sep, Oct, Nov",
  "careTips": [
    "Lettuce grows best with morning sun and some protection from harsh afternoon heat.",
    "Keep soil evenly moist, especially while seedlings establish and during dry weather.",
    "Good choice for beginners and regular home garden maintenance."
  ],
  "growthStages": [
    {
      "id": "seed",
      "label": "Seed",
      "headline": "Sow in cool, rich soil",
      "description": "Lettuce germinates best in mild conditions with fine, moist soil and light coverage.",
      "tip": "Sow small batches every few weeks for a steady salad supply.",
      "visualHint": "seed"
    }
  ],
  "detailSections": [
    {
      "id": "planting-window",
      "title": "Planting window",
      "body": "Best months to plant: Feb, Mar, Apr, May, Aug, Sep, Oct, Nov."
    },
    {
      "id": "care",
      "title": "Care",
      "body": "Lettuce grows best with morning sun and some protection from harsh afternoon heat. Keep soil evenly moist, especially while seedlings establish and during dry weather. Good choice for beginners and regular home garden maintenance."
    },
    {
      "id": "notes",
      "title": "Notes",
      "body": "Best in cooler months; provide afternoon shade in warm regions."
    }
  ]
}
```

Not found response:

```json
{
  "error": "Plant not found"
}
```

### `GET /api/weather/auckland`

Returns current Auckland weather from the free Open-Meteo Forecast API. No API key is required. Backend coordinates are fixed to Auckland (`-36.8485`, `174.7633`) and Open-Meteo is requested with `timezone=GMT` so `observedAt` is returned as stable UTC ISO time.

Success response shape:

```json
{
  "location": "Auckland",
  "temperatureCelsius": 18.4,
  "condition": "cloudy",
  "comfort": "suitable",
  "observedAt": "2026-05-20T04:00:00.000Z",
  "source": "Open-Meteo"
}
```

Error response if Open-Meteo is unavailable or returns an invalid payload:

```json
{
  "error": "Weather unavailable"
}
```

Weather condition values are normalized to:

- `cloudy`
- `overcast`
- `sunny`
- `rainy`
- `sun-shower`
- `windy`

Comfort values are normalized to:

- `cold`
- `suitable`
- `hot`
- `very-hot`

## API Type Contract

Current backend types:

```ts
type NzSeason = 'summer' | 'autumn' | 'winter' | 'spring';

type PlantCategory = 'vegetable' | 'herb' | 'flower' | 'native' | 'fruit';

type SunRequirement = 'full sun' | 'part sun' | 'part shade' | 'shade';

type WaterRequirement = 'low' | 'moderate' | 'high';

type Difficulty = 'easy' | 'medium' | 'hard';

type PlantIcon =
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

type Plant = {
  id: string;
  name: string;
  icon: PlantIcon;
  category: PlantCategory;
  plantingMonths: number[];
  sun: SunRequirement;
  water: WaterRequirement;
  difficulty: Difficulty;
  notes: string;
};

type PlantDetailSection = {
  id: string;
  title: string;
  body: string;
};

type PlantGrowthStage = {
  id: string;
  label: string;
  headline: string;
  description: string;
  tip: string;
  visualHint: 'seed' | 'sprout' | 'leafy' | 'flowering' | 'fruiting' | 'harvest' | 'herb' | 'native';
};

type PlantDetailResponse = Plant & {
  plantingWindowLabel: string;
  careTips: string[];
  detailSections: PlantDetailSection[];
  growthStages: PlantGrowthStage[];
};

type WeatherCondition = 'cloudy' | 'overcast' | 'sunny' | 'rainy' | 'sun-shower' | 'windy';

type WeatherComfort = 'cold' | 'suitable' | 'hot' | 'very-hot';

type AucklandWeatherResponse = {
  location: 'Auckland';
  temperatureCelsius: number;
  condition: WeatherCondition;
  comfort: WeatherComfort;
  observedAt: string;
  source: 'Open-Meteo';
};
```

## Current Seed Plants

MVP static seed data currently includes:

- `tomato` — Tomato — icon `tomato`
- `lettuce` — Lettuce — icon `lettuce`
- `broad-bean` — Broad Bean — icon `broad-beans`
- `silverbeet` — Silverbeet — icon `silverbeet`
- `coriander` — Coriander — icon `coriander`
- `parsley` — Parsley — icon `parsley`
- `kawakawa` — Kawakawa — icon `kawakawa`
- `spinach` — Spinach — icon `spinach`

Plant `icon` is a stable backend-provided identifier for frontend artwork selection. Current allowed values are:

- `broad-beans`
- `spinach`
- `garlic`
- `kale`
- `parsley`
- `lettuce`
- `tomato`
- `silverbeet`
- `coriander`
- `kawakawa`

Seed file:

- `src/data/plants.ts`

## Growth Simulator Data

`GET /api/plants/:id` includes `growthStages` from backend static data in `src/data/plants.ts`; no database or external runtime lookup is used. Each stage has:

- `id` — stable stage identifier
- `label` — short UI label
- `headline` — stage summary
- `description` — NZ home-garden explanation
- `tip` — practical care action
- `visualHint` — frontend artwork cue (`seed`, `sprout`, `leafy`, `flowering`, `fruiting`, `harvest`, `herb`, `native`)

Current plant-specific growth data covers all existing plant IDs: `tomato`, `lettuce`, `broad-bean`, `silverbeet`, `coriander`, `parsley`, `kawakawa`, and `spinach`. Non-native vegetables/herbs use the common simulator arc `seed`, `sprout`, `leafy`, `flowering`/bolting risk, `harvest`, `mature`. Leafy greens and herbs describe flowering mainly as bolting/seed-stage risk. `kawakawa` keeps the same API stage IDs (`seed`, `sprout`, `leafy`, `flowering`, `harvest`, `mature`) for frontend compatibility, while its labels/headlines describe native-shrub phases such as Seedling, Establishing, Canopy growth, Berries, and Mature shelter.

Content assumptions/sources:

- Tui vegetable growing guidance: good soil, season-appropriate planting, regular watering/feeding, mulch/protection, and sustainable leaf harvest for leafy crops.
- Kawakawa research assumptions: semi-shade, humus-rich free-draining soil, shelter from frost and strong wind, moist but not waterlogged conditions.
- General New Zealand home-garden practice for crop lifecycle, support, succession sowing, bolting, harvest rhythm, and compost/mulch care.
- If a future plant lacks specific data, `fallbackGrowthStages` provides a generic six-stage growth simulator response.

## Recommendation Logic

Recommendation filtering:

```ts
plants.filter((plant) => plant.plantingMonths.includes(month))
```

Where `month` is the current month in timezone `Pacific/Auckland`.

The backend is the source of truth for current date/month/season and current recommendations.

## Season Logic

Timezone:

- `Pacific/Auckland`

Season mapping follows New Zealand / Southern Hemisphere seasons:

- Summer: December, January, February
- Autumn: March, April, May
- Winter: June, July, August
- Spring: September, October, November

Implementation:

- `src/services/seasonService.ts`

## Environment Variables

- `PORT` — HTTP port, defaults to `3000`
- `HOST` — bind host, defaults to `0.0.0.0`

No database environment variables are required for the static-data MVP. The Auckland weather endpoint uses Open-Meteo without an API key.

Future database env candidates:

- `DATABASE_URL`
- `SHADOW_DATABASE_URL` if Prisma migrations need it

## Frontend Integration Notes

Frontend calls:

- `GET /api/recommendations/current`
- `GET /api/plants/:id`
- `GET /api/weather/auckland`

Frontend Vite proxy forwards `/api` to `http://localhost:3000`.

Important field names:

- Plant detail responses include base plant fields plus `plantingWindowLabel`, `careTips`, `detailSections`, and `growthStages`.
- Missing plant detail IDs return `404 { "error": "Plant not found" }`.
- Backend returns `icon`, `plantingMonths`, and `water`.
- `icon` is already normalized/stable and should be used by the frontend for plant artwork selection instead of deriving icons only from display names.
- Frontend normalizes `plantingMonths` and `water` to `suitableMonths` and `watering` in `frontend/src/api/recommendations.ts`.
- Weather responses are already frontend-stable: `location`, `temperatureCelsius`, `condition`, `comfort`, `observedAt`, `source`.

Do not change backend field names without coordinating frontend normalization and docs.

## Auth

None for MVP.

Future options:

- Public read-only recommendations can stay unauthenticated.
- Admin/content editing should require authentication.
- User saved plans/accounts would require auth.

## Validation Status

Last verified after pnpm migration:

```bash
pnpm run build
pnpm run typecheck
```

Both passed.

Local endpoints were also verified:

- `GET http://127.0.0.1:3000/health`
- `GET http://127.0.0.1:3000/api/recommendations/current`

## Recent Important Changes

- Initialized Node.js + TypeScript + Express MVP backend.
- Connected backend workspace to GitHub repository `presouler/nzPlantGrowServer`.
- Added health endpoint.
- Added current recommendation endpoint.
- Added single plant detail endpoint at `GET /api/plants/:id` backed by static seed data.
- Added Auckland current weather endpoint backed by Open-Meteo with normalized condition/comfort fields.
- Added static NZ plant seed data.
- Added stable backend `icon` field to plants and recommendation responses for frontend artwork selection.
- Added static plant growth simulator data (`growthStages`) for tomato, lettuce, broad bean, silverbeet, coriander, parsley, kawakawa, and spinach, with a generic fallback for future plant IDs.
- Removed Chinese display names from backend seed data and API documentation for the initial English-only version.
- Added New Zealand timezone/month/season service.
- Installed pnpm and migrated from `package-lock.json` to `pnpm-lock.yaml`.

## Next Recommended Backend Tasks

1. Add tests for season mapping and recommendation filtering.
2. Expand plant seed data with more NZ-specific crops/herbs/native plants.
3. Add optional query params for future filters:
   - `region`
   - `category`
   - `gardenType`
4. Add Prisma/MySQL schema when static data becomes limiting.
5. Add API documentation examples for all endpoints.
6. Add deployment environment notes.
7. Commit and push initial backend MVP.
