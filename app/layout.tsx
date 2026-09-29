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
    "Olivier Merlet (O Code), développeur web front-end spécialisé en React et Next.js. Portfolio présentant ses projets, son parcours et ses compétences.",
  keywords: [
    "Olivier Merlet",
    "Olivier Merlet développeur",
    "Olivier Merlet portfolio",
    "O Code",
    "o-code",
    "ocode",
    "développeur web",
    "front-end",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Olivier Merlet", url: "https://o-code.fr" }],
  creator: "Olivier Merlet",
  alternates: {
    canonical: "https://o-code.fr",
  },
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Olivier Merlet",
  alternateName: ["O Code", "o-code", "ocode"],
  url: "https://o-code.fr",
  jobTitle: "Développeur Web Front-end",
  description:
    "Développeur web front-end spécialisé en React et Next.js, reconverti des télécoms.",
  sameAs: ["https://github.com/S0rray"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
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
