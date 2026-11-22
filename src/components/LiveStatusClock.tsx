import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Sparkles } from 'lucide-react';

interface LiveStatusClockProps {
  location: string;
  statusText: string;
}

export const LiveStatusClock: React.FC<LiveStatusClockProps> = ({
  location,
  statusText
}) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Toshkent vaqti (UTC+5)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Tashkent',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      setTime(new Intl.DateTimeFormat('uz-UZ', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
      {/* Joylashuv va jonli soat */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] dark:bg-slate-900/60 border border-white/[0.08] backdrop-blur-md text-slate-300 font-mono shadow-sm">
        <MapPin className="w-3.5 h-3.5 text-red-500" />
        <span>{location}</span>
        <span className="w-1 h-1 rounded-full bg-slate-600" />
        <Clock className="w-3 h-3 text-slate-400" />
        <span className="text-white font-medium">{time || "19:58"}</span>
      </div>

      {/* Jonli status indikatori */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          {statusText}
        </span>
      </div>
    </div>
  );
};
