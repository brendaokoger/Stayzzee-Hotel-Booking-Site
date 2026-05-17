'use client'

import { useState } from 'react'
import type { HotelDetail } from '@/lib/mockHotelDetail'

type Props = { images: HotelDetail['images']; hotelName: string }

export default function HotelGallery({ images, hotelName }: Props) {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)

  return (
    <div style={{ backgroundColor: '#F8F6F2', padding: '20px 80px 0' }}>
      <div
        style={{
          height: '500px',
          display: 'flex',
          gap: '5px',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        {/* ── Large hero image ── */}
        <div style={{ flex: 1.55, position: 'relative', overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images.hero}
            alt={images.heroAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s ease',
              transform: hoverIdx === -1 ? 'scale(1.04)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoverIdx(-1)}
            onMouseLeave={() => setHoverIdx(null)}
          />
          {/* Hotel name watermark */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '24px',
              fontFamily: 'var(--font-cormorant)',
              fontSize: '13px',
              fontWeight: 300,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.7)',
              pointerEvents: 'none',
            }}
          >
            {hotelName}
          </div>
        </div>

        {/* ── 2×2 thumbnail grid ── */}
        <div
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '5px',
          }}
        >
          {images.gallery.map((img, i) => (
            <div
              key={i}
              style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  transform: hoverIdx === i ? 'scale(1.06)' : 'scale(1)',
                }}
              />

              {/* "See all photos" overlay on last thumb */}
              {i === 3 && (
                <button
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(15,12,8,0.42)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(15,12,8,0.55)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(15,12,8,0.42)')}
                  aria-label="View all photos"
                >
                  <GridIcon />
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#FFFFFF',
                    }}
                  >
                    See all photos
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function GridIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}
