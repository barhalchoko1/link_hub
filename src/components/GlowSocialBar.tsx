import React, { useState } from 'react';
import { SocialLink } from '../types';
import { getIcon } from '../utils/iconMap';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GlowSocialBarProps {
  socials: SocialLink[];
}

export const GlowSocialBar: React.FC<GlowSocialBarProps> = ({ socials }) => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleClick = (social: SocialLink) => {
    if (social.url.startsWith('mailto:')) {
      const email = social.url.replace('mailto:', '');
      try {
        navigator.clipboard.writeText(email);
        setCopiedEmail(email);
        confetti({
          particleCount: 30,
          spread: 45,
          origin: { y: 0.4 }
        });
        setTimeout(() => setCopiedEmail(null), 2500);
      } catch {
        // Fallback
      }
      window.location.href = social.url;
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center my-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="flex items-center justify-center gap-3 py-2.5 px-5 rounded-full white-glow-card shadow-[0_0_20px_rgba(255,255,255,0.08)]"
      >
        {socials.map((social) => {
          const isMail = social.url.startsWith('mailto:');
          return (
            <motion.a
              key={social.id}
              href={social.url}
              target={isMail ? undefined : "_blank"}
              rel={isMail ? undefined : "noopener noreferrer"}
              onClick={() => isMail && handleClick(social)}
              aria-label={social.label}
              title={isMail ? "barhalchoko@mail.ru" : social.label}
              whileHover={{ scale: 1.18, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="relative group p-2.5 rounded-full transition-all duration-300
                bg-white/[0.05] hover:bg-white/[0.15]
                text-slate-300 hover:text-white
                border border-white/10 hover:border-white/50
                hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              {getIcon(social.iconName, "w-4 h-4")}

              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-black text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-2xl z-30">
                {isMail ? "barhalchoko@mail.ru" : social.label}
              </span>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Email nusxalanganda kichik bildirishnoma */}
      <AnimatePresence>
        {copiedEmail && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute -top-7 px-3.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-extrabold flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,23,68,0.5)] border border-white/30 z-40"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Nusxalandi: {copiedEmail}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
