'use client'

import Link from 'next/link'

const destinations = [
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    price: 620,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    alt: 'Santorini white architecture and blue domes',
  },
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    price: 310,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    alt: 'Bali luxury resort in lush tropical greenery',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    price: 690,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    alt: 'Maldives overwater villas at sunrise',
  },
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    price: 540,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    alt: 'Dubai skyline at twilight',
  },
]

export default function CuratedDestinations() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #EFE7DC' }}>
      <div className="sz-container sz-section">
        <div className="flex flex-col md:flex-row md:items-start" style={{ gap: '48px' }}>

          {/* ── Left: text column ── */}
          <div className="flex-shrink-0 w-full md:w-72" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="sz-label">Curated Destinations</span>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(32px, 3.2vw, 46px)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
            }}>
              Dream stays,
              <br />
              handpicked for you.
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
              View All Destinations
              <ArrowRight />
            </Link>
          </div>

          {/* ── Right: destination cards grid ── */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4" style={{ gap: '12px' }}>
            {destinations.map((d) => (
              <DestCard key={d.id} {...d} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function DestCard({ name, price, image, alt }: { name: string; price: number; image: string; alt: string }) {
  return (
    <div
      style={{
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(31,31,31,0.08)',
        aspectRatio: '3 / 4',
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
        height: '60%',
        background: 'linear-gradient(to top, rgba(12,10,6,0.75) 0%, rgba(12,10,6,0.15) 55%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', bottom: '14px', left: '14px', right: '14px' }}>
        <p style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(13px, 1.4vw, 17px)',
          fontWeight: 400,
          color: '#FFFFFF',
          lineHeight: 1.2,
          marginBottom: '3px',
        }}>
          {name}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.72)',
          letterSpacing: '0.02em',
        }}>
          From ${price} / night
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
