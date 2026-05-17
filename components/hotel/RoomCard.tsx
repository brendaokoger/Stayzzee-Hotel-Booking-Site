'use client'

import { useState } from 'react'
import type { RoomType } from '@/lib/mockHotelDetail'

export default function RoomCard({ room }: { room: RoomType }) {
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        borderRadius: '10px',
        overflow: 'hidden',
        border: selected ? '1px solid #B8955B' : '1px solid #EFE7DC',
        backgroundColor: '#FFFFFF',
        boxShadow: hovered
          ? '0 8px 32px rgba(31,31,31,0.10)'
          : '0 2px 12px rgba(31,31,31,0.05)',
        transition: 'box-shadow 0.3s ease, border-color 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Room image */}
      <div style={{ width: '220px', flexShrink: 0, overflow: 'hidden', position: 'relative' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={room.image}
          alt={room.alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.55s ease',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
          }}
        />
      </div>

      {/* Room info */}
      <div
        style={{
          flex: 1,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* Name + price */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '23px',
              fontWeight: 400,
              color: '#1F1F1F',
              lineHeight: 1.15,
              letterSpacing: '0.01em',
            }}
          >
            {room.name}
          </h3>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '26px',
                fontWeight: 500,
                color: '#1F1F1F',
                lineHeight: 1,
              }}
            >
              ${room.pricePerNight.toLocaleString()}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 300,
                color: '#1F1F1F',
                opacity: 0.45,
                letterSpacing: '0.04em',
                marginTop: '2px',
              }}
            >
              per night
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: '20px' }}>
          <MetaItem label={`Sleeps ${room.sleeps}`} />
          <MetaItem label={`${room.sqm} m²`} />
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 1.7,
            color: '#1F1F1F',
            opacity: 0.6,
            flex: 1,
          }}
        >
          {room.description}
        </p>

        {/* Features */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {room.features.map((feature) => (
            <span
              key={feature}
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
              {feature}
            </span>
          ))}
        </div>

        {/* Reserve button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
          <button
            onClick={() => setSelected(!selected)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: selected ? '#FFFFFF' : '#B8955B',
              backgroundColor: selected ? '#B8955B' : 'transparent',
              border: '1px solid #B8955B',
              padding: '11px 28px',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              if (!selected) {
                e.currentTarget.style.backgroundColor = '#B8955B'
                e.currentTarget.style.color = '#FFFFFF'
              }
            }}
            onMouseLeave={(e) => {
              if (!selected) {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#B8955B'
              }
            }}
          >
            {selected ? '✓ Selected' : 'Reserve'}
          </button>
        </div>
      </div>
    </div>
  )
}

function MetaItem({ label }: { label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <span
        style={{
          display: 'inline-block',
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          backgroundColor: '#B8955B',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11.5px',
          fontWeight: 400,
          color: '#1F1F1F',
          opacity: 0.5,
          letterSpacing: '0.04em',
        }}
      >
        {label}
      </span>
    </div>
  )
}
