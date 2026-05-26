import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ask Amélie — Teste un dossier EDN gratuitement",
  description:
    "Toutes les annales EDN/ECN depuis 2016 en conditions réelles. Raisonnement clinique détaillé par des médecins spécialistes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
