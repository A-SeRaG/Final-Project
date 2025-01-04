import { validationResult } from 'express-validator';
import { OrderItem } from '../models/index.js';
import { Order } from '../models/index.js';
import { Product } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const orderItemController = {
	getOrderItems(req, res, next) {
		return OrderItem.findAll().then((orderItems) => {
			return res.status(200).json({
				orderItems: orderItems
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	getOrderItemById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return OrderItem.findOne({ where: { id: id } }).then((orderItem) => {
			if (!orderItem) {
				throw new WebError('Order item not found', 404);
			}
			return res.status(200).json({
				orderItem: orderItem
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	postOrderItem(req, res, next) {
		const result = validationResult(req);

		if (!result.isEmpty()) {
			return res.status(400).json({ error: extractMessage(result.array()) });
		}

		const { orderId, productId, quantity, price } = req.body;

		return Promise.all([
			Order.findOne({ where: { id: orderId } }),
			Product.findOne({ where: { id: productId } })
		])
			.then(([order, product]) => {
				if (!order) {
					throw new WebError('orderId is not associated with a valid order', 400);
				}

				if (!product) {
					throw new WebError('productId is not associated with a valid product', 400);
				}

				return OrderItem.create({
					orderId: orderId,
					productId: productId,
					quantity: quantity,
					price: price,
				});
			})
			.then((newOrderItem) => {
				return res.status(201).json({
					message: 'Order item created successfully',
					orderItem: newOrderItem
				});
			})
			.catch((err) => {
				if (!err.statusCode) {
					err.statusCode = 500;
				}

				next(err);
			});
	},

	deleteOrderItemById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return OrderItem.destroy({ where: { id: id } }).then((orderItem) => {
			if (!orderItem) {
				throw new WebError('Order item not found', 404);
			}
			return res.status(200).json({
				message: 'Order item deleted successfully',
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	updateOrderItemById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return OrderItem.findOne({ where: { id: id } }).then((orderItem) => {
			if (!orderItem) {
				throw new WebError('OrderItem not found', 404);
			}
			orderItem.update(req.body).then((updatedOrderItem) => {
				if (!updatedOrderItem) {
					throw new WebError('Error while updating orderItem', 404);
				}
				return res.status(200).json({
					orderItem: updatedOrderItem
				});
			}).catch((err) => {
				if (!err.statusCode) {
					err.statusCode = 500;
				}
				next(err);
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},
};

export default orderItemController;
