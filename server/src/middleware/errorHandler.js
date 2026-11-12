/**
 * Centralized error handler.
 * Keeps route handlers lean and returns consistent JSON error shapes.
 */
export default function errorHandler(err, _req, res, _next) {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Mongoose cast error (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid resource id';
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(statusCode).json({ success: false, message: 'Validation failed', errors });
  }

  // Duplicate key (E11000)
  if (err.code === 11000) {
    statusCode = 409;
    const field = Object.keys(err.keyValue || {})[0] || 'field';
    message = `${field} already exists`;
  }

  if (process.env.NODE_ENV === 'development') {
    console.error(err);
  }

  res.status(statusCode).json({ success: false, message });
}
