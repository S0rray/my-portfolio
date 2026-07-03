import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <p
        className="text-[120px] sm:text-[180px] font-bold leading-none select-none"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', opacity: 0.15 }}
        aria-hidden="true"
      >
        404
      </p>

      <div className="-mt-6 sm:-mt-10">
        <p
          className="text-2xl sm:text-3xl font-semibold mb-3"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
        >
          Page introuvable
        </p>
        <p
          className="text-sm sm:text-base max-w-sm"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
        >
          Cette page n&apos;existe pas ou a &eacute;t&eacute; d&eacute;plac&eacute;e.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)', fontFamily: 'var(--font-ui)' }}
        >
          &larr; Retour &agrave; l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
