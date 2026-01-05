'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import type { TouchEvent } from 'react'
import ImageLightbox from '@/components/ImageLightbox'

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const swipeStartX = useRef<number | null>(null)
  const swipeStartY = useRef<number | null>(null)
  const swipeDeltaX = useRef(0)
  const swipeDeltaY = useRef(0)
  const ignoreClickRef = useRef(false)

  const goTo = (index: number) => {
    const normalizedIndex = (index + slides.length) % slides.length
    setActiveIndex(normalizedIndex)
  }

  const currentSlide = slides[activeIndex]

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    swipeStartX.current = event.touches[0]?.clientX ?? null
    swipeStartY.current = event.touches[0]?.clientY ?? null
    swipeDeltaX.current = 0
    swipeDeltaY.current = 0
  }

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return
    swipeDeltaX.current = (event.touches[0]?.clientX ?? 0) - swipeStartX.current
    swipeDeltaY.current = (event.touches[0]?.clientY ?? 0) - (swipeStartY.current ?? 0)
  }

  const handleTouchEnd = () => {
    if (swipeStartX.current === null) return
    const delta = swipeDeltaX.current
    const deltaY = swipeDeltaY.current
    swipeStartX.current = null
    swipeStartY.current = null
    swipeDeltaX.current = 0
    swipeDeltaY.current = 0

    if (Math.abs(delta) > 40 && Math.abs(delta) > Math.abs(deltaY) * 1.2) {
      ignoreClickRef.current = true
      goTo(activeIndex + (delta < 0 ? 1 : -1))
      window.setTimeout(() => {
        ignoreClickRef.current = false
      }, 200)
    }
  }

  const handleImageClick = () => {
    if (ignoreClickRef.current) return
    setIsLightboxOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-[32px] border border-brand-gray bg-white/90 shadow-2xl">
        <div
          className="relative aspect-[4/3] w-full cursor-zoom-in select-none touch-pan-y sm:aspect-[16/9]"
          role="button"
          tabIndex={0}
          onClick={handleImageClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault()
              handleImageClick()
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          aria-label="Zvětšit fotografii"
        >
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
              onClick={(event) => {
                event.stopPropagation()
                goTo(activeIndex - 1)
              }}
              className="rounded-full bg-black/40 p-4 text-white backdrop-blur transition hover:bg-black/60"
            >
              {'<'}
            </button>
            <button
              type="button"
              aria-label="Další fotografie"
              onClick={(event) => {
                event.stopPropagation()
                goTo(activeIndex + 1)
              }}
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
            onClick={(event) => {
              event.stopPropagation()
              goTo(index)
            }}
            className={`h-2 flex-1 rounded-full transition sm:flex-none sm:w-8 ${
              index === activeIndex ? 'bg-brand-red' : 'bg-brand-gray'
            }`}
            aria-label={`Zobrazit fotografii: ${slide.title}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
      <ImageLightbox
        isOpen={isLightboxOpen}
        slides={slides}
        initialIndex={activeIndex}
        onClose={(index) => {
          setActiveIndex(index)
          setIsLightboxOpen(false)
        }}
      />
    </div>
  )
}
