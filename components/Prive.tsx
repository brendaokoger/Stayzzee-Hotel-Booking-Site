'use client'

import Link from 'next/link'

const perks = [
  'Up to 20% off on selected stays',
  'Complimentary upgrades',
  'Early check-in & late check-out',
  'Members-only offers',
]

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
            marginBottom: '28px',
          }}>
            Unlock exclusive benefits
            <br />
            and elevated privileges.
          </h2>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {perks.map((perk) => (
              <li key={perk} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckIcon />
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 300,
                  color: '#1F1F1F',
                  opacity: 0.72,
                }}>
                  {perk}
                </span>
              </li>
            ))}
          </ul>

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
              color: '#FFFFFF',
              textDecoration: 'none',
              backgroundColor: '#B8955B',
              padding: '14px 28px',
              transition: 'background-color 0.25s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a07d4a' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#B8955B' }}
          >
            Join Privé
            <ArrowRight />
          </Link>
        </div>

        {/* ── Right: resort image ── */}
        <div
          className="relative w-full md:flex-1 overflow-hidden"
          style={{ minHeight: '420px' }}
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
          {/* Left-side gradient for blending on desktop */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #F8F6F2 0%, transparent 20%)',
              pointerEvents: 'none',
            }}
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
              width: '200px',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stayzzee%20logo%201.png"
              alt="STAYZZEE"
              style={{ height: '22px', width: 'auto', display: 'block', marginBottom: '12px' }}
            />
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '8px',
            }}>
              Privé Member
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
              Enjoy exclusive benefits every time you stay.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8955B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
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
