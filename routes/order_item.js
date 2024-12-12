import express from 'express';
import { body } from 'express-validator';

import orderItemController from '../controllers/order_item.js';

const router = express.Router();

router.route('/order-items')
  .get(orderItemController.getOrderItems)
  .post(
    [
      body('orderId')
        .trim()
        .notEmpty()
        .isInt()
        .withMessage('Not a valid order id'),
      body('productId')
        .trim()
        .notEmpty()
        .isInt()
        .withMessage('Not a valid product id'),
      body('quantity')
        .trim()
        .notEmpty()
        .isFloat()
        .withMessage('Not a valid quantity'),
      body('price')
        .trim()
        .notEmpty()
        .isFloat()
        .withMessage('Not a valid price'),
    ],
    orderItemController.postOrderItem);

router.route('/order-items/:id',)
  .get(orderItemController.getOrderItemById)
  .patch(orderItemController.updateOrderItemById)
  .delete(orderItemController.deleteOrderItemById);

export default router;
