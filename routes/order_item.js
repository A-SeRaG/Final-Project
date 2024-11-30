import express from 'express';
import { body } from 'express-validator';

import orderItemController from '../controllers/order_item.js';

const router = express.Router();

router.get('/order-items/:id', orderItemController.getOrderItemById);
router.get('/order-items', orderItemController.getOrderItems);
router.post('/order-items',
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
router.delete('/order-items/:id', orderItemController.deleteOrderItemById);

export default router;
