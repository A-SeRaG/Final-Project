import { validationResult } from 'express-validator';
import { User } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';
import bcrypt from 'bcryptjs';

const userController = {
	async getUsers(req, res, next) {
		try {
			const users = await User.findAll();
			res.status(200).json({ users });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async getUserById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const user = await User.findOne({ where: { id } });
			if (!user) {
				throw new WebError('User not found', 404);
			}

			res.status(200).json({ user });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async postUser(req, res, next) {
		try {
			const result = validationResult(req);
			if (!result.isEmpty()) {
				return res.status(400).json({ error: extractMessage(result.array()) });
			}

			const roles = ['customer', 'admin'];
			const { name, email, password, role } = req.body;

			if (!roles.includes(role)) {
				throw new WebError('Not a valid role', 400);
			}

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newUser = await User.create({
				name,
				email,
				password: hashedPassword,
				role,
			});

			res.status(201).json({
				message: 'User created successfully',
				user: newUser,
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async deleteUserById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const deletedUser = await User.destroy({ where: { id } });
			if (!deletedUser) {
				throw new WebError('User not found', 404);
			}

			res.status(200).json({ message: 'User deleted successfully' });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async updateUserById(req, res, next) {
		try {
			const id = req.params.id;
			if (!id || isNaN(Number(id))) {
				throw new WebError('Not a valid Id', 400);
			}

			const user = await User.findOne({ where: { id } });
			if (!user) {
				throw new WebError('User not found', 404);
			}

			const roles = ['customer', 'admin'];

			if (req.body.role && !roles.includes(req.body.role)) {
				throw new WebError('Not a valid role', 400);
			}

			if (req.body.password) {
				const salt = await bcrypt.genSalt(10);
				req.body.password = await bcrypt.hash(req.body.password, salt);
			}


			const updatedUser = await user.update(req.body);
			res.status(200).json({ user: updatedUser });
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},
};

export default userController;
