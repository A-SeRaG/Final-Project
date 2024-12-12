import { validationResult } from 'express-validator';
import { User } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';
import bcrypt from 'bcryptjs';

const userController = {
	getUsers(req, res, next) {
		User.findAll().then((users) => {
			return res.status(200).json({
				users: users
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},

	getUserById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return User.findOne({ where: { id: id } }).then((user) => {
			if (!user) {
				throw new WebError('User not found', 404);
			}
			return res.status(200).json({
				user: user
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},
	postUser(req, res, next) {
		const result = validationResult(req);
		const roles = ['customer', 'admin'];

		if (!result.isEmpty()) {
			return res.status(400).json({ error: extractMessage(result.array()) });
		}

		const { name, email, password, role } = req.body;

		if (!roles.includes(role)) {
			throw new WebError('Not a valid role', 400);
		}

		return bcrypt.genSalt(10)
			.then((salt) => {
				bcrypt.hash(password, salt)
					.then((hashedPassword) => {
						User.create({
							name: name,
							email: email,
							password: hashedPassword,
							role: role
						})
							.then((newUser) => {
								return res.status(201).json({
									message: 'User created successfully',
									user: newUser
								});
							})
							.catch((err) => {
								if (!err.statusCode) {
									err.statusCode = 500;
								}
								next(err);
							});
					})
					.catch((err) => {
						if (!err.statusCode) {
							err.statusCode = 500;
						}
						next(err);
					});
			})
			.catch((err) => {
				if (!err.statusCode) {
					err.statusCode = 500;
				}
				next(err);
			});
	},

	deleteUserById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return User.destroy({ where: { id: id } }).then((user) => {
			if (!user) {
				throw new WebError('User not found', 404);
			}
			return res.status(200).json({
				message: 'User deleted successfully',
			});
		}).catch((err) => {
			if (!err.statusCode) {
				err.statusCode = 500;
			}
			next(err);
		});
	},
	updateUserById(req, res, next) {
		const id = req.params.id;
		if (!id || !Number(id)) {
			throw new WebError('Not a valid Id', 400);
		}
		return User.findOne({ where: { id: id } }).then((user) => {
			if (!user) {
				throw new WebError('User not found', 404);
			}
			user.update(req.body).then((updatedUser) => {
				if (!updatedUser) {
					throw new WebError('Error while updating user', 404);
				}
				return res.status(200).json({
					user: updatedUser
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

export default userController;
