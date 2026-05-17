'use client'

import { useState } from 'react'

export default function SearchBar() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '-44px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 80px)',
        maxWidth: '1200px',
        backgroundColor: '#FFFFFF',
        borderRadius: '6px',
        boxShadow: '0 8px 48px rgba(31, 31, 31, 0.10), 0 2px 12px rgba(31, 31, 31, 0.06)',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        zIndex: 20,
        height: '80px',
      }}
    >
      {/* WHERE TO? */}
      <SearchField
        icon={<PinIcon />}
        label="Where to?"
        value="Search destinations"
        isPlaceholder
        flex={1.4}
        showDivider
      />

      {/* CHECK-IN */}
      <SearchField
        icon={<CalendarIcon />}
        label="Check-in"
        value="May 24, 2025"
        flex={1}
        showDivider
      />

      {/* CHECK-OUT */}
      <SearchField
        icon={<CalendarIcon />}
        label="Check-out"
        value="May 27, 2025"
        flex={1}
        showDivider
      />

      {/* GUESTS */}
      <SearchField
        icon={<GuestIcon />}
        label="Guests"
        value="2 Guests"
        flex={0.9}
        showDivider={false}
      />

      {/* SEARCH button */}
      <button
        style={{
          flexShrink: 0,
          width: '128px',
          backgroundColor: '#B8955B',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#FFFFFF',
          transition: 'background-color 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a07d4a')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B8955B')}
      >
        Search
      </button>
    </div>
  )
}

/* ── Field ── */
type SearchFieldProps = {
  icon: React.ReactNode
  label: string
  value: string
  isPlaceholder?: boolean
  flex: number
  showDivider: boolean
}

function SearchField({ icon, label, value, isPlaceholder = false, flex, showDivider }: SearchFieldProps) {
  return (
    <div
      style={{
        flex,
        display: 'flex',
        alignItems: 'center',
        padding: '0 24px',
        cursor: 'pointer',
        borderRight: showDivider ? '1px solid #EFE7DC' : 'none',
        gap: '10px',
        transition: 'background-color 0.15s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAF8')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
    >
      {/* Icon */}
      <span style={{ color: '#B8955B', opacity: 0.8, flexShrink: 0, lineHeight: 1 }}>{icon}</span>

      {/* Label + value */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '9.5px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#1F1F1F',
            opacity: 0.5,
            marginBottom: '4px',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              fontWeight: 400,
              color: isPlaceholder ? '#1F1F1F' : '#1F1F1F',
              opacity: isPlaceholder ? 0.4 : 0.85,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {value}
          </span>
          <ChevronIcon />
        </div>
      </div>
    </div>
  )
}

/* ── Icons ── */
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GuestIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
