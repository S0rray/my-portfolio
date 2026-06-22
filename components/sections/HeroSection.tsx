import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import AnimatedArrows from '@/components/ui/AnimatedArrows';
import TypewriterText from '@/components/ui/TypewriterText';

// ── Chevron banner geometry ────────────────────────────────────────────
// Gap visuel réel entre bras = CW + G, pas G seul.
// STEP contrôle directement la distance entre ouvertures adjacentes.
// Avec STEP < CW les flèches se chevauchent → gap visible = STEP.
const BH     = 130;
const MID    = BH / 2;
const CW     = 60;       // arm length of each chevron
const STEP   = 25;       // horizontal spacing between adjacent chevron openings
const OFFSET = 15;       // margin from the banner edge for the outermost arrow
const TW     = OFFSET + 4 * STEP + CW;  // group width = 145

// Left group: chevrons pointing LEFT (←)  tip at x, opening at x+CW
function arrowL(idx: number): string {
  const x = OFFSET + idx * STEP;
  return `M${x + CW} 0 L${x} ${MID} L${x + CW} ${BH}`;
}

// Right group: chevrons pointing RIGHT (→)  tip at x+CW, opening at x
function arrowR(idx: number): string {
  const x = OFFSET + idx * STEP;
  return `M${x} 0 L${x + CW} ${MID} L${x} ${BH}`;
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

      {/* Watermark — centré sur la zone sous le bandeau */}
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

      {/* ── Decorative chevron banner ─────────────────────────────────────
          Transparent background. Two luminous spheres (FFC41A → 0000FF)
          on each edge, with 4 solid chevrons per side.
         ─────────────────────────────────────────────────────────────── */}
      <div
        className="animate-reveal-ltr relative w-full overflow-hidden shrink-0"
        style={{ animationDelay: '0.15s', height: `${BH}px` }}
      >
        {/* Round luminous spheres: yellow core → blue → transparent */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: [
              'radial-gradient(circle 580px at left center, rgba(255,196,26,0.85) 0%, rgba(0,0,255,0.45) 35%, rgba(0,0,255,0.15) 58%, transparent 72%)',
              'radial-gradient(circle 580px at right center, rgba(255,196,26,0.85) 0%, rgba(0,0,255,0.45) 35%, rgba(0,0,255,0.15) 58%, transparent 72%)',
            ].join(', '),
          }}
        />

        {/* Left group — 4 chevrons pointing LEFT (←) */}
        <div className="absolute left-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW} height={BH} viewBox={`0 0 ${TW} ${BH}`}>
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={arrowL(i)}
                fill="none"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>

        {/* Right group — 4 chevrons pointing RIGHT (→) */}
        <div className="absolute right-0 inset-y-0 pointer-events-none" aria-hidden="true">
          <svg width={TW} height={BH} viewBox={`0 0 ${TW} ${BH}`}>
            {[0, 1, 2, 3].map((i) => (
              <path
                key={i}
                d={arrowR(i)}
                fill="none"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>
        </div>

        {/* Tagline */}
        <div
          className="absolute inset-0 flex items-center justify-center text-center"
          style={{ paddingLeft: `${TW}px`, paddingRight: `${TW}px` }}
        >
          <p
            className="text-2xl leading-relaxed"
            style={{
              color: 'var(--text)',
              fontFamily: 'var(--font-display)',
              textShadow: '0 1px 4px rgba(0,7,32,0.85)',
            }}
          >
            O Code — <TypewriterText />
          </p>
        </div>
      </div>

      {/* ── Tech stack logos ─────────────────────────────────────────── */}
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

      {/* Spacer pushing scroll indicator to bottom */}
      <div className="flex-1" aria-hidden="true" />

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
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
