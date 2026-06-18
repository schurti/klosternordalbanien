import { Container } from '@/components/elements/container'
import { ObfuscatedEmailTextLink } from '@/components/elements/obfuscated-contact'
import { SiteFooter } from '@/components/sections/site-footer'
import { SiteHeader } from '@/components/sections/site-header'

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="py-16 sm:py-24">
          <Container className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Impressum</h1>

            <div className="mt-8 space-y-8 text-base leading-7 text-muted">
              <div>
                <h2 className="text-xl font-semibold text-ink">Kontaktadresse</h2>
                <p className="mt-2">Förderverein Kloster Nordalbanien (in Gründung)</p>
                <p>Hochwachtstrasse 8</p>
                <p>CH-6312 Steinhausen</p>
                <p>
                  <ObfuscatedEmailTextLink />
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Verein</h2>
                <p className="mt-2">Förderverein Kloster Nordalbanien</p>
                <p>Gemeinnütziger Verein nach Art. 60 ff. ZGB, Sitz im Kanton Zug.</p>
                <p>Gründungsversammlung am 18. Juni 2026. Eintrag und UID werden nach der Gründung ergänzt.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Vertretungsberechtigte Personen</h2>
                <p className="mt-2">Der Vorstand des Vereins. Angaben werden nach der Gründungsversammlung ergänzt.</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Website</h2>
                <p className="mt-2">Diese Website wird ohne kommerzielle Interessen zur Verfügung gestellt.</p>
                <p>Design und Umsetzung: in Vorbereitung</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Haftungsausschluss</h2>
                <p className="mt-2">
                  Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
                  Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche wegen Schäden
                  materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                  veröffentlichten Informationen oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Haftung für Links</h2>
                <p className="mt-2">
                  Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Der Zugriff
                  und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr der Nutzerinnen und Nutzer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink">Urheberrechte</h2>
                <p className="mt-2">
                  Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                  Website gehören ausschliesslich dem Förderverein Kloster Nordalbanien oder den speziell genannten
                  Rechteinhabern. Für jede Reproduktion ist die schriftliche Zustimmung im Voraus einzuholen.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
