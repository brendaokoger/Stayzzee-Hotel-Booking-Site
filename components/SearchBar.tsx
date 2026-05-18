'use client'

export default function SearchBar() {
  return (
    <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #EFE7DC' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '28px 24px 36px' }}>

        {/* Desktop: horizontal bar */}
        <div
          className="hidden md:flex"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '6px',
            border: '1px solid #EFE7DC',
            boxShadow: '0 8px 48px rgba(31,31,31,0.09), 0 2px 12px rgba(31,31,31,0.05)',
            overflow: 'hidden',
            height: '76px',
          }}
        >
          <DesktopField icon={<PinIcon />} label="Where to?" value="Search destinations" isPlaceholder flex={1.4} showDivider />
          <DesktopField icon={<CalendarIcon />} label="Check-in" value="Add date" isPlaceholder flex={1} showDivider />
          <DesktopField icon={<CalendarIcon />} label="Check-out" value="Add date" isPlaceholder flex={1} showDivider />
          <DesktopField icon={<GuestIcon />} label="Guests" value="2 Guests" flex={0.9} showDivider={false} />
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

        {/* Mobile: stacked card */}
        <div
          className="flex flex-col md:hidden"
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            border: '1px solid #EFE7DC',
            boxShadow: '0 4px 24px rgba(31,31,31,0.08)',
            overflow: 'hidden',
          }}
        >
          <MobileField icon={<PinIcon />} label="Where to?" placeholder="Search destinations" />
          <FieldDivider />
          <div className="grid grid-cols-2">
            <MobileField icon={<CalendarIcon />} label="Check-in" placeholder="Add date" />
            <div style={{ borderLeft: '1px solid #EFE7DC' }}>
              <MobileField icon={<CalendarIcon />} label="Check-out" placeholder="Add date" />
            </div>
          </div>
          <FieldDivider />
          <MobileField icon={<GuestIcon />} label="Guests" placeholder="2 guests" />
          <div style={{ padding: '12px 16px 16px' }}>
            <button style={{
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
            }}>
              Search
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}

function FieldDivider() {
  return <div style={{ height: '1px', backgroundColor: '#EFE7DC', margin: '0 16px' }} />
}

function MobileField({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px' }}>
      <span style={{ color: '#B8955B', opacity: 0.8, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
      <div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '9px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#1F1F1F',
          opacity: 0.45,
          marginBottom: '2px',
        }}>
          {label}
        </div>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '13px',
          fontWeight: 300,
          color: '#1F1F1F',
          opacity: 0.4,
        }}>
          {placeholder}
        </div>
      </div>
    </div>
  )
}

type DesktopFieldProps = {
  icon: React.ReactNode
  label: string
  value: string
  isPlaceholder?: boolean
  flex: number
  showDivider: boolean
}

function DesktopField({ icon, label, value, isPlaceholder = false, flex, showDivider }: DesktopFieldProps) {
  return (
    <div
      style={{
        flex,
        display: 'flex',
        alignItems: 'center',
        padding: '0 22px',
        cursor: 'pointer',
        borderRight: showDivider ? '1px solid #EFE7DC' : 'none',
        gap: '10px',
        transition: 'background-color 0.15s ease',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAF8')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = 'transparent')}
    >
      <span style={{ color: '#B8955B', opacity: 0.8, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '9.5px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#1F1F1F',
          opacity: 0.5,
          marginBottom: '4px',
          whiteSpace: 'nowrap',
        }}>
          {label}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '13px',
            fontWeight: 400,
            color: '#1F1F1F',
            opacity: isPlaceholder ? 0.4 : 0.85,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {value}
          </span>
          <ChevronIcon />
        </div>
      </div>
    </div>
  )
}

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

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#1F1F1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.35, flexShrink: 0 }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
