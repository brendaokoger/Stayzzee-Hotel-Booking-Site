'use client'

import { useState } from 'react'
import type { HotelDetail } from '@/lib/mockHotelDetail'

export default function BookingCard({ hotel }: { hotel: HotelDetail }) {
  const [checkIn, setCheckIn]   = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests]     = useState(2)
  const [roomId, setRoomId]     = useState(hotel.rooms[0].id)
  const [promoCode, setPromo]   = useState('')
  const [showPromo, setShowPromo] = useState(false)
  const [status, setStatus]     = useState<'idle' | 'loading' | 'available'>('idle')

  const selectedRoom = hotel.rooms.find((r) => r.id === roomId) ?? hotel.rooms[0]
  const nights = 3 // LiteAPI: derive from checkIn/checkOut once connected
  const base    = selectedRoom.pricePerNight * nights
  const resort  = 50
  const taxes   = Math.round(base * 0.12)
  const total   = base + resort + taxes

  // LiteAPI: checkAvailability({ hotelId, checkIn, checkOut, guests, rateId })
  const handleCheck = () => {
    setStatus('loading')
    setTimeout(() => setStatus('available'), 1600)
  }

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid #EFE7DC',
        borderRadius: '12px',
        padding: '28px',
        boxShadow: '0 8px 48px rgba(31,31,31,0.10), 0 2px 12px rgba(31,31,31,0.05)',
      }}
    >
      {/* Rating row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} width="11" height="11" viewBox="0 0 24 24" fill="#B8955B">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#1F1F1F', opacity: 0.5, marginLeft: '4px' }}>
          {hotel.rating} · {hotel.reviewCount.toLocaleString()} reviews
        </span>
      </div>

      {/* Price headline */}
      <div style={{ marginBottom: '22px' }}>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 500, color: '#1F1F1F', lineHeight: 1 }}>
          ${selectedRoom.pricePerNight.toLocaleString()}
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 300, color: '#1F1F1F', opacity: 0.45, marginLeft: '6px' }}>
          / night
        </span>
      </div>

      <div style={{ height: '1px', backgroundColor: '#EFE7DC', marginBottom: '20px' }} />

      {/* Check-in / Check-out */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
        <DateField label="Check-in" value={checkIn} onChange={setCheckIn} />
        <DateField label="Check-out" value={checkOut} onChange={setCheckOut} />
      </div>

      {/* Guests */}
      <div style={{ marginBottom: '12px' }}>
        <FieldLabel>Guests</FieldLabel>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: '1px solid #EFE7DC',
            borderRadius: '4px',
            padding: '10px 14px',
          }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', color: '#1F1F1F' }}>
            {guests} {guests === 1 ? 'Guest' : 'Guests'}
          </span>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <StepBtn onClick={() => setGuests(Math.max(1, guests - 1))} label="−" />
            <StepBtn onClick={() => setGuests(Math.min(4, guests + 1))} label="+" />
          </div>
        </div>
      </div>

      {/* Room type */}
      <div style={{ marginBottom: '12px' }}>
        <FieldLabel>Room Type</FieldLabel>
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{
            width: '100%',
            border: '1px solid #EFE7DC',
            borderRadius: '4px',
            padding: '10px 14px',
            fontFamily: 'var(--font-sans)',
            fontSize: '13.5px',
            color: '#1F1F1F',
            backgroundColor: '#FFFFFF',
            appearance: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%231F1F1F' stroke-opacity='0.35' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 14px center',
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          {hotel.rooms.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name} — ${r.pricePerNight.toLocaleString()}/night
            </option>
          ))}
        </select>
      </div>

      {/* Promo code toggle */}
      <button
        onClick={() => setShowPromo(!showPromo)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '11.5px',
          fontWeight: 400,
          color: '#B8955B',
          letterSpacing: '0.04em',
          padding: 0,
          marginBottom: showPromo ? '10px' : '16px',
          textDecoration: 'underline',
          textDecorationColor: 'rgba(184,149,91,0.35)',
        }}
      >
        {showPromo ? 'Hide' : 'Add'} promo code
      </button>

      {showPromo && (
        <div style={{ marginBottom: '16px' }}>
          <input
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={(e) => setPromo(e.target.value.toUpperCase())}
            style={{
              width: '100%',
              border: '1px solid #EFE7DC',
              borderRadius: '4px',
              padding: '10px 14px',
              fontFamily: 'var(--font-sans)',
              fontSize: '13px',
              letterSpacing: '0.08em',
              color: '#1F1F1F',
              backgroundColor: '#FAFAF8',
              outline: 'none',
            }}
          />
        </div>
      )}

      {/* Pricing breakdown */}
      <div
        style={{
          backgroundColor: '#FAFAF8',
          border: '1px solid #EFE7DC',
          borderRadius: '6px',
          padding: '16px 18px',
          marginBottom: '16px',
        }}
      >
        <PriceLine label={`${selectedRoom.name.split(' ')[0]} Suite · ${nights} nights`} value={`$${base.toLocaleString()}`} />
        <PriceLine label="$" value={`$${selectedRoom.pricePerNight.toLocaleString()} × ${nights}`} subtle />
        <PriceLine label="Resort fee" value={`$${resort}`} />
        <PriceLine label="Taxes & fees (12%)" value={`$${taxes.toLocaleString()}`} />
        <div style={{ height: '1px', backgroundColor: '#EFE7DC', margin: '12px 0' }} />
        <PriceLine label="Estimated total" value={`$${total.toLocaleString()}`} bold />
      </div>

      {/* CTA */}
      {status === 'available' ? (
        <button
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#2D5016',
            border: 'none',
            borderRadius: '4px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Room Available — Complete Booking
        </button>
      ) : (
        <button
          onClick={handleCheck}
          disabled={status === 'loading'}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: status === 'loading' ? '#C9A970' : '#B8955B',
            border: 'none',
            borderRadius: '4px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            cursor: status === 'loading' ? 'wait' : 'pointer',
            transition: 'background-color 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
          onMouseEnter={(e) => {
            if (status === 'idle') e.currentTarget.style.backgroundColor = '#a07d4a'
          }}
          onMouseLeave={(e) => {
            if (status === 'idle') e.currentTarget.style.backgroundColor = '#B8955B'
          }}
        >
          {status === 'loading' && <Spinner />}
          {status === 'loading' ? 'Checking Availability…' : 'Check Availability'}
        </button>
      )}

      {/* Fine print */}
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 300,
          color: '#1F1F1F',
          opacity: 0.4,
          textAlign: 'center',
          marginTop: '12px',
          lineHeight: 1.6,
          letterSpacing: '0.02em',
        }}
      >
        No payment charged at this stage.
        <br />
        Free cancellation up to 48 hours before check-in.
      </p>
    </div>
  )
}

