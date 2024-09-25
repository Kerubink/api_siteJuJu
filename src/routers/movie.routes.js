import express from 'express';
import {
  createMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
} from '../controllers/movie.controller.js';

const router = express.Router();

// Criar um novo filme
router.post('/', createMovie);

// Obter todos os filmes
router.get('/', getMovies);

// Obter um filme pelo ID
router.get('/:id', getMovieById);

// Atualizar um filme
router.put('/:id', updateMovie);

// Deletar um filme
router.delete('/:id', deleteMovie);

export default router;
