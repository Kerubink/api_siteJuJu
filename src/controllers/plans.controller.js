import Plan from '../models/plans.model.js';

// Criar um novo plano
export const createPlan = async (req, res) => {
  try {
    const plan = await Plan.create(req.body);
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Obter todos os planos
export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.findAll();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obter um plano pelo ID
export const getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Atualizar um plano
export const updatePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    const updatedPlan = await plan.update(req.body);
    res.status(200).json(updatedPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Deletar um plano
export const deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findByPk(req.params.id);
    if (!plan) {
      return res.status(404).json({ message: 'Plano não encontrado' });
    }
    await plan.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
