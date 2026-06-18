'use client'

import { clsx } from 'clsx/lite'

import { Button } from '@/components/elements/button'

const emailUserParts = ['in', 'fo'] as const
const emailDomainParts = ['klosternordalbanien', 'ch'] as const

function getEmail() {
  return `${emailUserParts.join('')}@${emailDomainParts[0]}.${emailDomainParts[1]}`
}

function openMailto() {
  window.location.href = `mailto:${getEmail()}`
}

export function ObfuscatedEmailTextLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openMailto}
      className={clsx('cursor-pointer text-left underline underline-offset-4', className)}
      aria-label="E-Mail senden"
    >
      {emailUserParts.join('')}@{emailDomainParts[0]}.{emailDomainParts[1]}
    </button>
  )
}

export function ObfuscatedEmailButtonLink({
  label,
  variant = 'donate',
  className,
}: {
  label: string
  variant?: 'plum' | 'donate' | 'ghost' | 'light'
  className?: string
}) {
  return (
    <Button type="button" variant={variant} className={className} onClick={openMailto}>
      {label}
    </Button>
  )
}
