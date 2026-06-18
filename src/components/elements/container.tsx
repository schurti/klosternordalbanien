import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Container({ className, children, ...props }: ComponentProps<'div'>) {
  return (
    <div className={clsx('mx-auto w-full max-w-[1080px] px-5 sm:px-8 lg:px-10', className)} {...props}>
      {children}
    </div>
  )
}
