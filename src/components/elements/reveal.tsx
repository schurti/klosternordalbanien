'use client'

import { clsx } from 'clsx/lite'
import { useEffect, useRef, type ComponentProps, type ElementType } from 'react'

/**
 * Fades content up as it scrolls into view. Falls back to immediately visible
 * when IntersectionObserver is unavailable or reduced motion is requested.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  className,
  children,
  ...props
}: { as?: T } & ComponentProps<'div'>) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)

    const timer = window.setTimeout(() => el.classList.add('is-visible'), 2500)
    return () => {
      io.disconnect()
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <Tag ref={ref} className={clsx('reveal', className)} {...props}>
      {children}
    </Tag>
  )
}
