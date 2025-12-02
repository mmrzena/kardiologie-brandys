import Image from 'next/image'
import { insurers } from '@/lib/insurers'

type Props = {
  variant?: 'light' | 'dark'
  className?: string
  compact?: boolean
  showDescription?: boolean
  showLink?: boolean
}

const baseContainer = 'grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'

export default function InsuranceLogos({
  variant = 'light',
  className,
  compact,
  showDescription,
  showLink,
}: Props) {
  const containerClasses = className
    ? `${baseContainer} ${className}`
    : baseContainer

  const cardClasses =
    variant === 'dark'
      ? 'border-white/20 bg-white/5 text-white'
      : 'border-brand-gray bg-white text-brand-navy'

  const subTextClass =
    variant === 'dark' ? 'text-white/70' : 'text-[#43484d]'

  return (
    <div className={containerClasses}>
      {insurers.map((insurer) => {
        const tooltipText = `${insurer.description ?? insurer.name} (${insurer.name} ${insurer.code})`
        const content = (
          <>
            <div className="flex items-center gap-3">
              <Image
                src={insurer.logo}
                alt={`${insurer.name} logo`}
                width={compact ? 72 : 90}
                height={compact ? 24 : 30}
                className="h-auto max-h-10 w-auto object-contain"
              />
              {!compact ? (
                <div className="text-sm">
                  <p className="font-semibold">
                    {insurer.name}{' '}
                    <span className="font-normal text-sm">
                      ({insurer.code})
                    </span>
                  </p>
                  {showDescription && (
                    <p className={subTextClass}>{insurer.description}</p>
                  )}
                </div>
              ) : (
                <span className="sr-only">
                  {insurer.description ?? insurer.name} ({insurer.code})
                </span>
              )}
            </div>
            {!compact && showLink && insurer.link && (
              <span
                className={`text-xs font-semibold ${
                  variant === 'dark' ? 'text-white/80' : 'text-brand-slate'
                }`}
              >
                Program{' '}
                <span className="text-brand-red">
                  více
                </span>
              </span>
            )}
          </>
        )

        const CardTag = insurer.link ? 'a' : 'div'
        const cardProps = insurer.link
          ? {
              href: insurer.link,
              target: '_blank',
              rel: 'noopener noreferrer',
              'aria-label': `${insurer.name} prevenční program`,
            }
          : {}

        return (
          <CardTag
            key={insurer.name}
            className={`group relative flex flex-col gap-3 rounded-2xl border px-4 py-4 shadow-sm ${cardClasses} ${
              compact ? 'sm:flex-row sm:items-center sm:text-left' : ''
            } ${
              insurer.link
                ? 'transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red'
                : ''
            }`}
            {...cardProps}
          >
            <span className="pointer-events-none absolute -top-3 left-1/2 hidden w-max -translate-x-1/2 -translate-y-full rounded-xl bg-brand-navy px-3 py-2 text-[11px] font-medium text-white opacity-0 shadow-lg group-hover:block group-hover:opacity-100 group-focus-visible:block group-focus-visible:opacity-100">
              {tooltipText}
            </span>
            {content}
          </CardTag>
        )
      })}
    </div>
  )
}
