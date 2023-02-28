import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import UserProfile from './userProfile.mjs';

class DriverProfile extends Model {}
export default DriverProfile;

DriverProfile.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    isLicenced: {
      type: DataTypes.BOOLEAN,
    },
    licenceNo: {
      type: DataTypes.STRING,
      unique: true,
    },
    totalTrips: {
      type: DataTypes.NUMBER,
    },
    successFullTrips: {
      type: DataTypes.NUMBER,
    },
    address: {
      type: DataTypes.STRING,
    },
    onDuty: {
      type: DataTypes.BOOLEAN,
    },
    // driverRating: {
    //   type: DataTypes.NUMBER,
    // },
    userProfileId: {
      type: DataTypes.UUID,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'DriverProfile',
    tableName: 'driverprofile',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);
DriverProfile.hasOne(UserProfile, {
  foreignKey: 'userProfileId',
});
