'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_LINKS = [
  { label: 'Accueil',         anchor: 'hero'     },
  { label: 'À propos de moi', anchor: 'about'    },
  { label: 'Projets',         anchor: 'projects' },
  { label: 'Contact',         anchor: 'contact'  },
] as const;

export default function Navbar() {
  const pathname  = usePathname();
  const isHome    = pathname === '/';
  const headerRef = useRef<HTMLElement>(null);

  const [scrolled,       setScrolled]       = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState<string>('hero');

  // Scroll : fond navbar + section active (home seulement)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (!isHome) return;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_LINKS[i].anchor);
        if (el && el.offsetTop <= y + 120) {
          setActiveSection(NAV_LINKS[i].anchor);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Fermeture du menu mobile au clic en dehors
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Href conditionnel : ancre si on est sur la home, URL absolue sinon
  const getHref = (anchor: string) =>
    isHome ? `#${anchor}` : anchor === 'hero' ? '/' : `/#${anchor}`;

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 h-17.75 flex items-center px-6 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
        backdropFilter:  scrolled ? 'blur(12px)' : 'none',
        borderBottom:    scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {/* Logo */}
      <a
        href={isHome ? '#hero' : '/'}
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
        {NAV_LINKS.map(({ label, anchor }) => {
          const isActive = isHome && activeSection === anchor;
          return (
            <a
              key={anchor}
              href={getHref(anchor)}
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
          {NAV_LINKS.map(({ label, anchor }) => (
            <a
              key={anchor}
              href={getHref(anchor)}
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
