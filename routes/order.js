import express from 'express';
import { body } from 'express-validator';

import orderController from '../controllers/order.js';

const router = express.Router();

router.get('/orders/:id', orderController.getOrderById);
router.get('/orders', orderController.getOrders);
router.post('/orders',
  [
    body('userId')
      .trim()
      .notEmpty()
      .isInt()
      .withMessage('Not a valid user id'),
    body('totalPrice')
      .trim()
      .notEmpty()
      .withMessage('Not a valid price'),
    body('status')
      .trim()
      .notEmpty()
      .withMessage('Not a valid status'),
  ],
  orderController.postOrder);
router.delete('/orders/:id', orderController.deleteOrderById);

export default router;
