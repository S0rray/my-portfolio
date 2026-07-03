import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiWordpress, SiGit, SiAngular, SiSymfony, SiMysql, SiPhp } from 'react-icons/si';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PHOTO_SRC = '/photo.webp';

const SKILLS = [
  { label: 'HTML',    icon: <FaHtml5      size={20} color="#E34F26" /> },
  { label: 'CSS',     icon: <FaCss3Alt    size={20} color="#264DE4" /> },
  { label: 'JS',      icon: <SiJavascript size={18} color="#F7DF1E" /> },
  { label: 'TS',      icon: <SiTypescript size={18} color="#3178C6" /> },
  { label: 'React',   icon: <FaReact      size={20} color="#61DAFB" /> },
  { label: 'Next.js', icon: <SiNextdotjs  size={18} /> },
  { label: 'WP',      icon: <SiWordpress  size={20} color="#21759B" /> },
  { label: 'Git',     icon: <SiGit        size={20} color="#F05032" /> },
  { label: 'Angular', icon: <SiAngular    size={20} color="#DD0031" /> },
  { label: 'Symfony', icon: <SiSymfony    size={18} /> },
  { label: 'MySQL',   icon: <SiMysql      size={20} color="#4479A1" /> },
  { label: 'PHP',     icon: <SiPhp        size={20} color="#777BB4" /> },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-32 items-start">

          {/* ── Photo + compétences ────────────────────────────── */}
          <div className="shrink-0 w-36 sm:w-44 md:w-52 self-start md:sticky md:top-24">
            <div
              className="relative w-full overflow-hidden rounded-xl"
              style={{ aspectRatio: '3 / 4', backgroundColor: 'var(--bg-card)' }}
            >
              {PHOTO_SRC ? (
                <Image
                  src={PHOTO_SRC}
                  alt="Olivier Merlet"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                  priority
                />
              ) : (
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
                    Photo &agrave; venir
                  </span>
                </div>
              )}

              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 2px var(--accent)', opacity: 0.25 }}
                aria-hidden="true"
              />
            </div>

            {/* Grille compétences */}
            <div className="mt-5 grid grid-cols-4 gap-x-1 gap-y-3">
              {SKILLS.map(({ label, icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1"
                  style={{ color: 'var(--text)' }}
                >
                  {icon}
                  <span
                    className="text-[9px] text-center leading-tight"
                    style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

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
              D&eacute;veloppeur Web Front-end
            </p>

            <p
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}
            >
              Ancien charg&eacute; d&apos;&eacute;tudes dans les t&eacute;l&eacute;coms,
              j&apos;ai choisi de me reconvertir dans le d&eacute;veloppement web pour
              transformer ma curiosit&eacute; technique en v&eacute;ritable terrain de
              cr&eacute;ation. Aujourd&apos;hui d&eacute;veloppeur front-end, je con&ccedil;ois
              des sites web modernes en alliant design soign&eacute;, performance et
              exp&eacute;rience utilisateur. Curieux, rigoureux et toujours en apprentissage,
              j&apos;aime relever des d&eacute;fis concrets et donner vie &agrave; des projets
              utiles, ambitieux et bien pens&eacute;s.
            </p>

            <a
              href="/cv.pdf"
              download="CV-Olivier-Merlet.pdf"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)', fontFamily: 'var(--font-ui)' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              T&eacute;l&eacute;charger mon CV
            </a>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
