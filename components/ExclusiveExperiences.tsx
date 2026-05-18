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
    description: 'Restorative journeys for the body, mind, and spirit.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80',
    alt: 'Luxury spa and wellness retreat',
  },
  {
    id: 'private-dining',
    title: 'Private Dining',
    description: 'Intimate culinary experiences crafted by world-class chefs.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    alt: 'Elegant private dining table setting',
  },
  {
    id: 'vip-transfers',
    title: 'VIP Transfers',
    description: 'Seamless luxury ground and air transportation worldwide.',
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=700&q=80',
    alt: 'Luxury private vehicle transfer',
  },
]

export default function ExclusiveExperiences() {
  return (
    <section
      id="exclusive-experiences"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
        padding: '80px 0 88px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 500,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#B8955B',
            marginBottom: '16px',
          }}>
            Exclusive Experiences
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(32px, 3.2vw, 44px)',
                fontWeight: 300,
                lineHeight: 1.1,
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
                lineHeight: 1.7,
                color: '#1F1F1F',
                opacity: 0.58,
                maxWidth: '420px',
              }}>
                Discover elevated experiences designed to make every trip unforgettable.
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '16px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '10px')}
            >
              Explore Experiences
              <ArrowRight />
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>

      </div>
    </section>
  )
}

type CardProps = {
  title: string
  description: string
  image: string
  alt: string
}

function ExperienceCard({ title, description, image, alt }: CardProps) {
  return (
    <div
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#FAFAF8',
        boxShadow: '0 4px 24px rgba(31,31,31,0.07)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.06)'
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('img') as HTMLImageElement | null
        if (img) img.style.transform = 'scale(1.0)'
      }}
    >
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

      <div style={{ height: '1.5px', backgroundColor: '#B8955B', opacity: 0.55, flexShrink: 0 }} />

      <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
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
          lineHeight: 1.6,
          color: '#1F1F1F',
          opacity: 0.58,
          flex: 1,
        }}>
          {description}
        </p>
        <ExploreLink />
      </div>
    </div>
  )
}

function ExploreLink() {
  return (
    <Link
      href="#"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-sans)',
        fontSize: '10.5px',
        fontWeight: 500,
        letterSpacing: '0.16em',
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
