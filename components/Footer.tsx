export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
              <span className="text-sm font-bold">A</span>
            </span>
            <span className="text-lg font-bold tracking-tight">
              Ask Amélie
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-slate-600">
            Dossiers EDN corrigés par des médecins. Conçu pour les D4 qui
            veulent vraiment progresser.
          </p>
        </div>

        <FooterCol
          title="Produit"
          links={["Annales", "Focus Illimité", "Tarifs", "Spécialités"]}
        />
        <FooterCol
          title="Ressources"
          links={["Blog", "FAQ", "Témoignages", "Signaler une erreur"]}
        />
        <FooterCol
          title="Légal"
          links={["Mentions légales", "CGU", "RGPD", "Contact"]}
        />
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6">
          <span>© {new Date().getFullYear()} Ask Amélie. Tous droits réservés.</span>
          <span>🇫🇷 Conforme RGPD · Hébergé en France</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-900">
        {title}
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition hover:text-slate-900">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
