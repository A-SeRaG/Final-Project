import express from 'express';
import { body } from 'express-validator';

import authController from '../controllers/auth.js';
import User from '../models/user.js';

const router = express.Router();

router.post('/signup',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Not a valid name'),
    body('email')
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage('Not a valid email')
      .custom((value, { req }) => {
        return User.findOne({ where: { email: value } }).then((user) => {
          if (user) {
            return Promise.reject('Email address already exists');
          }
        });
      }),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Not a valid password'),
  ],
  authController.signup);

router.post('/login', authController.login);
router.post('/logout', authController.logout);

export default router;
