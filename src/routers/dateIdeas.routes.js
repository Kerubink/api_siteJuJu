import express from 'express';
import {
  createDateIdea,
  getDateIdeas,
  getDateIdeaById,
  updateDateIdea,
  deleteDateIdea,
} from '../controllers/dateIdeas.controller.js';

const router = express.Router();

// Criar uma nova ideia de encontro
router.post('/', createDateIdea);

// Obter todas as ideias de encontro
router.get('/', getDateIdeas);

// Obter uma ideia de encontro pelo ID
router.get('/:id', getDateIdeaById);

// Atualizar uma ideia de encontro
router.put('/:id', updateDateIdea);

// Deletar uma ideia de encontro
router.delete('/:id', deleteDateIdea);

export default router;
