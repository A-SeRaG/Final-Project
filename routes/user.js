import express from 'express';
import { body } from 'express-validator';

import userController from '../controllers/user.js';

const router = express.Router();

router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getUsers);
router.post('/users',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Not a valid name'),
    body('email')
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage('Not a valid email'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Not a valid password'),
    body('role')
      .trim()
      .notEmpty()
      .withMessage('Not a valid role'),
  ],
  userController.postUser);
router.delete('/users/:id', userController.deleteUserById);

export default router;
