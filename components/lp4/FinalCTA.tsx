export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-brand-700 px-8 py-16 text-center shadow-card">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 ring-1 ring-white/10">
            Reprends la main
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Un dossier corrigé = en moyenne 4 places regagnées.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Le premier est offert. Corrigé sous 24h par un médecin spécialiste.
            Sans CB. Tu sauras où tu en es vraiment dans 25 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-900 shadow-soft transition hover:-translate-y-0.5 sm:w-auto"
            >
              Démarrer mon dossier gratuit →
            </a>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-transparent bg-gradient-to-r from-brand-600 to-emerald-500 px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
            >
              ✨ Passer Focus Illimité
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Sinon, ferme cet onglet et continue à reculer au classement.
          </p>
        </div>
      </div>
    </section>
  );
}
