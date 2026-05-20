import { Router } from 'express';
import { getPlantById } from '../services/plantService.js';

export const plantsRouter = Router();

plantsRouter.get('/api/plants/:id', (req, res) => {
  const plant = getPlantById(req.params.id);

  if (!plant) {
    res.status(404).json({ error: 'Plant not found' });
    return;
  }

  res.json(plant);
});
