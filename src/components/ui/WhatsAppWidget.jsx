import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { cn } from '../../utils/helpers';

export function WhatsAppWidget({ phoneNumber, prefilledMessage }) {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}${
    prefilledMessage ? `?text=${encodeURIComponent(prefilledMessage)}` : ''
  }`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={open ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-xs rounded-2xl border border-neutral-200/60 bg-white shadow-2xl p-4 dark:border-neutral-700 dark:bg-neutral-900 animate-slide-up"
      >
        <div className="flex items-center justify-between mb-3 border-b border-neutral-100 dark:border-neutral-800 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">Chat on WhatsApp</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Typically replies within minutes</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-1.5 rounded-md text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Message us on WhatsApp</span>
        </a>
      </motion.div>

      <button
        onClick={() => setOpen(true)}
        aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        className={cn(
          'w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-xl shadow-green-500/40',
          'hover:bg-green-600 hover:shadow-green-500/60 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
        )}
      >
        {open ? (
          <X className="w-5 h-5" aria-hidden="true" />
        ) : (
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
