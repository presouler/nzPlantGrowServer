import cors from 'cors';
import express from 'express';
import { healthRouter } from './routes/health.js';
import { recommendationsRouter } from './routes/recommendations.js';
import { weatherRouter } from './routes/weather.js';

export function createApp() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(healthRouter);
  app.use(recommendationsRouter);
  app.use(weatherRouter);

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not Found' });
  });

  return app;
}
