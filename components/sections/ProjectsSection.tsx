'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';

type Project = {
  key: string;
  title: string;
  tech: string;
  description: string;
  image?: string;
  href?: string;
  comingSoon?: boolean;
};

const PROJECTS: Project[] = [
  {
    key: 'wordpress',
    title: 'Udaf 19',
    tech: 'WordPress',
    description:
      "Site réalisé sous WordPress, personnalisé et entièrement responsive pour l'Udaf de la Corrèze.",
    image: '/projects/udaf19.png',
    href: 'https://udaf19.fr',
  },
  {
    key: 'portfolio-designeuse',
    title: 'Portfolio Designeuse',
    tech: 'React · Next.js',
    description:
      'Portfolio sur mesure pour une designeuse — galerie projets, animations soignées.',
    image: '/projects/portfolio-indisiya.png',
    comingSoon: true,
  },
  {
    key: 'site-exercice',
    title: "Site d'Exercice",
    tech: 'HTML · CSS · JS',
    description:
      'Site fictif réalisé pour consolider les fondamentaux du développement web.',
    image: '/projects/salon-coiffeur.png',
    comingSoon: true,
  },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanLeft(el.scrollLeft > 2);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scroll = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' });
  };

  const arrowClass = (active: boolean) =>
    `lg:hidden shrink-0 w-9 h-9 rounded-full flex items-center justify-center border-2 transition-opacity duration-200 ${
      active ? 'hover:opacity-80' : 'opacity-0 pointer-events-none'
    }`;

  return (
    <section
      id="projects"
      className="py-28 md:py-44 min-h-screen"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Titre */}
      <ScrollReveal className="px-6 max-w-5xl mx-auto mb-12">
        <h2
          className="text-4xl sm:text-5xl"
          style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}
        >
          Mes Projets
        </h2>
      </ScrollReveal>

      {/* ──────────────────────────────────────────────────────────────
          Mobile  : flex row — flèche | carousel | flèche
          Desktop : CSS grid 3 colonnes, flèches masquées
         ────────────────────────────────────────────────────────────── */}
      <ScrollReveal delay={150}>
        <div className="flex items-center gap-2 px-3 lg:block lg:px-0">

          {/* ← Précédent */}
          <button
            onClick={() => scroll(-1)}
            className={arrowClass(canLeft)}
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            aria-label="Projet précédent"
            tabIndex={canLeft ? 0 : -1}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className={[
              'flex-1 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none',
              'lg:flex-none lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0',
              'lg:max-w-5xl lg:mx-auto',
            ].join(' ')}
          >
            {PROJECTS.map((project) => (
              <article
                key={project.key}
                className="project-card snap-center shrink-0 w-full lg:w-auto flex flex-col rounded-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-card)' }}
              >
                {/* Chevron décoratif */}
                <div className="flex justify-center pt-5 pb-3" aria-hidden="true">
                  <svg
                    width="20" height="12" viewBox="0 0 20 12" fill="none"
                    style={{ color: 'var(--accent)' }}
                  >
                    <path
                      d="M1 1L10 10L19 1"
                      stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Zone image */}
                <div
                  className="mx-4 rounded-lg overflow-hidden relative"
                  style={{ aspectRatio: '16 / 9', backgroundColor: 'var(--bg)' }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Aperçu du projet ${project.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 80vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        width="36" height="36" viewBox="0 0 36 36" fill="none"
                        style={{ color: 'var(--accent)', opacity: 0.2 }}
                      >
                        <rect x="2" y="7" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
                        <circle cx="18" cy="19" r="5" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 7l2-5h8l2 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Métadonnées */}
                <div className="px-4 pt-4 pb-5 flex flex-col gap-2 flex-1">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: 'var(--accent)', fontFamily: 'var(--font-ui)' }}
                  >
                    {project.tech}
                  </p>
                  <p
                    className="text-base font-bold"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
                  >
                    {project.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed flex-1"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
                  >
                    {project.description}
                  </p>

                  {project.comingSoon ? (
                    <span
                      className="mt-2 self-start text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
                    >
                      Coming soon
                    </span>
                  ) : (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 self-start text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent-ter)', color: 'var(--accent)' }}
                    >
                      Voir le site →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* → Suivant */}
          <button
            onClick={() => scroll(1)}
            className={arrowClass(canRight)}
            style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}
            aria-label="Projet suivant"
            tabIndex={canRight ? 0 : -1}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </ScrollReveal>
    </section>
  );
}
