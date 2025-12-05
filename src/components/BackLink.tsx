import Link from 'next/link'
import type { ReactNode } from 'react'

type BackLinkProps = {
  href: string
  children: ReactNode
  className?: string
}

export function BackLink({ href, children, className = '' }: BackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-sm font-semibold text-brand-navy transition hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red ${className}`.trim()}
    >
      <svg
        className="mr-2 h-4 w-4"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13L5 8l5-5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </Link>
  )
}
