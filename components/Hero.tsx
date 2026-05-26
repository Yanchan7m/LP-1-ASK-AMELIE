export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100 via-white to-emerald-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            +2034 D4 cette année · ⭐ 4.9/5 sur 400+ avis
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Teste un dossier EDN{" "}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
              gratuitement
            </span>
            <br className="hidden sm:block" /> Vois la différence.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
            Toutes les annales EDN/ECN depuis 2016 en conditions réelles.
            Raisonnement clinique détaillé par des médecins spécialistes :
            pas juste la bonne lettre.
          </p>

          <div
            id="cta"
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Commencer le dossier gratuit
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.59l-3.3-3.3a.75.75 0 011.06-1.06l4.59 4.59a.75.75 0 010 1.06l-4.59 4.59a.75.75 0 11-1.06-1.06l3.3-3.3H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-soft transition hover:-translate-y-0.5 hover:border-slate-300 sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  fill="#EA4335"
                  d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4-5.5 4-3.3 0-6-2.7-6-6.1S8.7 6 12 6c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.9 3.6 14.7 2.6 12 2.6 6.8 2.6 2.6 6.8 2.6 12s4.2 9.4 9.4 9.4c5.4 0 9-3.8 9-9.2 0-.6-.1-1.1-.2-1.6H12z"
                />
              </svg>
              Continuer avec Google
            </a>

            <a
              href="#focus"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-brand-600 to-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
            >
              ✨ Passer Focus Illimité
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Sans engagement · 🇫🇷 100% corrigé par des médecins
          </p>
        </div>

        <Stats />
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "10", label: "années d'annales" },
    { value: "850+", label: "dossiers cliniques" },
    { value: "13", label: "spécialités" },
    { value: "100%", label: "corrigé médecins" },
  ];

  return (
    <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-soft sm:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="bg-white px-6 py-6 text-center"
        >
          <div className="text-3xl font-extrabold tracking-tight text-slate-900">
            {it.value}
          </div>
          <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
            {it.label}
          </div>
        </div>
      ))}
    </div>
  );
}
