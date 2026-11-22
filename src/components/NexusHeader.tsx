import React, { useState } from 'react';
import { ProfileData } from '../types';
import { CheckCircle2, MoreVertical, Sparkles, MapPin } from 'lucide-react';

interface NexusHeaderProps {
  profile: ProfileData;
  onOpenShare: () => void;
}

export const NexusHeader: React.FC<NexusHeaderProps> = ({
  profile,
  onOpenShare
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full nexus-card p-5 sm:p-6 mb-4">
      {/* Yuqori qator: Ikonka, Nishon va 3-nuqta Ulashish tugmasi */}
      <div className="flex items-start justify-between w-full mb-4">
        <div className="flex items-center gap-3.5">
          {/* Rasmdagi kabi yashil neon kvadrat logotip nishoni */}
          <div className="relative group">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-mint-400 p-[2px] shadow-[0_0_25px_rgba(0,230,153,0.35)]">
              <div className="w-full h-full rounded-2xl bg-[#0e161a] overflow-hidden flex items-center justify-center">
                {!imageError && profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xl font-black text-emerald-400">B</span>
                )}
              </div>
            </div>
            {/* Jonli onlayn chiroq */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#141d22]" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {profile.name}
              </h1>
              <CheckCircle2 className="w-5 h-5 fill-emerald-500 text-[#141d22]" />
            </div>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-0.5">
              {profile.role}
            </p>
          </div>
        </div>

        {/* 3 nuqta (Ulashish menyusi) */}
        <button
          onClick={onOpenShare}
          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
          title="Ulashish"
          aria-label="Ulashish"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Bio matni */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
        {profile.bio}
      </p>

      {/* Joylashuv va holat chizig'i (Rasmdagi kabi ixcham indikator) */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
        <div className="flex items-center gap-1.5 text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>{profile.location}</span>
        </div>
        <div className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
          <Sparkles className="w-3 h-3" />
          <span>{profile.statusText}</span>
        </div>
      </div>
    </div>
  );
};
