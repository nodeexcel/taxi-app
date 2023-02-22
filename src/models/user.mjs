import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db.mjs';
import UserProfile from './userProfile.mjs';


class User extends Model {}
export default User;

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    phoneNo: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'User',
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  },
);
User.hasOne(UserProfile, {
  foreignKey: 'userId',
});

