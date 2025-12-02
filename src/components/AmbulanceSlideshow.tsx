'use client'

import Image from 'next/image'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    src: '/images/ambulance/KARDIO_AMBULANCE-02.jpg',
    title: 'Příjemné prostředí',
  },
  {
    id: 2,
    src: '/images/ambulance/KARDIO_AMBULANCE-04.jpg',
    title: 'Moderní klinika',
  },
  {
    id: 3,
    src: '/images/ambulance/KARDIO_AMBULANCE-06.jpg',
    title: 'Základní laboratorní vyšetření',
  },
  {
    id: 4,
    src: '/images/ambulance/KARDIO_AMBULANCE-07.jpg',
    title: 'Vysoce specializované echokardiografické vyšetření',
  },
  {
    id: 5,
    src: '/images/ambulance/KARDIO_AMBULANCE-09.jpg',
    title: 'Sledování a léčba',
  },
  {
    id: 6,
    src: '/images/ambulance/KARDIO_AMBULANCE-11.jpg',
    title: 'Zátěžové EKG',
  },
  {
    id: 7,
    src: '/images/ambulance/KARDIO_AMBULANCE-14.jpg',
    title: 'Klinické vyšetření',
  },
  {
    id: 8,
    src: '/images/ambulance/KARDIO_AMBULANCE-17.jpg',
    title: 'Specializované služby',
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
