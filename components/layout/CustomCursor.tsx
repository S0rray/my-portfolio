'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let rafId: number;
    let visible = false;

    const onMouseMove = (e: MouseEvent) => {
      // Ignore events synthesized from a touch tap (hybrid devices)
      if ((e as MouseEvent & { sourceCapabilities?: { firesTouchEvents?: boolean } }).sourceCapabilities?.firesTouchEvents) return;
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Update CSS vars for the glow background
      document.documentElement.style.setProperty('--cursor-x', `${mouseX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${mouseY}px`);

      // Dot follows instantly — center it (8px / 2 = 4px offset)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
        if (!visible) {
          dotRef.current.style.opacity  = '1';
          ringRef.current!.style.opacity = '1';
          visible = true;
        }
      }
    };

    const animate = () => {
      // Ring follows with a lag — instant when reduced-motion is on
      const lag = reducedMotion ? 1 : 0.12;
      ringX += (mouseX - ringX) * lag;
      ringY += (mouseY - ringY) * lag;

      if (ringRef.current) {
        // Center the ring (40px / 2 = 20px offset)
        ringRef.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const CLICKABLE = 'a, button, [role="button"], input, select, textarea, label, [tabindex]';
    const onMouseOver = (e: MouseEvent) => {
      const hovering = !!(e.target as Element).closest(CLICKABLE);
      ringRef.current?.classList.toggle('is-hovering', hovering);
    };

    document.documentElement.classList.add('cursor-custom');
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('cursor-custom');
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
       *  OPTION A (active) — Point blanc + ring coloré
       *  Dot blanc, ring couleur thème (jaune dark / bleu light)
       * ════════════════════════════════════════════════════════════ */}
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />

      {/* ════════════════════════════════════════════════════════════
       *  OPTION B (inactive) — Point couleur inverse + outline noir
       *  Pour activer : décommente les 2 lignes ci-dessous
       *                 et commente les 2 lignes Option A ci-dessus
       *
       * <div ref={dotRef}  className="cursor-dot  cursor-dot-b"  aria-hidden="true" />
       * <div ref={ringRef} className="cursor-ring cursor-ring-b" aria-hidden="true" />
       * ════════════════════════════════════════════════════════════ */}

      {/* ════════════════════════════════════════════════════════════
       *  OPTION C (inactive) — mix-blend-mode: difference
       *  Le curseur inverse les couleurs du fond sous lui
       *  Pour activer : décommente les 2 lignes ci-dessous
       *                 et commente les 2 lignes Option A ci-dessus
       *
       * <div ref={dotRef}  className="cursor-dot  cursor-dot-c"  aria-hidden="true" />
       * <div ref={ringRef} className="cursor-ring cursor-ring-c" aria-hidden="true" />
       * ════════════════════════════════════════════════════════════ */}

      {/* Faisceau lumineux radial — suit la souris via CSS vars */}
      <div className="cursor-glow" aria-hidden="true" />
    </>
  );
}
