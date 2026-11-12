import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[DB] MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('[DB] MongoDB connection error:', error.message);
    // Do not exit — allow the server to start so the health endpoint still works.
    // In production, ensure MONGO_URI is set and reachable.
  }
};

export default connectDB;
