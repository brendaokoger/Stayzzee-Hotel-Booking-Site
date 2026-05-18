'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 'calc(90vh - 72px)',
        backgroundColor: '#F8F6F2',
      }}
      className="flex-col md:flex-row"
    >
      {/* ── Left: text panel ── */}
      <div
        style={{
          backgroundColor: '#F8F6F2',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
        }}
        className="w-full md:w-[44%] px-8 py-16 md:px-16 md:py-20"
      >
        <div style={{ maxWidth: '440px', width: '100%' }}>

          {/* Gold eyebrow rule */}
          <span className="sz-rule" style={{ marginBottom: '36px' }} />

          {/* Section label */}
          <p className="sz-label">Luxury Travel, Curated</p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(42px, 4.8vw, 70px)',
              fontWeight: 300,
              lineHeight: 1.06,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
              marginBottom: '28px',
            }}
          >
            Find your perfect stay,
            <br />
            <em
              style={{
                color: '#B8955B',
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              wherever life
              <br />
              takes you.
            </em>
          </h1>

          {/* Sub copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#1F1F1F',
              opacity: 0.62,
              marginBottom: '44px',
              maxWidth: '320px',
            }}
          >
            Handpicked luxury stays and unforgettable
            experiences, crafted for discerning travellers.
          </p>

          {/* CTA */}
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
              padding: '15px 32px',
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

      {/* ── Right: luxury image ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          flex: 1,
        }}
        className="w-full min-h-[280px] md:min-h-0"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=85"
          alt="Luxury Mediterranean villa with infinity pool overlooking the sea"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            display: 'block',
          }}
        />
        {/* Subtle fade from ivory panel — desktop only */}
        <div
          className="hidden md:block"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '120px',
            height: '100%',
            background: 'linear-gradient(to right, #F8F6F2 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
