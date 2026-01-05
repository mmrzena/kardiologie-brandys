'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
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

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex min-h-[100dvh] items-center justify-center bg-slate-900/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Zvětšená fotografie"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose(currentIndex)
      }}
    >
      <button
        type="button"
        aria-label="Zavřít fotografii"
        onClick={() => onClose(currentIndex)}
        className="absolute right-4 top-4 z-20 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-brand-navy shadow-lg transition hover:bg-white"
      >
        Zavřít
      </button>
      <div
        className="relative h-[85vh] w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-y-0 left-4 z-10 flex items-center">
          <button
            type="button"
            aria-label="Předchozí fotografie"
            onClick={() => setCurrentIndex((index) => (index - 1 + slides.length) % slides.length)}
            className="rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-brand-navy shadow-lg transition hover:bg-white"
          >
            {'<'}
          </button>
        </div>
        <div className="absolute inset-y-0 right-4 z-10 flex items-center">
          <button
            type="button"
            aria-label="Další fotografie"
            onClick={() => setCurrentIndex((index) => (index + 1) % slides.length)}
            className="rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-brand-navy shadow-lg transition hover:bg-white"
          >
            {'>'}
          </button>
        </div>
        <Image
          src={currentSlide.src}
          alt={currentSlide.title}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>
    </div>,
    document.body,
  )
}
