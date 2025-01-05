import { validationResult } from 'express-validator';
import { OrderItem } from '../models/index.js';
import { Order } from '../models/index.js';
import { Product } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';

const orderItemController = {
	async getOrderItems(req, res, next) {
		try {
			const userId = req.userId;
			let orderItems
			if (req.role === 'admin') {
				orderItems = await OrderItem.findAll();
			} else {
				const order = await Order.findOne({ where: { userId, status: 'Pending' } });
				if (order) {
					orderItems = await OrderItem.findAll({ where: { orderId: order.id } });
				} else {
					orderItems = [];
				}
			}
			res.status(200).json({ orderItems });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async getOrderItemById(req, res, next) {
		try {
			const id = req.params.id;
			const userId = req.userId;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const orderItem = await OrderItem.findOne({ where: { id } });

			if (!orderItem) {
				throw new WebError('Order item not found', 404);
			}

			const order = await Order.findOne({ where: { id: orderItem.orderId } });


			if (req.role === 'customer' && order.userId !== userId) {
				throw new WebError('Not authorized.', 403);
			}

			res.status(200).json({ orderItem });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async postOrderItem(req, res, next) {
		try {
			const result = validationResult(req);
			if (!result.isEmpty()) {
				return res.status(400).json({ error: extractMessage(result.array()) });
			}

			const { productId, quantity } = req.body;
			const userId = req.userId;

			let order = await Order.findOne({ where: { userId, status: 'Pending' } });

			if (!order) {
				order = await Order.create({ userId, totalPrice: 0, status: 'Pending' });
			}

			const product = await Product.findOne({ where: { id: productId } });
			if (!product) {
				throw new WebError('Product not found', 400);
			}

			const newOrderItem = await OrderItem.create({ orderId: order.id, productId, quantity });

			await updatePrice(order);

			res.status(201).json({
				message: 'Order item added successfully',
				orderItem: newOrderItem,
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async deleteOrderItemById(req, res, next) {
		try {
			const id = req.params.id;
			const userId = req.userId;

			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}
			const orderItem = await OrderItem.findOne({ where: { id } });

			if (!orderItem) {
				throw new WebError('Order item not found', 404);
			}

			const order = await Order.findOne({ where: { id: orderItem.orderId } });


			if (req.role === 'customer' && order.userId !== userId) {
				throw new WebError('Not authorized.', 403);
			}

			await orderItem.destroy();

			await updatePrice(order);

			res.status(200).json({ message: 'Order item deleted successfully' });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async updateOrderItemById(req, res, next) {
		try {
			const id = req.params.id;
			const userId = req.userId;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const orderItem = await OrderItem.findOne({ where: { id } });

			if (!orderItem) {
				throw new WebError('Order item not found', 404);
			}
			const order = await Order.findOne({ where: { id: orderItem.orderId } });


			if (req.role === 'customer' && order.userId !== userId) {
				throw new WebError('Not authorized.', 403);
			}


			const updatedOrderItem = await orderItem.update(req.body);
			updatePrice(order);

			res.status(200).json({ orderItem: updatedOrderItem });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},
};

async function updatePrice(order) {
	const items = await OrderItem.findAll({
		where: { orderId: order.id },
		include: [{
			model: Product,
			attributes: ['price'],
		}]
	});

	const total = items.reduce((sum, item) => sum + (item.quantity * item.Product.price), 0);

	order.totalPrice = total || 0;
	await order.save();
};

export default orderItemController;
