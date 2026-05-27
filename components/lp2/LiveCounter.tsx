"use client";

import { useEffect, useState } from "react";

export function LiveCounter() {
  const [places, setPlaces] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setSeconds((s) => s + 1);
      setPlaces((p) => p + Math.floor(Math.random() * 3) + 1);
    }, 1800);
    return () => clearInterval(tick);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-6 sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-red-200/40 blur-3xl"
      />
      <div className="relative flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
          </span>
          En direct
        </span>

        <div className="mt-4 text-sm font-medium text-slate-600">
          Places que tu perds depuis que tu lis cette page
        </div>

        <div className="mt-2 font-mono text-6xl font-extrabold tabular-nums text-red-600 sm:text-7xl">
          {places.toLocaleString("fr-FR").padStart(4, "0")}
        </div>

        <div className="mt-3 text-xs text-slate-500">
          {seconds}s écoulées · classement EDN national
        </div>
      </div>
    </div>
  );
}
