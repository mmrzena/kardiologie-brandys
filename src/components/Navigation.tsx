'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Domů' },
    { href: '/o-nas', label: 'O nás' },
    { href: '/sluzby', label: 'Služby' },
    { href: '/cenik', label: 'Ceník' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="group flex flex-col items-start text-xs font-semibold uppercase tracking-[0.25em] text-brand-navy transition hover:text-brand-red"
          >
            <span className="text-[0.65rem] text-brand-teal">Kardiologie</span>
            <span className="text-base tracking-[0.15em] leading-tight">Brandýs nad Labem</span>
            <span className="text-[0.6rem] font-semibold tracking-[0.08em] text-brand-slate normal-case leading-tight group-hover:text-brand-navy">
              Medicus Services s.r.o.
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {links.map((link) => {
              const baseHref = link.href.split('#')[0]
              const isActive = pathname === baseHref

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition whitespace-nowrap ${
                    isActive ? 'text-brand-navy' : 'text-brand-slate hover:text-brand-navy'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-1 h-0.5 bg-brand-red rounded-full" />
                  )}
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+420326396790"
              className="text-sm font-medium text-brand-slate hover:text-brand-navy transition whitespace-nowrap"
            >
              +420 326 396 790
            </a>
            <Link
              href="/kontakt?topic=vyšetření"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark"
            >
              Objednat
              <ArrowUpRightIcon />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 6h18M3 12h18M3 18h18"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col rounded-2xl border border-white/60 bg-white/90 p-4 shadow-lg shadow-slate-200/60">
              {links.map((link) => {
                const baseHref = link.href.split('#')[0]
                const isActive = pathname === baseHref

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition whitespace-nowrap ${
                      isActive
                        ? 'bg-brand-gray text-brand-navy'
                        : 'text-brand-slate hover:bg-brand-gray'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/kontakt?topic=vyšetření"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-red px-4 py-3 text-sm font-semibold text-white shadow-md shadow-brand-red/30 transition hover:bg-brand-red-dark"
              >
                Objednat
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
