const steps = [
  {
    n: "01",
    title: "Teste un vrai dossier",
    body: "Découvre ton niveau sur un cas concret, dans des conditions proches du concours.",
  },
  {
    n: "02",
    title: "Vois ce que ça t'apporte",
    body: "Compare ta copie avec la correction d'un spécialiste pour comprendre où tu peux gagner des points et des places.",
  },
  {
    n: "03",
    title: "Transforme ça en choix",
    body: "Plus tu progresses, plus tu augmentes tes chances de garder de l'option au moment de choisir ton internat.",
  },
];

export function HowItWorks() {
  return (
    <section id="comment" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Comment ça marche
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Trois étapes pour gagner des places
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-emerald-500 text-sm font-bold text-white">
                {s.n}
              </span>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {s.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
