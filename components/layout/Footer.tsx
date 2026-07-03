import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6"
      style={{
        backgroundColor: 'var(--bg)',
        borderTop: '1px solid rgba(136,153,187,0.12)',
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          className="text-sm"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
        >
          © {year} Olivier Merlet
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/S0rray"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs hover:opacity-100 transition-opacity opacity-60"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
          >
            <FaGithub size={14} />
            GitHub
          </a>
          <Link
            href="/mentions-legales"
            className="text-xs hover:opacity-100 transition-opacity opacity-60"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
          >
            Mentions légales
          </Link>
          <p
            className="text-xs opacity-60"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
          >
            Conçu &amp; développé avec Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
