import { validationResult } from 'express-validator';
import { Product } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const productController = {
	async getProducts(req, res, next) {
		try {
			const products = await Product.findAll();
			res.status(200).json({ products });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async getProductById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const product = await Product.findOne({ where: { id } });
			if (!product) {
				throw new WebError('Product not found', 404);
			}

			res.status(200).json({ product });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async postProduct(req, res, next) {
		try {
			const result = validationResult(req);
			if (!result.isEmpty()) {
				return res.status(400).json({ error: extractMessage(result.array()) });
			}

			const { name, description, price, category, stock, imageURL } = req.body;

			const newProduct = await Product.create({
				name,
				description,
				price,
				category,
				stock,
				imageURL,
			});

			res.status(201).json({
				message: 'Product created successfully',
				product: newProduct,
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async deleteProductById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const deletedProduct = await Product.destroy({ where: { id } });
			if (!deletedProduct) {
				throw new WebError('Product not found', 404);
			}

			res.status(200).json({ message: 'Product deleted successfully' });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async updateProductById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const product = await Product.findOne({ where: { id } });
			if (!product) {
				throw new WebError('Product not found', 404);
			}

			const updatedProduct = await product.update(req.body);
			res.status(200).json({ product: updatedProduct });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},
};

export default productController;
