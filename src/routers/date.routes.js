import express from 'express';
import {
  createDate,
  getDates,
  getDateById,
  updateDate,
  deleteDate,
} from '../controllers/date.controller.js';

const router = express.Router();


router.get('/', getDates);
router.post('/', createDate);
router.get('/:id', getDateById);

// Atualizar uma data
router.put('/:id', updateDate);

// Deletar uma data
router.delete('/:id', deleteDate);

export default router;
