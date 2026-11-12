import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/helpers';

export function Accordion({ items, className }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'group overflow-hidden rounded-xl border border-neutral-200/60 transition-all duration-300 ease-premium',
              'dark:border-neutral-700/40',
              isOpen ? 'shadow-md shadow-primary-500/5 dark:shadow-primary-500/10' : ''
            )}
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              className="w-full flex items-center justify-between px-6 py-4 text-left text-neutral-900 font-semibold hover:text-primary-600 dark:text-white dark:hover:text-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            >
              <span className="text-body leading-relaxed">{item.question}</span>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="w-5 h-5 text-neutral-400 transition-transform duration-300"
              >
                <ChevronDown aria-hidden="true" />
              </motion.div>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="overflow-hidden border-t border-neutral-200/40 dark:border-neutral-700/40"
            >
              <div className="px-6 pb-5 pt-1">
                <p className="text-body-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
