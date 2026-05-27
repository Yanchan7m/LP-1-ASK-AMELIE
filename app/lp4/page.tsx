import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RankLossHero } from "@/components/lp4/RankLossHero";
import { RankStakes } from "@/components/lp4/RankStakes";
import { FinalCTA } from "@/components/lp4/FinalCTA";

export const metadata: Metadata = {
  title: "Ask Amélie — Voici les places au concours que tu perds.",
  description:
    "Regarde ton rang EDN glisser en temps réel pendant que d'autres D4 te dépassent. Reprends la main en 25 minutes.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LP4() {
  return (
    <>
      <Header />
      <main>
        <RankLossHero />
        <RankStakes />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
