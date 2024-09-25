import Movie from '../models/movie.model.js';

// Criar um novo filme
export const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter todos os filmes
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um filme pelo ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar um filme
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    const updatedMovie = await movie.update(req.body);
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um filme
export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }
    await movie.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
