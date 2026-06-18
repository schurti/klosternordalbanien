import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

/**
 * Long-form legal prose. Styles its descendant headings and paragraphs so the
 * page bodies stay free of repetitive utility classes.
 */
export function Document({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-5 text-base leading-7 text-muted',
        '[&_h2]:mt-4 [&_h2]:font-serif [&_h2]:text-[1.3rem] [&_h2]:font-semibold [&_h2]:text-ink',
        '[&_a]:text-plum',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
