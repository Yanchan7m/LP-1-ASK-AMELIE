export function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 px-8 py-16 text-center shadow-card">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
        >
          <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-red-500/20 blur-3xl" />
          <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Pendant que tu hésites, le classement bouge.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Un dossier offert. Sans CB. Corrigé par un médecin spécialiste.
            Tu sauras où tu en es vraiment dans 25 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-900 shadow-soft transition hover:-translate-y-0.5 sm:w-auto"
            >
              Démarrer le dossier gratuit →
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Tu peux fermer cet onglet et continuer à perdre des places. Ou agir.
          </p>
        </div>
      </div>
    </section>
  );
}
