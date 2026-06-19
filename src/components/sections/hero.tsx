import { ButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Reveal } from '@/components/elements/reveal'

export function Hero() {
  return (
    <section className="bg-[linear-gradient(180deg,#fff_0%,var(--color-haze)_60%)]">
      <Container className="grid items-center gap-8 py-14 sm:py-20 lg:gap-12 lg:py-24 md:grid-cols-[1fr_1fr]">
        <div>
          <Eyebrow>Gemeinnütziger Verein · Schweiz</Eyebrow>
          <h1 className="text-[clamp(2.3rem,5.2vw,3.7rem)] tracking-[-0.02em]">
            Hilfe, die in&nbsp;Nordalbanien <em className="italic text-plum">ankommt</em>.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[1.15rem] text-muted">
            Wir sammeln in der Schweiz Spenden und bringen sie – zweckgebunden und überprüft – zu den Menschen in
            Nordalbanien. Unser wichtigster Partner vor Ort sind die Schwestern des Klosters „Mutter der Barmherzigkeit“
            in Shkodra.
          </p>
          <div className="mt-[1.9rem] flex flex-wrap gap-3">
            <ButtonLink variant="donate" href="#spenden">
              Jetzt spenden
            </ButtonLink>
            <ButtonLink variant="ghost" href="#hilfe">
              Unsere Hilfe ansehen
            </ButtonLink>
          </div>
          <p className="mt-[1.7rem] flex items-center gap-2 text-[0.83rem] text-muted">
            <span className="h-2 w-2 rounded-full bg-honey shadow-[0_0_0_4px_var(--color-wash-honey)]" aria-hidden="true" />
            Verein in Gründung · Gründungsversammlung am 18. Juni 2026
          </p>
        </div>

        <Reveal
          as="figure"
          className="order-first m-0 mx-auto hidden w-full max-w-[520px] rounded-[22px] border border-line bg-white p-[8px] shadow-[0_24px_60px_-40px_rgba(55,34,59,0.45)] md:order-none md:block"
        >
          <svg
            viewBox="47 50 307 352"
            role="img"
            aria-label="Der Förderverein als Brücke zwischen der Schweiz und Shkodra in Nordalbanien"
          >
            <path
              className="route-draw"
              pathLength={1}
              d="M86 96 C 122 226, 320 288, 300 348"
              stroke="#D49A4E"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeDasharray="7 8"
              fill="none"
              opacity="0.9"
            />
            <circle cx="86" cy="96" r="9" fill="#fff" stroke="#5C3C5E" strokeWidth="2.4" />
            <circle cx="86" cy="96" r="3.4" fill="#5C3C5E" />
            <text x="110" y="91" fontFamily="Source Sans 3, sans-serif" fontSize="15" fontWeight="600" fill="#37223B">
              Schweiz
            </text>
            <text x="110" y="109" fontFamily="Source Sans 3, sans-serif" fontSize="12" fill="#6E6173">
              Spenden &amp; Sachhilfe gesammelt
            </text>
            <circle className="route-ripple" cx="300" cy="348" r="16" fill="#D49A4E" opacity="0.45" />
            <circle cx="300" cy="348" r="11" fill="#fff" stroke="#D49A4E" strokeWidth="2.6" />
            <circle cx="300" cy="348" r="4" fill="#D49A4E" />
            <text
              x="266"
              y="343"
              textAnchor="end"
              fontFamily="Source Sans 3, sans-serif"
              fontSize="15"
              fontWeight="600"
              fill="#37223B"
            >
              Shkodra
            </text>
            <text x="266" y="361" textAnchor="end" fontFamily="Source Sans 3, sans-serif" fontSize="12" fill="#6E6173">
              Nordalbanien · Hilfe kommt an
            </text>
            <rect className="route-parcel" x="-5" y="-5" width="10" height="10" rx="2" fill="#5C3C5E" />
          </svg>
          <figcaption className="px-4 pt-0 pb-3 text-center text-[0.85rem] text-muted">
            Wir sind die <b className="font-semibold text-plum">Brücke</b> dazwischen.
          </figcaption>
        </Reveal>
      </Container>
    </section>
  )
}
