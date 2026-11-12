import { useState, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/helpers';

export function TabGroup({ tabs, defaultActiveId, className, children }) {
  const [activeId, setActiveId] = useState(defaultActiveId ?? tabs[0]?.id ?? '');

  return (
    <TabGroupContext.Provider value={{ activeId, setActiveId }}>
      <div className={cn('w-full', className)}>
        <div className="flex flex-wrap gap-1 mb-8 sm:mb-10 lg:mb-12 border-b border-neutral-200/60 dark:border-neutral-700/40 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              aria-pressed={activeId === tab.id}
              className={cn(
                'px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ease-premium',
                activeId === tab.id
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50/60 dark:bg-primary-500/10 border-b-2 border-primary-600 dark:border-primary-400 font-semibold shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-b-2 border-transparent'
              )}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5 text-xs font-semibold opacity-60">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="tab-content"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </TabGroupContext.Provider>
  );
}

const TabGroupContext = createContext(null);

export function useTabGroup() {
  const context = useContext(TabGroupContext);
  if (!context) {
    throw new Error('useTabGroup must be used within a TabGroup');
  }
  return context;
}

export function TabPanel({ id, children }) {
  const { activeId } = useTabGroup();
  const isActive = activeId === id;
  return (
    <div
      data-tab={id}
      hidden={!isActive}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      {children}
    </div>
  );
}
