import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../connectionDb';
import { IStateDetails } from '../../types/api-data';

export const StatesSchema = sequelize.define<Model<IStateDetails, Optional<IStateDetails, 'id'>>>(
  'states',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postal: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
