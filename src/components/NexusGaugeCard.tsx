import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Heart, ArrowRight, Sparkles } from 'lucide-react';

interface NexusGaugeCardProps {
  onOpenShare: () => void;
  catalogUrl: string;
}

export const NexusGaugeCard: React.FC<NexusGaugeCardProps> = ({
  onOpenShare,
  catalogUrl
}) => {
  return (
    <div className="w-full nexus-card p-5">
      <div className="flex items-center justify-between">
        {/* Rasmdagi dumaloq doiraviy 100% ko'rsatkich (Gauge) */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* SVG Doiraviy progress */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r="26"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r="26"
                stroke="url(#mintGrad)"
                strokeWidth="6"
                strokeDasharray="163"
                strokeDashoffset="16"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="mintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#00e699" />
                  <stop offset="100%" stop-color="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs font-black text-white">100%</span>
              <span className="text-[8px] text-emerald-400 font-bold">SOF</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold text-white">Kakao Standarti</span>
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Belgiya retsepti bo'yicha toza kakao moyi
            </p>
          </div>
        </div>

        {/* Rasmdagi 'Proceed' yashil neon tugmasi */}
        <motion.a
          href={catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="nexus-btn-mint px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-lg"
        >
          <span>Katalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>
      </div>

      {/* Pastki o'ng burchakdagi ulashish va yoqtirish ikonkalari (Rasmdagidek) */}
      <div className="flex items-center justify-end gap-3 pt-3 mt-3 border-t border-white/[0.06] text-slate-400 text-xs">
        <span className="text-[10px] text-slate-400 mr-auto">Eksklyuziv Shokoladlar 2026</span>
        <button
          onClick={onOpenShare}
          className="hover:text-emerald-400 transition-colors p-1"
          title="Ulashish"
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          className="hover:text-rose-500 transition-colors p-1"
          title="Yoqtirish"
        >
          <Heart className="w-4 h-4 fill-emerald-500/20 text-emerald-400" />
        </button>
      </div>
    </div>
  );
};
