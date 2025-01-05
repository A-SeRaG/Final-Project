import express from 'express';
import { body } from 'express-validator';

import productController from '../controllers/product.js';
import { isAuth, isAdmin } from '../middleware/is-auth.js';

const router = express.Router();

router.route('/products')
  .get(productController.getProducts)
  .post(
    isAdmin,
    [
      body('name')
        .trim()
        .notEmpty()
        .withMessage('Not a valid name'),
      body('description')
        .trim()
        .notEmpty()
        .withMessage('Not a valid description'),
      body('price')
        .trim()
        .notEmpty()
        .isFloat()
        .withMessage('Not a valid price'),
      body('category')
        .trim()
        .notEmpty()
        .withMessage('Not a valid category'),
      body('stock')
        .trim()
        .notEmpty()
        .isFloat()
        .withMessage('Not a valid stock'),
      body('imageURL')
        .trim()
        .notEmpty()
        .withMessage('Not a valid imageURL'),

    ],
    productController.postProduct);

router.route('/products/:id')
  .get(productController.getProductById)
  .patch(isAdmin, productController.updateProductById)
  .delete(isAdmin, productController.deleteProductById);

export default router;
