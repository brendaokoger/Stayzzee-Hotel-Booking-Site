'use client'

import { useState } from 'react'

type FilterState = {
  destination: string
  checkIn: string
  checkOut: string
  guests: string
  propertyType: string
  priceRange: string
  rating: string
}

const DEFAULTS: FilterState = {
  destination: '',
  checkIn: 'Check-in',
  checkOut: 'Check-out',
  guests: '2 Guests',
  propertyType: 'All Types',
  priceRange: 'Any Price',
  rating: 'Any Rating',
}

const propertyTypes = ['All Types', 'Urban Hotel', 'Beach Resort', 'Island Resort', 'Boutique Hotel', 'Jungle Resort']
const priceRanges = ['Any Price', 'Under $500', '$500 – $1,000', '$1,000 – $1,500', '$1,500+']
const ratings = ['Any Rating', '9.0+', '9.5+', '9.7+', '9.9+']

export default function FilterBar() {
  const [filters, setFilters] = useState<FilterState>(DEFAULTS)
  const [openDropdown, setOpenDropdown] = useState<keyof FilterState | null>(null)

  const setFilter = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setOpenDropdown(null)
  }

  const hasActiveFilters =
    filters.propertyType !== DEFAULTS.propertyType ||
    filters.priceRange !== DEFAULTS.priceRange ||
    filters.rating !== DEFAULTS.rating ||
    filters.destination !== DEFAULTS.destination

  const clearAll = () => {
    setFilters(DEFAULTS)
    setOpenDropdown(null)
  }

  return (
    <div
      style={{
        position: 'sticky',
        top: '72px',
        zIndex: 50,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
        boxShadow: '0 4px 24px rgba(31,31,31,0.07)',
      }}
      onClick={() => setOpenDropdown(null)}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          alignItems: 'stretch',
          height: '68px',
          overflowX: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Destination */}
        <div
          style={{
            flex: 1.6,
            minWidth: '160px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '0 20px 0 0',
            borderRight: '1px solid #EFE7DC',
            cursor: 'text',
          }}
        >
          <PinIcon />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={labelStyle}>Destination</div>
            <input
              type="text"
              placeholder="Search destinations…"
              value={filters.destination}
              onChange={(e) => setFilter('destination', e.target.value)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                fontWeight: 400,
                color: '#1F1F1F',
                background: 'none',
                border: 'none',
                outline: 'none',
                width: '100%',
                padding: 0,
                opacity: filters.destination ? 1 : 0.45,
              }}
            />
          </div>
        </div>

        {/* Check-in */}
        <FilterField
          icon={<CalendarIcon />}
          label="Check-in"
          value={filters.checkIn}
          isPlaceholder={filters.checkIn === DEFAULTS.checkIn}
          onClick={() => setOpenDropdown(null)}
        />

        {/* Check-out */}
        <FilterField
          icon={<CalendarIcon />}
          label="Check-out"
          value={filters.checkOut}
          isPlaceholder={filters.checkOut === DEFAULTS.checkOut}
          onClick={() => setOpenDropdown(null)}
        />

        {/* Guests */}
        <FilterField
          icon={<GuestIcon />}
          label="Guests"
          value={filters.guests}
          isPlaceholder={false}
          onClick={() => setOpenDropdown(null)}
        />

        {/* Property Type */}
        <DropdownField
          label="Property Type"
          value={filters.propertyType}
          isActive={filters.propertyType !== DEFAULTS.propertyType}
          isOpen={openDropdown === 'propertyType'}
          options={propertyTypes}
          onToggle={() => setOpenDropdown(openDropdown === 'propertyType' ? null : 'propertyType')}
          onSelect={(v) => setFilter('propertyType', v)}
        />

        {/* Price Range */}
        <DropdownField
          label="Price Range"
          value={filters.priceRange}
          isActive={filters.priceRange !== DEFAULTS.priceRange}
          isOpen={openDropdown === 'priceRange'}
          options={priceRanges}
          onToggle={() => setOpenDropdown(openDropdown === 'priceRange' ? null : 'priceRange')}
          onSelect={(v) => setFilter('priceRange', v)}
        />

        {/* Rating */}
        <DropdownField
          label="Rating"
          value={filters.rating}
          isActive={filters.rating !== DEFAULTS.rating}
          isOpen={openDropdown === 'rating'}
          options={ratings}
          onToggle={() => setOpenDropdown(openDropdown === 'rating' ? null : 'rating')}
          onSelect={(v) => setFilter('rating', v)}
        />

        {/* Search + Clear */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            paddingLeft: '20px',
            flexShrink: 0,
          }}
        >
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10.5px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1F1F1F',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                opacity: 0.45,
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.45')}
            >
              Clear
            </button>
          )}
          <button
            style={{
              height: '40px',
              padding: '0 28px',
              backgroundColor: '#B8955B',
              border: 'none',
              borderRadius: '3px',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a07d4a')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B8955B')}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Static display field (dates, guests) ── */
