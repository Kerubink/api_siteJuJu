import express from 'express';
import {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
} from '../controllers/location.controller.js';

const router = express.Router();

router.post('/location', createLocation);
router.get('/locations', getLocations);
router.get('/location/:id', getLocationById);
router.put('/location/:id', updateLocation);
router.delete('/location/:id', deleteLocation);

export default router;
