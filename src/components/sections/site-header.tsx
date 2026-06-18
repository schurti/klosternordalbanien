'use client'

import { useState } from 'react'

import { BrandMark } from '@/components/elements/brand-mark'
import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'

const navLinks = [
  { href: '/#ueber', label: 'Über uns' },
  { href: '/#hilfe', label: 'Unsere Hilfe' },
  { href: '/#transparenz', label: 'Transparenz' },
  { href: '/#spenden', label: 'Spenden' },
  { href: '/#kontakt', label: 'Kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-100 border-b border-line bg-haze/85 backdrop-blur-[10px] backdrop-saturate-150">
      <Container className="relative flex items-center justify-between gap-4 py-[0.7rem]">
        <a
          className="flex items-center gap-2.5 text-ink no-underline"
          href="/#top"
          aria-label="Förderverein Kloster Nordalbanien – Startseite"
        >
          <span className="shrink-0">
            <BrandMark />
          </span>
          <span>
            <b className="block font-serif text-[1.06rem] leading-none font-semibold tracking-[-0.01em]">
              Kloster&nbsp;Nordalbanien
            </b>
            <small className="mt-0.5 block text-[0.62rem] font-semibold tracking-[0.18em] text-plum-soft uppercase">
              Förderverein · Schweiz
            </small>
          </span>
        </a>

        <button
          type="button"
          className="flex h-10 w-11 items-center justify-center rounded-[10px] border-[1.5px] border-line md:hidden"
          aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="navlinks"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-0.5 w-5 bg-ink before:absolute before:-top-[6px] before:block before:h-0.5 before:w-5 before:bg-ink before:content-[''] after:absolute after:top-[6px] after:block after:h-0.5 after:w-5 after:bg-ink after:content-['']" />
        </button>

        <nav
          id="navlinks"
          aria-label="Hauptnavigation"
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col items-stretch gap-0 border-b border-line bg-haze px-5 pt-2 pb-[1.1rem] sm:px-8 lg:px-10 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === 'A') setOpen(false)
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-line py-[0.7rem] text-[0.98rem] font-medium text-ink no-underline opacity-90 hover:text-plum hover:opacity-100 md:border-0 md:py-0 md:opacity-80"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink variant="donate" href="/#spenden" className="mt-[0.7rem] md:mt-0 md:ml-1.5">
            Jetzt spenden
          </ButtonLink>
        </nav>
      </Container>
    </header>
  )
}
