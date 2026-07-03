import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import AnimatedArrows from '@/components/ui/AnimatedArrows';
import TypewriterText from '@/components/ui/TypewriterText';

// -- Chevron banner geometry -- desktop (h-32.5 = 130px)
const BH     = 130;
const MID    = BH / 2;
const CW     = 60;
const STEP   = 25;
const OFFSET = 15;
const TW     = OFFSET + 4 * STEP + CW;  // 145px -- 4 chevrons

function arrowL(idx: number): string {
  const x = OFFSET + idx * STEP;
  return `M${x + CW} 0 L${x} ${MID} L${x + CW} ${BH}`;
}
function arrowR(idx: number): string {
  const x = OFFSET + idx * STEP;
  return `M${x} 0 L${x + CW} ${MID} L${x} ${BH}`;
}

// -- Chevron banner geometry -- mobile (h-20 = 80px)
const BH_M     = 80;
const MID_M    = BH_M / 2;
const CW_M     = 30;
const STEP_M   = 16;
const OFFSET_M = 8;
const TW_M     = OFFSET_M + 2 * STEP_M + CW_M;  // 70px -- 2 chevrons

function arrowLM(idx: number): string {
  const x = OFFSET_M + idx * STEP_M;
  return `M${x + CW_M} 0 L${x} ${MID_M} L${x + CW_M} ${BH_M}`;
}
function arrowRM(idx: number): string {
  const x = OFFSET_M + idx * STEP_M;
  return `M${x} 0 L${x + CW_M} ${MID_M} L${x} ${BH_M}`;
}

const TECH_STACK = [
  { key: 'html',  label: 'HTML 5'     },
  { key: 'css',   label: 'CSS 3'      },
  { key: 'js',    label: 'JavaScript' },
  { key: 'react', label: 'React'      },
];

const TECH_ICONS = {
  html:  <FaHtml5      size={38} color="#E34F26" aria-hidden />,
  css:   <FaCss3Alt    size={38} color="#264DE4" aria-hidden />,
  js:    <SiJavascript size={34} color="#F7DF1E" aria-hidden />,
  react: <FaReact      size={38} color="#61DAFB" aria-hidden />,
} as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col pt-10"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Spacer for fixed navbar */}
      <div className="h-17.75" aria-hidden="true" />

      {/* Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 right-0 bottom-0 flex items-center justify-center overflow-hidden"
        style={{ top: `${71 + BH}px` }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 12vw, 11rem)',
            fontWeight: 700,
            color: 'var(--text)',
            opacity: 0.04,
            whiteSpace: 'nowrap',
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          O Code
        </span>
      </div>

      {/* Decorative chevron banner */}
      <div
        className="animate-reveal-ltr relative w-full overflow-hidden shrink-0 h-20 sm:h-32.5"
        style={{ animationDelay: '0.15s' }}
      >
        {/* Spheres */}
        <div className="hero-spheres" aria-hidden="true" />

        {/* Left group - mobile : 2 chevrons */}
        <div className="sm:hidden absolute left-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW_M} height={BH_M} viewBox={`0 0 ${TW_M} ${BH_M}`}>
            {[0, 1].map((i) => (
              <path key={i} d={arrowLM(i)} fill="none"
                stroke="rgba(255,255,255,0.42)" strokeWidth="5"
                strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>
        </div>

        {/* Right group - mobile : 2 chevrons */}
        <div className="sm:hidden absolute right-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW_M} height={BH_M} viewBox={`0 0 ${TW_M} ${BH_M}`}>
            {[0, 1].map((i) => (
              <path key={i} d={arrowRM(i)} fill="none"
                stroke="rgba(255,255,255,0.42)" strokeWidth="5"
                strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>
        </div>

        {/* Left group - desktop : 4 chevrons */}
        <div className="hidden sm:block absolute left-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW} height={BH} viewBox={`0 0 ${TW} ${BH}`}>
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={arrowL(i)} fill="none"
                stroke="rgba(255,255,255,0.38)" strokeWidth="7"
                strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>
        </div>

        {/* Right group - desktop : 4 chevrons */}
        <div className="hidden sm:block absolute right-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW} height={BH} viewBox={`0 0 ${TW} ${BH}`}>
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={arrowR(i)} fill="none"
                stroke="rgba(255,255,255,0.38)" strokeWidth="5"
                strokeLinecap="round" strokeLinejoin="round" />
            ))}
          </svg>
        </div>

        {/* Tagline */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-6 sm:px-43.75">
          <p
            className="text-base sm:text-2xl leading-relaxed"
            style={{
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              textShadow: 'var(--hero-text-shadow)',
            }}
          >
            O Code &mdash; <TypewriterText />
          </p>
        </div>
      </div>

      {/* Tech stack logos (commented out) */}
      {/* <div
        className="animate-fade-up px-6 pt-10 max-w-4xl mx-auto w-full"
        style={{ animationDelay: '0.35s' }}
      >
        <div className="flex items-end gap-10 sm:gap-14">
          {TECH_STACK.map(({ key, label }) => (
            <div key={key} className="flex flex-col items-center gap-2">
              <div className="shrink-0 flex items-center justify-center h-10">
                {TECH_ICONS[key as keyof typeof TECH_ICONS]}
              </div>
              <span
                className="text-[11px] text-center whitespace-nowrap"
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-ui)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div> */}

      {/* Spacer pushing content to bottom */}
      <div className="flex-1" aria-hidden="true" />

      {/* Text block - bottom of flex on mobile, absolute bottom-left on desktop */}
      <div
        className="animate-fade-up px-6 pb-36 max-w-lg md:px-0 md:pb-0 md:absolute md:left-10 md:bottom-10 lg:left-24"
        style={{ animationDelay: '0.45s' }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            textShadow: 'var(--hero-text-shadow)',
          }}
        >
          Le d&eacute;veloppement front end est le point de rencontre entre la technique, le design
          et l&apos;exp&eacute;rience utilisateur. Il consiste &agrave; transformer des id&eacute;es,
          des besoins fonctionnels et des maquettes en interfaces web modernes, dans un contexte
          performant et accessible sur tous les supports.
          <br /><br />
          Dans un monde o&ugrave; la pr&eacute;sence num&eacute;rique est devenue essentielle,
          le d&eacute;veloppeur front-end joue un r&ocirc;le cl&eacute; dans la cr&eacute;ation
          d&apos;exp&eacute;riences intuitives, fluides et engageantes &mdash; capables de
          r&eacute;pondre aux exigences actuelles tout en valorisant l&apos;identit&eacute; et les
          ambitions des projets qu&apos;il accompagne.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up absolute right-4 sm:right-6 bottom-10 flex flex-col items-center gap-3"
        style={{ animationDelay: '0.55s' }}
        role="presentation"
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase select-none"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-ui)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Scroll
        </span>
        <AnimatedArrows />
      </div>
    </section>
  );
}
