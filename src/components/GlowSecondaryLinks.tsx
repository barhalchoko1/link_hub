import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, ArrowUpRight } from 'lucide-react';

export const GlowSecondaryLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
      {/* 1. Prays-list PDF */}
      <motion.a
        href="https://barhal.uz/price-list.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="white-glow-card p-4 sm:p-5 flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/[0.08] text-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
            <FileText className="w-5 h-5 text-red-400" />
          </div>
          <div className="text-left">
            <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-red-400 transition-colors block">
              Rasmiy Prays-list
            </span>
            <span className="text-[11px] text-slate-400">PDF yuklab olish</span>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
      </motion.a>

      {/* 2. Qora shokolad lineykasi */}
      <motion.a
        href="https://barhal.uz/dark-chocolate"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="white-glow-card p-4 sm:p-5 flex items-center justify-between group cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/[0.08] text-white flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-amber-400" />
          </div>
          <div className="text-left">
            <span className="text-xs sm:text-sm font-extrabold text-white group-hover:text-amber-400 transition-colors block">
              Qora Shokolad (70-85%)
            </span>
            <span className="text-[11px] text-slate-400">Klassik toza kakao</span>
          </div>
        </div>
        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
      </motion.a>
    </div>
  );
};
