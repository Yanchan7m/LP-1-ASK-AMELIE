import { RankCounter } from "./RankCounter";

export function RankLossHero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10rem] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100 via-white to-emerald-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 ring-1 ring-slate-200 shadow-soft">
            📉 Classement EDN — simulation
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Voici les places au concours{" "}
            <span className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text text-transparent">
              que tu perds chaque seconde
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg">
            +9 000 D4 s'entraînent en ce moment sur Ask Amélie. Pendant que
            tu lis cette page, ils corrigent un dossier, gagnent un point,
            et te passent devant. Regarde ton rang glisser en temps réel.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <RankCounter />
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto"
            >
              Reprendre mes places maintenant
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
              href="#enjeu"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-transparent bg-gradient-to-r from-brand-600 to-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
            >
              ✨ Voir ce que ça coûte
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Premier dossier offert · sans CB · 🇫🇷
          </p>
        </div>
      </div>
    </section>
  );
}
