import Header from '@/components/Header'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Page offset for fixed header */}
      <main style={{ paddingTop: '72px' }}>

        {/* ── HERO ── */}
        <Section
          id="hero"
          label="Hero"
          minHeight="90vh"
          bg="var(--ivory)"
          borderBottom="1px solid var(--champagne)"
        />

        {/* ── SEARCH BAR ── */}
        <Section
          id="search-bar"
          label="Search Bar"
          minHeight="120px"
          bg="var(--white)"
          borderBottom="1px solid var(--champagne)"
        />

        {/* ── TRUST ICONS ── */}
        <Section
          id="trust-icons"
          label="Trust Icons"
          minHeight="160px"
          bg="var(--champagne)"
          borderBottom="1px solid var(--warm-gray)"
        />

        {/* ── CURATED DESTINATIONS ── */}
        <Section
          id="curated-destinations"
          label="Curated Destinations"
          minHeight="600px"
          bg="var(--white)"
          borderBottom="1px solid var(--champagne)"
        />

        {/* ── STAYZZEE PRIVÉ ── */}
        <Section
          id="prive"
          label="STAYZZEE Privé"
          minHeight="500px"
          bg="var(--charcoal)"
          labelColor="var(--gold)"
          borderBottom="none"
        />

        {/* ── EXCLUSIVE EXPERIENCES ── */}
        <Section
          id="exclusive-experiences"
          label="Exclusive Experiences"
          minHeight="600px"
          bg="var(--ivory)"
          borderBottom="1px solid var(--champagne)"
        />

        {/* ── FOOTER ── */}
        <Section
          id="footer"
          label="Footer"
          minHeight="300px"
          bg="var(--charcoal)"
          labelColor="var(--warm-gray)"
          borderBottom="none"
          tag="footer"
        />

      </main>
    </>
  )
}

/* ─── Placeholder section component ─── */
type SectionProps = {
  id: string
  label: string
  minHeight: string
  bg: string
  borderBottom?: string
  labelColor?: string
  tag?: 'section' | 'footer'
}

function Section({
  id,
  label,
  minHeight,
  bg,
  borderBottom = '1px solid var(--champagne)',
  labelColor = 'var(--gold)',
  tag: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      style={{
        minHeight,
        backgroundColor: bg,
        borderBottom,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        position: 'relative',
      }}
    >
      {/* Gold rule above */}
      <span
        style={{
          display: 'block',
          width: '32px',
          height: '1px',
          backgroundColor: labelColor,
          opacity: 0.5,
        }}
      />

      {/* Section label */}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: labelColor,
          opacity: 0.6,
        }}
      >
        {label}
      </span>

      {/* Gold rule below */}
      <span
        style={{
          display: 'block',
          width: '32px',
          height: '1px',
          backgroundColor: labelColor,
          opacity: 0.5,
        }}
      />
    </Tag>
  )
}
