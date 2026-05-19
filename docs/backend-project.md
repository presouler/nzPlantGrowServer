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
      recommendations.ts
    services/
      recommendationService.ts
      seasonService.ts
    types/
      plant.ts
```

## Source Files

- `src/app.ts` — creates Express app, registers middleware and routes
- `src/server.ts` — reads host/port env and starts HTTP server
- `src/routes/health.ts` — health endpoint
- `src/routes/recommendations.ts` — recommendation endpoint
- `src/services/seasonService.ts` — New Zealand timezone, date, month, season helpers
- `src/services/recommendationService.ts` — recommendation filtering and response assembly
- `src/data/plants.ts` — static MVP plant seed data
- `src/types/plant.ts` — API/data TypeScript types

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

No database environment variables are required for the static-data MVP.

Future database env candidates:

- `DATABASE_URL`
- `SHADOW_DATABASE_URL` if Prisma migrations need it

## Frontend Integration Notes

Frontend calls:

- `GET /api/recommendations/current`

Frontend Vite proxy forwards `/api` to `http://localhost:3000`.

Important field names:

- Backend returns `icon`, `plantingMonths`, and `water`.
- `icon` is already normalized/stable and should be used by the frontend for plant artwork selection instead of deriving icons only from display names.
- Frontend normalizes `plantingMonths` and `water` to `suitableMonths` and `watering` in `frontend/src/api/recommendations.ts`.

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
- Added static NZ plant seed data.
- Added stable backend `icon` field to plants and recommendation responses for frontend artwork selection.
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
