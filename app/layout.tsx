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
  metadataBase: new URL("https://o-code.fr"),
  title: {
    default: "O Code — Olivier Merlet, Développeur Web Front-end",
    template: "%s — O Code",
  },
  description:
    "Portfolio d'Olivier Merlet, développeur web front-end spécialisé en React, Next.js et interfaces soignées. Design, performance et expérience utilisateur au coeur de chaque projet.",
  keywords: ["développeur web", "front-end", "React", "Next.js", "portfolio", "Olivier Merlet", "o-code"],
  authors: [{ name: "Olivier Merlet", url: "https://o-code.fr" }],
  creator: "Olivier Merlet",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://o-code.fr",
    title: "O Code — Olivier Merlet, Développeur Web Front-end",
    description:
      "Portfolio d'Olivier Merlet, développeur web front-end spécialisé en React, Next.js et interfaces soignées.",
    siteName: "O Code",
  },
  twitter: {
    card: "summary_large_image",
    title: "O Code — Olivier Merlet, Développeur Web Front-end",
    description:
      "Portfolio d'Olivier Merlet, développeur web front-end spécialisé en React, Next.js et interfaces soignées.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
