import React from 'react';
import { motion } from 'framer-motion';
import { Check, Moon, Sun } from 'lucide-react';

interface NexusDarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const NexusDarkModeToggle: React.FC<NexusDarkModeToggleProps> = ({
  isDark,
  onToggle
}) => {
  return (
    <div className="flex items-center gap-3 w-full">
      {/* Rasmdagi kabi 'Dark mode' kapsula tugmasi */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onToggle}
        className="flex-1 flex items-center justify-between p-1.5 pl-5 pr-2 rounded-full nexus-card cursor-pointer border border-white/[0.08] hover:border-emerald-500/40"
      >
        <span className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
          {isDark ? <Moon className="w-4 h-4 text-emerald-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
          <span>{isDark ? "Dark mode (Tungi)" : "Light mode (Kunduzgi)"}</span>
        </span>

        {/* Yashil harakatlanuvchi slayd nishoni (Rasmdagidek) */}
        <div className={`px-4 py-2 rounded-full text-xs font-black transition-all duration-300 ${
          isDark 
            ? 'nexus-btn-mint' 
            : 'bg-slate-700 text-slate-300'
        }`}>
          {isDark ? "ON" : "OFF"}
        </div>
      </motion.button>

      {/* Rasmdagi dumaloq tasdiq (Checkmark) tugmasi */}
      <div className="w-11 h-11 rounded-full nexus-card flex items-center justify-center flex-shrink-0 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(0,230,153,0.2)]">
        <Check className="w-5 h-5 stroke-[2.5]" />
      </div>
    </div>
  );
};
