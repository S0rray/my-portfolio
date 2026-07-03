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
            &larr; Retour au portfolio
          </Link>

          <h1
            className="text-3xl sm:text-4xl font-bold mb-12"
            style={{ color: 'var(--accent)', fontFamily: 'var(--font-sans)' }}
          >
            Mentions L&eacute;gales
          </h1>

          {[
            {
              title: 'Éditeur du site',
              body: (
                <>
                  Olivier Merlet &mdash; D&eacute;veloppeur Web Front-end ind&eacute;pendant
                  <br />
                  Contact&nbsp;:{' '}
                  <a
                    href="mailto:contact@o-code.fr"
                    style={{ color: 'var(--accent)' }}
                  >
                    contact@o-code.fr
                  </a>
                </>
              ),
            },
            {
              title: 'Hébergement',
              body: (
                <>
                  Ce site est h&eacute;berg&eacute; par Infomaniak Network SA,
                  Rue Eug&egrave;ne-Marziano 25, 1227 Les Acacias, Gen&egrave;ve, Suisse.
                  <br />
                  <a
                    href="https://www.infomaniak.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--accent)' }}
                  >
                    infomaniak.com
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
