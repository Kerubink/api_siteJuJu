// adventureStat.controller.js
import AdventureStat from '../models/adventureStats.model.js';
import Location from '../models/location.model.js'; 
import DateIdea from '../models/dateIdeas.model.js'; 
import Movie from '../models/movie.model.js'; 
import Plan from '../models/plans.model.js'; 

// Criar uma nova estatística de aventura
export const createAdventureStat = async (req, res) => {
  try {
    const adventureStat = await AdventureStat.create(req.body);
    res.status(201).json(adventureStat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter todas as estatísticas de aventura
export const getAdventureStats = async (req, res) => {
  try {
    const adventureStats = await AdventureStat.findAll({
      include: [
        { model: Location, as: 'location' },  // Usando o alias definido
        { model: DateIdea, as: 'dateIdea' },   // Usando o alias definido
        { model: Movie, as: 'movie' },          // Usando o alias definido
        { model: Plan, as: 'plan' },            // Usando o alias definido
      ],
    });
    res.status(200).json(adventureStats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter uma estatística de aventura pelo ID
export const getAdventureStatById = async (req, res) => {
  try {
    const adventureStat = await AdventureStat.findByPk(req.params.id, {
      include: [
        { model: Location, as: 'location' }, 
        { model: DateIdea, as: 'dateIdea' },
        { model: Movie, as: 'movie' },
        { model: Plan, as: 'plan' },
      ],
    });
    if (!adventureStat) {
      return res.status(404).json({ message: 'Estatística de aventura não encontrada' });
    }
    res.status(200).json(adventureStat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar uma estatística de aventura
export const updateAdventureStat = async (req, res) => {
  try {
    const adventureStat = await AdventureStat.findByPk(req.params.id);
    if (!adventureStat) {
      return res.status(404).json({ message: 'Estatística de aventura não encontrada' });
    }
    const updatedAdventureStat = await adventureStat.update(req.body);
    res.status(200).json(updatedAdventureStat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar uma estatística de aventura
export const deleteAdventureStat = async (req, res) => {
  try {
    const adventureStat = await AdventureStat.findByPk(req.params.id);
    if (!adventureStat) {
      return res.status(404).json({ message: 'Estatística de aventura não encontrada' });
    }
    await adventureStat.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
