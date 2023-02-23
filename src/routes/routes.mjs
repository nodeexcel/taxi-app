
import express from 'express';
import * as UserController from '../controllers/user.mjs';

import { errorHandler } from '../helpers/errorhandler.mjs';

const router = express.Router();
export default router;

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: This api will create new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *               - email
 *               - firstname
 *               - lastname
 *             properties:
 *               username: 
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               phoneNo:
 *                 type: string
 *               firstname:
 *                 type: string
 *               lastname:
 *                 type: string
 *     responses:
 *       200:
 *         description: New user is created.
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *       500:
 *         description: Some server error
 *
 */

router.post('/user/create', errorHandler(UserController.create));


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: This api will login the user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email: 
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: user token is generated.
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *       500:
 *         description: Some server error
 *
 */
router.post('/user/login',errorHandler(UserController.login));