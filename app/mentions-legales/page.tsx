import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Mentions Légales',
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main
        className="px-6 pt-36 pb-20 min-h-screen"
        style={{ backgroundColor: 'var(--bg)' }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm mb-12 hover:opacity-70 transition-opacity"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}
          >
            ← Retour au portfolio
          </Link>

          <h1
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}
          >
            Mentions Légales
          </h1>

          {[
            {
              title: 'Éditeur du site',
              body: (
                <>
                  Olivier Merlet — Développeur Web indépendant
                  <br />
                  Contact&nbsp;:{' '}
                  <a
                    href="mailto:merlet.olivier@proton.me"
                    style={{ color: 'var(--accent)' }}
                  >
                    merlet.olivier@proton.me
                  </a>
                </>
              ),
            },
            {
              title: 'Hébergement',
              body: (
                <>
                  Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
                  Covina, CA 91723, États-Unis.
                  <br />
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)' }}
                  >
                    vercel.com
                  </a>
                </>
              ),
            },
            {
              title: 'Propriété intellectuelle',
              body: "L'ensemble du contenu de ce site (textes, images, code source, design) est la propriété exclusive d'Olivier Merlet, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.",
            },
            {
              title: 'Données personnelles',
              body: "Ce site ne collecte aucune donnée personnelle. Aucun cookie tiers n'est déposé. La préférence de thème (clair/sombre) est stockée uniquement dans votre navigateur (localStorage) et n'est pas transmise.",
            },
          ].map(({ title, body }) => (
            <section key={title} className="mb-10">
              <h2
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
              >
                {title}
              </h2>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
              >
                {body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
