import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';
import Location from './location.model.js'; 
import DateIdea from './dateIdeas.model.js'; 
import Movie from './movie.model.js'; 
import Plan from './plans.model.js'; 

const AdventureStat = sequelize.define('AdventureStat', {
  locationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Location, // Referenciando o modelo Location
      key: 'id',
    },
  },
  dateIdeaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: DateIdea, // Referenciando o modelo DateIdea
      key: 'id',
    },
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Movie, // Referenciando o modelo Movie
      key: 'id',
    },
  },
  planId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Plan, // Referenciando o modelo Plan
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

// Definindo as relações
AdventureStat.belongsTo(Location, { foreignKey: 'locationId', as: 'location' });
AdventureStat.belongsTo(DateIdea, { foreignKey: 'dateIdeaId', as: 'dateIdea' });
AdventureStat.belongsTo(Movie, { foreignKey: 'movieId', as: 'movie' });
AdventureStat.belongsTo(Plan, { foreignKey: 'planId', as: 'plan' });

export default AdventureStat;
