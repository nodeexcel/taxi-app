import express from 'express';
import * as UserController from '../controllers/user.mjs';

import { errorHandler } from '../helpers/errorHandler.mjs';
import { authenticateUser } from '../middleware.mjs';
import userValidator from '../validators/userValidator.mjs';

const router = express.Router();

router.get('/user', authenticateUser, errorHandler(UserController.getUser));

router.post(
  '/user/create',
  errorHandler(userValidator.postUserCreate),
  errorHandler(UserController.create),
);
router.post(
  '/user/login',
  errorHandler(userValidator.postUserLogin),
  errorHandler(UserController.login),
);
router.put(
  '/user/update',
  errorHandler(userValidator.putUserUpdate),
  authenticateUser,
  errorHandler(UserController.updateUser),
);
router.put(
  '/user/userprofile',
  errorHandler(userValidator.putUserProfile),
  authenticateUser,
  errorHandler(UserController.updateUserProfile),
);

export default router;
