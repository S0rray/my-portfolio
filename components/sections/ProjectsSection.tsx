import Image from 'next/image';
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
      'Site réalisé sous WordPress, personnalisé et entièrement responsive pour l\'Udaf de la Corrèze.',
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
    comingSoon: true,
  },
];

export default function ProjectsSection() {
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
          Mobile  : flex horizontal, scroll-snap (1 carte visible)
          Desktop : CSS grid 3 colonnes
         ────────────────────────────────────────────────────────────── */}
      <ScrollReveal delay={150}>
      <div
        className={[
          /* mobile */
          'px-6 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none',
          /* desktop */
          'md:grid md:grid-cols-3 md:overflow-visible md:pb-0',
          'md:max-w-5xl md:mx-auto',
        ].join(' ')}
      >
        {PROJECTS.map((project) => (
          <article
            key={project.key}
            className="project-card snap-start shrink-0 w-[80vw] sm:w-[65vw] md:w-auto flex flex-col rounded-xl overflow-hidden"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            {/* Chevron décoratif */}
            <div className="flex justify-center pt-5 pb-3" aria-hidden="true">
              <svg
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
                style={{ color: 'var(--accent)' }}
              >
                <path
                  d="M1 1L10 10L19 1"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
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
      </ScrollReveal>
    </section>
  );
}
