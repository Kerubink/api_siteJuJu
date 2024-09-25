import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const DateIdea = sequelize.define('DateIdea', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

export default DateIdea;
