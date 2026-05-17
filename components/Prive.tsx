import Link from 'next/link'

export default function Prive() {
  return (
    <section
      id="prive"
      style={{
        backgroundColor: '#F8F6F2',
        borderTop: '1px solid #EFE7DC',
        borderBottom: '1px solid #EFE7DC',
        padding: '100px 0 0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          gap: '80px',
          alignItems: 'flex-end',
        }}
      >
        {/* ── Left: text content ── */}
        <div
          style={{
            width: '42%',
            flexShrink: 0,
            paddingBottom: '100px',
          }}
        >
          {/* Gold eyebrow rule */}
          <span
            style={{
              display: 'block',
              width: '32px',
              height: '1px',
              backgroundColor: '#B8955B',
              marginBottom: '24px',
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
              marginBottom: '22px',
            }}
          >
            Stayzzee Privé
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(38px, 3.4vw, 52px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
              marginBottom: '28px',
              maxWidth: '420px',
            }}
          >
            Exclusive benefits
            <br />
            are coming soon.
          </h2>

          {/* Body copy */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14.5px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#1F1F1F',
              opacity: 0.62,
              maxWidth: '380px',
              marginBottom: '44px',
            }}
          >
            We&rsquo;re creating a members-only experience with curated
            perks, upgrades, and elevated travel benefits.
          </p>

          {/* Join the Waitlist button */}
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
            Join the Waitlist
            <ArrowRight />
          </Link>
        </div>

        {/* ── Right: image with floating card ── */}
        <div
          style={{
            flex: 1,
            position: 'relative',
            borderRadius: '10px 10px 0 0',
            overflow: 'hidden',
            height: '580px',
            alignSelf: 'flex-end',
          }}
        >
          {/* Resort image */}
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

          {/* Subtle dark-to-transparent gradient over the photo */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(31,31,31,0.18) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          {/* ── Floating "Coming Soon" card ── */}
          <div
            style={{
              position: 'absolute',
              bottom: '32px',
              right: '32px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '24px 28px',
              boxShadow: '0 12px 48px rgba(31,31,31,0.16), 0 2px 8px rgba(31,31,31,0.06)',
              width: '220px',
            }}
          >
            {/* S/Z monogram */}
            <div style={{ marginBottom: '14px' }}>
              <PriveMonogram />
            </div>

            {/* Coming Soon badge */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#B8955B',
                marginBottom: '8px',
              }}
            >
              Coming Soon
            </p>

            {/* Thin rule */}
            <span
              style={{
                display: 'block',
                width: '28px',
                height: '1px',
                backgroundColor: '#EFE7DC',
                marginBottom: '10px',
              }}
            />

            {/* Card tagline */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#1F1F1F',
                opacity: 0.65,
              }}
            >
              Be the first to enjoy exclusive member benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Inline S/Z pill monogram (matches header logo badge) ── */
function PriveMonogram() {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
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
