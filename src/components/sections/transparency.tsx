import type { ReactNode } from 'react'

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

const cards: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      </svg>
    ),
    title: 'Zweckgebunden & überprüft',
    body: 'Auszahlungen erfolgen nur auf Grundlage schriftlicher Vereinbarungen. Die Trägerschaften erstatten mindestens jährlich Bericht über die Mittelverwendung.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z" />
      </svg>
    ),
    title: 'Ehrenamtlicher Vorstand',
    body: 'Der Vorstand arbeitet ehrenamtlich. Ersetzt werden ausschliesslich belegte, effektive Auslagen.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
      </svg>
    ),
    title: 'Gemeinnützig',
    body: 'Der Verein verfolgt ausschliesslich gemeinnützige und karitative Zwecke. Die Steuerbefreiung ist beantragt.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      </svg>
    ),
    title: 'Schutz der Menschen',
    body: 'Wir veröffentlichen keine Namen oder Bilder unterstützter Personen ohne deren Einverständnis. Sensible Fälle werden anonymisiert.',
  },
]

export function Transparency() {
  return (
    <section className="py-16 sm:py-20 lg:py-[108px]" id="transparenz">
      <Container>
        <Reveal className="mb-8 max-w-[62ch] lg:mb-12">
          <Eyebrow>Transparenz</Eyebrow>
          <h2 className="mb-2.5 text-[clamp(1.7rem,3.6vw,2.4rem)]">Verantwortungsvoll mit Ihrer Spende</h2>
          <p className="max-w-[60ch] text-[1.18rem] text-muted">
            Vertrauen entsteht durch Klarheit. So stellen wir sicher, dass Hilfe zweckkonform ankommt.
          </p>
        </Reveal>
        <div className="grid gap-[18px] md:grid-cols-2">
          {cards.map((card) => (
            <Reveal
              as="article"
              key={card.title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <div className="mb-[0.55rem] flex items-center gap-[0.8rem]">
                <span className="shrink-0 text-plum">{card.icon}</span>
                <h3 className="text-[1.14rem]">{card.title}</h3>
              </div>
              <p className="text-[0.97rem] text-muted">{card.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
