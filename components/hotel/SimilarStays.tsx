import { mockHotels } from '@/lib/mockHotels'
import HotelCard from '@/components/stays/HotelCard'

export default function SimilarStays({ currentId }: { currentId: string }) {
  const similar = mockHotels
    .filter((h) => h.id !== currentId)
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {similar.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  )
}
