import Link from 'next/link'
import ArrowUpRightIcon from '@/components/icons/ArrowUpRight'

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden px-6 pb-20 pt-24 sm:pt-28 lg:px-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-teal/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-brand-red/25 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-red shadow-sm">
            Stránka nenalezena
          </p>
          <h1 className="text-4xl font-semibold text-brand-navy sm:text-5xl">
            Omlouváme se, tato stránka neexistuje.
          </h1>
          <p className="text-lg text-brand-slate">
            Některé starší odkazy už neexistují nebo byly přesunuty.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark"
            >
              Zpět na úvod
              <ArrowUpRightIcon />
            </Link>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-brand-red/20 via-white to-brand-teal/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-brand-gray bg-white/95 p-8 shadow-2xl">
            <div className="mt-8 space-y-5">
              <div className="text-6xl font-semibold text-transparent sm:text-7xl">
                <span className="bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text">
                  404
                </span>
              </div>
              <p className="text-base text-brand-slate">Zkuste některý z odkazů níže.</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <Link
                href="/ordinace"
                className="rounded-2xl border border-brand-gray bg-brand-gray/50 px-5 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-teal/40 hover:bg-white"
              >
                Ordinace a vybavení
              </Link>
              <Link
                href="/tym"
                className="rounded-2xl border border-brand-gray bg-brand-gray/50 px-5 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-red/40 hover:bg-white"
              >
                Náš tým
              </Link>
              <Link
                href="/cenik"
                className="rounded-2xl border border-brand-gray bg-brand-gray/50 px-5 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-blue/40 hover:bg-white"
              >
                Ceník výkonů
              </Link>
              <Link
                href="/kontakt"
                className="rounded-2xl border border-brand-gray bg-brand-gray/50 px-5 py-4 text-sm font-semibold text-brand-navy transition hover:border-brand-teal/40 hover:bg-white"
              >
                Napište nám
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
