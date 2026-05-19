# nzPlant Backend

Express + TypeScript API service for the nzPlant MVP. The backend is the source of truth for New Zealand planting recommendations, current NZ date context, and season-aware plant filtering.

## What it does

- Exposes a health check endpoint.
- Returns current seasonal planting recommendations for New Zealand home gardens.
- Calculates the current date, month, and season using the `Pacific/Auckland` timezone.
- Uses static seed data for the MVP.
- Provides stable plant icon identifiers so the frontend can render matching artwork without deriving icons from display names.

## Tech stack

- Node.js >= 20
- TypeScript
- Express 5
- CORS
- pnpm
- Static seed data for the current MVP

## Getting started

```bash
pnpm install
pnpm run dev
```

The development server defaults to:

```text
http://127.0.0.1:3000
```

By default the app binds to `0.0.0.0:3000`.

## Scripts

```bash
pnpm run dev        # Start development server with tsx watch
pnpm run typecheck  # Run TypeScript checks without emitting files
pnpm run build      # Compile TypeScript into dist/
pnpm start          # Run the compiled server
```

## API endpoints

### `GET /health`

Returns service health.

```json
{
  "status": "ok"
}
```

### `GET /api/recommendations/current`

Returns the current NZ date context and recommended plants for the current month.

Example response:

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

## Data model highlights

Plant records currently include:

- `id` — stable plant identifier
- `name` — English display name
- `icon` — stable frontend artwork key
- `category` — plant category
- `plantingMonths` — NZ month numbers suitable for planting
- `sun` — sun exposure requirement
- `water` — watering requirement
- `difficulty` — planting difficulty level
- `notes` — short growing guidance

Current icon keys include:

```text
broad-beans, spinach, garlic, kale, parsley, lettuce, tomato, silverbeet, coriander, kawakawa
```

## Project structure

```text
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

## Environment variables

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3000` | HTTP port |
| `HOST` | `0.0.0.0` | HTTP bind host |

## Validation

Before committing changes, run:

```bash
pnpm run typecheck
pnpm run build
```

## Documentation

Longer-lived backend notes are maintained in:

```text
docs/backend-project.md
```

Update that file when API contracts, data models, environment variables, or important implementation decisions change.

## Roadmap

- Add automated tests for season mapping and recommendation filtering.
- Expand NZ-specific plant seed data.
- Add optional filters such as region, category, and garden type.
- Introduce Prisma/MySQL when static data is no longer enough.
