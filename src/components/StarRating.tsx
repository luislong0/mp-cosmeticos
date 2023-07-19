import { Star, StarHalf } from 'lucide-react'

interface StarRatingProps {
  value: number
}

export function StarRating({ value }: StarRatingProps) {
  const stars = Array(5).fill(0)
  const rating = Math.floor(value * 2) / 2 // Round to the nearest 0.5
  const fullStars = Math.floor(rating)
  const halfStars = rating % 1 !== 0 ? 1 : 0

  return (
    <div className="flex w-full gap-2">
      {stars.map((_, i) => {
        return (
          <span key={i}>
            {i < fullStars ? (
              <Star fill="#fb7185" />
            ) : i < fullStars + halfStars ? (
              <StarHalf fill="#fb7185" />
            ) : (
              <Star fill="#71717a" />
            )}
          </span>
        )
      })}
    </div>
  )
}

export default StarRating
