// LiteAPI Integration Point:
// Replace `mockHotelDetail` with a call to:
//   getHotelDetails(params.id)   → populates hotel info, gallery, amenities
//   getRoomRates({ hotelId, checkIn, checkOut, guests }) → populates BookingCard rates

import type { Metadata } from 'next'
import Header from '@/components/Header'
import HotelGallery from '@/components/hotel/HotelGallery'
import HotelAmenities from '@/components/hotel/HotelAmenities'
import RoomCard from '@/components/hotel/RoomCard'
import BookingCard from '@/components/hotel/BookingCard'
import GuestReviews from '@/components/hotel/GuestReviews'
import SimilarStays from '@/components/hotel/SimilarStays'
import { mockHotelDetail } from '@/lib/mockHotelDetail'

export const metadata: Metadata = {
  title: 'Aman Santorini — STAYZZEE',
  description:
    'Experience the pinnacle of caldera luxury at Aman Santorini, perched above the Aegean Sea in Imerovigli, Greece.',
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  // LiteAPI: const hotel = await getHotelDetails(params.id)
  void params.id
  const hotel = mockHotelDetail

  return (
    <>
      <Header />

      <main style={{ paddingTop: '72px', backgroundColor: '#FFFFFF' }}>

        {/* ── Gallery ── */}
        <HotelGallery images={hotel.images} hotelName={hotel.name} />

        {/* ── Content ── */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 80px' }}>
          <div
            className="flex flex-col lg:flex-row"
            style={{ gap: '64px', paddingTop: '52px', paddingBottom: '80px', alignItems: 'flex-start' }}
          >

            {/* ──────────── Left: editorial content ──────────── */}
            <div style={{ flex: 1, minWidth: 0 }}>

              {/* ── Hotel header ── */}
              <div style={{ marginBottom: '36px' }}>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#B8955B">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Name + rating */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', marginBottom: '12px' }}>
                  <h1
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: 'clamp(38px, 4vw, 54px)',
                      fontWeight: 300,
                      lineHeight: 1.05,
                      letterSpacing: '-0.01em',
                      color: '#1F1F1F',
                    }}
                  >
                    {hotel.name}
                  </h1>

                  {/* Score badge */}
                  <div
                    style={{
                      flexShrink: 0,
                      backgroundColor: '#F8F6F2',
                      border: '1px solid #EFE7DC',
                      borderRadius: '6px',
                      padding: '10px 16px',
                      textAlign: 'center',
                      marginTop: '4px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '28px',
                        fontWeight: 500,
                        color: '#B8955B',
                        lineHeight: 1,
                        marginBottom: '4px',
                      }}
                    >
                      {hotel.rating}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '10px',
                        fontWeight: 400,
                        color: '#1F1F1F',
                        opacity: 0.45,
                        letterSpacing: '0.08em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {hotel.reviewCount.toLocaleString()} reviews
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '20px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#B8955B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#1F1F1F',
                      opacity: 0.55,
                      letterSpacing: '0.03em',
                    }}
                  >
                    {hotel.location}
                  </span>
                </div>

                {/* Tagline */}
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '22px',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    color: '#B8955B',
                    maxWidth: '540px',
                  }}
                >
                  {hotel.tagline}
                </p>
              </div>

              <Divider />

              {/* ── Description ── */}
              <div style={{ padding: '36px 0' }}>
                <SectionLabel>About This Property</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {hotel.description.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        fontWeight: 300,
                        lineHeight: 1.8,
                        color: '#1F1F1F',
                        opacity: 0.72,
                        maxWidth: '660px',
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <Divider />

              {/* ── Amenities ── */}
              <div style={{ padding: '36px 0' }}>
                <SectionLabel>Amenities & Services</SectionLabel>
                <SectionHeading>What&rsquo;s Included</SectionHeading>
                <HotelAmenities amenities={hotel.amenities} />
              </div>

              <Divider />

              {/* ── Rooms ── */}
              <div style={{ padding: '36px 0' }}>
                <SectionLabel>Accommodation</SectionLabel>
                <SectionHeading>Rooms &amp; Suites</SectionHeading>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {hotel.rooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </div>
              </div>

              <Divider />

              {/* ── Reviews ── */}
              <div style={{ padding: '36px 0' }}>
                <SectionLabel>Guest Voices</SectionLabel>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '14px', marginBottom: '28px' }}>
                  <SectionHeading>{hotel.reviewCount.toLocaleString()} Verified Reviews</SectionHeading>
                  <span
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontSize: '26px',
                      fontWeight: 400,
                      color: '#B8955B',
                    }}
                  >
                    {hotel.rating} / 10
                  </span>
                </div>
                <GuestReviews reviews={hotel.reviews} />
              </div>

              <Divider />

              {/* ── Similar Stays ── */}
              <div style={{ padding: '36px 0' }}>
                <SectionLabel>You May Also Love</SectionLabel>
                <SectionHeading>Similar Stays</SectionHeading>
                <SimilarStays currentId={hotel.id} />
              </div>

            </div>

            {/* ──────────── Right: booking card (desktop) ──────────── */}
            <div className="hidden lg:block" style={{ width: '360px', flexShrink: 0 }}>
              <div style={{ position: 'sticky', top: '92px' }}>
                <BookingCard hotel={hotel} />
              </div>
            </div>

          </div>

          {/* Mobile booking card — below content */}
          <div className="block lg:hidden" style={{ paddingBottom: '64px' }}>
            <BookingCard hotel={hotel} />
          </div>
        </div>
      </main>
    </>
  )
}

/* ── Layout helpers ── */

function Divider() {
  return <div style={{ height: '1px', backgroundColor: '#EFE7DC' }} />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '10px',
        fontWeight: 500,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: '#B8955B',
        marginBottom: '10px',
      }}
    >
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: 'clamp(26px, 2.4vw, 34px)',
        fontWeight: 300,
        lineHeight: 1.1,
        color: '#1F1F1F',
        marginBottom: '28px',
        letterSpacing: '-0.005em',
      }}
    >
      {children}
    </h2>
  )
}
