import jwt from 'jsonwebtoken';
import WebError from '../utils/webError.js';

const isAuth = (req, res, next) => {
  if (!req.get('Authorization')) {
    throw new WebError('Not authenticated.', 401);
  }
  const token = req.get('Authorization').split(' ')[1];
  let decodedToken

  try {
    decodedToken = jwt.verify(token, 'jwtSecret');
  } catch (err) {
    throw new WebError(err.message, 500);
  }
  if (!decodedToken) {
    throw new WebError('Not authenticated.', 401);
  }
  req.email = decodedToken.email;
  req.role = decodedToken.role;
  req.userId = decodedToken.userId;
  next();
};

const isAdmin = (req, res, next) => {
  isAuth(req, res, () => {
    if (req.role !== 'admin') {
      throw new WebError('Not authorized.', 403);
    }
    next();
  });

};

export { isAuth, isAdmin };


