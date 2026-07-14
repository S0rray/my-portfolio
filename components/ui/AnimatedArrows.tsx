import { useId } from 'react';

export default function AnimatedArrows() {
  const gradId = `arrowGrad${useId().replace(/:/g, '')}`;

  return (
    <svg
      width="13"
      height="30"
      viewBox="0 0 13 30"
      fill="none"
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/*
          spreadMethod="repeat" fait tuiler le gradient au-delà de [y1,y2].
          En animant y1: 0→30 et y2: 30→60 (exactement une tuile),
          la couleur visible à y1=30 == couleur à y1=0 → loop parfaitement seamless.
        */}
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="30" gradientUnits="userSpaceOnUse" spreadMethod="repeat">
          <stop offset="0%"   stopColor="#0000ff" />
          <stop offset="50%"  stopColor="#ffc41a" />
          <stop offset="100%" stopColor="#0000ff" />
          <animate attributeName="y1" values="0;30" dur="2s" repeatCount="indefinite" calcMode="linear" />
          <animate attributeName="y2" values="30;60" dur="2s" repeatCount="indefinite" calcMode="linear" />
        </linearGradient>
      </defs>

      {/* Chevron 1 */}
      <g style={{ animation: 'bounce-down 1.5s ease-in-out infinite', animationDelay: '0s' }}>
        <path d="M1 1 L6.5 6.5 L12 1"    stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Chevron 2 */}
      <g style={{ animation: 'bounce-down 1.5s ease-in-out infinite', animationDelay: '0.22s' }}>
        <path d="M1 12 L6.5 17.5 L12 12" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* Chevron 3 */}
      <g style={{ animation: 'bounce-down 1.5s ease-in-out infinite', animationDelay: '0.44s' }}>
        <path d="M1 23 L6.5 28.5 L12 23" stroke={`url(#${gradId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
