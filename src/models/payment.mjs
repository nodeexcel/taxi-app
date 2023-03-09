import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import Trips from './trips.mjs';
class Payment extends Model {}
export default Payment;

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    amount: {
      type: DataTypes.FLOAT,
    },
    tripId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Payment',
    tableName: 'payment',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
payment.belongsTo(Trips,{
  foreignKey:'tripId'
})

