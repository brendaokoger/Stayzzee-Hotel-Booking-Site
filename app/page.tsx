import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import TrustRow from '@/components/TrustRow'
import CuratedDestinations from '@/components/CuratedDestinations'
import Prive from '@/components/Prive'
import ExclusiveExperiences from '@/components/ExclusiveExperiences'
import Footer from '@/components/Footer'

const pressLogos = [
  { name: 'Condé Nast\nTraveler', style: { fontFamily: 'Georgia, serif', fontSize: '11px', fontWeight: 400, letterSpacing: '0.01em', lineHeight: 1.3, whiteSpace: 'pre-line' as const } },
  { name: 'VOGUE', style: { fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.12em' } },
  { name: 'Forbes', style: { fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.02em' } },
  { name: 'Robb Report', style: { fontFamily: 'Georgia, serif', fontSize: '13px', fontWeight: 400, letterSpacing: '0.04em' } },
  { name: 'VANITY FAIR', style: { fontFamily: 'Georgia, serif', fontSize: '13px', fontWeight: 400, letterSpacing: '0.1em' } },
  { name: 'BAZAAR', style: { fontFamily: 'Georgia, serif', fontSize: '16px', fontWeight: 700, letterSpacing: '0.14em' } },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '72px' }}>
        <Hero />
        <SearchBar />
        <TrustRow />
        <CuratedDestinations />
        <Prive />
        <ExclusiveExperiences />

        {/* ── Press logos ── */}
        <section style={{ backgroundColor: '#FAFAF8', borderTop: '1px solid #EFE7DC', borderBottom: '1px solid #EFE7DC' }}>
          <div
            className="sz-container"
            style={{
              paddingTop: '28px',
              paddingBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '32px',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#1F1F1F',
              opacity: 0.38,
              flexShrink: 0,
            }}>
              As Featured In
            </p>
            {pressLogos.map((logo) => (
              <span
                key={logo.name}
                style={{
                  ...logo.style,
                  color: '#1F1F1F',
                  opacity: 0.32,
                }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
