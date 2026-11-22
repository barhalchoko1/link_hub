import React, { useState, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Check, X, Send, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  name: string;
  bio: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  url,
  name,
  bio
}) => {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const input = document.createElement('input');
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadQR = () => {
    if (!qrRef.current) return;
    const svg = qrRef.current.querySelector('svg');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      canvas.width = 300;
      canvas.height = 300;
      if (ctx) {
        ctx.fillStyle = '#08080a';
        ctx.fillRect(0, 0, 300, 300);
        ctx.drawImage(img, 0, 0, 300, 300);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `${name.replace(/\s+/g, '-').toLowerCase()}-qr.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      }
    };
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };

  const shareText = encodeURIComponent(`${name} — Shaxsiy Link Hub:\n${bio}\n${url}`);
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(name + ' — Shaxsiy Havola Markazi')}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Orqa fon xiralashishi */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal oynasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-sm rounded-3xl p-6 shadow-2xl z-10
              bg-[#0e1017]/95 
              backdrop-blur-2xl 
              border border-red-500/30 
              text-white shadow-[0_0_50px_rgba(255,23,68,0.2)]"
          >
            {/* Modal bosh qismi */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/20">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Profilni ulashish</h3>
                  <p className="text-xs text-slate-400">QR-kod yoki havola orqali</p>
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

            {/* QR-kod konteyneri */}
            <div className="my-5 flex flex-col items-center">
              <div
                ref={qrRef}
                className="p-4 rounded-2xl bg-white shadow-2xl border border-red-500/40 relative group transition-transform duration-300 hover:scale-105"
              >
                <QRCodeSVG
                  value={url}
                  size={170}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: "/avatar.svg",
                    x: undefined,
                    y: undefined,
                    height: 34,
                    width: 34,
                    excavate: true,
                  }}
                />
              </div>

              <button
                onClick={handleDownloadQR}
                className="mt-3 flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-red-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                QR-kodni rasm qilib saqlash
              </button>
            </div>

            {/* Havola va Nusxalash */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-1.5 rounded-xl border bg-white/[0.03] border-white/[0.08]">
                <input
                  type="text"
                  readOnly
                  value={url}
                  className="w-full px-2 text-xs font-mono bg-transparent text-slate-300 focus:outline-none truncate"
                />
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 shadow-sm whitespace-nowrap ${
                    copied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-red-600 text-white hover:bg-red-500'
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

              {/* Tezkor ulashish */}
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={telegramShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-sky-400 bg-sky-500/10 hover:bg-sky-500/20 transition-colors border border-sky-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  Telegram
                </a>
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors border border-emerald-500/20"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
