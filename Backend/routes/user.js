import express from 'express';
import { body } from 'express-validator';

import userController from '../controllers/user.js';
import { User } from '../models/index.js';
import { isAuth, isAdmin } from '../middleware/is-auth.js';

const router = express.Router();

router.route('/users')
  .all(isAdmin)
  .get(userController.getUsers)
  .post(
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
      body('role')
        .trim()
        .notEmpty()
        .withMessage('Not a valid role'),
    ],
    userController.postUser);

router.route('/users/:id')
  .all(isAdmin)
  .get(userController.getUserById)
  .patch(userController.updateUserById)
  .delete(userController.deleteUserById);

export default router;
