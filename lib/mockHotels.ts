// ─── LiteAPI Integration Points ────────────────────────────────────────────
//
// When connecting LiteAPI, replace this mock data with:
//
//   searchHotels({ destination, checkIn, checkOut, guests, filters })
//     → Returns Hotel[] from LiteAPI /hotels/search endpoint
//
//   getHotelRates({ hotelId, checkIn, checkOut, guests })
//     → Returns rate + availability from LiteAPI /hotels/rates endpoint
//
//   filterHotels({ hotels, filters })
//     → Client-side filter helper (or use LiteAPI server-side filter params)
//
// ───────────────────────────────────────────────────────────────────────────

export type Amenity =
  | 'Pool'
  | 'Spa'
  | 'Fine Dining'
  | 'Beach'
  | 'Fitness'
  | 'Concierge'
  | 'Overwater Villas'
  | 'City View'
  | 'Sea View'
  | 'Butler Service'
  | 'Private Terrace'
  | 'Cultural Tours'

export type PropertyType =
  | 'Urban Hotel'
  | 'Island Resort'
  | 'Beach Resort'
  | 'Boutique Hotel'
  | 'Eco Resort'
  | 'Cliff Hotel'
  | 'Jungle Resort'

export interface Hotel {
  id: string
  name: string
  location: string
  country: string
  stars: 5
  rating: number
  reviewCount: number
  description: string
  amenities: Amenity[]
  image: string
  alt: string
  pricePerNight: number
  currency: string
  propertyType: PropertyType
  badge?: string
}

export const mockHotels: Hotel[] = [
  {
    id: 'aman-tokyo',
    name: 'Aman Tokyo',
    location: 'Tokyo, Japan',
    country: 'Japan',
    stars: 5,
    rating: 9.8,
    reviewCount: 1840,
    description:
      'A serene urban sanctuary inspired by Japanese temples, perched on the upper floors of a landmark tower with sweeping views over the Imperial Palace.',
    amenities: ['Spa', 'Fine Dining', 'City View', 'Pool', 'Fitness'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=85',
    alt: 'Aman Tokyo minimalist suite with city views',
    pricePerNight: 1200,
    currency: 'USD',
    propertyType: 'Urban Hotel',
    badge: 'Editors\' Pick',
  },
  {
    id: 'oneonly-dubai',
    name: 'One&Only Royal Mirage',
    location: 'Dubai, UAE',
    country: 'UAE',
    stars: 5,
    rating: 9.6,
    reviewCount: 2310,
    description:
      'An Arabian palace rising from a private beach, where gilded archways, candlelit courtyards, and the warm Gulf breeze define an incomparable resort experience.',
    amenities: ['Pool', 'Spa', 'Beach', 'Fine Dining', 'Butler Service'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85',
    alt: 'One&Only Royal Mirage luxury pool at dusk',
    pricePerNight: 890,
    currency: 'USD',
    propertyType: 'Beach Resort',
  },
  {
    id: 'six-senses-maldives',
    name: 'Six Senses Laamu',
    location: 'Laamu Atoll, Maldives',
    country: 'Maldives',
    stars: 5,
    rating: 9.9,
    reviewCount: 987,
    description:
      'Suspended above one of the Maldives' most pristine lagoons, where overwater villas and an untouched reef create an immersive escape far from the ordinary.',
    amenities: ['Overwater Villas', 'Spa', 'Beach', 'Fine Dining', 'Pool'],
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&q=85',
    alt: 'Six Senses Laamu overwater villas at sunrise',
    pricePerNight: 1450,
    currency: 'USD',
    propertyType: 'Island Resort',
    badge: 'Most Loved',
  },
  {
    id: 'nobu-santorini',
    name: 'Nobu Hotel Santorini',
    location: 'Santorini, Greece',
    country: 'Greece',
    stars: 5,
    rating: 9.4,
    reviewCount: 1530,
    description:
      'Carved into the caldera's volcanic clifftops, this Cycladic retreat blends iconic whitewashed architecture with Nobu's signature brand of understated luxury.',
    amenities: ['Sea View', 'Pool', 'Fine Dining', 'Spa', 'Private Terrace'],
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=85',
    alt: 'Nobu Hotel Santorini infinity pool overlooking the caldera',
    pricePerNight: 680,
    currency: 'USD',
    propertyType: 'Boutique Hotel',
  },
  {
    id: 'rosewood-mayakoba',
    name: 'Rosewood Mayakoba',
    location: 'Riviera Maya, Mexico',
    country: 'Mexico',
    stars: 5,
    rating: 9.7,
    reviewCount: 2105,
    description:
      'Set within a living ecosystem of lush jungle, mangroves, and ancient Mayan waterways, this acclaimed resort redefines Caribbean luxury with refined elegance.',
    amenities: ['Beach', 'Pool', 'Spa', 'Fine Dining', 'Concierge'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
    alt: 'Rosewood Mayakoba private pool villa in the jungle',
    pricePerNight: 720,
    currency: 'USD',
    propertyType: 'Jungle Resort',
  },
  {
    id: 'four-seasons-bali',
    name: 'Four Seasons Jimbaran Bay',
    location: 'Jimbaran Bay, Bali',
    country: 'Indonesia',
    stars: 5,
    rating: 9.5,
    reviewCount: 3420,
    description:
      'Cascading down a hillside to a secluded bay, these private open-air villas with plunge pools capture the timeless magic of Balinese culture and natural beauty.',
    amenities: ['Pool', 'Spa', 'Beach', 'Fine Dining', 'Cultural Tours'],
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
    alt: 'Four Seasons Bali private villa with plunge pool',
    pricePerNight: 620,
    currency: 'USD',
    propertyType: 'Beach Resort',
  },
]
