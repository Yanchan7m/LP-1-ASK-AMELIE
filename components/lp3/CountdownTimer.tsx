"use client";

import { useEffect, useState } from "react";

function getMidnightTarget() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d.getTime();
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
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

  const blocks: { v: string; l: string }[] = [
    { v: pad(h), l: "heures" },
    { v: pad(m), l: "minutes" },
    { v: pad(s), l: "secondes" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-card sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
      >
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-500/30 blur-3xl" />
      </div>

      <div className="relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-white/10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Offre dossier gratuit — expire dans
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4">
          {blocks.map((b, i) => (
            <div key={b.l} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className="grid h-20 min-w-[76px] place-items-center rounded-2xl bg-white/5 px-3 font-mono text-4xl font-extrabold tabular-nums backdrop-blur sm:h-24 sm:min-w-[96px] sm:text-6xl">
                  {b.v}
                </div>
                <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
                  {b.l}
                </div>
              </div>
              {i < blocks.length - 1 && (
                <span className="text-2xl font-bold text-slate-600 sm:text-4xl">
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 text-xs text-slate-400">
          Minuit · réinitialisation quotidienne
        </div>
      </div>
    </div>
  );
}
