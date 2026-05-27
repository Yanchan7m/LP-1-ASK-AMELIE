import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScarcityHero } from "@/components/lp3/ScarcityHero";
import { LostSpots } from "@/components/lp3/LostSpots";
import { FinalCTA } from "@/components/lp3/FinalCTA";

export const metadata: Metadata = {
  title: "Ask Amélie — Voici les places que tu perds.",
  description:
    "50 dossiers corrigés gratuitement chaque semaine. Combien reste-t-il ? Réserve la tienne avant qu'elle parte.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LP3() {
  return (
    <>
      <Header />
      <main>
        <ScarcityHero />
        <LostSpots />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
