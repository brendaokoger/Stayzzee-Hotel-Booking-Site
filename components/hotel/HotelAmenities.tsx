import type { AmenityItem } from '@/lib/mockHotelDetail'

export default function HotelAmenities({ amenities }: { amenities: AmenityItem[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px 12px',
      }}
      className="grid-cols-2 sm:grid-cols-4"
    >
      {amenities.map((amenity) => (
        <div
          key={amenity.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '13px',
            padding: '16px 14px',
            backgroundColor: '#FAFAF8',
            border: '1px solid #EFE7DC',
            borderRadius: '6px',
          }}
        >
          <div style={{ color: '#B8955B', flexShrink: 0 }}>
            <AmenityIcon id={amenity.id} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12.5px',
              fontWeight: 400,
              color: '#1F1F1F',
              letterSpacing: '0.02em',
            }}
          >
            {amenity.label}
          </span>
        </div>
      ))}
    </div>
  )
}

function AmenityIcon({ id }: { id: string }) {
  const props = {
    width: 20, height: 20, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
  }

  switch (id) {
    case 'ocean-view':
      return (
        <svg {...props}>
          <path d="M2 8 Q12 3 22 8" />
          <path d="M2 13 Q7 11 12 13 Q17 15 22 13" />
          <path d="M2 18 Q7 16 12 18 Q17 20 22 18" />
        </svg>
      )
    case 'infinity-pool':
      return (
        <svg {...props}>
          <path d="M4 12 Q7 6 10 12 Q13 18 16 12 Q19 6 22 12" />
          <path d="M2 17 Q7 15 12 17 Q17 19 22 17" strokeOpacity={0.45} />
        </svg>
      )
    case 'spa':
      return (
        <svg {...props}>
          <path d="M12 22 C12 22 4 16 4 9 C4 5.5 7.5 3 12 3 C16.5 3 20 5.5 20 9 C20 16 12 22 12 22Z" />
          <line x1="12" y1="22" x2="12" y2="3" strokeOpacity={0.4} />
        </svg>
      )
    case 'dining':
      return (
        <svg {...props}>
          <path d="M8 3 L8 12 M12 3 L12 12 M16 3 L16 8 C16 11 13 13 13 13" />
          <line x1="5" y1="15" x2="19" y2="15" />
          <line x1="12" y1="15" x2="12" y2="21" />
        </svg>
      )
    case 'transfer':
      return (
        <svg {...props}>
          <path d="M6 13 L8 7 L16 7 L18 13" />
          <rect x="3" y="13" width="18" height="6" rx="2" />
          <circle cx="7.5" cy="20" r="1" fill="currentColor" stroke="none" />
          <circle cx="16.5" cy="20" r="1" fill="currentColor" stroke="none" />
          <line x1="9" y1="10" x2="15" y2="10" strokeOpacity={0.4} />
        </svg>
      )
    case 'concierge':
      return (
        <svg {...props}>
          <path d="M5 18 Q5 9 12 9 Q19 9 19 18" />
          <circle cx="12" cy="8" r="1.5" fill="currentColor" stroke="none" />
          <line x1="3" y1="18" x2="21" y2="18" />
          <line x1="6" y1="21" x2="18" y2="21" strokeOpacity={0.5} />
        </svg>
      )
    case 'wifi':
      return (
        <svg {...props}>
          <path d="M2 9 Q12 3 22 9" />
          <path d="M5 13 Q12 8 19 13" />
          <path d="M8.5 17 Q12 13.5 15.5 17" />
          <circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'breakfast':
      return (
        <svg {...props}>
          <path d="M3 9 L3 18 Q3 20 7 20 L17 20 Q21 20 21 18 L21 9 Z" />
          <path d="M21 11 Q24 11 24 14 Q24 17 21 17" />
          <path d="M8 9 Q8 6 11 5" strokeOpacity={0.55} />
          <path d="M14 9 Q14 6 17 5" strokeOpacity={0.55} />
        </svg>
      )
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <circle cx="12" cy="15" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}
