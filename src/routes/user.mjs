import express from 'express';
import * as UserController from '../controllers/user.mjs';
import fileService from '../services/multerService.mjs';
import { errorHandler } from '../helpers/errorHandler.mjs';
import { authenticateUser } from '../middleware.mjs';
import userValidators from '../validators/userValidators.mjs';

const router = express.Router();

router.get('/', authenticateUser, errorHandler(UserController.getUser));

router.post(
  '/create',
  errorHandler(userValidators.postUserCreate),
  errorHandler(UserController.create),
);
router.post(
  '/login',
  errorHandler(userValidators.postUserLogin),
  errorHandler(UserController.login),
);
router.put(
  '/update',
  errorHandler(userValidators.putUserUpdate),
  authenticateUser,
  errorHandler(UserController.updateUser),
);
router.put(
  '/userprofile',
  errorHandler(userValidators.putUserProfile),
  authenticateUser,
  errorHandler(UserController.updateUserProfile),
);

router.post(
  '/userprofilepicture',
  authenticateUser,
  errorHandler(fileService.single('profileImage')),
  errorHandler(UserController.updateUserProfilePicture),
);

export default router;
