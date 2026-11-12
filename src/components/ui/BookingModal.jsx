'use client';

import { useState, createRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Calendar, Send } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { cn } from '../../utils/helpers';

export function BookingModal({ isOpen, onClose, onSubmit }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formRefs = {
    name: createRef(),
    email: createRef(),
    business: createRef(),
    message: createRef(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const business = String(formData.get('business') || '').trim();
    const service = String(formData.get('service') || 'full-package').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email) return;

    setIsSubmitting(true);
    if (onSubmit) {
      onSubmit({ name, email, business, service, message });
    }
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      setSubmitted(false);
      setIsSubmitting(false);
    }
  };

  const handleCloseKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
      setSubmitted(false);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        onKeyDown={handleCloseKey}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            'w-full max-w-lg rounded-2xl border border-neutral-200/60 bg-[var(--color-card)] shadow-2xl',
            'dark:border-neutral-700 dark:bg-neutral-900'
          )}
        >
          <div className="flex items-center justify-between p-6 border-b border-neutral-200/40 dark:border-neutral-700/40">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                <Calendar className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 id="booking-modal-title" className="text-heading-md font-bold text-neutral-900 dark:text-white">
                  Book Strategy Call
                </h3>
                <p className="text-body-sm text-neutral-500 dark:text-neutral-400">
                  30-minute discovery call — no charge
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close booking modal"
              className="p-2 rounded-lg text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <Input
                  label="Full Name"
                  placeholder="Jane Doe"
                  name="name"
                  leftIcon={<Mail className="w-4 h-4" aria-hidden="true" />}
                  autoFocus
                  required
                />
                <Input
                  label="Email Address"
                  placeholder="jane@company.com"
                  type="email"
                  name="email"
                  leftIcon={<Mail className="w-4 h-4" aria-hidden="true" />}
                  required
                />
                <Input
                  label="Business / Brand Name"
                  placeholder="Acme Co."
                  name="business"
                  leftIcon={<Phone className="w-4 h-4" aria-hidden="true" />}
                />
                <div className="w-full">
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-900 mb-2 dark:text-neutral-100">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    defaultValue="full-package"
                    className={cn(
                      'w-full rounded-lg border bg-[var(--color-card)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                      'disabled:bg-neutral-50 disabled:text-neutral-500 disabled:cursor-not-allowed',
                      'pl-4 pr-10 py-3 appearance-none cursor-pointer',
                      'border-[var(--color-border)] hover:border-neutral-300',
                      'dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-primary-500'
                    )}
                  >
                    <option value="full-package">Full Package (Video + Web)</option>
                    <option value="content">Short-Form Video Content Engine</option>
                    <option value="web">Conversion Web & Platform Engineering</option>
                  </select>
                </div>
                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2 dark:text-neutral-100">
                    Briefly tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="e.g. We need 12 Reels/month + a conversion landing page..."
                    className={cn(
                      'w-full rounded-lg border bg-[var(--color-card)] text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)] transition-all duration-200 resize-none',
                      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                      'p-4',
                      'border-[var(--color-border)] hover:border-neutral-300',
                      'dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-primary-500'
                    )}
                  />
                </div>
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    defaultChecked
                    className="mt-0.5 w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 dark:bg-neutral-800 dark:border-neutral-700"
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                    I agree to let Nexora contact me about this inquiry.
                  </label>
                </div>
                <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting} rightIcon={<Send className="w-4 h-4" aria-hidden="true" />}>
                  Request Strategy Call
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 animate-scale-in">
                  <Send className="w-6 h-6 text-green-500" aria-hidden="true" />
                </div>
                <h3 className="text-heading-md font-bold text-neutral-900 dark:text-white mb-2">
                  Request Sent
                </h3>
                <p className="text-body-sm text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto">
                  Thanks! We'll review your details and follow up via email to schedule your strategy call.
                </p>
                <Button variant="primary" onClick={onClose}>
                  Close
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
