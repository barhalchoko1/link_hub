import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowUpRight, Truck } from 'lucide-react';

interface GlowTelegramCardProps {
  botUrl: string;
}

export const GlowTelegramCard: React.FC<GlowTelegramCardProps> = ({ botUrl }) => {
  return (
    <motion.a
      href={botUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full white-glow-card p-5 sm:p-6 flex items-center justify-between group cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-600 to-black text-white flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(255,23,68,0.35)] group-hover:scale-110 transition-transform">
          <Send className="w-6 h-6 ml-[-2px]" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-black text-white group-hover:text-red-400 transition-colors">
              Telegram Bot: Tezkor Buyurtma
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-red-600/30 text-red-300 border border-red-500/40">
              24/7
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-1.5 font-medium">
            <Truck className="w-4 h-4 text-red-500 flex-shrink-0" />
            <span>O'zbekiston bo'ylab yetkazib berish xizmati mavjud</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.08] border border-white/20 text-white group-hover:bg-red-600 group-hover:border-white/50 transition-all">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
};
