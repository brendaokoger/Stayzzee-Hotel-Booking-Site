'use client'

export default function SearchBar() {
  return (
    <section
      className="relative z-20 md:-mt-14"
      style={{
        backgroundColor: 'transparent',
      }}
    >
      <div className="sz-container" style={{ paddingTop: '0', paddingBottom: '44px' }}>

        {/* ── Desktop: single horizontal bar ── */}
        <div
          className="hidden md:flex"
          style={{
            height: '72px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFE7DC',
            borderRadius: '6px',
            boxShadow: '0 8px 56px rgba(31,31,31,0.13), 0 2px 16px rgba(31,31,31,0.07)',
            overflow: 'hidden',
          }}
        >
          <Field icon={<PinIcon />} label="Where to?" placeholder="Search destinations" grow={1.5} border />
          <Field icon={<CalendarIcon />} label="Check-in" placeholder="Add date" grow={1} border />
          <Field icon={<CalendarIcon />} label="Check-out" placeholder="Add date" grow={1} border />
          <Field icon={<GuestIcon />} label="Guests" placeholder="2 guests" grow={0.9} border={false} />
          <button
            style={{
              flexShrink: 0,
              width: '120px',
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
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a07d4a')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B8955B')}
          >
            Search
          </button>
        </div>

        {/* ── Mobile: stacked card ── */}
        <div
          className="flex flex-col md:hidden"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #EFE7DC',
            borderRadius: '8px',
            boxShadow: '0 4px 24px rgba(31,31,31,0.07)',
            overflow: 'hidden',
            marginTop: '24px',
          }}
        >
          <MobileField icon={<PinIcon />} label="Where to?" placeholder="Search destinations" />
          <HRule />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <MobileField icon={<CalendarIcon />} label="Check-in" placeholder="Add date" />
            <div style={{ borderLeft: '1px solid #EFE7DC' }}>
              <MobileField icon={<CalendarIcon />} label="Check-out" placeholder="Add date" />
            </div>
          </div>
          <HRule />
          <MobileField icon={<GuestIcon />} label="Guests" placeholder="2 guests" />
          <div style={{ padding: '12px 16px 16px' }}>
            <button
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#B8955B',
                border: 'none',
                borderRadius: '4px',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              Search
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

/* ── Desktop field ── */
function Field({
  icon, label, placeholder, grow, border,
}: {
  icon: React.ReactNode
  label: string
  placeholder: string
  grow: number
  border: boolean
}) {
  return (
    <div
      style={{
        flex: grow,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '0 20px',
        borderRight: border ? '1px solid #EFE7DC' : 'none',
        cursor: 'pointer',
        transition: 'background-color 0.15s ease',
        minWidth: 0,
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAF8')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
    >
      <span style={{ color: '#B8955B', flexShrink: 0, opacity: 0.85, lineHeight: 1 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#1F1F1F',
          opacity: 0.45,
          marginBottom: '4px',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: '#1F1F1F',
          opacity: 0.38,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {placeholder}
        </div>
      </div>
    </div>
  )
}

/* ── Mobile field ── */
function MobileField({
  icon, label, placeholder,
}: {
  icon: React.ReactNode
  label: string
  placeholder: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px' }}>
      <span style={{ color: '#B8955B', opacity: 0.85, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
      <div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#1F1F1F',
          opacity: 0.45,
          marginBottom: '3px',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: '#1F1F1F',
          opacity: 0.38,
        }}>
          {placeholder}
        </div>
      </div>
    </div>
  )
}

function HRule() {
  return <div style={{ height: '1px', backgroundColor: '#EFE7DC', margin: '0 16px' }} />
}

/* ── Icons ── */
function PinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function GuestIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
