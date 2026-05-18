'use client'

import Link from 'next/link'

export default function Prive() {
  return (
    <section
      id="prive"
      style={{
        backgroundColor: '#F8F6F2',
        borderTop: '1px solid #EFE7DC',
        borderBottom: '1px solid #EFE7DC',
      }}
    >
      <div
        className="flex flex-col md:flex-row md:items-stretch"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Left: text content */}
        <div
          className="w-full md:w-5/12 flex-shrink-0 flex flex-col justify-center"
          style={{ padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)' }}
        >
          <span style={{
            display: 'block',
            width: '32px',
            height: '1px',
            backgroundColor: '#B8955B',
            marginBottom: '24px',
          }} />

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#B8955B',
            marginBottom: '20px',
          }}>
            Stayzzee Privé
          </p>

          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(34px, 3.4vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: '#1F1F1F',
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
            lineHeight: 1.75,
            color: '#1F1F1F',
            opacity: 0.62,
            maxWidth: '360px',
            marginBottom: '40px',
          }}>
            We&rsquo;re creating a members-only experience with curated
            perks, upgrades, and elevated travel benefits.
          </p>

          {/* Coming soon badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8955B',
              border: '1px solid #EFE7DC',
              padding: '6px 14px',
              backgroundColor: '#FFFFFF',
            }}>
              Coming Soon
            </span>
          </div>

          <Link
            href="#waitlist"
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
              alignSelf: 'flex-start',
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

        {/* Right: image */}
        <div
          className="relative overflow-hidden w-full md:flex-1"
          style={{ minHeight: '320px' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80"
            alt="Exclusive luxury resort terrace at golden hour"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 40%',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(31,31,31,0.15) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          {/* Floating card — desktop only */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              bottom: '28px',
              right: '28px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '22px 26px',
              boxShadow: '0 12px 48px rgba(31,31,31,0.16)',
              width: '200px',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <PriveMonogram />
            </div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '8px',
            }}>
              Coming Soon
            </p>
            <span style={{
              display: 'block',
              width: '28px',
              height: '1px',
              backgroundColor: '#EFE7DC',
              marginBottom: '10px',
            }} />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: '#1F1F1F',
              opacity: 0.65,
            }}>
              Be the first to enjoy exclusive member benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PriveMonogram() {
  return (
    <svg width="36" height="44" viewBox="0 0 36 44" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="34" height="42" rx="17" stroke="#B8955B" strokeWidth="1" fill="none" />
      <text x="18" y="18" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="14" fontWeight="400" fill="#B8955B">S</text>
      <line x1="9" y1="23" x2="27" y2="23" stroke="#B8955B" strokeWidth="0.75" />
      <text x="18" y="38" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="13" fontWeight="300" fontStyle="italic" fill="#B8955B">z</text>
    </svg>
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
