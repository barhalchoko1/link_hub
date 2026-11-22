import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, FileText } from 'lucide-react';

interface NexusDashedCardProps {
  onOpenDegustatsiya: () => void;
  onOpenEmail: () => void;
  priceListUrl: string;
}

export const NexusDashedCard: React.FC<NexusDashedCardProps> = ({
  onOpenDegustatsiya,
  onOpenEmail,
  priceListUrl
}) => {
  return (
    <div className="w-full nexus-card p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-extrabold text-white">Qo'shimcha Xizmatlar & Hamkorlik</h3>
        <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Tanlang</span>
      </div>

      {/* Rasmdagi shtrix chiziqli (Dashed) to'rtburchaklar va '+' belgilari */}
      <div className="grid grid-cols-3 gap-2.5">
        {/* 1. Namuna va Degustatsiya */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenDegustatsiya}
          className="flex flex-col items-center justify-center p-3 rounded-2xl border border-dashed border-emerald-500/40 hover:border-emerald-400 bg-white/[0.02] hover:bg-emerald-500/10 transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-white text-center line-clamp-1">
            Degustatsiya
          </span>
          <span className="text-[8px] text-slate-400">Band qilish</span>
        </motion.button>

        {/* 2. Optom & Hamkorlik (Email) */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onOpenEmail}
          className="flex flex-col items-center justify-center p-3 rounded-2xl border border-dashed border-purple-500/40 hover:border-purple-400 bg-white/[0.02] hover:bg-purple-500/10 transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <Mail className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-white text-center line-clamp-1">
            Optom Savdo
          </span>
          <span className="text-[8px] text-slate-400">Email yozish</span>
        </motion.button>

        {/* 3. Prays-list PDF */}
        <motion.a
          href={priceListUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex flex-col items-center justify-center p-3 rounded-2xl border border-dashed border-white/[0.15] hover:border-emerald-400 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-white/[0.08] text-slate-300 group-hover:text-emerald-400 flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform">
            <FileText className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-white text-center line-clamp-1">
            Prays-list
          </span>
          <span className="text-[8px] text-slate-400">PDF yuklash</span>
        </motion.a>
      </div>
    </div>
  );
};
