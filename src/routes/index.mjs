import express from 'express';
import userRoute from './user.mjs'

const router = express.Router();

router.use('/user',userRoute)

export default router;
