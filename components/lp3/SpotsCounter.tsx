"use client";

import { useEffect, useState } from "react";

const TOTAL_SPOTS = 50;

function getInitialSpots() {
  const now = new Date();
  const startOfDay = new Date(now);
  startOfDay.setHours(8, 0, 0, 0);
  const elapsedMin = Math.max(
    0,
    Math.floor((now.getTime() - startOfDay.getTime()) / 60000)
  );
  const taken = Math.min(TOTAL_SPOTS - 3, Math.floor(elapsedMin / 18));
  return Math.max(3, TOTAL_SPOTS - taken);
}

export function SpotsCounter() {
  const [spots, setSpots] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setSpots(getInitialSpots());
  }, []);

  useEffect(() => {
    if (spots === null) return;
    const id = setInterval(() => {
      setSpots((s) => {
        if (s === null) return s;
        if (s <= 2) return s;
        return s - 1;
      });
      setFlash(true);
      setTimeout(() => setFlash(false), 400);
    }, 22000 + Math.random() * 18000);
    return () => clearInterval(id);
  }, [spots]);

  const display = spots ?? TOTAL_SPOTS;
  const pct = Math.max(4, Math.round((display / TOTAL_SPOTS) * 100));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-white via-red-50 to-orange-50 p-8 shadow-card sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-200/50 blur-3xl"
      />
      <div className="relative">
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-red-700">
            Places gratuites — mise à jour en direct
          </span>
        </div>

        <div className="mt-6 text-center">
          <div
            className={`font-mono text-7xl font-extrabold tabular-nums transition-all duration-300 sm:text-8xl ${
              flash ? "scale-105 text-red-700" : "text-red-600"
            }`}
          >
            {display.toString().padStart(2, "0")}
          </div>
          <div className="mt-2 text-sm font-semibold text-slate-700">
            sur {TOTAL_SPOTS} places offertes cette semaine
          </div>
        </div>

        <div className="mt-8">
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-red-500 to-amber-500 transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[11px] font-medium uppercase tracking-wider text-slate-500">
            <span>Plus que {display} disponibles</span>
            <span>{TOTAL_SPOTS - display} déjà prises aujourd'hui</span>
          </div>
        </div>
      </div>
    </div>
  );
}
