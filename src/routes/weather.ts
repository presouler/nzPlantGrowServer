import { Router } from 'express';
import { getAucklandWeather } from '../services/weatherService.js';

export const weatherRouter = Router();

weatherRouter.get('/api/weather/auckland', async (_req, res) => {
  try {
    res.json(await getAucklandWeather());
  } catch (error) {
    console.error('Failed to fetch Auckland weather', error);
    res.status(502).json({ error: 'Weather unavailable' });
  }
});
