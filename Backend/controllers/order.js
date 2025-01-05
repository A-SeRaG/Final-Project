import { validationResult } from 'express-validator';
import { Order, OrderItem, User } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const orderController = {
	async getOrders(req, res, next) {
		try {
			const query = req.role === 'customer' ? { where: { userId: req.userId } } : {};
			const orders = await Order.findAll(query);
			res.status(200).json({ orders });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async getOrderById(req, res, next) {
		try {
			const { id } = req.params;
			const userId = req.userId;

			if (!id || isNaN(id)) {
				throw new WebError('Not a valid Id', 400);
			}

			const order = await Order.findOne({ where: { id } });

			if (!order) {
				throw new WebError('Order not found', 404);
			}

			if (req.role === 'customer' && order.userId !== userId) {
				throw new WebError('Not authorized.', 403);
			}

			res.status(200).json({ order });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async postOrder(req, res, next) {
		try {
			const statuses = ['Pending', 'Shipped', 'Delivered', 'Canceled'];
			const { role, userId: customerId } = req;
			const { userId, totalPrice, status } = req.body;

			if (role === 'customer') {
				const order = await Order.findOne({ where: { userId: customerId, status: 'Pending' } });
				if (order) {
					throw new WebError('Cart already exists', 400);
				}
				const newOrder = await Order.create({
					userId: customerId,
					totalPrice: 0,
					status: 'Pending',
				});
				return res.status(201).json({ message: 'Order created successfully', order: newOrder });
			}

			if (!statuses.includes(status)) {
				throw new WebError('Not a valid status', 400);
			}
			if (typeof totalPrice !== 'number') {
				throw new WebError('Not a valid price', 400);
			}

			const user = await User.findOne({ where: { id: userId } });
			if (!user) {
				throw new WebError('User not found', 404);
			}

			const newOrder = await Order.create({ userId, totalPrice, status });
			res.status(201).json({ message: 'Order created successfully', order: newOrder });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async deleteOrderById(req, res, next) {
		try {
			const { id } = req.params;
			if (!id || isNaN(id)) {
				throw new WebError('Not a valid Id', 400);
			}

			const deleted = await Order.destroy({ where: { id } });
			if (!deleted) {
				throw new WebError('Order not found', 404);
			}

			res.status(200).json({ message: 'Order deleted successfully' });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async updateOrderById(req, res, next) {
		try {
			const { id } = req.params;
			if (!id || isNaN(id)) {
				throw new WebError('Not a valid Id', 400);
			}

			const order = await Order.findOne({ where: { id } });
			if (!order) {
				throw new WebError('Order not found', 404);
			}

			const updatedOrder = await order.update(req.body);
			res.status(200).json({ order: updatedOrder });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},
};

export default orderController;
