import express from 'express';
import { body } from 'express-validator';

import productController from '../controllers/product.js';

const router = express.Router();

router.route('/products')
  .get(productController.getProducts)
  .post(
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
  .patch(productController.updateProductById)
  .delete(productController.deleteProductById);

export default router;
