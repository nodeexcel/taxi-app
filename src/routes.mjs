import express from 'express';
import bodyParser from 'body-parser';
import * as UserController from './controllers/user.mjs';

import { errorHandler } from './helpers/errorhandler.mjs';

const router = express.Router();
export default router;


router.post('/user/create', errorHandler(UserController.create));
router.post('/user/login',errorHandler(UserController.login));