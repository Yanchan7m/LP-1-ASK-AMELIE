import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UrgencyHero } from "@/components/lp2/UrgencyHero";
import { Proof } from "@/components/lp2/Proof";
import { FinalCTA } from "@/components/lp2/FinalCTA";

export const metadata: Metadata = {
  title: "Ask Amélie — Tu perds des places. Maintenant.",
  description:
    "Combien de places ECN as-tu perdues depuis le début de cette page ? Mesure-le en direct.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function LP2() {
  return (
    <>
      <Header />
      <main>
        <UrgencyHero />
        <Proof />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
