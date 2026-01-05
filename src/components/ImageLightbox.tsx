'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { TouchEvent } from 'react'
import { createPortal } from 'react-dom'

type ImageLightboxProps = {
  isOpen: boolean
  slides: { src: string; title: string }[]
  initialIndex: number
  onClose: (index: number) => void
}

export default function ImageLightbox({
  isOpen,
  slides,
  initialIndex,
  onClose,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const swipeStartX = useRef<number | null>(null)
  const swipeStartY = useRef<number | null>(null)
  const swipeDeltaX = useRef(0)
  const swipeDeltaY = useRef(0)
  const imageRef = useRef<HTMLImageElement | null>(null)
  const ignoreClickRef = useRef(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isOpen) return
    setCurrentIndex(initialIndex)
  }, [isOpen, initialIndex])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(currentIndex)
      if (event.key === 'ArrowLeft')
        setCurrentIndex((index) => (index - 1 + slides.length) % slides.length)
      if (event.key === 'ArrowRight') setCurrentIndex((index) => (index + 1) % slides.length)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, currentIndex, slides.length])

  if (!isOpen || !mounted || slides.length === 0) return null

  const currentSlide = slides[currentIndex]
  const goTo = (index: number) => {
    const normalizedIndex = (index + slides.length) % slides.length
    setCurrentIndex(normalizedIndex)
  }

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
      goTo(currentIndex + (delta < 0 ? 1 : -1))
      window.setTimeout(() => {
        ignoreClickRef.current = false
      }, 200)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex min-h-[100dvh] items-center justify-center bg-slate-900/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Zvětšená fotografie"
      onClick={(event) => {
        if (ignoreClickRef.current) return
        onClose(currentIndex)
      }}
    >
      <button
        type="button"
        aria-label="Zavřít fotografii"
        onClick={(event) => {
          event.stopPropagation()
          onClose(currentIndex)
        }}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-navy shadow-lg transition hover:bg-white"
      >
        Zavřít
      </button>
      <div
        className="relative w-full max-w-5xl select-none touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        <div className="relative max-h-[85vh] w-full">
          <Image
            ref={imageRef}
            src={currentSlide.src}
            alt={currentSlide.title}
            width={1920}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto max-h-[85vh] w-full object-contain"
            priority
            onClick={(event) => {
              event.stopPropagation()
            }}
          />
        </div>
        <div className="absolute inset-y-0 left-4 z-10 flex items-center">
          <button
            type="button"
            aria-label="Předchozí fotografie"
            onClick={(event) => {
              event.stopPropagation()
              goTo(currentIndex - 1)
            }}
            className="rounded-full bg-white/30 p-4 text-white transition hover:bg-white/60"
          >
            {'<'}
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 z-10 flex items-center">
          <button
            type="button"
            aria-label="Další fotografie"
            onClick={(event) => {
              event.stopPropagation()
              goTo(currentIndex + 1)
            }}
            className="rounded-full bg-white/30 p-4 text-white transition hover:bg-white/60"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
