"use client";

import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-soft">
            <span className="text-sm font-bold">A</span>
          </span>
          <span className="text-lg font-bold tracking-tight">
            Ask Amélie
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#annales" className="transition hover:text-slate-900">
            Annales
          </a>
          <a href="#focus" className="transition hover:text-slate-900">
            Gratuit vs Focus Illimité
          </a>
          <a href="#temoignages" className="transition hover:text-slate-900">
            Témoignages
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
          >
            Se connecter
          </a>
          <a
            href="#cta"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
          >
            Commencer
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 md:hidden"
        >
          <span className="block h-0.5 w-4 bg-slate-900 before:absolute before:h-0.5 before:w-4 before:-translate-y-1.5 before:bg-slate-900 after:absolute after:h-0.5 after:w-4 after:translate-y-1.5 after:bg-slate-900" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200/60 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a href="#annales">Annales</a>
            <a href="#focus">Gratuit vs Focus Illimité</a>
            <a href="#temoignages">Témoignages</a>
            <a href="#" className="text-slate-500">
              Se connecter
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
