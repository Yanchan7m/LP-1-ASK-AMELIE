export function Why() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
            L'effet de test
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Pourquoi t'entraîner bat toujours
            <br />
            le fait de relire ton cours
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Quand tu te testes, ton cerveau consolide la trace mémorielle bien
            plus efficacement qu'en relisant. C'est ce qu'on appelle l'
            <em>effet de test</em>. Ask Amélie t'expose à des dossiers réels et
            te corrige comme un examinateur — pas comme un QCM.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {[
              "Raisonnement clinique commenté étape par étape",
              "Comparaison avec la copie d'un spécialiste",
              "Statistiques fines : tes faiblesses par item",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4L8.5 12 15.3 5.3a1 1 0 011.4 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-brand-100 to-emerald-100 blur-2xl" />
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="text-xs font-medium text-slate-500">
                  Dossier #312
                </div>
                <div className="text-sm font-semibold text-slate-900">
                  Cardiologie — Insuffisance cardiaque
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                Corrigé
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <ProgressLine label="Ta copie" value={62} color="bg-slate-900" />
              <ProgressLine
                label="Médiane promo"
                value={71}
                color="bg-slate-400"
              />
              <ProgressLine
                label="Top 10%"
                value={89}
                color="bg-emerald-500"
              />
            </div>
            <button className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Voir la correction détaillée →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgressLine({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold tabular-nums text-slate-900">
          {value}/100
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full ${color} rounded-full transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
