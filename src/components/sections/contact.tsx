import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { ObfuscatedEmailButtonLink, ObfuscatedEmailTextLink } from '@/components/elements/obfuscated-contact'
import { Reveal } from '@/components/elements/reveal'

export function Contact() {
  return (
    <section className="bg-stone py-16 sm:py-20 lg:py-[108px]" id="kontakt">
      <Container className="grid items-start gap-7 lg:gap-[46px] md:grid-cols-2">
        <Reveal>
          <Eyebrow>Kontakt</Eyebrow>
          <h2 className="mb-3 text-[clamp(1.6rem,3.4vw,2.2rem)]">Schreiben Sie uns</h2>
          <address className="text-muted not-italic leading-loose">
            <b className="font-semibold text-ink">Förderverein Kloster Nordalbanien</b> (in Gründung)
            <br />
            Hochwachtstrasse 8<br />
            6312 Steinhausen
            <br />
            Schweiz
          </address>
          <p className="mt-[1.1rem] text-[0.95rem] text-muted">
            Sitz: Kanton Zug · Gründungsversammlung am 18. Juni 2026.
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-line bg-white p-[26px]">
          <p className="mb-[0.2rem] text-[0.74rem] font-semibold tracking-[0.16em] text-plum-soft uppercase">E-Mail</p>
          <ObfuscatedEmailTextLink className="font-serif text-[1.18rem] text-plum no-underline" />
          <p className="mt-[0.2rem] mb-[1.3rem] text-[0.95rem] text-muted">
            Wir freuen uns über Ihre Nachricht – zu Spenden, Mitgliedschaft oder Mithilfe.
          </p>
          <ObfuscatedEmailButtonLink label="E-Mail schreiben" variant="donate" />
        </Reveal>
      </Container>
    </section>
  )
}
