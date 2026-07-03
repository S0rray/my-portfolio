import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000720',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            width: 56,
            height: 4,
            background: '#ffc41a',
            borderRadius: 2,
            marginBottom: 44,
          }}
        />

        <div
          style={{
            fontSize: 76,
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          Olivier Merlet
        </div>

        <div
          style={{
            fontSize: 30,
            color: '#8899bb',
            marginTop: 22,
            fontWeight: 400,
          }}
        >
          Développeur Web Front-end
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 72,
            left: 100,
            fontSize: 18,
            color: '#ffc41a',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          o-code.fr
        </div>
      </div>
    ),
    { ...size }
  );
}
