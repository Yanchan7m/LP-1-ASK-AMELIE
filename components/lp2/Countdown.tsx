"use client";

import { useEffect, useState } from "react";

function getMidnightTarget() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

function format(n: number) {
  return n.toString().padStart(2, "0");
}

export function Countdown() {
  const [target] = useState<number>(() => getMidnightTarget());
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const remaining = Math.max(0, target - now);
  const h = Math.floor(remaining / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);

  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-card sm:p-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
          ⚠️ Offre dossier gratuit
        </div>
        <div className="mt-2 text-sm text-slate-300">
          Expire dans
        </div>

        <div className="mt-5 flex items-center justify-center gap-2 sm:gap-4">
          {[
            { v: format(h), l: "heures" },
            { v: format(m), l: "minutes" },
            { v: format(s), l: "secondes" },
          ].map((b, i) => (
            <div key={b.l} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className="grid h-16 min-w-[64px] place-items-center rounded-xl bg-white/5 px-3 font-mono text-3xl font-extrabold tabular-nums backdrop-blur sm:h-20 sm:min-w-[80px] sm:text-5xl">
                  {b.v}
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  {b.l}
                </div>
              </div>
              {i < 2 && (
                <span className="text-2xl font-bold text-slate-600 sm:text-4xl">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
