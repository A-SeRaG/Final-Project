import express from 'express';
import { body } from 'express-validator';

import orderItemController from '../controllers/order_item.js';
import { isAuth, isAdmin } from '../middleware/is-auth.js';

const router = express.Router();

router.route('/cart')
  .all(isAuth)
  .get(orderItemController.getCart)
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
    orderItemController.postCart);

router.route('/order-items')
  .all(isAuth)
  .get(orderItemController.getOrderItems)

router.route('/order-items/:id')
  .all(isAuth)
  .get(orderItemController.getOrderItemById)
  .patch(orderItemController.updateOrderItemById)
  .delete(orderItemController.deleteOrderItemById);

export default router;
