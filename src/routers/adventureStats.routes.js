import express from 'express';
import {
  createAdventureStat,
  getAdventureStats,
  getAdventureStatById,
  updateAdventureStat,
  deleteAdventureStat,
} from '../controllers/adventureStats.controller.js';

const router = express.Router();

// Criar uma nova estatística de aventura
router.post('/', createAdventureStat);

// Obter todas as estatísticas de aventura
router.get('/', getAdventureStats);

// Obter uma estatística de aventura pelo ID
router.get('/:id', getAdventureStatById);

// Atualizar uma estatística de aventura
router.put('/:id', updateAdventureStat);

// Deletar uma estatística de aventura
router.delete('/:id', deleteAdventureStat);

export default router;
