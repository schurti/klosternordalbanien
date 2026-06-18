type BrandMarkProps = {
  /** Ring colour – plum on light surfaces, muted grey on the dark footer. */
  ring?: string
  dot?: string
}

export function BrandMark({ ring = '#5C3C5E', dot = '#5C3C5E' }: BrandMarkProps) {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <circle cx="17" cy="17" r="15.5" stroke={ring} strokeWidth="1.4" />
      <path d="M10 21 C 14 11, 20 11, 24 21" stroke="#D49A4E" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="10" cy="21" r="2" fill={dot} />
      <circle cx="24" cy="21" r="2.4" fill="#D49A4E" />
    </svg>
  )
}
