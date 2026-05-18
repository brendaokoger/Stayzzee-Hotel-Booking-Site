import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import TrustRow from '@/components/TrustRow'
import CuratedDestinations from '@/components/CuratedDestinations'
import Prive from '@/components/Prive'
import ExclusiveExperiences from '@/components/ExclusiveExperiences'
import Footer from '@/components/Footer'

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
        <Footer />
      </main>
    </>
  )
}
