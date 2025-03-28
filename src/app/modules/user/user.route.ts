import express from 'express';
import { UserController } from './user.controller';

import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
const router = express.Router();

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.handleCreateUser
);

export const UserRoutes = router;
