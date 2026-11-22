import React from 'react';
import { LinkItem } from '../types';
import { LinkCard } from './LinkCard';

interface CategorySectionProps {
  category: string;
  links: LinkItem[];
  startIndex: number;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  links,
  startIndex
}) => {
  const activeLinks = links.filter((l) => l.active);

  if (activeLinks.length === 0) return null;

  return (
    <div className="w-full space-y-3">
      {/* Kategoriya sarlavhasi */}
      <div className="flex items-center justify-between px-1.5 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-4 rounded-full bg-brand-500" />
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {category}
          </h2>
        </div>
        <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
          {activeLinks.length} ta
        </span>
      </div>

      {/* Kartalar ro'yxati */}
      <div className="space-y-2.5">
        {activeLinks.map((link, idx) => (
          <LinkCard key={link.id} link={link} index={startIndex + idx} />
        ))}
      </div>
    </div>
  );
};
