import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Lead from '../models/Lead.js';

const router = Router();

/**
 * POST /api/leads
 * Capture a new lead from the contact / booking form.
 */
router.post(
  '/',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required')
      .isLength({ max: 100 })
      .withMessage('Name must be under 100 characters'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Enter a valid email address')
      .normalizeEmail(),
    body('businessName')
      .optional()
      .trim()
      .isLength({ max: 150 })
      .withMessage('Business name must be under 150 characters'),
    body('budgetRange')
      .optional()
      .trim()
      .isLength({ max: 100 }),
    body('serviceNeeded')
      .notEmpty()
      .withMessage('Please select a service')
      .isIn(['content', 'web', 'full-package'])
      .withMessage('Invalid service selection'),
    body('message')
      .optional()
      .trim()
      .isLength({ max: 1000 })
      .withMessage('Message must be under 1000 characters'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
      const lead = await Lead.create({
        ...req.body,
        ip: req.ip || req.socket.remoteAddress || null,
      });

      return res.status(201).json({
        success: true,
        message: 'Thank you! We\'ve received your request and will get back to you shortly.',
        data: {
          id: lead._id,
          name: lead.name,
          email: lead.email,
          serviceNeeded: lead.serviceNeeded,
          status: lead.status,
          createdAt: lead.createdAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }
);

/**
 * GET /api/leads/health — quick smoke check that the DB route layer is wired.
 */
router.get('/health', async (_req, res) => {
  try {
    const count = await Lead.countDocuments();
    res.json({ success: true, db: 'reachable', leadCount: count });
  } catch (error) {
    res.status(500).json({ success: false, db: 'unreachable', error: error.message });
  }
});

export default router;
