// ─── LiteAPI Integration Points ────────────────────────────────────────────
//
//   getHotelDetails(hotelId: string) → HotelDetail
//     LiteAPI endpoint: GET /hotels/{hotelId}
//     Replace `mockHotelDetail` in app/stays/[id]/page.tsx with this call.
//
//   getRoomRates({ hotelId, checkIn, checkOut, guests }) → RoomRate[]
//     LiteAPI endpoint: GET /hotels/{hotelId}/rates
//     Pass result into BookingCard as `rates` prop.
//
//   checkAvailability({ hotelId, checkIn, checkOut, guests, rateId }) → AvailabilityResult
//     LiteAPI endpoint: POST /hotels/availability
//     Called from BookingCard on "Check Availability" press.
//
//   createBooking({ hotelId, rateId, guest, payment }) → BookingConfirmation
//     LiteAPI endpoint: POST /bookings
//     Called from checkout page (Step 8+).
//
// ───────────────────────────────────────────────────────────────────────────

export type RoomType = {
  id: string
  name: string
  description: string
  sleeps: number
  sqm: number
  pricePerNight: number
  currency: string
  image: string
  alt: string
  features: string[]
}

export type Review = {
  id: string
  name: string
  location: string
  date: string
  rating: number
  text: string
}

export type AmenityItem = {
  id: string
  label: string
}

export type HotelDetail = {
  id: string
  name: string
  tagline: string
  location: string
  region: string
  country: string
  stars: 5
  rating: number
  reviewCount: number
  description: string[]
  images: {
    hero: string
    heroAlt: string
    gallery: Array<{ src: string; alt: string }>
  }
  amenities: AmenityItem[]
  rooms: RoomType[]
  reviews: Review[]
  priceFrom: number
  currency: string
}

export const mockHotelDetail: HotelDetail = {
  id: 'aman-santorini',
  name: 'Aman Santorini',
  tagline: 'Suspended above the caldera, where the Aegean meets eternity.',
  location: 'Imerovigli, Santorini, Greece',
  region: 'Santorini',
  country: 'Greece',
  stars: 5,
  rating: 9.8,
  reviewCount: 1240,
  description: [
    'Perched at the island\'s highest inhabited point, Aman Santorini occupies a restored complex of cave suites and private villas carved directly into the ancient caldera cliff. Each space is a study in Cycladic purity — cool white stone warmed by hand-selected linens, reclaimed timber, and terracotta accents in tones drawn from the volcanic landscape beneath.',
    'A private plunge pool or infinity edge frames the caldera panorama from every suite, while butler service, a cliff-edge spa, and one of the Aegean\'s most celebrated kitchens complete an experience without parallel. Sunrise over Nea Kameni, witnessed from your private terrace with a carafe of fresh orange juice, is the quiet spectacle around which every day here is arranged.',
  ],
  images: {
    hero: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1400&q=85',
    heroAlt: 'Aman Santorini infinity pool overlooking the caldera at golden hour',
    gallery: [
      { src: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', alt: 'Santorini whitewashed cliff architecture' },
      { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80', alt: 'Suite interior with Cycladic stone and caldera view' },
      { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', alt: 'Private pool terrace at dusk' },
      { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', alt: 'Cliff-edge spa and wellness sanctuary' },
    ],
  },
  amenities: [
    { id: 'ocean-view',    label: 'Ocean View' },
    { id: 'infinity-pool', label: 'Infinity Pool' },
    { id: 'spa',           label: 'Spa & Wellness' },
    { id: 'dining',        label: 'Private Dining' },
    { id: 'transfer',      label: 'Airport Transfer' },
    { id: 'concierge',     label: 'Concierge' },
    { id: 'wifi',          label: 'Free WiFi' },
    { id: 'breakfast',     label: 'Breakfast Included' },
  ],
  rooms: [
    {
      id: 'cliff-suite',
      name: 'Cliff Suite',
      description: 'Carved into the caldera cliff with whitewashed stone interiors, a sunken living area, and a private terrace with plunge pool aligned to the Aegean horizon.',
      sleeps: 2,
      sqm: 72,
      pricePerNight: 680,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
      alt: 'Cliff Suite with plunge pool and caldera view',
      features: ['King bed', 'Plunge pool', 'Caldera view', 'Butler service', 'Breakfast'],
    },
    {
      id: 'caldera-pool-villa',
      name: 'Caldera Pool Villa',
      description: 'A freestanding villa with a heated infinity pool at the caldera\'s edge. A dedicated butler, shaded dining terrace, and open-plan living pavilion define an experience of absolute privacy.',
      sleeps: 2,
      sqm: 110,
      pricePerNight: 1280,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      alt: 'Caldera Pool Villa private heated infinity pool',
      features: ['King bed', 'Infinity pool', 'Private chef', 'Dedicated butler', 'All meals'],
    },
    {
      id: 'presidential-suite',
      name: 'Presidential Suite',
      description: 'Three levels of Cycladic luxury with 270° panoramic caldera views, a 20-metre pool, private cinema, and the resort\'s most expansive terrace — an experience reserved for the truly discerning.',
      sleeps: 4,
      sqm: 280,
      pricePerNight: 2400,
      currency: 'USD',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      alt: 'Presidential Suite grand terrace with panoramic caldera views',
      features: ['2 King bedrooms', '20m pool', 'Private cinema', '24hr chef', 'Butler', 'Helicopter access'],
    },
  ],
  reviews: [
    {
      id: 'r1',
      name: 'Marcus T.',
      location: 'London, United Kingdom',
      date: 'February 2025',
      rating: 10,
      text: 'Aman Santorini transcends what a hotel can be. We arrived expecting luxury and found something closer to a private home suspended in the sky. The caldera view from our plunge pool at sunrise remains the most beautiful thing I have witnessed in forty years of travel.',
    },
    {
      id: 'r2',
      name: 'Isabelle R.',
      location: 'Paris, France',
      date: 'January 2025',
      rating: 10,
      text: 'Every detail speaks of extraordinary care — the hand-pressed linens, the unhurried cuisine, the way candlelight catches the caldera walls at dusk. Nothing felt excessive. Everything felt precisely right. We will return.',
    },
    {
      id: 'r3',
      name: 'James K.',
      location: 'Singapore',
      date: 'March 2025',
      rating: 9,
      text: 'We have stayed at Aman properties across three continents. Santorini is, without question, the jewel. The staff anticipate needs before they are voiced. The only imperfection was that we had to leave.',
    },
  ],
  priceFrom: 680,
  currency: 'USD',
}
