import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Send, PhoneCall, ArrowUpRight } from 'lucide-react';

interface GlowDegustatsiyaCardProps {
  onOpenModal: () => void;
  telegramUrl: string;
  telegramUsername: string;
  phoneTelUrl: string;
  phoneNumber: string;
}

export const GlowDegustatsiyaCard: React.FC<GlowDegustatsiyaCardProps> = ({
  onOpenModal,
  telegramUrl,
  telegramUsername,
  phoneTelUrl,
  phoneNumber
}) => {
  return (
    <motion.div
      onClick={onOpenModal}
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="w-full white-glow-card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
    >
      <div className="flex items-start sm:items-center gap-4">
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-amber-600 via-red-600 to-black text-white flex items-center justify-center border border-white/30 shadow-[0_0_20px_rgba(245,158,11,0.35)] group-hover:scale-110 transition-transform flex-shrink-0">
          <Calendar className="w-6 h-6" />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
              Namuna va Degustatsiya Band Qilish
            </h3>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Tanlov
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
            Katta buyurtmalar oldidan mahsulot ta'mini tatib ko'rish uchrashuvi
          </p>

          {/* Ikkala tezkor tugma */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold bg-sky-500/20 text-sky-300 border border-sky-400/30 hover:bg-sky-500 hover:text-white transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram: {telegramUsername}</span>
            </a>
            <a
              href={phoneTelUrl}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 hover:bg-emerald-500 hover:text-white transition-all shadow-sm"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Tel: {phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="self-end sm:self-center flex items-center justify-center w-9 h-9 rounded-full bg-white/[0.08] border border-white/20 text-white group-hover:bg-amber-500 group-hover:text-black transition-all">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </motion.div>
  );
};
