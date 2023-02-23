import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.mjs';
import httpErrors from 'http-errors';
import UserProfile from '../models/userProfile.mjs';
import * as Helpers from '../helpers/validationHelpers.mjs';

const { JWT_SECRET_KEY } = process.env;
const INVALID_CRED = 'Invalid Email or Password';

export const create = async (req, res) => {
  const { username, password, email, phoneNo, firstname, lastname } = req.body;

  const { success, message } = await Helpers.validateUserInputs(email, phoneNo);
  if (!success) {
    return res.status(400).json({ success, message });
  }

  const hashedPassword = await bcrypt.hash(password || '', 10);

  const user = await User.create({
    username,
    password: hashedPassword,
    email: email.trim().toLowerCase(),
    phoneNo,
  });

  await UserProfile.create({
    firstname: firstname,
    lastname: lastname,
    userId: user.id,
  });

  const response = await User.findOne({
    where: { id: user.id },
    include: [{ model: UserProfile }],
  });

  const token = jwt.sign(
    {
      sub: user.id,
      userName: user.username,
    },
    JWT_SECRET_KEY,
  );

  res.status(201).json({ success: true, token, user: response });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!Helpers.isValidEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  }
  const user = await User.findOne({
    attributes: ['id', 'email', 'password', 'username'],
    where: { email: email },
    include: [{ model: UserProfile }],
  });

  if (!user) {
    throw new httpErrors.BadRequest(INVALID_CRED);
  }
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new httpErrors.BadRequest(INVALID_CRED);

  // Remove password property from user object
  delete user.dataValues.password;

  const token = jwt.sign(
    {
      sub: user.id,
      userName: user.username,
    },
    JWT_SECRET_KEY,
  );

  res.status(200).json({ success: true, token, user });
};

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const update = req.body;

  const { success, message } = await Helpers.validateUserInputs(update.email, update.phoneNo);
  if (!success) {
    return res.status(400).json({ success, message });
  }
  //update user with given data
  await User.update({ update, where: { id: userId } });

  const user = await User.findOne({
    where: { id: userId },
    include: [{ model: UserProfile }],
  });

  res.status(200).json({ success: true, user });
};

export const updateUserProfile = async (req, res) => {
  const { userId } = req.params;
  const update = req.body;

  //update user with given data
  await UserProfile.update({ update, where: { userId: userId } });

  const user = await User.findOne({
    where: { id: userId },
    include: [{ model: UserProfile }],
  });

  res.status(200).json({ success: true, user });
};
