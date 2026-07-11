import Image from 'next/image'

import { Container } from '@/components/elements/container'
import { Eyebrow } from '@/components/elements/eyebrow'
import { Reveal } from '@/components/elements/reveal'
import { withBasePath } from '@/lib/with-base-path'

type Member = {
  name: string
  role: string
  place: string
  photo?: string
  objectPosition?: string
}

const members: Member[] = [
  {
    name: 'Werner Schurter',
    role: 'Präsident',
    place: 'Winterthur ZH',
    photo: '/vorstand/werner-schurter.jpg',
  },
  {
    name: 'Hugo Berchtold',
    role: 'Vizepräsident',
    place: 'Steinhausen ZG',
    photo: '/vorstand/hugo-berchtold.jpg',
  },
  {
    name: 'André Diethelm',
    role: 'Kassier',
    place: 'Ibach SZ',
    photo: '/vorstand/andre-diethelm.jpg',
  },
  {
    name: 'Theres Schuler-Steiner',
    role: 'Aktuarin',
    place: 'Seewen SZ',
    photo: '/vorstand/theres-schuler-steiner.jpg',
  },
  {
    name: 'Angaben folgen',
    role: 'Beisitz',
    place: 'Wird nachgereicht',
    photo: '/vorstand/mitglied-herger.jpg',
  },
]

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Board() {
  return (
    <section className="bg-haze py-16 sm:py-20 lg:py-[108px]" id="vorstand">
      <Container>
        <Reveal className="mb-8 max-w-[62ch] lg:mb-12">
          <Eyebrow>Vorstand</Eyebrow>
          <h2 className="mb-2.5 text-[clamp(1.7rem,3.6vw,2.4rem)]">Die Menschen hinter dem Verein</h2>
          <p className="max-w-[60ch] text-[1.18rem] text-muted">
            Der Vorstand arbeitet ehrenamtlich und trägt gemeinsam die Verantwortung für einen zweckkonformen Einsatz
            Ihrer Spende.
          </p>
        </Reveal>

        <ul className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {members.map((member) => (
            <Reveal
              as="li"
              key={member.name}
              className="overflow-hidden rounded-xl border border-line bg-white"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-stone">
                {member.photo ? (
                  <Image
                    src={withBasePath(member.photo)}
                    alt={`Porträt von ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 768px) 24vw, (min-width: 640px) 32vw, 48vw"
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition ?? 'center 25%' }}
                  />
                ) : (
                  <span
                    className="flex h-full w-full items-center justify-center font-serif text-[2.2rem] font-semibold text-plum-soft"
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </span>
                )}
              </div>
              <div className="p-3.5">
                <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-plum uppercase">{member.role}</p>
                <h3 className="mt-0.5 text-[0.98rem] leading-tight">{member.name}</h3>
                <p className="mt-0.5 text-[0.82rem] text-muted">{member.place}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
