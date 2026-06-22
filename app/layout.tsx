import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Aldrich } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import CustomCursor from "@/components/layout/CustomCursor";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const aldrich = Aldrich({
  subsets: ["latin"],
  variable: "--font-aldrich",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Olivier Merlet — Développeur Web Full Stack",
    template: "%s — Olivier Merlet",
  },
  description:
    "Portfolio d'Olivier Merlet, développeur web full stack spécialisé en React, Next.js et design soigné. Du design à la logique, je construis le web de bout en bout.",
  keywords: ["développeur web", "full stack", "React", "Next.js", "portfolio", "Olivier Merlet"],
  authors: [{ name: "Olivier Merlet" }],
  creator: "Olivier Merlet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Olivier Merlet — Développeur Web Full Stack",
    description:
      "Portfolio d'Olivier Merlet, développeur web full stack spécialisé en React, Next.js et design soigné.",
    siteName: "Olivier Merlet Portfolio",
    // TODO: créer /public/og-image.png (1200×630px) pour l'aperçu sur les réseaux sociaux
    // images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Olivier Merlet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivier Merlet — Développeur Web Full Stack",
    description:
      "Portfolio d'Olivier Merlet, développeur web full stack spécialisé en React, Next.js et design soigné.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${jakartaSans.variable} ${inter.variable} ${aldrich.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        {/*
         * Anti-flash script : s'exécute de façon synchrone avant le rendu React,
         * applique le thème stocké en localStorage immédiatement.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', t);
              } catch(e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
