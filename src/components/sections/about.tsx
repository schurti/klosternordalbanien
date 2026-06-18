import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Reveal } from '@/components/elements/reveal'

const principles = ['Gemeinnützig', 'Weltanschaulich unabhängig', 'Mittel zweckgebunden']

function CheckIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function About() {
  return (
    <section className="py-16 sm:py-20 lg:py-[108px]" id="ueber">
      <Container className="grid items-start gap-8 lg:gap-[60px] md:grid-cols-2">
        <Reveal>
          <Eyebrow>Wer wir sind</Eyebrow>
          <h2 className="text-[clamp(1.7rem,3.4vw,2.3rem)]">
            Nahe an den Menschen – über erfahrene Partner vor Ort.
          </h2>
        </Reveal>
        <Reveal>
          <div className="grid gap-[1.1rem]">
            <p>
              Der Förderverein Kloster Nordalbanien ist ein gemeinnütziger Verein mit Sitz im Kanton Zug. Wir führen die
              Hilfsprojekte nicht selbst durch, sondern unterstützen erfahrene Trägerschaften vor Ort – finanziell und
              materiell, geprüft, zweckgebunden und mit jährlicher Rechenschaft.
            </p>
            <p>
              Hauptpartner ist das Kloster „Mutter der Barmherzigkeit“ in Shkodra, mit dem eine über viele Jahre
              gewachsene Zusammenarbeit besteht. Die Schwestern kennen die Verhältnisse vor Ort und sorgen dafür, dass
              Hilfe dort ankommt, wo sie am dringendsten gebraucht wird.
            </p>
          </div>
          <div className="mt-[1.6rem] flex flex-wrap gap-2.5" aria-label="Grundsätze">
            {principles.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-[0.9rem] py-[0.42rem] text-[0.9rem] font-medium text-plum-deep"
              >
                <span className="text-honey-deep">
                  <CheckIcon />
                </span>
                {p}
              </span>
            ))}
          </div>
          <p className="mt-[1.1rem] text-[0.95rem] text-muted">
            Hilfe unabhängig von Konfession, Herkunft, Geschlecht oder politischer Überzeugung.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
