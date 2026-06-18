import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'
import { Help } from '@/components/sections/help'
import { Hero } from '@/components/sections/hero'
import { NeedBand } from '@/components/sections/need-band'
import { SiteFooter } from '@/components/sections/site-footer'
import { SiteHeader } from '@/components/sections/site-header'
import { Support } from '@/components/sections/support'
import { Transparency } from '@/components/sections/transparency'

export default function Home() {
  return (
    <>
      <a
        href="#hilfe"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-200 focus:rounded-br-lg focus:bg-plum focus:px-4 focus:py-2.5 focus:text-white"
      >
        Zum Inhalt springen
      </a>

      <SiteHeader />

      <main id="top">
        <Hero />
        <About />
        <Help />
        <NeedBand />
        <Transparency />
        <Support />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
