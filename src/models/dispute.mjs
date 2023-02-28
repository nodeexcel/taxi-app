import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import Trips from './trips.mjs';
class Dispute extends Model {}
export default Dispute;

Dispute.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    status: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    tripId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Dispute',
    tableName: 'dispute',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Dispute.belongsTo(Trips,{
  foreignKey:'tripId'
})

