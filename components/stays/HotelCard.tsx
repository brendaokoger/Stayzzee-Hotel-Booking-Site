'use client'

import Link from 'next/link'
import { useState } from 'react'
import type { Hotel } from '@/lib/mockHotels'

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  const [saved, setSaved] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <article
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 16px 56px rgba(31,31,31,0.13), 0 4px 16px rgba(31,31,31,0.07)'
          : '0 4px 24px rgba(31,31,31,0.07)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', height: '252px', overflow: 'hidden', flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hotel.image}
          alt={hotel.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.55s ease',
          }}
        />

        {/* Badge */}
        {hotel.badge && (
          <div
            style={{
              position: 'absolute',
              top: '14px',
              left: '14px',
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              padding: '5px 12px',
              borderRadius: '2px',
              fontFamily: 'var(--font-sans)',
              fontSize: '9.5px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#B8955B',
            }}
          >
            {hotel.badge}
          </div>
        )}

        {/* Save / heart button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setSaved(!saved)
          }}
          aria-label={saved ? 'Remove from saved' : 'Save this stay'}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(6px)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s ease, background-color 0.2s ease',
            color: saved ? '#B8955B' : '#1F1F1F',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <HeartIcon filled={saved} />
        </button>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '20px 22px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Hotel name + rating */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '21px',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '0.01em',
              color: '#1F1F1F',
              flex: 1,
            }}
          >
            {hotel.name}
          </h3>
          <div
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: '#F8F6F2',
              border: '1px solid #EFE7DC',
              borderRadius: '3px',
              padding: '4px 8px',
              marginTop: '2px',
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="#B8955B" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 500,
                color: '#1F1F1F',
                letterSpacing: '0.02em',
              }}
            >
              {hotel.rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#B8955B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 300,
              color: '#1F1F1F',
              opacity: 0.55,
              letterSpacing: '0.03em',
            }}
          >
            {hotel.location}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#1F1F1F',
            opacity: 0.62,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {hotel.description}
        </p>

        {/* Amenities */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '18px',
          }}
        >
          {hotel.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10.5px',
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: '#1F1F1F',
                opacity: 0.55,
                backgroundColor: '#F8F6F2',
                padding: '3px 9px',
                borderRadius: '2px',
              }}
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#EFE7DC', marginBottom: '16px' }} />

        {/* Price + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
          <div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: '#1F1F1F',
                opacity: 0.45,
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '1px',
              }}
            >
              From
            </span>
            <span
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '24px',
                fontWeight: 500,
                color: '#1F1F1F',
                letterSpacing: '0.01em',
                lineHeight: 1,
              }}
            >
              ${hotel.pricePerNight.toLocaleString()}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: '#1F1F1F',
                opacity: 0.5,
                marginLeft: '4px',
              }}
            >
              / night
            </span>
          </div>

          {/* Links to the hotel detail page */}
          <Link
            href={`/stays/${hotel.id}`}
            onClick={(e) => e.stopPropagation()}
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
              border: '1px solid #B8955B',
              padding: '11px 20px',
              borderRadius: '2px',
              transition: 'all 0.22s ease',
              whiteSpace: 'nowrap',
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
            View Stay
            <ArrowRight />
          </Link>
        </div>
      </div>
    </article>
  )
}

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? '#B8955B' : 'none'} stroke={filled ? '#B8955B' : '#1F1F1F'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
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
