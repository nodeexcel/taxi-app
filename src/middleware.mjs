import jwt from 'jsonwebtoken';
import User from './models/user.mjs';
import UserProfile from './models/userProfile.mjs';

const { JWT_SECRET_KEY } = process.env;

// eslint-disable-next-line no-unused-vars
export const globalErrorHandler = (error, req, res, _next) => {
  console.error(`Err in ${req.url}`, error);
  return res
    .status(error.status || 500)
    .json({ error: { success: false, message: error.message || 'An expected error occurred' } });
};

export const authenticateUser = async (req, res, next) => {
  if (!req.header('authorization')) {
    return res
      .status(401)
      .json({ success: false, message: 'Token missing or malformed Please pass authorization' });
  }
  const token = req.header('authorization').replace(/^Bearer\s+/, '');
  const decode = jwt.verify(token, JWT_SECRET_KEY);
  if (decode) {
    const { sub: userId } = decode;
    const user = await User.findOne({
      where: { id: userId },
      include: [{ model: UserProfile }],
    });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized you are not allowed to access the resource',
      });
    }
    req.user = user;
    next();
  } else {
    return res
      .status(401)
      .json({ success: false, message: 'Token missing or malformed Please pass authorization' });
  }
};
