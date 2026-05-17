// LiteAPI Integration Point:
// Replace mockHotels import with a call to searchHotels() from your API layer.
// Pass active filter state from FilterBar as query params to getHotelRates().

import { mockHotels } from '@/lib/mockHotels'
import HotelCard from './HotelCard'

export default function HotelGrid() {
  // LiteAPI: const hotels = await searchHotels({ ... filters })
  const hotels = mockHotels

  return (
    <section
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '56px 80px 100px',
      }}
    >
      {/* Results header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: '36px',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#B8955B',
              marginBottom: '6px',
            }}
          >
            Luxury Stays
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '30px',
              fontWeight: 300,
              color: '#1F1F1F',
              lineHeight: 1.1,
            }}
          >
            {hotels.length} curated properties
          </h2>
        </div>

        {/* Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 300,
              color: '#1F1F1F',
              opacity: 0.45,
              letterSpacing: '0.06em',
            }}
          >
            Sort by
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              color: '#B8955B',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Our Picks
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#B8955B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>
      </div>

      {/* Responsive grid — Tailwind handles breakpoints */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  )
}
