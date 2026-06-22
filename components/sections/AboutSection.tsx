// TODO: quand la photo est prête → remplacer le placeholder par :
// import Image from 'next/image'
// <Image src="/photo.jpg" fill alt="Olivier Merlet" className="object-cover" />

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">

          {/* ── Contenu texte ─────────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-4xl sm:text-5xl mb-3 leading-tight"
              style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)' }}
            >
              Qui suis&#8209;je&nbsp;?
            </h2>

            <p
              className="text-xl sm:text-2xl font-bold mb-1"
              style={{ color: 'var(--text)', fontFamily: 'var(--font-sans)' }}
            >
              Olivier MERLET
            </p>

            <p
              className="text-base mb-8"
              style={{ color: 'var(--accent-alt)', fontFamily: 'var(--font-sans)' }}
            >
              Développeur Web Full Stack
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
            >
              Ancien chargé d&apos;études dans les télécoms, j&apos;ai choisi de me reconvertir
              dans le développement web pour transformer ma curiosité technique en véritable
              terrain de création. Aujourd&apos;hui développeur full stack, je conçois des sites
              web modernes en alliant design soigné, performance et expérience utilisateur.
              Curieux, rigoureux et toujours en apprentissage, j&apos;aime relever des défis
              concrets et donner vie à des projets utiles, ambitieux et bien pensés.
            </p>
          </div>

          {/* ── Photo ─────────────────────────────────────────── */}
          <div className="shrink-0 w-36 sm:w-44 md:w-52 self-start md:sticky md:top-24">
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: '3 / 4', backgroundColor: 'var(--bg-card)' }}
            >
              {/* Placeholder centré */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                aria-hidden="true"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  style={{ color: 'var(--accent)', opacity: 0.35 }}
                >
                  <circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M4 34c0-8.837 7.163-16 16-16s16 7.163 16 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="text-xs"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
                >
                  Photo à venir
                </span>
              </div>

              {/* Bordure accent subtile */}
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 2px var(--accent)', opacity: 0.25 }}
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
