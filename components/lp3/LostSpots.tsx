"use client";

import { useEffect, useState } from "react";

type Spot = {
  id: number;
  initials: string;
  city: string;
  time: string;
};

const NAMES = [
  ["L.M.", "Lyon"],
  ["T.B.", "Paris"],
  ["A.D.", "Marseille"],
  ["C.R.", "Toulouse"],
  ["É.P.", "Bordeaux"],
  ["J.S.", "Nantes"],
  ["M.K.", "Lille"],
  ["S.V.", "Strasbourg"],
  ["N.G.", "Montpellier"],
  ["H.F.", "Rennes"],
  ["P.L.", "Nice"],
  ["O.C.", "Grenoble"],
];

function relativeTime(secondsAgo: number) {
  if (secondsAgo < 60) return `il y a ${secondsAgo}s`;
  const m = Math.floor(secondsAgo / 60);
  if (m < 60) return `il y a ${m} min`;
  const h = Math.floor(m / 60);
  return `il y a ${h}h`;
}

export function LostSpots() {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    const initial: Spot[] = Array.from({ length: 6 }).map((_, i) => {
      const [initials, city] = NAMES[i % NAMES.length];
      return {
        id: Date.now() - i * 100,
        initials,
        city,
        time: relativeTime(30 + i * 90),
      };
    });
    setSpots(initial);

    const id = setInterval(() => {
      setSpots((prev) => {
        const [initials, city] =
          NAMES[Math.floor(Math.random() * NAMES.length)];
        const next: Spot = {
          id: Date.now(),
          initials,
          city,
          time: "à l'instant",
        };
        return [next, ...prev].slice(0, 8);
      });
    }, 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="preuve" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
          Places parties — flux temps réel
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Chaque ligne, c'est une place que tu n'as plus.
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Ces D4 ont réservé leur dossier gratuit aujourd'hui. Pendant que tu
          hésites, la file avance.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
        <ul className="divide-y divide-slate-100">
          {spots.map((s, idx) => (
            <li
              key={s.id}
              className={`flex items-center gap-4 px-5 py-4 ${
                idx === 0 ? "bg-red-50/60" : ""
              }`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-red-500 to-amber-500 text-sm font-bold text-white">
                {s.initials}
              </div>
              <div className="flex-1 text-sm">
                <div className="font-semibold text-slate-900">
                  D4 {s.initials} — {s.city}
                </div>
                <div className="text-xs text-slate-500">
                  a pris sa place gratuite
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-slate-500">
                  {s.time}
                </div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700">
                  −1 place
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
