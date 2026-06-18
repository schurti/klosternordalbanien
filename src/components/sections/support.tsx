import type { ReactNode } from 'react'

import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Reveal } from '@/components/elements/reveal'

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const ways: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M3 10h2M19 10h2" />
      </svg>
    ),
    title: 'Geld spenden',
    body: 'Mit einer einmaligen oder regelmässigen Spende unterstützen Sie die Hilfe vor Ort direkt.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M18 8v6M15 11h6" />
      </svg>
    ),
    title: 'Mitglied werden',
    body: 'Tragen Sie die Arbeit des Vereins dauerhaft mit – schreiben Sie uns für die Aufnahme.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 8h18v4H3z" />
        <path d="M5 12v8h14v-8" />
        <path d="M12 8V4M9 6l3-2 3 2" />
      </svg>
    ),
    title: 'Sachspenden & Mithilfe',
    body: 'Wir nehmen geeignete Sachspenden entgegen und freuen uns über ehrenamtliche Mithilfe in der Schweiz.',
  },
]

export function Support() {
  return (
    <section className="bg-wash-honey py-16 sm:py-20 lg:py-[108px]" id="spenden">
      <Container>
        <Reveal className="mb-8 max-w-[62ch] lg:mb-12">
          <Eyebrow tone="honey">Mitmachen</Eyebrow>
          <h2 className="mb-2.5 text-[clamp(1.7rem,3.6vw,2.4rem)]">So können Sie helfen</h2>
          <p className="max-w-[60ch] text-[1.18rem] text-muted">
            Jeder Beitrag kommt zweckgebunden in Nordalbanien an.
          </p>
        </Reveal>
        <div className="grid items-start gap-7 lg:gap-[46px] md:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="grid gap-3.5">
            {ways.map((way) => (
              <div
                key={way.title}
                className="flex items-start gap-[0.9rem] rounded-[14px] border border-[#ead9be] bg-white px-5 py-[18px]"
              >
                <span className="mt-[3px] shrink-0 text-honey-deep">{way.icon}</span>
                <div>
                  <b className="mb-1 block font-serif text-[1.1rem] font-semibold">{way.title}</b>
                  <p className="text-[0.97rem] text-muted">{way.body}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="rounded-2xl bg-plum-deep p-[26px] text-white">
            <p className="text-[0.74rem] font-semibold tracking-[0.16em] text-[#d9b6db] uppercase">Spendenkonto</p>
            <p className="my-[0.15rem] font-serif text-[1.18rem]">Förderverein Kloster Nordalbanien</p>
            <div className="mt-3 rounded-[10px] border border-dashed border-[#d9b6db]/60 bg-white/10 px-[0.8rem] py-[0.7rem] font-mono text-[1.04rem] tracking-[0.04em]">
              IBAN: CH00 0000 0000 0000 0000 0
            </div>
            <small className="mt-[0.9rem] block text-[0.86rem] leading-relaxed text-[#ddcddd]">
              Bitte hier die definitive IBAN und das Empfängerkonto einsetzen. Hinweis zur steuerlichen Abzugsfähigkeit
              nach Anerkennung der Gemeinnützigkeit ergänzen.
            </small>
            <ButtonLink variant="light" href="#kontakt" className="mt-[1.2rem]">
              Fragen zur Spende?
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
