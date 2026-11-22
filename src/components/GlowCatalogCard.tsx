import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, Gift } from 'lucide-react';

interface GlowCatalogCardProps {
  catalogUrl: string;
}

export const GlowCatalogCard: React.FC<GlowCatalogCardProps> = ({ catalogUrl }) => {
  return (
    <motion.a
      href={catalogUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col justify-between w-full p-6 sm:p-7 rounded-3xl white-glow-card cursor-pointer"
    >
      {/* Ichki qizil gradient nurlanish aurosi */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-red-600/30 via-red-900/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />

      {/* Yuqori qism: Ikonka va Nishon */}
      <div className="flex items-start justify-between w-full mb-4 relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-black text-white border border-white/30 shadow-[0_0_20px_rgba(255,23,68,0.4)] group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300">
          <Gift className="w-7 h-7 text-white" />
        </div>

        <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white border border-white/40 shadow-[0_0_15px_rgba(255,23,68,0.6)]">
          <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
          <span>Yangi To'plam 2026</span>
        </div>
      </div>

      {/* O'rta: Sarlavha va Tavsif */}
      <div className="relative z-10 text-left my-2">
        <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
          <span>Eksklyuziv Shokoladlar Katalogi 2026</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed max-w-md font-medium">
          Klassik qora, nozik sutli, oq shokoladlar va sovg'abop qutilar to'plami.
        </p>

        {/* Qora-qizil teglar */}
        <div className="flex items-center gap-2 flex-wrap mt-4">
          {["100% Tabiiy", "Belgiya Retsepti", "Sovg'abop", "Premium Sifat"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-[11px] font-bold bg-white/[0.06] text-slate-200 border border-white/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Pastki: Qizil va Oq nurli tugma */}
      <div className="relative z-10 flex items-center justify-between pt-5 mt-4 border-t border-white/10">
        <span className="text-sm font-extrabold text-red-400 group-hover:text-white transition-colors flex items-center gap-1.5">
          Katalogni to'liq ko'rish (Telegra.ph)
        </span>
        <div className="flex items-center justify-center w-10 h-10 rounded-full btn-red-glow group-hover:translate-x-1 transition-all">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </motion.a>
  );
};
