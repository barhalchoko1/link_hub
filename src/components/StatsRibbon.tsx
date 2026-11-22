import React from 'react';
import { StatItem } from '../types';
import { motion } from 'framer-motion';

interface StatsRibbonProps {
  stats: StatItem[];
}

export const StatsRibbon: React.FC<StatsRibbonProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-2.5 my-5 w-full">
      {stats.map((stat, idx) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
          whileHover={{ y: -2 }}
          className="bento-card p-3 rounded-2xl flex flex-col items-center justify-center text-center group cursor-default"
        >
          <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-red-400 transition-colors">
            {stat.value}
          </span>
          <span className="text-[11px] font-semibold text-slate-300 mt-0.5 line-clamp-1">
            {stat.label}
          </span>
          {stat.subtext && (
            <span className="text-[9px] text-slate-500 line-clamp-1 hidden sm:block mt-0.5">
              {stat.subtext}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};
