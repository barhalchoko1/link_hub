import React, { useState } from 'react';
import { LinkItem } from '../types';
import { getIcon } from '../utils/iconMap';
import { ArrowUpRight, Sparkles, Copy, Check, Send, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ContactChoiceModal } from './ContactChoiceModal';

interface LinkCardProps {
  link: LinkItem;
  index: number;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  const [copied, setCopied] = useState(false);
  const [isChoiceOpen, setIsChoiceOpen] = useState(false);

  if (!link.active) return null;

  const handleCopyClick = async (e: React.MouseEvent) => {
    if (!link.isCopyable || !link.copyValue) return;
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link.copyValue);
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 }
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (link.hasContactChoice) {
      e.preventDefault();
      setIsChoiceOpen(true);
    } else if (link.isCopyable) {
      handleCopyClick(e);
    }
  };

  // 1. KATTA HERO BENTO KARTA (Eng muhim loyiha uchun)
  if (link.layout === 'hero') {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.4 }}
        whileHover={{ scale: 1.015, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex flex-col justify-between w-full p-5 sm:p-6 rounded-3xl bento-card overflow-hidden border border-red-500/40 hover:border-red-500/80 hover:shadow-[0_0_30px_rgba(255,23,68,0.25)]"
      >
        {/* Ichki qizil gradient mesh nurlanish */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-600/20 via-rose-600/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-900/10 rounded-full blur-2xl pointer-events-none" />

        {/* Yuqori qism: Ikonka va Nishon */}
        <div className="flex items-start justify-between w-full mb-4 relative z-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {getIcon(link.icon, "w-6 h-6")}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-md shadow-red-600/30">
            <Sparkles className="w-3 h-3 fill-current animate-pulse" />
            <span>{link.badge || "Featured"}</span>
          </div>
        </div>

        {/* O'rta: Sarlavha va Tavsif */}
        <div className="relative z-10 my-1 text-left">
          <h2 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-red-400 transition-colors flex items-center gap-2">
            <span>{link.title}</span>
          </h2>
          {link.subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed max-w-sm">
              {link.subtitle}
            </p>
          )}

          {/* Teglar ro'yxati */}
          {link.tags && (
            <div className="flex items-center gap-1.5 flex-wrap mt-3.5">
              {link.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-white/[0.06] text-slate-300 border border-white/[0.08]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pastki: Harakatga chorlovchi tugma */}
        <div className="relative z-10 flex items-center justify-between pt-4 mt-3 border-t border-white/[0.08]">
          <span className="text-xs font-bold text-red-400 flex items-center gap-1 group-hover:underline">
            Katalogni to'liq ko'rish
          </span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.08] text-white group-hover:bg-red-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </motion.a>
    );
  }

  // 2. YONMA-YON MINI BENTO KARTALAR (2 ustunli)
  if (link.layout === 'half') {
    return (
      <motion.a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.3 }}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex flex-col justify-between w-full p-4 rounded-2xl bento-card overflow-hidden hover:border-red-500/50"
      >
        <div className="flex items-start justify-between w-full mb-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.06] text-white group-hover:bg-red-600/20 group-hover:text-red-400 transition-all duration-300 group-hover:scale-110">
            {getIcon(link.icon, "w-5 h-5")}
          </div>

          <div className="flex items-center justify-center w-7 h-7 rounded-lg text-slate-400 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        <div className="text-left mt-2">
          {link.badge && (
            <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-red-600/20 text-red-400 border border-red-500/20 mb-1">
              {link.badge}
            </span>
          )}
          <h3 className="text-sm font-extrabold text-white group-hover:text-red-400 transition-colors line-clamp-1">
            {link.title}
          </h3>
          {link.subtitle && (
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2 leading-snug">
              {link.subtitle}
            </p>
          )}
        </div>
      </motion.a>
    );
  }

  // 3. ODDIY BIR QATORLI BENTO KARTA (Hamkorlik va boshqalar)
  return (
    <>
      <motion.div
        onClick={handleCardClick}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 * index, duration: 0.3 }}
        whileHover={{ scale: 1.015, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className={`group relative flex flex-col sm:flex-row sm:items-center justify-between w-full p-3.5 sm:p-4 rounded-2xl bento-card cursor-pointer gap-2 ${
          link.featured
            ? 'border-amber-500/30 hover:border-amber-400/70 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]'
            : ''
        }`}
      >
        {/* Chap: Ikonka va Sarlavhalar */}
        <div className="flex items-start sm:items-center gap-3.5 min-w-0 pr-2">
          <div className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 flex-shrink-0 ${
            link.hasContactChoice
              ? 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:scale-105'
              : 'bg-white/[0.05] text-white group-hover:bg-red-600/20 group-hover:text-red-400 group-hover:scale-105'
          }`}>
            {getIcon(link.icon, "w-5 h-5")}
          </div>

          <div className="flex flex-col text-left min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                {link.title}
              </span>
              {link.badge && (
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${
                  link.hasContactChoice
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    : 'bg-white/[0.07] text-slate-300 border-white/[0.08]'
                }`}>
                  {link.badge}
                </span>
              )}
            </div>
            {link.subtitle && (
              <span className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                {link.subtitle}
              </span>
            )}

            {/* Agar ikkita tanlov (Telegram & Tel) bo'lsa, tezkor tugmalar */}
            {link.hasContactChoice && (
              <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                <a
                  href={link.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
                  title="Telegram orqali yozish"
                >
                  <Send className="w-3 h-3" />
                  <span>Telegram: {link.telegramUsername}</span>
                </a>
                <a
                  href={link.phoneTelUrl}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
                  title="Telefon qilish"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Tel: {link.phoneNumber}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* O'ng: Havola, Tanlov yoki Nusxalash indikatori */}
        <div className="self-end sm:self-center flex items-center justify-center w-8 h-8 rounded-lg flex-shrink-0 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
          {link.isCopyable ? (
            copied ? (
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 whitespace-nowrap">
                <Check className="w-4 h-4 animate-bounce" />
                Nusxalandi!
              </span>
            ) : (
              <Copy className="w-4 h-4" />
            )
          ) : (
            <ArrowUpRight className="w-5 h-5" />
          )}
        </div>
      </motion.div>

      {/* Tanlov modali (Telegram yoki Telefon) */}
      {link.hasContactChoice && (
        <ContactChoiceModal
          isOpen={isChoiceOpen}
          onClose={() => setIsChoiceOpen(false)}
          title={link.title}
          telegramUsername={link.telegramUsername}
          telegramUrl={link.telegramUrl}
          phoneNumber={link.phoneNumber}
          phoneTelUrl={link.phoneTelUrl}
        />
      )}
    </>
  );
};
