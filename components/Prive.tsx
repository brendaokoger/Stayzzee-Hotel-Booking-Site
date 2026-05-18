'use client'

import Link from 'next/link'

export default function Prive() {
  return (
    <section
      style={{
        backgroundColor: '#F8F6F2',
        borderTop: '1px solid #EFE7DC',
        borderBottom: '1px solid #EFE7DC',
        overflow: 'hidden',
      }}
    >
      <div
        style={{ maxWidth: '1200px', margin: '0 auto' }}
        className="flex flex-col md:flex-row md:items-stretch"
      >

        {/* ── Left: text content ── */}
        <div
          className="w-full md:w-[48%] flex flex-col justify-center"
          style={{ padding: 'clamp(48px, 7vw, 88px) clamp(20px, 4vw, 48px)' }}
        >
          <span className="sz-rule" style={{ marginBottom: '28px' }} />
          <span className="sz-label">Stayzzee Privé</span>

          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(34px, 3.5vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#1F1F1F',
            letterSpacing: '-0.01em',
            marginBottom: '24px',
          }}>
            Exclusive benefits
            <br />
            are coming soon.
          </h2>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14.5px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#1F1F1F',
            opacity: 0.62,
            maxWidth: '360px',
            marginBottom: '36px',
          }}>
            We&rsquo;re creating a members-only experience with curated perks,
            upgrades, and elevated travel benefits reserved for a select few.
          </p>

          {/* Coming soon pill */}
          <div style={{ marginBottom: '36px' }}>
            <span style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#B8955B',
              border: '1px solid #EFE7DC',
              backgroundColor: '#FFFFFF',
              padding: '7px 16px',
            }}>
              Coming Soon
            </span>
          </div>

          <Link
            href="#waitlist"
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
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
            Join the Waitlist
            <ArrowRight />
          </Link>
        </div>

        {/* ── Right: resort image ── */}
        <div
          className="relative w-full md:flex-1 overflow-hidden"
          style={{ minHeight: '360px' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=85"
            alt="Exclusive luxury resort terrace at golden hour"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
            }}
          />
          {/* Subtle overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #F8F6F2 0%, transparent 20%)',
            pointerEvents: 'none',
          }}
            className="hidden md:block"
          />

          {/* Floating card — desktop */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              bottom: '32px',
              right: '32px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '22px 26px',
              boxShadow: '0 12px 48px rgba(31,31,31,0.15)',
              width: '196px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/stayzzee%20logo%201.png" alt="STAYZZEE" style={{ height: '24px', width: 'auto', display: 'block' }} />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginTop: '12px',
              marginBottom: '8px',
            }}>
              Coming Soon
            </p>
            <div style={{ width: '28px', height: '1px', backgroundColor: '#EFE7DC', marginBottom: '10px' }} />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#1F1F1F',
              opacity: 0.62,
            }}>
              Be the first to enjoy exclusive member benefits.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}


function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
