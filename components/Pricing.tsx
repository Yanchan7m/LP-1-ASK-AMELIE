export function Pricing() {
  return (
    <section id="focus" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
          Tarif
        </span>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Gratuit vs Focus Illimité
        </h2>
        <p className="mt-3 text-slate-600">
          Commence gratuitement. Passe à l'illimité quand tu es prêt.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <PlanCard
          title="Gratuit"
          price="0€"
          tagline="Pour découvrir"
          cta="Commencer le dossier gratuit"
          features={[
            "1 dossier corrigé offert",
            "Correction par un médecin",
            "Comparaison à la médiane",
          ]}
        />
        <PlanCard
          highlighted
          title="Focus Illimité"
          price="29,90 €"
          period="/mois"
          tagline="Pour viser ton internat"
          cta="Démarrer Focus Illimité"
          features={[
            "Accès à toutes les annales EDN depuis 2016",
            "850+ dossiers cliniques corrigés",
            "13 spécialités couvertes",
            "Statistiques personnalisées",
            "Sans engagement · 🇫🇷",
          ]}
        />
      </div>
    </section>
  );
}

function PlanCard({
  title,
  price,
  period,
  tagline,
  cta,
  features,
  highlighted,
}: {
  title: string;
  price: string;
  period?: string;
  tagline: string;
  cta: string;
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={
        highlighted
          ? "relative overflow-hidden rounded-3xl border border-transparent bg-slate-900 p-8 text-white shadow-card"
          : "rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
      }
    >
      {highlighted && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-brand-500/40 to-emerald-500/30 blur-3xl"
        />
      )}
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-bold">{title}</h3>
        {highlighted && (
          <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            Recommandé
          </span>
        )}
      </div>
      <p
        className={
          highlighted ? "mt-1 text-sm text-slate-300" : "mt-1 text-sm text-slate-500"
        }
      >
        {tagline}
      </p>
      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-extrabold tracking-tight">{price}</span>
        {period && (
          <span
            className={highlighted ? "text-sm text-slate-300" : "text-sm text-slate-500"}
          >
            {period}
          </span>
        )}
      </div>

      <ul
        className={
          highlighted
            ? "mt-6 space-y-3 text-sm text-slate-200"
            : "mt-6 space-y-3 text-sm text-slate-700"
        }
      >
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <span
              className={
                highlighted
                  ? "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-300"
                  : "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600"
              }
            >
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4L8.5 12 15.3 5.3a1 1 0 011.4 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button
        className={
          highlighted
            ? "mt-8 w-full rounded-2xl bg-gradient-to-r from-brand-500 to-emerald-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
            : "mt-8 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
        }
      >
        {cta}
      </button>
    </div>
  );
}
