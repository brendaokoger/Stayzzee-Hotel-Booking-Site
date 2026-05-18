'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row"
      style={{ minHeight: 'calc(72vh - 72px)' }}
    >
      {/* Left: text panel */}
      <div
        className="flex items-center w-full md:w-5/12 flex-shrink-0"
        style={{
          backgroundColor: '#F8F6F2',
          padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
        }}
      >
        <div style={{ maxWidth: '420px', width: '100%' }}>
          <span style={{
            display: 'block',
            width: '32px',
            height: '1px',
            backgroundColor: '#B8955B',
            marginBottom: '32px',
          }} />

          <h1 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(40px, 4.5vw, 66px)',
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
            color: '#1F1F1F',
            marginBottom: '24px',
          }}>
            Find your perfect stay,
            <br />
            <em style={{ color: '#B8955B', fontStyle: 'italic', fontWeight: 300 }}>
              wherever life
              <br />
              takes you.
            </em>
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14.5px',
            fontWeight: 300,
            lineHeight: 1.75,
            color: '#1F1F1F',
            opacity: 0.65,
            marginBottom: '40px',
            maxWidth: '300px',
          }}>
            Handpicked luxury stays and unforgettable experiences.
          </p>

          <Link
            href="/stays"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#B8955B',
              textDecoration: 'none',
              border: '1px solid #B8955B',
              padding: '14px 28px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B8955B'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#B8955B'
            }}
          >
            Explore Stays
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Right: full-bleed image */}
      <div
        className="relative overflow-hidden w-full md:flex-1"
        style={{ minHeight: '260px' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
          alt="Luxury Mediterranean villa with infinity pool and sea view"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            display: 'block',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '80px',
          height: '100%',
          background: 'linear-gradient(to right, #F8F6F2 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
