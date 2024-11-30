import { validationResult } from 'express-validator';
import Order from '../models/order.js';
import User from '../models/user.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const orderController = {
	getOrders(req, res, next) {
		return Order.findAll().then((orders) => {
			return res.status(200).json({
				orders: orders
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	getOrderById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return Order.findOne({ where: { id: id } }).then((order) => {
			if (!order) {
				throw new WebError('Order not found', 404);
			}
			return res.status(200).json({
				order: order
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	postOrder(req, res, next) {
		const result = validationResult(req);
		const statuses = ['Pending', 'Shipped', 'Delivered', 'Canceled'];

		if (!result.isEmpty()) {
			return res.status(400).json({ error: extractMessage(result.array()) });
		}

		const { userId, totalPrice, status } = req.body;

		if (!statuses.includes(status)) {
			return next(new WebError('Not a valid status', 400));
		}

		return User.findOne({ where: { id: userId } })
			.then((user) => {
				if (!user) {
					throw new WebError('User not found', 404);
				}

				return Order.create({
					userId: userId,
					totalPrice: totalPrice,
					status: status
				});
			})
			.then((newOrder) => {
				return res.status(201).json({
					message: 'Order created successfully',
					order: newOrder
				});
			})
			.catch((err) => {
				if (!err.statusCode) {
					err.statusCode = 500;
				}
				next(err);
			});
	},

	deleteOrderById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return Order.destroy({ where: { id: id } }).then((order) => {
			if (!order) {
				throw new WebError('Order not found', 404);
			}
			return res.status(200).json({
				message: 'Order deleted successfully',
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	}
};

export default orderController;
