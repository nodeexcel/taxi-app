import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import DriverProfile from './driverProfile.mjs';
import PassengerProfile from './passengerprofile.mjs';

class Trips extends Model {}
export default Trips;

Trips.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    status: {
      type: DataTypes.STRING,
    },
    origin: {
      type: DataTypes.GEOMETRY,
    },
    destination: {
      type: DataTypes.GEOMETRY,
    },
    tripTime: {
      type: DataTypes.TIME,
    },
    driverId: {
      type: DataTypes.UUID,
    },
    passengerId: {
      type: DataTypes.UUID,
    },
    // routeId: {
    //   type: DataTypes.UUID,
    // },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Trips',
    tableName: 'trips',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
Trips.belongsTo(DriverProfile,{
  foreignKey:'driverId'
})
Trips.belongsTo(PassengerProfile,{
  foreignKey:'passengerId'
})
