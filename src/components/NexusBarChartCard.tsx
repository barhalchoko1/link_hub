import React from 'react';
import { BarChart3, MoreVertical } from 'lucide-react';

export const NexusBarChartCard: React.FC = () => {
  const bars = [
    { label: "Qora", height: "45%", color: "bg-purple-600/60" },
    { label: "Sutli", height: "65%", color: "bg-purple-600/70" },
    { label: "Assorti", height: "95%", color: "bg-emerald-400 shadow-[0_0_15px_#00e699]", active: true },
    { label: "Yong'oq", height: "55%", color: "bg-purple-600/60" },
    { label: "Eksklyuziv", height: "75%", color: "bg-purple-500/70" },
  ];

  return (
    <div className="w-full nexus-card p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-extrabold text-white">Lazzat Turlari & Talab</h2>
        </div>
        <MoreVertical className="w-4 h-4 text-slate-400" />
      </div>

      {/* Rasmdagi binafsha va yorqin yashil vertikal ustunlar (Bar Chart) */}
      <div className="flex items-end justify-between h-28 gap-2 pt-2 px-2">
        {bars.map((bar, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group">
            <div
              className={`w-full max-w-[28px] rounded-lg transition-all duration-300 group-hover:opacity-100 ${bar.color}`}
              style={{ height: bar.height }}
            />
            <span className={`text-[10px] font-bold mt-2 truncate ${bar.active ? 'text-emerald-400 font-black' : 'text-slate-400'}`}>
              {bar.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
