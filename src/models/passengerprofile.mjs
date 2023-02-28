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
    preferredArea: {
      type: DataTypes.STRING,
    },
    totalTrips: {
      type: DataTypes.NUMBER,
    },
    successFullTrips: {
      type: DataTypes.NUMBER,
    },
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
