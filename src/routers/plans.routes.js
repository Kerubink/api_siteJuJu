import express from 'express';
import {
  createPlan,
  getPlans,
  getPlanById,
  updatePlan,
  deletePlan,
} from '../controllers/plans.controller.js';

const router = express.Router();

// Criar um novo plano
router.post('/', createPlan);

// Obter todos os planos
router.get('/', getPlans);

// Obter um plano pelo ID
router.get('/:id', getPlanById);

// Atualizar um plano
router.put('/:id', updatePlan);

// Deletar um plano
router.delete('/:id', deletePlan);

export default router;
