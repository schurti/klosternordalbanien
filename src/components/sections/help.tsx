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

const areas: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    title: 'Medizinische Grundversorgung',
    body: 'Eine Sanitätsstation versorgt mittellose Menschen aus Shkodra und Umgebung: Wundversorgung, Verbände, Schmerz- und Grundmedikamente sowie Begleitung im Gesundheitssystem.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M12 21v-5" />
      </svg>
    ),
    title: 'Häusliche Pflege & Palliativbegleitung',
    body: 'Pflege und Begleitung schwerkranker und sterbender Menschen zu Hause, die im Spital keine Versorgung finden.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
        <path d="M17 11a3 3 0 1 0-2-5.2" />
        <path d="M21 20c0-2.5-1.5-4.6-3.6-5.5" />
      </svg>
    ),
    title: 'Familien- und Nothilfe',
    body: 'Unterstützung bedürftiger Familien mit dem Nötigsten – Lebensmittel, Hygiene und Hilfe in akuten Notlagen.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M7 9.5V14c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V9.5" />
        <path d="M21 7v5" />
      </svg>
    ),
    title: 'Ausbildung in häuslicher Pflege',
    body: 'Schulung von Angehörigen und Helfenden in häuslicher Kranken- und Grundpflege, damit Wissen vor Ort bleibt.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="6" r="2.5" />
        <path d="M12 8.5V15" />
        <path d="M8 11h8" />
        <path d="M9 21l3-4 3 4" />
      </svg>
    ),
    title: 'Kindergarten',
    body: 'Ein Kindergarten gibt Kindern aus armen Familien einen sicheren Ort, Betreuung und frühe Förderung.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M5 13l3-3 4 2 3-4 4 3" />
        <path d="M3 20c2-3 4-4 6-4M21 20c-2-3-4-4-6-4M12 16v4" />
      </svg>
    ),
    title: 'Versöhnungsarbeit',
    body: 'Vermittlung und Begleitung in Familien, die von Blutfehden betroffen sind – als humanitäre, friedensfördernde Arbeit.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 7h12v9H3z" />
        <path d="M15 10h4l2 3v3h-6" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </svg>
    ),
    title: 'Materialtransporte Schweiz–Albanien',
    body: 'Wir sammeln in der Schweiz Verbandsmaterial, Hilfsmittel, Kleider und Schulmaterial und bringen sie regelmässig nach Shkodra.',
  },
]

export function Help() {
  return (
    <section className="bg-stone py-16 sm:py-20 lg:py-[108px]" id="hilfe">
      <Container>
        <Reveal className="mb-8 max-w-[62ch] lg:mb-12">
          <Eyebrow>Unsere Hilfe</Eyebrow>
          <h2 className="mb-2.5 text-[clamp(1.7rem,3.6vw,2.4rem)]">Wo Ihre Spende wirkt</h2>
          <p className="max-w-[60ch] text-[1.18rem] text-muted">
            Sieben Bereiche, in denen wir die Arbeit der Trägerschaft vor Ort unterstützen.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Reveal
              as="article"
              key={area.title}
              className="rounded-2xl border border-line bg-white px-6 py-[26px] transition duration-200 hover:-translate-y-[3px] hover:border-[#d9c7da] hover:shadow-[0_18px_40px_-28px_rgba(55,34,59,0.5)]"
            >
              <div className="mb-4 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] bg-wash-honey text-plum">
                {area.icon}
              </div>
              <h3 className="mb-2 text-[1.22rem]">{area.title}</h3>
              <p className="text-[0.99rem] text-muted">{area.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
