import { Router } from 'express';
import { getCurrentRecommendations } from '../services/recommendationService.js';

export const recommendationsRouter = Router();

recommendationsRouter.get('/api/recommendations/current', (_req, res) => {
  res.json(getCurrentRecommendations());
});