function FilterField({
  icon,
  label,
  value,
  isPlaceholder,
  onClick,
}: {
  icon: React.ReactNode
  label: string
  value: string
  isPlaceholder: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      style={{
        flex: 1,
        minWidth: '120px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '0 20px',
        borderRight: '1px solid #EFE7DC',
        cursor: 'pointer',
      }}
    >
      <span style={{ color: '#B8955B', opacity: 0.7, flexShrink: 0 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={labelStyle}>{label}</div>
        <div style={{ ...valueStyle, opacity: isPlaceholder ? 0.35 : 0.85, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</span>
          <ChevronIcon />
        </div>
      </div>
    </div>
  )
}

/* ── Dropdown field ── */
function DropdownField({
  label,
  value,
  isActive,
  isOpen,
  options,
  onToggle,
  onSelect,
}: {
  label: string
  value: string
  isActive: boolean
  isOpen: boolean
  options: string[]
  onToggle: () => void
  onSelect: (v: string) => void
}) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: '120px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 20px',
        borderRight: '1px solid #EFE7DC',
        cursor: 'pointer',
        position: 'relative',
      }}
      onClick={(e) => {
        e.stopPropagation()
        onToggle()
      }}
    >
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ ...labelStyle, color: isActive ? '#B8955B' : undefined }}>{label}</div>
        <div style={{ ...valueStyle, opacity: 0.85, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              color: isActive ? '#B8955B' : '#1F1F1F',
              fontWeight: isActive ? 500 : 400,
            }}
          >
            {value}
          </span>
          <ChevronIcon active={isActive} />
        </div>
      </div>

      {/* Dropdown panel */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            minWidth: '180px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFE7DC',
            borderRadius: '6px',
            boxShadow: '0 8px 32px rgba(31,31,31,0.12)',
            zIndex: 100,
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onSelect(option)}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 18px',
                textAlign: 'left',
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: value === option ? 500 : 300,
                color: value === option ? '#B8955B' : '#1F1F1F',
                backgroundColor: value === option ? '#FBF8F4' : '#FFFFFF',
                border: 'none',
                borderBottom: '1px solid #F8F6F2',
                cursor: 'pointer',
                transition: 'background-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (value !== option) e.currentTarget.style.backgroundColor = '#FBF8F4'
              }}
              onMouseLeave={(e) => {
                if (value !== option) e.currentTarget.style.backgroundColor = '#FFFFFF'
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Shared styles ── */
const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '9.5px',
  fontWeight: 500,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#1F1F1F',
  opacity: 0.45,
  marginBottom: '3px',
  whiteSpace: 'nowrap',
}

const valueStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '13px',
  fontWeight: 400,
  color: '#1F1F1F',
}

/* ── Icons ── */
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B8955B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GuestIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ChevronIcon({ active = false }: { active?: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={active ? '#B8955B' : '#1F1F1F'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: active ? 0.8 : 0.3, flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
