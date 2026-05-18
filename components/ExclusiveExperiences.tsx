'use client'

import Link from 'next/link'

const experiences = [
  {
    id: 'yacht-charters',
    title: 'Yacht Charters',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80',
    alt: 'Luxury private yacht at sea',
  },
  {
    id: 'wellness-retreats',
    title: 'Wellness Retreats',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80',
    alt: 'Luxury spa and wellness retreat',
  },
  {
    id: 'private-dining',
    title: 'Private Dining',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    alt: 'Elegant private dining table setting',
  },
  {
    id: 'private-transfers',
    title: 'Private Transfers',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=700&q=80',
    alt: 'Luxury private vehicle transfer',
  },
]

export default function ExclusiveExperiences() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #EFE7DC' }}>
      <div className="sz-container sz-section">
        <div className="flex flex-col md:flex-row md:items-start" style={{ gap: '48px' }}>

          {/* ── Left: text column ── */}
          <div className="flex-shrink-0 w-full md:w-72" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="sz-label">Exclusive Experiences</span>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(32px, 3.2vw, 46px)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
            }}>
              Beyond stays.
              <br />
              Unforgettable moments.
            </h2>
            <Link
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#B8955B',
                textDecoration: 'none',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '16px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}
            >
              Explore Experiences
              <ArrowRight />
            </Link>
          </div>

          {/* ── Right: experience cards grid ── */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4" style={{ gap: '12px' }}>
            {experiences.map((e) => (
              <ExperienceCard key={e.id} {...e} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ title, image, alt }: { title: string; image: string; alt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        aspectRatio: '3 / 4',
        boxShadow: '0 4px 20px rgba(31,31,31,0.08)',
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.06)'
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1)'
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.6s ease',
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '50%',
        background: 'linear-gradient(to top, rgba(12,10,6,0.72) 0%, rgba(12,10,6,0.1) 60%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
        }}>
          {title}
        </p>
      </div>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
