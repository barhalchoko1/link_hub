import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-8 text-center space-y-2.5 border-t border-white/[0.06] mt-8 w-full">
      <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
        <span className="font-bold text-white">&copy; {currentYear} {name}.</span>
        <span>Barcha huquqlar himoyalangan.</span>
      </div>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
        <span>Personal Link Hub</span>
        <span>•</span>
        <span className="flex items-center gap-1 text-red-400 font-semibold">
          <Sparkles className="w-3 h-3 fill-red-500" />
          Premial Bento Arxitekturasi
        </span>
      </div>
    </footer>
  );
};
