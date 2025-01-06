import express from 'express';
import { body } from 'express-validator';

import orderController from '../controllers/order.js';
import { isAuth, isAdmin } from '../middleware/is-auth.js';

const router = express.Router();

router.route('/orders')
  .all(isAuth)
  .get(orderController.getOrders)
  .post(orderController.postOrder);
router.route('/orders/:id')
  .get(isAuth, orderController.getOrderById)
  .patch(isAdmin, orderController.updateOrderById)
  .delete(isAdmin, orderController.deleteOrderById);

export default router;
