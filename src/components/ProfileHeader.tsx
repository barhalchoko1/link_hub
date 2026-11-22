import React, { useState } from 'react';
import { ProfileData } from '../types';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { LiveStatusClock } from './LiveStatusClock';

interface ProfileHeaderProps {
  profile: ProfileData;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center text-center pt-2 pb-5">
      {/* 3D Bo'rttirilgan Avatar & Neon halqasi */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
        className="relative mb-5 group cursor-pointer"
      >
        {/* Orqa fondagi qizil neon nurlanish aurosi */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-red-600 via-rose-500 to-amber-500 opacity-70 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse-subtle" />

        {/* Tashqi qirrali metall halqa */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-b from-red-500 via-red-900 to-black shadow-2xl transition-transform duration-500 group-hover:scale-105">
          <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center border border-red-500/40 relative">
            {!imageError && profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black text-red-500 font-black text-4xl tracking-wider select-none shadow-inner border border-red-500/30">
                {profile.initialsFallback || "B"}
              </div>
            )}
            
            {/* Shisha ustki jilosi */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* VIP nishoni */}
        <div 
          title="Verifikatsiyadan o'tgan"
          className="absolute -bottom-1 -right-1 p-1 rounded-full bg-black border border-red-500/50 shadow-lg text-red-400 group-hover:scale-110 transition-transform"
        >
          <ShieldCheck className="w-4 h-4 fill-red-500 text-black" />
        </div>
      </motion.div>

      {/* Brend Ism va Tasdiqlanganlik nishoni */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="flex items-center justify-center gap-2 mb-1"
      >
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight shimmer-text">
          {profile.name}
        </h1>
        {profile.verified && (
          <span 
            title="Tasdiqlangan profil" 
            className="text-red-500 inline-flex items-center drop-shadow-[0_0_8px_rgba(255,23,68,0.6)]"
          >
            <CheckCircle2 className="w-5 h-5 fill-red-500 text-black" />
          </span>
        )}
      </motion.div>

      {/* Kasbiy lavozim */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="text-xs sm:text-sm font-bold text-slate-300 tracking-wide uppercase mb-3 flex items-center gap-1.5 justify-center"
      >
        <span>{profile.role}</span>
      </motion.p>

      {/* Jonli vaqt va holat vidjeti */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mb-3.5"
      >
        <LiveStatusClock
          location={profile.location}
          statusText={profile.statusText}
        />
      </motion.div>

      {/* Qisqa Bio */}
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed"
      >
        {profile.bio}
      </motion.p>
    </div>
  );
};
