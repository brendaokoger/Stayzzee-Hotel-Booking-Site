import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustRow from '@/components/TrustRow'
import CuratedDestinations from '@/components/CuratedDestinations'
import Prive from '@/components/Prive'
import ExclusiveExperiences from '@/components/ExclusiveExperiences'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Page offset for fixed header */}
      <main style={{ paddingTop: '72px' }}>

        {/* ── HERO + FLOATING SEARCH BAR ── */}
        <Hero />

        {/* ── TRUST ROW ── */}
        <TrustRow />

        {/* ── CURATED DESTINATIONS ── */}
        <CuratedDestinations />

        {/* ── STAYZZEE PRIVÉ ── */}
        <Prive />

        {/* ── EXCLUSIVE EXPERIENCES ── */}
        <ExclusiveExperiences />

        {/* ── FOOTER ── */}
        <Footer />

      </main>
    </>
  )
}
