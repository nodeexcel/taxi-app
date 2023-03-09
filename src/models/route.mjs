import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import DriverProfile from './driverProfile.mjs';

class Route extends Model {}
export default Route;

Route.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    routeStart: {
      type: DataTypes.GEOMETRY,
    },
    routeEnd: {
      type: DataTypes.GEOMETRY,
    },
    scheduleDate: {
      type: DataTypes.DATE,
    },
    active: {
      type: DataTypes.BOOLEAN,
    },
    driverId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Route',
    tableName: 'route',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Route.belongsTo(DriverProfile,{
  foreignKey:'driverId'
})

