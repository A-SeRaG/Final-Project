import { validationResult } from 'express-validator';
import Product from '../models/product.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const productController = {
	getProducts(req, res, next) {
		return Product.findAll().then((products) => {
			return res.status(200).json({
				products: products
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	getProductById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return Product.findOne({ where: { id: id } }).then((product) => {
			if (!product) {
				throw new WebError('Product not found', 404);
			}
			return res.status(200).json({
				product: product
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	postProduct(req, res, next) {
		const result = validationResult(req);
		if (!result.isEmpty()) {
			return res.status(400).json({ error: extractMessage(result.array()) });
		}
		const { name, description, price, category, stock, imageURL } = req.body;
		return Product.create({
			name: name, description: description, price: price,
			category: category, stock: stock, imageURL: imageURL
		}).then((newProduct) => {
			return res.status(201).json({
				message: 'Product created successfully',
				product: newProduct
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	deleteProductById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return Product.destroy({ where: { id: id } }).then((product) => {
			if (!product) {
				throw new WebError('Product not found', 404);
			}
			return res.status(200).json({
				message: 'Product deleted successfully',
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	}
};

export default productController;
