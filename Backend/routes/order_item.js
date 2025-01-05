import express from 'express';
import { body } from 'express-validator';

import orderItemController from '../controllers/order_item.js';
import { isAuth, isAdmin } from '../middleware/is-auth.js';

const router = express.Router();

router.route('/order-items')
  .all(isAuth)
  .get(orderItemController.getOrderItems)
  .post(
    [
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
    ],
    orderItemController.postOrderItem);

router.route('/order-items/:id')
  .all(isAuth)
  .get(orderItemController.getOrderItemById)
  .patch(orderItemController.updateOrderItemById)
  .delete(orderItemController.deleteOrderItemById);

export default router;
