import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

import { withBasePath } from '@/lib/with-base-path'

type Variant = 'plum' | 'donate' | 'ghost' | 'light'

const base =
  'inline-flex items-center gap-2 rounded-full px-[1.35rem] py-[0.78rem] text-base font-semibold no-underline border-[1.5px] cursor-pointer transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_22px_-12px_rgba(55,34,59,0.5)]'

const variants: Record<Variant, string> = {
  plum: 'bg-plum text-white border-plum',
  donate: 'bg-honey text-[#2a1e10] border-honey hover:bg-[#e0a75c]',
  ghost: 'bg-transparent text-plum border-line hover:border-plum hover:bg-white',
  light: 'bg-white text-plum-deep border-white',
}

export function buttonClasses(variant: Variant = 'plum', className?: string) {
  return clsx(base, variants[variant], className)
}

export function ButtonLink({
  variant = 'plum',
  className,
  href,
  children,
  ...props
}: { variant?: Variant } & ComponentProps<'a'>) {
  return (
    <a className={buttonClasses(variant, className)} href={href ? withBasePath(href) : href} {...props}>
      {children}
    </a>
  )
}

export function Button({
  variant = 'plum',
  className,
  children,
  ...props
}: { variant?: Variant } & ComponentProps<'button'>) {
  return (
    <button className={buttonClasses(variant, className)} {...props}>
      {children}
    </button>
  )
}
