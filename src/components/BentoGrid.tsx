import React from 'react';
import { LinkItem } from '../types';
import { LinkCard } from './LinkCard';

interface BentoGridProps {
  category: string;
  links: LinkItem[];
  startIndex: number;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  category,
  links,
  startIndex
}) => {
  const activeLinks = links.filter((l) => l.active);
  if (activeLinks.length === 0) return null;

  // Guruhdagi 'hero', 'half', va 'normal' kartalarni ajratib olish
  const heroLinks = activeLinks.filter((l) => l.layout === 'hero');
  const halfLinks = activeLinks.filter((l) => l.layout === 'half');
  const normalLinks = activeLinks.filter((l) => !l.layout || l.layout === 'normal');

  return (
    <div className="w-full space-y-3 pt-2">
      {/* Kategoriya sarlavhasi */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-3.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,23,68,0.8)]" />
          <h2 className="text-xs font-black uppercase tracking-wider text-slate-400">
            {category}
          </h2>
        </div>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.06]">
          {activeLinks.length} ta havola
        </span>
      </div>

      {/* Hero kartalar (To'liq kenglik) */}
      {heroLinks.length > 0 && (
        <div className="space-y-3">
          {heroLinks.map((link, idx) => (
            <LinkCard key={link.id} link={link} index={startIndex + idx} />
          ))}
        </div>
      )}

      {/* 2 ustunli Bento kartalar (Yonma-yon) */}
      {halfLinks.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {halfLinks.map((link, idx) => (
            <LinkCard
              key={link.id}
              link={link}
              index={startIndex + heroLinks.length + idx}
            />
          ))}
        </div>
      )}

      {/* Oddiy bir qatorli kartalar */}
      {normalLinks.length > 0 && (
        <div className="space-y-2.5">
          {normalLinks.map((link, idx) => (
            <LinkCard
              key={link.id}
              link={link}
              index={startIndex + heroLinks.length + halfLinks.length + idx}
            />
          ))}
        </div>
      )}
    </div>
  );
};
