const features = [
  {
    Icon: DiamondIcon,
    title: 'Handpicked Stays',
    description: 'Every property is personally vetted for excellence.',
  },
  {
    Icon: CrownIcon,
    title: 'Best Price Guarantee',
    description: 'Luxury at the best available rate, always.',
  },
  {
    Icon: ClocheIcon,
    title: 'Personalized Service',
    description: '24/7 concierge support for a seamless journey.',
  },
  {
    Icon: GiftIcon,
    title: 'Exclusive Benefits',
    description: 'Curated perks and privileges at select properties.',
  },
]

export default function TrustRow() {
  return (
    <section
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
      }}
    >
      <div className="sz-container sz-section--sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                paddingLeft: i > 0 ? undefined : undefined,
              }}
            >
              {/* Vertical divider between items — desktop only */}
              {i > 0 && (
                <div
                  className="hidden lg:block"
                  style={{
                    width: '1px',
                    alignSelf: 'stretch',
                    backgroundColor: '#EFE7DC',
                    flexShrink: 0,
                    marginRight: '28px',
                  }}
                />
              )}
              <div style={{ color: '#B8955B', flexShrink: 0, marginTop: '2px' }}>
                <f.Icon />
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1F1F1F',
                  marginBottom: '8px',
                }}>
                  {f.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: '#1F1F1F',
                  opacity: 0.55,
                }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DiamondIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <polygon points="14,2 26,14 14,26 2,14" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      <polygon points="14,7 21,14 14,21 7,14" stroke="#B8955B" strokeWidth="0.8" fill="none" />
    </svg>
  )
}

function CrownIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <polyline points="4,20 4,10 10,16 14,6 18,16 24,10 24,20" stroke="#B8955B" strokeWidth="1.3" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="4" y1="22" x2="24" y2="22" stroke="#B8955B" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="4" cy="10" r="1.2" fill="#B8955B" />
      <circle cx="14" cy="6" r="1.2" fill="#B8955B" />
      <circle cx="24" cy="10" r="1.2" fill="#B8955B" />
    </svg>
  )
}

function ClocheIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <path d="M5,20 Q5,8 14,8 Q23,8 23,20" stroke="#B8955B" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <circle cx="14" cy="7" r="1.5" stroke="#B8955B" strokeWidth="1.1" fill="none" />
      <line x1="3" y1="20" x2="25" y2="20" stroke="#B8955B" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="6" y1="22.5" x2="22" y2="22.5" stroke="#B8955B" strokeWidth="1.0" strokeLinecap="round" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="13" width="20" height="12" rx="1" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      <rect x="3" y="10" width="22" height="4" rx="1" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      <line x1="14" y1="10" x2="14" y2="25" stroke="#B8955B" strokeWidth="1.0" />
      <path d="M14,10 Q10,6 8,8 Q6,10 9,11 Q11,11 14,10" stroke="#B8955B" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <path d="M14,10 Q18,6 20,8 Q22,10 19,11 Q17,11 14,10" stroke="#B8955B" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </svg>
  )
}
