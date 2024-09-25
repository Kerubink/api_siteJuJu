import DateModel from '../models/date.model.js';

// Criar uma nova data
export const createDate = async (req, res) => {
  try {
    const date = await DateModel.create(req.body);
    res.status(201).json(date);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter todas as datas
export const getDates = async (req, res) => {
  try {
    const dates = await DateModel.findAll();
    res.status(200).json(dates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter uma data pelo ID
export const getDateById = async (req, res) => {
  try {
    const date = await DateModel.findByPk(req.params.id);
    if (!date) {
      return res.status(404).json({ message: 'Data não encontrada' });
    }
    res.status(200).json(date);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar uma data
export const updateDate = async (req, res) => {
  try {
    const date = await DateModel.findByPk(req.params.id);
    if (!date) {
      return res.status(404).json({ message: 'Data não encontrada' });
    }
    const updatedDate = await date.update(req.body);
    res.status(200).json(updatedDate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar uma data
export const deleteDate = async (req, res) => {
  try {
    const date = await DateModel.findByPk(req.params.id);
    if (!date) {
      return res.status(404).json({ message: 'Data não encontrada' });
    }
    await date.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
