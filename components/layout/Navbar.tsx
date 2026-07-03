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
        className="mr-auto flex items-center gap-4"
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
        <span>O Code</span>
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

        {/* Mobile hamburger — animé burger → croix */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          style={{ color: 'var(--text)' }}
        >
          <div className="flex flex-col gap-1.25 w-4.5" aria-hidden="true">
            <span className={`block h-0.5 rounded-full bg-current transition-transform duration-300 origin-center ${
              menuOpen ? 'translate-y-1.75 rotate-45' : ''
            }`} />
            <span className={`block h-0.5 rounded-full bg-current transition-all duration-200 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`} />
            <span className={`block h-0.5 rounded-full bg-current transition-transform duration-300 origin-center ${
              menuOpen ? '-translate-y-1.75 -rotate-45' : ''
            }`} />
          </div>
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
