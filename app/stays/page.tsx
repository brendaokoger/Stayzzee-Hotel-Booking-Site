import type { Metadata } from 'next'
import Header from '@/components/Header'
import FilterBar from '@/components/stays/FilterBar'
import HotelGrid from '@/components/stays/HotelGrid'

export const metadata: Metadata = {
  title: 'Explore Stays — STAYZZEE',
  description: 'Discover curated luxury hotels, resorts, and private villas around the world.',
}

export default function StaysPage() {
  return (
    <>
      <Header />

      <main style={{ paddingTop: '72px' }}>

        {/* ── Page hero ── */}
        <section
          style={{
            backgroundColor: '#F8F6F2',
            borderBottom: '1px solid #EFE7DC',
            padding: '72px 80px 80px',
            position: 'relative',
          }}
        >
          <div
            style={{
              maxWidth: '1400px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {/* Gold rule */}
            <span
              style={{
                display: 'block',
                width: '32px',
                height: '1px',
                backgroundColor: '#B8955B',
                marginBottom: '24px',
              }}
            />

            {/* Label */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                color: '#B8955B',
                marginBottom: '18px',
              }}
            >
              Explore Stays
            </p>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(42px, 5vw, 64px)',
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
                color: '#1F1F1F',
                marginBottom: '18px',
              }}
            >
              Discover your next escape.
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                fontWeight: 300,
                lineHeight: 1.7,
                color: '#1F1F1F',
                opacity: 0.55,
                maxWidth: '400px',
              }}
            >
              Curated luxury stays around the world.
            </p>
          </div>
        </section>

        {/* ── Sticky filter bar ── */}
        <FilterBar />

        {/* ── Hotel grid ── */}
        <HotelGrid />

      </main>
    </>
  )
}
