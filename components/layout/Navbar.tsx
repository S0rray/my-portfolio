'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { label: 'Accueil',         href: '#hero'     },
  { label: 'À propos de moi', href: '#about'    },
  { label: 'Projets',         href: '#projects' },
  { label: 'Contact',         href: '#contact'  },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const id = NAV_LINKS[i].href.slice(1);
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y + 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-17.75 flex items-center px-6 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        borderBottom:    scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="mr-auto flex items-center"
        aria-label="O Code — retour en haut"
      >
        <Image
          src="/Logo.png"
          alt="O Code"
          width={120}
          height={40}
          className="h-14 w-auto object-contain"
          priority
        />
        <span className='hidden sm:block'>O Code</span>
      </a>

      {/* Desktop nav links */}
      <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href.slice(1);
          return (
            <a
              key={href}
              href={href}
              className={`text-sm pb-0.5 transition-all duration-200 ${isActive ? 'opacity-100' : 'opacity-65 hover:opacity-100'}`}
              style={{
                color: 'var(--text)',
                fontFamily: 'var(--font-ui)',
                borderBottom: `2px solid ${isActive ? 'var(--accent)' : 'transparent'}`,
              }}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2 ml-6">
        <ThemeToggle />

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          style={{ color: 'var(--text)' }}
        >
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav
          aria-label="Navigation mobile"
          className="absolute top-full left-0 right-0 flex flex-col py-4 px-6 gap-4 md:hidden"
          style={{
            backgroundColor: 'var(--nav-bg-scrolled)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm py-1 opacity-80 hover:opacity-100 transition-opacity"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-ui)' }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
