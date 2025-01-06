import { validationResult } from 'express-validator';
import { Order, OrderItem, User, Product } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const orderController = {
	async getOrders(req, res, next) {
		try {
			const orders = await Order.findAll({ where: { userId: req.userId } });
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
			const { userId: customerId } = req;
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

	async checkoutOrder(req, res, next) {
		try {
			const userId = req.userId;

			const order = await Order.findOne({ where: { userId, status: 'Pending' } });
			if (!order) {
				throw new WebError('No pending cart found', 400);
			}

			if (order.totalPrice === 0) {
				throw new WebError('No items added to cart', 400);
			}
			const items = await OrderItem.findAll({ where: { orderId: order.id } });
			for (const item of items) {
				const product = await Product.findOne({ where: { id: item.productId } });
				if (product.stock < item.quantity) {
					throw new WebError(`Insufficient stock for product: ${product.name}`, 400);
				}
				await product.update({ stock: product.stock - item.quantity });
			}

			await order.update({ status: 'Shipped' });

			res.status(200).json({ message: 'Order checked out successfully', order });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

};

export default orderController;
