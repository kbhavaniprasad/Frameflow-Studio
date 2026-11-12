import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import leadRoutes from './routes/leadRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy (important when behind nginx/Render/Vercel)
app.set('trust proxy', 1);

// Security & CORS
app.use(helmet({ crossOriginEmbedderPolicy: false }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsing
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(morgan('dev'));

// Health endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'nexora-api', time: new Date().toISOString() });
});

// API routes
app.use('/api/leads', leadRoutes);

// 404
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Error handler (must be last)
app.use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`[API] Server running on port ${PORT} (${process.env.NODE_ENV || 'development'})`);
});
