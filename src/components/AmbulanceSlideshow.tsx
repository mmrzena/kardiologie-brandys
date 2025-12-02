'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    src: '/images/ambulance/KARDIO_AMBULANCE-02.jpg',
    title: 'Příjemné prostředí',
    description: 'Recepce a čekárna se zaměřením na klidné prostředí pro pacienty.',
  },
  {
    id: 2,
    src: '/images/ambulance/KARDIO_AMBULANCE-04.jpg',
    title: 'Moderní klinika',
    description: 'Ordinace vybavená špičkovou technikou pro vyšetření srdce.',
  },
  {
    id: 3,
    src: '/images/ambulance/KARDIO_AMBULANCE-06.jpg',
    title: 'Základní laboratorní vyšetření',
    description: 'Možnost provedení základních laboratorních testů přímo na místě.',
  },
  {
    id: 4,
    src: '/images/ambulance/KARDIO_AMBULANCE-07.jpg',
    title: 'Vysoce specializované echokardiografické vyšetření',
    description: 'Diagnostika s využitím nejnovějších echokardiografických metod.',
  },
  {
    id: 5,
    src: '/images/ambulance/KARDIO_AMBULANCE-09.jpg',
    title: 'Sledování a léčba',
    description: 'Kontinuální monitoring pacientů a individuální léčebné plány.',
  },
  {
    id: 6,
    src: '/images/ambulance/KARDIO_AMBULANCE-11.jpg',
    title: 'Zátěžové EKG',
    description: 'Laboratoř pro zátěžové EKG vyšetření s bezpečnostním dohledem.',
  },
  {
    id: 7,
    src: '/images/ambulance/KARDIO_AMBULANCE-14.jpg',
    title: 'Klinické vyšetření',
    description: 'Kompletní klinické vyšetření v soukromí a s dostatkem času.',
  },
  {
    id: 8,
    src: '/images/ambulance/KARDIO_AMBULANCE-17.jpg',
    title: 'Specializované služby',
    description: 'Zázemí pro vysoce specializované zákroky a konzultace.',
  },
]

export default function AmbulanceSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = (index: number) => {
    const normalizedIndex = (index + slides.length) % slides.length
    setActiveIndex(normalizedIndex)
  }

  const currentSlide = slides[activeIndex]

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-[32px] border border-brand-gray bg-white/90 shadow-2xl">
        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
          <Image
            key={currentSlide.id}
            src={currentSlide.src}
            alt={currentSlide.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-teal/80">Naše ordinace</p>
            <h3 className="mt-2 text-2xl font-semibold">{currentSlide.title}</h3>
            <p className="mt-1 text-sm text-white/90">{currentSlide.description}</p>
          </div>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between p-4">
            <button
              type="button"
              aria-label="Předchozí fotografie"
              onClick={() => goTo(activeIndex - 1)}
              className="rounded-full bg-black/40 p-4 text-white backdrop-blur transition hover:bg-black/60"
            >
              {'<'}
            </button>
            <button
              type="button"
              aria-label="Další fotografie"
              onClick={() => goTo(activeIndex + 1)}
              className="rounded-full bg-black/40 p-4 text-white backdrop-blur transition hover:bg-black/60"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(index)}
            className={`h-2 flex-1 rounded-full transition sm:flex-none sm:w-8 ${
              index === activeIndex ? 'bg-brand-red' : 'bg-brand-gray'
            }`}
            aria-label={`Zobrazit fotografii: ${slide.title}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  )
}
