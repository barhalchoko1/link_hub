import React from 'react';
import { motion } from 'framer-motion';

export const GlowStatsRibbon: React.FC = () => {
  const stats = [
    { value: "100%", label: "Tabiiy Xomashyo", sub: "Sof kakao moyi" },
    { value: "40+", label: "Shokolad Turlari", sub: "Eksklyuziv retsept" },
    { value: "15k+", label: "Mamnun Xaridor", sub: "O'zbekiston bo'ylab" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 my-4 w-full">
      {stats.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -2 }}
          className="white-glow-card p-3 sm:p-4 text-center flex flex-col items-center justify-center cursor-default"
        >
          <span className="text-xl sm:text-2xl font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            {item.value}
          </span>
          <span className="text-[11px] font-bold text-red-400 mt-0.5 line-clamp-1">
            {item.label}
          </span>
          <span className="text-[9px] text-slate-400 hidden sm:block mt-0.5">
            {item.sub}
          </span>
        </motion.div>
      ))}
    </div>
  );
};
