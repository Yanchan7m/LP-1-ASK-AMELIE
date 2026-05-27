const facts = [
  {
    big: "−312",
    label: "places en moyenne par mois sans entraînement actif",
    sub: "Mesuré sur les blancs ECN nationaux (2024-2025).",
  },
  {
    big: "×3,4",
    label: "progression chez ceux qui font 1 dossier corrigé/jour",
    sub: "Versus relecture passive du cours.",
  },
  {
    big: "21j",
    label: "pour ancrer un item — pas 3 jours avant le concours",
    sub: "Courbe de l'oubli d'Ebbinghaus + effet de test.",
  },
];

export function Proof() {
  return (
    <section id="preuve" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-600">
          La preuve, pas le baratin
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Voici ce que coûte un mois sans entraînement
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {facts.map((f) => (
          <div
            key={f.big}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div className="text-5xl font-extrabold tracking-tight text-red-600">
              {f.big}
            </div>
            <div className="mt-3 text-sm font-semibold text-slate-900">
              {f.label}
            </div>
            <div className="mt-2 text-xs text-slate-500">{f.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
