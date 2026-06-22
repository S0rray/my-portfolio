'use client';
import { useState, useEffect } from 'react';

const PHRASES = [
  'du design à la logique, je construis le web de bout en bout',
  'je donne vie aux idées avec du code',
] as const;

const TYPING_SPEED = 45;   // ms par caractère
const HOLD_MS      = 4000; // temps affiché (ms)
const ERASE_MS     = 1000; // durée totale de l'effacement (ms)
const PAUSE_MS     = 2000; // pause entre deux phrases (ms)
// Délai initial pour laisser l'animation reveal-ltr du bandeau se terminer (2s + 0.15s delay)
const INITIAL_DELAY_MS = 2400;

export default function TypewriterText() {
  const [text, setText]           = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [started, setStarted]     = useState(false);

  // Attendre la fin de l'animation du bandeau avant de commencer
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), INITIAL_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    const phrase = PHRASES[phraseIdx];
    const delay  = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    (async () => {
      // Frappe caractère par caractère
      for (let i = 1; i <= phrase.length; i++) {
        if (cancelled) return;
        setText(phrase.slice(0, i));
        await delay(TYPING_SPEED);
      }

      // Maintien affiché
      await delay(HOLD_MS);
      if (cancelled) return;

      // Effacement progressif sur ERASE_MS
      const step = ERASE_MS / phrase.length;
      for (let i = phrase.length - 1; i >= 0; i--) {
        if (cancelled) return;
        setText(phrase.slice(0, i));
        await delay(step);
      }

      // Pause entre les deux phrases
      await delay(PAUSE_MS);
      if (!cancelled) setPhraseIdx(n => (n + 1) % PHRASES.length);
    })();

    return () => { cancelled = true; };
  }, [phraseIdx, started]);

  return (
    <>
      {text}
      {/* Curseur style éditeur de texte */}
      <span
        aria-hidden="true"
        className="blink-cursor"
        style={{
          display: 'inline-block',
          width: '2px',
          height: '1.2em',
          background: 'currentColor',
          marginLeft: '3px',
          verticalAlign: 'text-bottom',
        }}
      />
    </>
  );
}