/* ── Sub-components ── */

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '9.5px',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: '#1F1F1F',
        opacity: 0.4,
        marginBottom: '6px',
      }}
    >
      {children}
    </p>
  )
}

function DateField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          border: '1px solid #EFE7DC',
          borderRadius: '4px',
          padding: '10px 12px',
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          color: value ? '#1F1F1F' : 'rgba(31,31,31,0.35)',
          backgroundColor: '#FFFFFF',
          outline: 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  )
}

function StepBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '26px',
        height: '26px',
        border: '1px solid #EFE7DC',
        borderRadius: '50%',
        backgroundColor: '#FFFFFF',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: '14px',
        fontWeight: 300,
        color: '#1F1F1F',
        lineHeight: 1,
        transition: 'border-color 0.2s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#B8955B')}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#EFE7DC')}
    >
      {label}
    </button>
  )
}

function PriceLine({
  label, value, subtle = false, bold = false,
}: {
  label: string; value: string; subtle?: boolean; bold?: boolean
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: bold ? 0 : '8px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: subtle ? '11px' : '12.5px',
          fontWeight: bold ? 500 : 300,
          color: '#1F1F1F',
          opacity: subtle ? 0.4 : bold ? 0.9 : 0.65,
          letterSpacing: '0.02em',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: bold ? 'var(--font-cormorant)' : 'var(--font-sans)',
          fontSize: bold ? '20px' : subtle ? '11px' : '12.5px',
          fontWeight: bold ? 500 : 300,
          color: bold ? '#1F1F1F' : '#1F1F1F',
          opacity: subtle ? 0.4 : bold ? 1 : 0.75,
          letterSpacing: bold ? '0.01em' : '0.02em',
        }}
      >
        {value}
      </span>
    </div>
  )
}

function Spinner() {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M12 2 A10 10 0 0 1 22 12" />
    </svg>
  )
}
