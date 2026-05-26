const items = [
  {
    name: "Camille",
    role: "D4 — Paris",
    quote:
      "J'ai gagné 1200 places sur les blancs en 3 mois. Les corrections détaillées m'ont fait comprendre des items que je révisais en boucle sans rien retenir.",
    initials: "C",
  },
  {
    name: "Léo",
    role: "D4 — Lyon",
    quote:
      "Le format dossier corrigé par un spé > tout ce que j'avais essayé avant. Plus jamais je ne révise sans Ask Amélie.",
    initials: "L",
  },
  {
    name: "Sofia",
    role: "D4 — Bordeaux",
    quote:
      "Enfin un outil qui te dit pourquoi tu te trompes, pas juste la bonne lettre. Ça change tout.",
    initials: "S",
  },
];

export function Testimonials() {
  return (
    <section
      id="temoignages"
      className="border-t border-slate-200 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
            Ils ont essayé
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            +2034 D4 nous font confiance cette année
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex text-amber-400" aria-label="5 sur 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path d="M10 1.5l2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6-4.3-4.2 6-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-700">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
