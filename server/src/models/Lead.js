import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    businessName: { type: String, trim: true },
    budgetRange: { type: String, trim: true },
    serviceNeeded: {
      type: String,
      enum: ['content', 'web', 'full-package'],
      required: true,
    },
    message: { type: String, trim: true },
    source: { type: String, default: 'website' },
    ip: { type: String },
    status: { type: String, enum: ['new', 'contacted', 'qualified', 'closed'], default: 'new' },
  },
  { timestamps: true }
);

leadSchema.index({ email: 1, createdAt: -1 });
leadSchema.index({ status: 1 });

export default mongoose.model('Lead', leadSchema);
