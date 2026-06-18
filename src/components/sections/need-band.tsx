import type { ReactNode } from 'react'

import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Reveal } from '@/components/elements/reveal'

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const points: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Steigende Kosten',
    body: 'Grundnahrungsmittel und Medikamente werden für viele unerschwinglich.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
    title: 'Menschen allein',
    body: 'Ältere und Pflegebedürftige bleiben ohne familiäre Versorgung zurück.',
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 3v18M5 8l7-5 7 5" />
        <path d="M5 8v8l7 5 7-5V8" />
      </svg>
    ),
    title: 'Fehlende Fachkräfte',
    body: 'Im medizinisch-pflegerischen Bereich fehlt es an ausgebildeten Händen.',
  },
]

export function NeedBand() {
  return (
    <section className="bg-plum-deep py-16 text-[#f2e9f0] sm:py-20 lg:py-[108px]">
      <Container className="grid items-center gap-7 lg:gap-[56px] md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <Eyebrow tone="light">Warum es nötig ist</Eyebrow>
          <h2 className="max-w-[18ch] text-[clamp(1.7rem,3.6vw,2.35rem)] text-white">
            Am Rand von Shkodra fehlt es am Nötigsten.
          </h2>
          <hr className="my-6 h-0.5 w-[60px] border-0 bg-honey" />
          <p className="text-[1.08rem] text-[#e6d7e6]">
            Viele Familien sind aus den Bergen zugezogen und leben ohne gesicherte Wasser- und Stromversorgung. Die
            Preise für Lebensmittel, Heizung und Medikamente sind stark gestiegen, Fachkräfte in der Pflege fehlen, und
            viele alte Menschen sind allein. Genau hier setzt unsere Hilfe an – konkret und nah bei den Menschen.
          </p>
        </Reveal>
        <Reveal className="grid gap-[1.05rem]">
          {points.map((point) => (
            <div key={point.title} className="flex items-start gap-[0.85rem]">
              <span className="mt-[3px] shrink-0 text-honey">{point.icon}</span>
              <div>
                <b className="block font-serif font-semibold text-white">{point.title}</b>
                <span className="text-[0.97rem] text-[#ddcddd]">{point.body}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
