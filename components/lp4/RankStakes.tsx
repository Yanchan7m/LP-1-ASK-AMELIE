const tiers = [
  {
    rank: "Top 500",
    color: "from-brand-600 to-emerald-500",
    specialties: ["Ophtalmo", "Dermato", "Cardio", "Radio"],
    note: "CHU au choix · spécialités tendues accessibles",
  },
  {
    rank: "500 – 2 500",
    color: "from-brand-500 to-brand-700",
    specialties: ["Anesth.", "Pédiatrie", "Néphro", "Gastro"],
    note: "Marge confortable, ville restreinte sur les tendues",
  },
  {
    rank: "2 500 – 5 000",
    color: "from-slate-400 to-slate-600",
    specialties: ["MG", "Psychiatrie", "Bio. médicale"],
    note: "Spécialités tendues fermées · choix de ville réduit",
  },
  {
    rank: "> 5 000",
    color: "from-slate-500 to-slate-700",
    specialties: ["MG en zone sous-dotée"],
    note: "Postes restants imposés",
  },
];

export function RankStakes() {
  return (
    <section id="enjeu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          L'enjeu, pas l'angoisse
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Chaque place perdue, c'est une porte qui se ferme.
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Voici ce que chaque tranche du classement EDN ouvre — ou ferme —
          comme spécialités et villes en France.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.rank}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft"
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${t.color}`} />
            <div className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Rang
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  {t.rank}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-600">{t.note}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
        Tranches indicatives basées sur les amphis de garnison récents.
        Référence : choix des internes EDN 2024.
      </p>
    </section>
  );
}
