import { DataTypes } from 'sequelize';
import sequelize from '../database/config.js';

const DateModel = sequelize.define('Date', {
  event: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default DateModel;
