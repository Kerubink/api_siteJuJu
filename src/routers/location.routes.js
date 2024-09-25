import express from 'express';
import {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} from '../controllers/location.controller.js';

const router = express.Router();

router.get('/', getLocations);

// Criar uma nova localização
router.post('/', createLocation);

// Obter uma localização pelo ID
router.get('/:id', getLocationById);

// Atualizar uma localização
router.put('/:id', updateLocation);

// Deletar uma localização
router.delete('/:id', deleteLocation);

export default router;
