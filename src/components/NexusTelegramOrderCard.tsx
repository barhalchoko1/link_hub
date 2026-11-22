import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowUpRight, Truck } from 'lucide-react';

interface NexusTelegramOrderCardProps {
  botUrl: string;
}

export const NexusTelegramOrderCard: React.FC<NexusTelegramOrderCardProps> = ({ botUrl }) => {
  return (
    <motion.a
      href={botUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full nexus-card p-4 sm:p-5 flex items-center justify-between group cursor-pointer hover:border-emerald-500/50"
    >
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-400 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform">
          <Send className="w-6 h-6 ml-[-2px]" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-base font-extrabold text-white group-hover:text-emerald-400 transition-colors">
              Telegram Bot: Tezkor Buyurtma
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
              24/7
            </span>
          </div>
          <p className="text-xs text-slate-300 mt-0.5 flex items-center gap-1.5 font-medium">
            <Truck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>O'zbekiston bo'ylab yetkazib berish xizmati mavjud</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.08] text-white group-hover:bg-emerald-500 group-hover:text-black transition-all">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.a>
  );
};
