import DateIdea from '../models/dateIdeas.model.js';

// Criar uma nova ideia de encontro
export const createDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.create(req.body);
    res.status(201).json(dateIdea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter todas as ideias de encontro
export const getDateIdeas = async (req, res) => {
  try {
    const dateIdeas = await DateIdea.findAll();
    res.status(200).json(dateIdeas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter uma ideia de encontro pelo ID
export const getDateIdeaById = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findByPk(req.params.id);
    if (!dateIdea) {
      return res.status(404).json({ message: 'Ideia de encontro não encontrada' });
    }
    res.status(200).json(dateIdea);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar uma ideia de encontro
export const updateDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findByPk(req.params.id);
    if (!dateIdea) {
      return res.status(404).json({ message: 'Ideia de encontro não encontrada' });
    }
    const updatedDateIdea = await dateIdea.update(req.body);
    res.status(200).json(updatedDateIdea);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar uma ideia de encontro
export const deleteDateIdea = async (req, res) => {
  try {
    const dateIdea = await DateIdea.findByPk(req.params.id);
    if (!dateIdea) {
      return res.status(404).json({ message: 'Ideia de encontro não encontrada' });
    }
    await dateIdea.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
