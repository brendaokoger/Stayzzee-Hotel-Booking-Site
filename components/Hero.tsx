'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: 'calc(88vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F8F6F2',
      }}
    >
      {/* ── Full-width background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1800&q=90"
        alt="Luxury resort terrace with sea view"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 30%',
          display: 'block',
        }}
      />

      {/* ── Mobile overlay: uniform ivory wash ── */}
      <div
        className="block md:hidden"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(248,246,242,0.86)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Desktop overlay: gradient left → transparent ── */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(248,246,242,1) 0%, rgba(248,246,242,0.98) 20%, rgba(248,246,242,0.88) 36%, rgba(248,246,242,0.42) 56%, rgba(248,246,242,0.06) 76%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
        className="px-5 md:px-12 py-16 md:py-24"
      >
        <div style={{ maxWidth: '760px' }}>

          {/* Gold eyebrow rule */}
          <span
            style={{
              display: 'block',
              width: '36px',
              height: '1px',
              backgroundColor: '#B8955B',
              marginBottom: '32px',
            }}
          />

          {/* Section label */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '20px',
            }}
          >
            Luxury Travel, Curated
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(48px, 6vw, 82px)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
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
              wherever life takes you.
            </em>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.78,
              color: '#1F1F1F',
              opacity: 0.65,
              maxWidth: '360px',
              marginBottom: '44px',
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
