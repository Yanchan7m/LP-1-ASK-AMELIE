"use client";

import { useEffect, useState } from "react";

const START_RANK = 4218;
const SECONDS_PER_DROP = 9;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export function RankCounter() {
  const [rank, setRank] = useState<number>(START_RANK);
  const [overtaken, setOvertaken] = useState<number>(0);
  const [nextIn, setNextIn] = useState<number>(SECONDS_PER_DROP);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setNextIn((n) => {
        if (n <= 1) {
          setRank((r) => r + 1);
          setOvertaken((o) => o + 1);
          setFlash(true);
          setTimeout(() => setFlash(false), 500);
          return SECONDS_PER_DROP;
        }
        return n - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

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
          Classement EDN — simulation en direct
        </div>

        <div className="mt-6">
          <div className="text-xs uppercase tracking-wider text-slate-400">
            Ton rang estimé glisse à
          </div>
          <div
            className={`mt-3 font-mono text-6xl font-extrabold tabular-nums transition-all duration-300 sm:text-8xl ${
              flash ? "scale-105 text-red-300" : "text-white"
            }`}
          >
            #{rank.toLocaleString("fr-FR")}
          </div>
          <div className="mt-2 text-xs text-slate-400">
            au classement national EDN
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10">
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              D4 qui t'ont dépassé
            </div>
            <div className="mt-1 font-mono text-2xl font-extrabold tabular-nums text-white sm:text-3xl">
              +{overtaken}
            </div>
            <div className="mt-1 text-[10px] text-slate-500">
              depuis le chargement de cette page
            </div>
          </div>

          <div className="rounded-2xl bg-white/5 px-4 py-4 ring-1 ring-white/10">
            <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Prochain te dépasse dans
            </div>
            <div className="mt-1 font-mono text-2xl font-extrabold tabular-nums text-emerald-300 sm:text-3xl">
              {pad(nextIn)}s
            </div>
            <div className="mt-1 text-[10px] text-slate-500">
              en moyenne 1 toutes les {SECONDS_PER_DROP}s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
