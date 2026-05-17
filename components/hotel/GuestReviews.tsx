import type { Review } from '@/lib/mockHotelDetail'

export default function GuestReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      style={{
        backgroundColor: '#FAFAF8',
        border: '1px solid #EFE7DC',
        borderRadius: '8px',
        padding: '24px 28px',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Avatar initial */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#EFE7DC',
              border: '1px solid #E8E1D8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-cormorant)',
              fontSize: '18px',
              fontWeight: 400,
              color: '#B8955B',
              flexShrink: 0,
            }}
          >
            {review.name[0]}
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                fontWeight: 500,
                color: '#1F1F1F',
                marginBottom: '2px',
              }}
            >
              {review.name}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11.5px',
                fontWeight: 300,
                color: '#1F1F1F',
                opacity: 0.45,
                letterSpacing: '0.02em',
              }}
            >
              {review.location}
            </p>
          </div>
        </div>

        {/* Rating + date */}
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'flex', gap: '2px', justifyContent: 'flex-end', marginBottom: '4px' }}>
            {Array.from({ length: review.rating }, (_, i) => (
              <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#B8955B">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 300,
              color: '#1F1F1F',
              opacity: 0.4,
              letterSpacing: '0.04em',
            }}
          >
            {review.date}
          </p>
        </div>
      </div>

      {/* Review text */}
      <blockquote
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '17px',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.65,
          color: '#1F1F1F',
          opacity: 0.8,
          margin: 0,
          borderLeft: '2px solid #B8955B',
          paddingLeft: '16px',
        }}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>
    </div>
  )
}
