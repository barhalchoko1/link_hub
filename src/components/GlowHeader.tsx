import React, { useState } from 'react';
import { ProfileData } from '../types';
import { CheckCircle2, Share2, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface GlowHeaderProps {
  profile: ProfileData;
  onOpenShare: () => void;
}

export const GlowHeader: React.FC<GlowHeaderProps> = ({
  profile,
  onOpenShare
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full white-glow-card p-6 sm:p-7 text-center flex flex-col items-center">
      {/* Yuqori o'ng burchakdagi Ulashish tugmasi */}
      <div className="w-full flex justify-end mb-1">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenShare}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-white/50 text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all"
        >
          <Share2 className="w-3.5 h-3.5 text-red-500" />
          <span>Ulashish</span>
        </motion.button>
      </div>

      {/* Dumaloq Qora-Qizil Avatar & Oq Nurli Jilo */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="relative my-2 group cursor-pointer"
      >
        {/* Oq va qizil nurlanish aurosi */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-red-600 via-white to-red-600 opacity-60 blur-xl group-hover:opacity-90 group-hover:blur-2xl transition-all duration-500" />

        {/* Metall jiloli tashqi halqa */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[2.5px] bg-gradient-to-b from-white via-red-600 to-black shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border border-white/30 relative">
            {!imageError && profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black text-red-500 font-black text-4xl tracking-wider select-none shadow-inner border border-red-500/30">
                {profile.initialsFallback || "B"}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
          </div>
        </div>
      </motion.div>

      {/* Brend Ismi BARHAL (Oq yaltiroq nur bilan) */}
      <div className="flex items-center justify-center gap-2 mt-3 mb-1">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight shimmer-white-text">
          {profile.name}
        </h1>
        <CheckCircle2 className="w-6 h-6 fill-red-600 text-white drop-shadow-[0_0_10px_rgba(255,23,68,0.8)]" />
      </div>

      {/* Kasb / Faoliyat yo'nalishi */}
      <p className="text-xs sm:text-sm font-extrabold text-red-400 tracking-wider uppercase mb-3">
        {profile.role}
      </p>

      {/* Joylashuv va holat vidjeti */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 text-xs text-slate-300 font-medium mb-3.5 shadow-sm">
        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-red-500" />
          <span>{profile.location}</span>
        </div>
        <span className="w-1 h-1 rounded-full bg-white/30" />
        <div className="flex items-center gap-1 text-emerald-400 font-bold">
          <Sparkles className="w-3 h-3" />
          <span>{profile.statusText}</span>
        </div>
      </div>

      {/* Bio tavsifi */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
        {profile.bio}
      </p>
    </div>
  );
};
