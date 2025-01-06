import { validationResult } from 'express-validator';
import { User } from '../models/index.js';
import WebError from '../utils/webError.js';
import extractMessage from '../utils/extractMessage.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authController = {
	async signup(req, res, next) {
		try {
			const result = validationResult(req);
			if (!result.isEmpty()) {
				return res.status(400).json({ error: extractMessage(result.array()) });
			}

			const { name, email, password } = req.body;

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newUser = await User.create({
				name,
				email,
				password: hashedPassword,
				role: 'customer'
			});

			res.status(201).json({
				message: 'User created successfully',
				user: newUser.email
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},

	async login(req, res, next) {
		try {
			const { email, password } = req.body;

			if (!email) {
				throw new WebError('Please enter an Email', 400);
			}

			if (!password) {
				throw new WebError('Please enter a password', 400);
			}

			const user = await User.findOne({ where: { email } });

			if (!user) {
				throw new WebError('Email not found', 401);
			}

			const isEqual = await bcrypt.compare(password, user.password);

			if (!isEqual) {
				throw new WebError('Wrong password', 401);
			}

			const token = jwt.sign(
				{
					email: user.email,
					role: user.role,
					userId: user.id,
				},
				'jwtSecret',
				{ expiresIn: '1h' }
			);

			res.status(200).json({
				message: 'Logged in successfully',
				token,
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	},
	async logout(req, res, next) {
		try {
			res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'strict' });

			res.status(200).json({
				message: 'Logged out successfully',
			});
		} catch (err) {
			err.statusCode = err.statusCode || 500;
			next(err);
		}
	}
}

export default authController;

