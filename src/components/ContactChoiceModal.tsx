import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, PhoneCall, Copy, Check, Calendar, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  telegramUsername?: string;
  telegramUrl?: string;
  phoneNumber?: string;
  phoneTelUrl?: string;
}

export const ContactChoiceModal: React.FC<ContactChoiceModalProps> = ({
  isOpen,
  onClose,
  title,
  telegramUsername = "@nozimjon83",
  telegramUrl = "https://t.me/nozimjon83",
  phoneNumber = "+998 88 248 88 83",
  phoneTelUrl = "tel:+998882488883"
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(phoneNumber.replace(/\s+/g, ''));
      setCopied(true);
      confetti({
        particleCount: 35,
        spread: 50,
        origin: { y: 0.6 }
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl z-10
              bg-[#0e1017]/95 
              backdrop-blur-2xl 
              border border-amber-500/30 
              text-white shadow-[0_0_50px_rgba(245,158,11,0.15)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/20 shadow-md">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white leading-tight">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Bog'lanish uchun qulay usulni tanlang
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tanlovlar ro'yxati (Choice options) */}
            <div className="space-y-3.5 my-5">
              {/* 1-TANLOV: TELEGRAM */}
              <motion.a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-transparent border border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/30 group-hover:scale-105 transition-transform">
                    <Send className="w-5 h-5 ml-[-1px]" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                      Telegram orqali yozish
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      {telegramUsername}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>

              {/* 2-TANLOV: TELEFON QO'NG'IROG'I */}
              <motion.a
                href={phoneTelUrl}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/10 to-transparent border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                      Telefon qo'ng'irog'i
                    </span>
                    <span className="text-sm font-extrabold text-white">
                      {phoneNumber}
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            </div>

            {/* 3-QO'SHIMCHA: Raqamni nusxalash tugmasi */}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Raqamni xotiraga nusxalash:
              </span>
              <button
                onClick={handleCopyPhone}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  copied
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                    : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.08]'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 animate-bounce" />
                    Nusxalandi!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Nusxalash
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
