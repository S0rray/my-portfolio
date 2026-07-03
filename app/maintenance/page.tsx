import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maintenance en cours',
  robots: { index: false, follow: false },
};

export default function Maintenance() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Icône outil */}
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-6"
        style={{ color: 'var(--accent)' }}
        aria-hidden="true"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>

      <p
        className="text-2xl sm:text-3xl font-semibold mb-3"
        style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
      >
        Site en maintenance
      </p>

      <p
        className="text-sm sm:text-base max-w-sm leading-relaxed"
        style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
      >
        Le site est temporairement indisponible pour une mise &agrave; jour.
        <br />
        De retour tr&egrave;s bient&ocirc;t.
      </p>

      <a
        href="mailto:contact@o-code.fr"
        className="mt-8 text-sm transition-opacity hover:opacity-80"
        style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}
      >
        contact@o-code.fr
      </a>
    </main>
  );
}
