import React from 'react';
import { motion } from 'framer-motion';
import { MoreVertical, Sparkles, Gift } from 'lucide-react';

interface NexusPlansCardProps {
  catalogUrl: string;
}

export const NexusPlansCard: React.FC<NexusPlansCardProps> = ({ catalogUrl }) => {
  return (
    <div className="w-full nexus-card p-5">
      {/* Sarlavha (Rasmdagi 'Choose plans') */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-extrabold text-white">Shokolad To'plamlari</h2>
        </div>
        <MoreVertical className="w-4 h-4 text-slate-400" />
      </div>

      {/* Rasmdagi 2 ta yashil neon tugmalar ro'yxati */}
      <div className="space-y-3">
        {/* 1-TUGMA: Standart to'plam (Rasmdagi $10/month Regular) */}
        <motion.a
          href={catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-between p-3.5 px-5 rounded-2xl bg-gradient-to-r from-emerald-500/25 to-teal-600/30 border border-emerald-500/40 hover:border-emerald-400 text-white transition-all shadow-[0_4px_20px_rgba(0,230,153,0.15)] group"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-base font-black text-white">$10</span>
            <span className="text-xs text-slate-300 font-semibold">/ Standart Quti</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black/40 text-emerald-300 border border-emerald-500/30">
            Klassik
          </span>
        </motion.a>

        {/* 2-TUGMA: Premial to'plam (Rasmdagi $20/month Premium - yorqin neon) */}
        <motion.a
          href={catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-between p-3.5 px-5 rounded-2xl nexus-btn-mint group cursor-pointer"
        >
          <div className="flex items-baseline gap-2 text-slate-950">
            <span className="text-base font-black">$20</span>
            <span className="text-xs font-bold">/ Premial Sovg'a</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-black/20 text-slate-950">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>VIP Assorti</span>
          </div>
        </motion.a>
      </div>
    </div>
  );
};
