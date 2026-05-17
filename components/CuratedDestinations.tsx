import Link from 'next/link'

const destinations = [
  {
    id: 'santorini',
    name: 'Santorini, Greece',
    price: 620,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    alt: 'Santorini white architecture and blue domes overlooking the caldera',
  },
  {
    id: 'bali',
    name: 'Bali, Indonesia',
    price: 310,
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80',
    alt: 'Bali luxury resort surrounded by lush tropical greenery',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    price: 690,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    alt: 'Maldives overwater villas above turquoise lagoon',
  },
  {
    id: 'dubai',
    name: 'Dubai, UAE',
    price: 540,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    alt: 'Dubai skyline with Burj Khalifa at twilight',
  },
]

export default function CuratedDestinations() {
  return (
    <section
      id="curated-destinations"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
        padding: '96px 0 100px',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          gap: '72px',
          alignItems: 'flex-start',
        }}
      >
        {/* ── Left: text block ── */}
        <div style={{ width: '232px', flexShrink: 0, paddingTop: '8px' }}>
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
            Curated Destinations
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(34px, 3vw, 44px)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
              marginBottom: '32px',
            }}
          >
            Dream stays,
            <br />
            handpicked
            <br />
            for you.
          </h2>

          {/* View all link */}
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

        {/* ── Right: destination cards + scroll arrow ── */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Cards row */}
          <div
            style={{
              flex: 1,
              display: 'flex',
              gap: '14px',
              minWidth: 0,
            }}
          >
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} {...dest} />
            ))}
          </div>

          {/* Scroll arrow */}
          <button
            aria-label="Next destinations"
            style={{
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '1px solid #EFE7DC',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1F1F1F',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
              marginLeft: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#B8955B'
              e.currentTarget.style.backgroundColor = '#B8955B'
              e.currentTarget.style.color = '#FFFFFF'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#EFE7DC'
              e.currentTarget.style.backgroundColor = '#FFFFFF'
              e.currentTarget.style.color = '#1F1F1F'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

/* ── Destination Card ── */
type CardProps = {
  name: string
  price: number
  image: string
  alt: string
}

function DestinationCard({ name, price, image, alt }: CardProps) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 0,
        height: '370px',
        borderRadius: '6px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: '0 4px 24px rgba(31, 31, 31, 0.08)',
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.05)'
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.0)'
      }}
    >
      {/* Resort image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.55s ease',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '55%',
          background: 'linear-gradient(to top, rgba(15,12,8,0.72) 0%, rgba(15,12,8,0.20) 60%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Card text */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '20px',
          right: '20px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '18px',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: '#FFFFFF',
            marginBottom: '4px',
            lineHeight: 1.2,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11.5px',
            fontWeight: 300,
            letterSpacing: '0.04em',
            color: 'rgba(255,255,255,0.78)',
          }}
        >
          From ${price} / night
        </p>
      </div>
    </div>
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
