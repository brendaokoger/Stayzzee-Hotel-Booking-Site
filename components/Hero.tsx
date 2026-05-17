import Link from 'next/link'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        display: 'flex',
        minHeight: 'calc(88vh - 72px)',
        overflow: 'visible',
      }}
    >
      {/* ── Left: text panel ── */}
      <div
        style={{
          width: '42%',
          flexShrink: 0,
          backgroundColor: '#F8F6F2',
          display: 'flex',
          alignItems: 'center',
          padding: '80px 64px 160px 80px',
        }}
      >
        <div style={{ maxWidth: '420px' }}>
          {/* Eyebrow rule */}
          <span
            style={{
              display: 'block',
              width: '32px',
              height: '1px',
              backgroundColor: '#B8955B',
              marginBottom: '32px',
            }}
          />

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(46px, 4.6vw, 66px)',
              fontWeight: 300,
              lineHeight: 1.08,
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

          {/* Subheadline */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14.5px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#1F1F1F',
              opacity: 0.65,
              marginBottom: '44px',
              maxWidth: '300px',
            }}
          >
            Handpicked luxury stays and unforgettable experiences.
          </p>

          {/* CTA button */}
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

      {/* ── Right: full-bleed image ── */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
        }}
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
        {/* Subtle left-edge fade into the ivory panel */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '80px',
            height: '100%',
            background: 'linear-gradient(to right, #F8F6F2 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* ── Floating search bar — overlaps below hero ── */}
      <SearchBar />
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
