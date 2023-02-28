import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
// import DriverProfile from './driverProfile.mjs';
import PassengerProfile from './passengerprofile.mjs';
import Trips from './trips.mjs';


class Parcel extends Model {}
export default Parcel;

Parcel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    dimension: {
      type: DataTypes.STRING,
    },
    dropLocation: {
      type: DataTypes.STRING,
    },
    originImage: {
      type: DataTypes.STRING,
    },
    destinationImage: {
      type: DataTypes.STRING,
    },
    // driverId: {
    //   type: DataTypes.UUID,
    // },
    passengerId: {
      type: DataTypes.UUID,
    },
    tripId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Parcel',
    tableName: 'parcel',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
// Parcel.belongsTo(DriverProfile,{
//   foreignKey:'driverId'
// })
Parcel.belongsTo(PassengerProfile,{
  foreignKey:'passengerId'
})

Parcel.belongsTo(Trips,{
  foreignKey:'tripId'
})
