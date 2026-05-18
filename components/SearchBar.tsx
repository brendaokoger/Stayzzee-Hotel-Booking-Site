'use client'

export default function SearchBar() {
  return (
    <section className="sz-searchbar-section">
      <div className="sz-container" style={{ paddingTop: 0, paddingBottom: '44px' }}>
        <div className="sz-searchbar">

          <div className="sz-searchbar-field" style={{ flex: '1.5' }}>
            <span className="sz-searchbar-icon"><PinIcon /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="sz-searchbar-label">Where to?</div>
              <div className="sz-searchbar-value">Search destinations</div>
            </div>
            <span className="sz-searchbar-chevron"><ChevronDown /></span>
          </div>

          <div className="sz-searchbar-sep" />

          <div className="sz-searchbar-field" style={{ flex: '1' }}>
            <span className="sz-searchbar-icon"><CalendarIcon /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="sz-searchbar-label">Check-in</div>
              <div className="sz-searchbar-value">Add date</div>
            </div>
            <span className="sz-searchbar-chevron"><ChevronDown /></span>
          </div>

          <div className="sz-searchbar-sep" />

          <div className="sz-searchbar-field" style={{ flex: '1' }}>
            <span className="sz-searchbar-icon"><CalendarIcon /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="sz-searchbar-label">Check-out</div>
              <div className="sz-searchbar-value">Add date</div>
            </div>
            <span className="sz-searchbar-chevron"><ChevronDown /></span>
          </div>

          <div className="sz-searchbar-sep" />

          <div className="sz-searchbar-field" style={{ flex: '0.9' }}>
            <span className="sz-searchbar-icon"><GuestIcon /></span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="sz-searchbar-label">Guests</div>
              <div className="sz-searchbar-value">2 Guests</div>
            </div>
            <span className="sz-searchbar-chevron"><ChevronDown /></span>
          </div>

          <button className="sz-searchbar-btn">Search</button>

        </div>
      </div>
    </section>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
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
