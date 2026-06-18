import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

type Tone = 'plum' | 'light' | 'honey'

const toneText = {
  plum: 'text-plum',
  light: 'text-[#d9b6db]',
  honey: 'text-honey-deep',
}

const toneRule = {
  plum: 'before:bg-honey-deep',
  light: 'before:bg-honey',
  honey: 'before:bg-honey-deep',
}

export function Eyebrow({
  tone = 'plum',
  className,
  children,
  ...props
}: { tone?: Tone } & ComponentProps<'p'>) {
  return (
    <p
      className={clsx(
        'flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[0.16em] uppercase',
        "before:inline-block before:h-[1.5px] before:w-[26px] before:content-['']",
        toneText[tone],
        toneRule[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}
