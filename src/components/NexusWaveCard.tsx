import React from 'react';
import { TrendingUp, MoreVertical } from 'lucide-react';

export const NexusWaveCard: React.FC = () => {
  return (
    <div className="w-full nexus-card p-5">
      {/* Sarlavha va Katta raqam (Rasmdagi 3820 ▲ 3.17%) */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <span className="text-xl sm:text-2xl font-black text-white">3,820+</span>
          <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 mt-0.5">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>▲ 15.4% oylik o'sish</span>
          </div>
        </div>
        <MoreVertical className="w-4 h-4 text-slate-400" />
      </div>

      {/* Rasmdagi to'lqinli neon yashil grafik (SVG Wave Chart) */}
      <div className="relative w-full h-24 my-2">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 300 90" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#00e699" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#00e699" stop-opacity="0.0" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Gradient to'ldiruvchi soha */}
          <path
            d="M 0 65 Q 40 70, 70 45 T 140 55 T 210 25 T 280 40 T 300 35 L 300 90 L 0 90 Z"
            fill="url(#waveFill)"
          />

          {/* Yorqin neon to'lqin chizig'i */}
          <path
            d="M 0 65 Q 40 70, 70 45 T 140 55 T 210 25 T 280 40 T 300 35"
            fill="none"
            stroke="#00e699"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#neonGlow)"
          />

          {/* Cho'qqidagi nuqta */}
          <circle cx="210" cy="25" r="4" fill="#00e699" className="animate-pulse" />
        </svg>
      </div>

      {/* Oylar (Jan, Feb, Mar, Apr, May) */}
      <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1 mb-4">
        <span>Yan</span>
        <span>Fev</span>
        <span>Mar</span>
        <span>Apr</span>
        <span className="text-emerald-400 font-black">May</span>
      </div>

      {/* Rasmdagi 3 ta gorizontal slayder chiziqlari (Shokolad ko'rsatkichlari) */}
      <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
        {/* Slayder 1: Kakao zichligi */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-400">Kakao Zichligi</span>
            <span className="text-emerald-400 font-mono">85%</span>
          </div>
          <div className="relative w-full h-1.5 rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: '85%' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#00e699]" style={{ left: '83%' }} />
          </div>
        </div>

        {/* Slayder 2: Mayinlik */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-400">Tekstura Mayinligi</span>
            <span className="text-purple-400 font-mono">92%</span>
          </div>
          <div className="relative w-full h-1.5 rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-purple-500" style={{ width: '92%' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]" style={{ left: '90%' }} />
          </div>
        </div>

        {/* Slayder 3: Tabiiylik */}
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] font-bold">
            <span className="text-slate-400">Tabiiy Kakao Moyi</span>
            <span className="text-emerald-400 font-mono">100%</span>
          </div>
          <div className="relative w-full h-1.5 rounded-full bg-slate-800">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: '100%' }} />
            <div className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#00e699]" style={{ left: '96%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
