import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Page offset for fixed header */}
      <main style={{ paddingTop: '72px' }}>

        {/* ── HERO + FLOATING SEARCH BAR ── */}
        <Hero />

        {/* ── TRUST ICONS ── extra top padding to clear the floating search bar ── */}
        <PlaceholderSection
          id="trust-icons"
          label="Trust Icons"
          minHeight="160px"
          bg="#EFE7DC"
          borderBottom="1px solid #E8E1D8"
          topPadding="72px"
        />

        {/* ── CURATED DESTINATIONS ── */}
        <PlaceholderSection
          id="curated-destinations"
          label="Curated Destinations"
          minHeight="600px"
          bg="#FFFFFF"
          borderBottom="1px solid #EFE7DC"
        />

        {/* ── STAYZZEE PRIVÉ ── */}
        <PlaceholderSection
          id="prive"
          label="STAYZZEE Privé"
          minHeight="500px"
          bg="#1F1F1F"
          labelColor="#B8955B"
          borderBottom="none"
        />

        {/* ── EXCLUSIVE EXPERIENCES ── */}
        <PlaceholderSection
          id="exclusive-experiences"
          label="Exclusive Experiences"
          minHeight="600px"
          bg="#F8F6F2"
          borderBottom="1px solid #EFE7DC"
        />

        {/* ── FOOTER ── */}
        <PlaceholderSection
          id="footer"
          label="Footer"
          minHeight="300px"
          bg="#1F1F1F"
          labelColor="#E8E1D8"
          borderBottom="none"
          tag="footer"
        />

      </main>
    </>
  )
}

/* ── Placeholder section ── */
type PlaceholderSectionProps = {
  id: string
  label: string
  minHeight: string
  bg: string
  borderBottom?: string
  labelColor?: string
  topPadding?: string
  tag?: 'section' | 'footer'
}

function PlaceholderSection({
  id,
  label,
  minHeight,
  bg,
  borderBottom = '1px solid #EFE7DC',
  labelColor = '#B8955B',
  topPadding,
  tag: Tag = 'section',
}: PlaceholderSectionProps) {
  return (
    <Tag
      id={id}
      style={{
        minHeight,
        backgroundColor: bg,
        borderBottom,
        paddingTop: topPadding ?? '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
      }}
    >
      <span style={{ display: 'block', width: '28px', height: '1px', backgroundColor: labelColor, opacity: 0.4 }} />
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: labelColor,
          opacity: 0.55,
        }}
      >
        {label}
      </span>
      <span style={{ display: 'block', width: '28px', height: '1px', backgroundColor: labelColor, opacity: 0.4 }} />
    </Tag>
  )
}
