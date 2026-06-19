import { BrandMark } from '@/components/elements/brand-mark'
import { Container } from '@/components/elements/container'
import { withBasePath } from '@/lib/with-base-path'

const footerLinks = [
  { href: '/#ueber', label: 'Über uns' },
  { href: '/#hilfe', label: 'Unsere Hilfe' },
  { href: '/#transparenz', label: 'Transparenz' },
  { href: '/#spenden', label: 'Spenden' },
  { href: '/#kontakt', label: 'Kontakt' },
  { href: '/impressum/', label: 'Impressum' },
  { href: '/datenschutz/', label: 'Datenschutz' },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink py-12 text-[#d6cbd8]">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <a
            className="flex items-center gap-2.5 no-underline"
            href={withBasePath('/#top')}
            aria-label="Förderverein Kloster Nordalbanien"
          >
            <span className="shrink-0">
              <BrandMark ring="#9F8CA1" dot="#9F8CA1" />
            </span>
            <span>
              <b className="block font-serif text-[1.06rem] leading-none font-semibold tracking-[-0.01em] text-white">
                Kloster&nbsp;Nordalbanien
              </b>
              <small className="mt-0.5 block text-[0.62rem] font-semibold tracking-[0.18em] text-[#9f8ca1] uppercase">
                Förderverein · Schweiz
              </small>
            </span>
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Fusszeile">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={withBasePath(link.href)}
                className="text-[0.95rem] text-[#d6cbd8] no-underline opacity-85 hover:text-white hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-[30px] border-t border-white/10 pt-[22px] text-[0.85rem] leading-relaxed text-[#9f8ca1]">
          © {new Date().getFullYear()} Förderverein Kloster Nordalbanien · Verein in Gründung, Sitz Kanton Zug.
          <br />
          <span className="text-[#c9a05c]">Hinweis:</span> IBAN, E-Mail-Adresse und Angaben zum Vorstand bitte vor der
          Veröffentlichung prüfen.
        </div>
      </Container>
    </footer>
  )
}
