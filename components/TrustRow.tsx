const features = [
  {
    Icon: DiamondIcon,
    title: 'Handpicked Stays',
    description: 'Curated luxury hotels just for you.',
  },
  {
    Icon: CrownIcon,
    title: 'Best Price Guarantee',
    description: 'Luxury at the best available price.',
  },
  {
    Icon: ClocheIcon,
    title: 'Personalized Service',
    description: '24/7 support for a seamless experience.',
  },
  {
    Icon: GiftIcon,
    title: 'Exclusive Benefits',
    description: 'Perks and privileges at select properties.',
  },
]

export default function TrustRow() {
  return (
    <section
      id="trust-icons"
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFE7DC',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '88px 80px 64px',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {features.map((feature, i) => (
          <div
            key={feature.title}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '18px',
              padding: i === 0 ? '0 48px 0 0' : '0 48px',
              borderLeft: i > 0 ? '1px solid #EFE7DC' : 'none',
            }}
          >
            {/* Gold icon */}
            <div style={{ color: '#B8955B', flexShrink: 0, marginTop: '2px' }}>
              <feature.Icon />
            </div>

            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#1F1F1F',
                  marginBottom: '7px',
                }}
              >
                {feature.title}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13px',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: '#1F1F1F',
                  opacity: 0.58,
                }}
              >
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── Icons — thin champagne gold line style ── */

function DiamondIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="14,2 26,14 14,26 2,14" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      <polygon points="14,7 21,14 14,21 7,14" stroke="#B8955B" strokeWidth="0.8" fill="none" />
      <line x1="2" y1="14" x2="7" y2="14" stroke="#B8955B" strokeWidth="1.0" />
      <line x1="21" y1="14" x2="26" y2="14" stroke="#B8955B" strokeWidth="1.0" />
    </svg>
  )
}

function CrownIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dome */}
      <path d="M5,20 Q5,8 14,8 Q23,8 23,20" stroke="#B8955B" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      {/* Handle */}
      <circle cx="14" cy="7" r="1.5" stroke="#B8955B" strokeWidth="1.1" fill="none" />
      {/* Base plate */}
      <line x1="3" y1="20" x2="25" y2="20" stroke="#B8955B" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="6" y1="22.5" x2="22" y2="22.5" stroke="#B8955B" strokeWidth="1.0" strokeLinecap="round" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Box body */}
      <rect x="4" y="13" width="20" height="12" rx="1" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      {/* Lid */}
      <rect x="3" y="10" width="22" height="4" rx="1" stroke="#B8955B" strokeWidth="1.2" fill="none" />
      {/* Center ribbon */}
      <line x1="14" y1="10" x2="14" y2="25" stroke="#B8955B" strokeWidth="1.0" />
      {/* Bow */}
      <path d="M14,10 Q10,6 8,8 Q6,10 9,11 Q11,11 14,10" stroke="#B8955B" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <path d="M14,10 Q18,6 20,8 Q22,10 19,11 Q17,11 14,10" stroke="#B8955B" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </svg>
  )
}
