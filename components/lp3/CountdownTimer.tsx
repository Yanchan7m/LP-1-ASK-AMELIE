"use client";

import { useEffect, useState } from "react";

const TOTAL_SPOTS = 50;
const SECONDS_PER_SPOT = 47;

function getInitialState() {
  const now = new Date();
  const startOfDay = new Date(now);
  startOfDay.setHours(8, 0, 0, 0);
  const elapsedSec = Math.max(
    0,
    Math.floor((now.getTime() - startOfDay.getTime()) / 1000)
  );
  const taken = Math.min(
    TOTAL_SPOTS - 3,
    Math.floor(elapsedSec / SECONDS_PER_SPOT)
  );
  const remaining = Math.max(3, TOTAL_SPOTS - taken);
  const into = elapsedSec % SECONDS_PER_SPOT;
  const nextIn = Math.max(1, SECONDS_PER_SPOT - into);
  return { remaining, nextIn };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownTimer() {
  const [state, setState] = useState<{
    remaining: number;
    nextIn: number;
  } | null>(null);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setState(getInitialState());
  }, []);

  useEffect(() => {
    if (!state) return;
    const id = setInterval(() => {
      setState((prev) => {
        if (!prev) return prev;
        if (prev.nextIn <= 1) {
          const remaining = prev.remaining > 3 ? prev.remaining - 1 : prev.remaining;
          setFlash(true);
          setTimeout(() => setFlash(false), 500);
          return { remaining, nextIn: SECONDS_PER_SPOT };
        }
        return { ...prev, nextIn: prev.nextIn - 1 };
      });
    }, 1000);
    return () => clearInterval(id);
  }, [state]);

  const remaining = state?.remaining ?? TOTAL_SPOTS;
  const taken = TOTAL_SPOTS - remaining;
  const nextIn = state?.nextIn ?? SECONDS_PER_SPOT;

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
          Places gratuites — décompte en direct
        </div>

        <div className="mt-6 flex items-end justify-center gap-3 sm:gap-5">
          <div className="flex flex-col items-center">
            <div
              className={`grid h-24 min-w-[110px] place-items-center rounded-2xl bg-white/5 px-4 font-mono text-5xl font-extrabold tabular-nums backdrop-blur transition-all duration-300 sm:h-28 sm:min-w-[140px] sm:text-7xl ${
                flash ? "scale-110 text-emerald-300" : "text-white"
              }`}
            >
              {pad(remaining)}
            </div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              restantes
            </div>
          </div>

          <span className="pb-7 text-2xl font-bold text-slate-600 sm:text-4xl">
            /
          </span>

          <div className="flex flex-col items-center">
            <div className="grid h-24 min-w-[110px] place-items-center rounded-2xl bg-white/5 px-4 font-mono text-5xl font-extrabold tabular-nums text-slate-300 backdrop-blur sm:h-28 sm:min-w-[140px] sm:text-7xl">
              {pad(TOTAL_SPOTS)}
            </div>
            <div className="mt-2 text-[10px] font-medium uppercase tracking-wider text-slate-400">
              offertes
            </div>
          </div>
        </div>

        <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
          <span className="text-xs uppercase tracking-wider text-slate-400">
            Prochaine place prise dans
          </span>
          <span className="font-mono text-lg font-extrabold tabular-nums text-white">
            {pad(nextIn)}s
          </span>
        </div>

        <div className="mt-5 text-xs text-slate-400">
          {taken} place{taken > 1 ? "s" : ""} déjà prise
          {taken > 1 ? "s" : ""} aujourd'hui
        </div>
      </div>
    </div>
  );
}
