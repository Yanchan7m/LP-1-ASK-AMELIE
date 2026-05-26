export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-16 text-center shadow-card">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
        >
          <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-500/30 to-transparent blur-3xl" />
          <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-bl from-emerald-500/30 to-transparent blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à voir où tu en es vraiment ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Un dossier offert, corrigé par un médecin. Sans CB.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-slate-900 shadow-soft transition hover:-translate-y-0.5 sm:w-auto"
            >
              Commencer le dossier gratuit →
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              Découvrir →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
