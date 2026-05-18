'use client'

import Link from 'next/link'

const experiences = [
  {
    id: 'yacht-charters',
    title: 'Yacht Charters',
    description: "Private yacht experiences across the world's finest waters.",
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=80',
    alt: 'Luxury private yacht at sea',
  },
  {
    id: 'wellness-retreats',
    title: 'Wellness Retreats',
    description: 'Restorative journeys for body, mind, and spirit.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80',
    alt: 'Luxury spa and wellness retreat',
  },
  {
    id: 'private-dining',
    title: 'Private Dining',
    description: 'Intimate culinary experiences by world-class chefs.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    alt: 'Elegant private dining table setting',
  },
  {
    id: 'vip-transfers',
    title: 'VIP Transfers',
    description: 'Seamless luxury ground and air transport worldwide.',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=700&q=80',
    alt: 'Luxury private vehicle transfer',
  },
]

export default function ExclusiveExperiences() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
      }}
    >
      <div className="sz-container sz-section">

        {/* Section header */}
        <div
          style={{ marginBottom: '48px' }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <span className="sz-label">Exclusive Experiences</span>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(32px, 3.2vw, 46px)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#1F1F1F',
              marginBottom: '12px',
            }}>
              Beyond the stay.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#1F1F1F',
              opacity: 0.55,
              maxWidth: '400px',
            }}>
              Elevated experiences designed to make every journey unforgettable.
            </p>
          </div>
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
              flexShrink: 0,
              transition: 'gap 0.2s ease',
              paddingBottom: '4px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '16px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}
          >
            Explore All
            <ArrowRight />
          </Link>
        </div>

        {/* Experience cards: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((e) => (
            <ExperienceCard key={e.id} {...e} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ExperienceCard({
  title, description, image, alt,
}: {
  title: string
  description: string
  image: string
  alt: string
}) {
  return (
    <div
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#FAFAF8',
        border: '1px solid #EFE7DC',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.05)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(31,31,31,0.10)'
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
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
      </div>

      {/* Gold accent line */}
      <div style={{ height: '1.5px', backgroundColor: '#B8955B', opacity: 0.6, flexShrink: 0 }} />

      {/* Body */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#1F1F1F',
        }}>
          {title}
        </p>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          lineHeight: 1.65,
          color: '#1F1F1F',
          opacity: 0.58,
          flex: 1,
        }}>
          {description}
        </p>
        <Link
          href="#"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-sans)',
            fontSize: '10.5px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#B8955B',
            textDecoration: 'none',
            transition: 'gap 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = '13px')}
          onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
        >
          Explore
          <ArrowRight />
        </Link>
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
