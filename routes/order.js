import express from 'express';
import { body } from 'express-validator';

import orderController from '../controllers/order.js';

const router = express.Router();

router.route('/orders')
  .get(orderController.getOrders)
  .post(
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
router.route('/orders/:id')
  .get(orderController.getOrderById)
  .patch(orderController.updateOrderById)
  .delete(orderController.deleteOrderById);

export default router;
