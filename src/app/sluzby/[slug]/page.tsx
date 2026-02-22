import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { services } from '@/data/services'
import { BackLink } from '@/components/BackLink'

type TokenType = 'text' | 'email' | 'phone' | 'url' | 'link' | 'strong'
type Token = { type: TokenType; value: string; href?: string }
type TokenRule = {
  type: Exclude<TokenType, 'text'>
  regex: RegExp
  href?: (value: string) => string
}

const BASE_RULES: TokenRule[] = [
  { type: 'email', regex: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g },
  { type: 'phone', regex: /(\d{3}\s?\d{3}\s?\d{3})/g },
  { type: 'url', regex: /\b((?:https?:\/\/)?(?:www\.)[^\s]+)\b/g },
]

const SPORTOVCI_HIGHLIGHTS = [
  'EKG s popisem + dotazník',
  'Echokardiografie (ultrazvuk srdce) + EKG + dotazník',
  'Ergometrie (zátěžový test)',
  'Komplet (Echokardiografie + Ergometrie + EKG + dotazník)',
]

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const SPORTOVCI_TOKEN_RULES: TokenRule[] = [
  {
    type: 'link',
    regex: /není hrazeno zdravotní pojišťovnou/g,
    href: () => '/cenik',
  },
  ...SPORTOVCI_HIGHLIGHTS.map((phrase) => ({
    type: 'strong' as const,
    regex: new RegExp(escapeRegExp(phrase), 'g'),
  })),
  ...BASE_RULES,
]

const DEFAULT_TOKEN_RULES = BASE_RULES

function tokenizeText(text: string, rules: TokenRule[]): Token[] {
  const tokens: Token[] = []
  let cursor = 0

  while (cursor < text.length) {
    let nextMatch: { index: number; value: string; rule: TokenRule } | null = null

    for (const rule of rules) {
      rule.regex.lastIndex = cursor
      const match = rule.regex.exec(text)
      if (!match) continue

      const candidate = { index: match.index, value: match[0], rule }
      if (
        !nextMatch ||
        candidate.index < nextMatch.index ||
        (candidate.index === nextMatch.index && candidate.value.length > nextMatch.value.length)
      ) {
        nextMatch = candidate
      }
    }

    if (!nextMatch) {
      tokens.push({ type: 'text', value: text.slice(cursor) })
      break
    }

    if (nextMatch.index > cursor) {
      tokens.push({ type: 'text', value: text.slice(cursor, nextMatch.index) })
    }

    if (nextMatch.rule.type === 'link') {
      tokens.push({
        type: 'link',
        value: nextMatch.value,
        href: nextMatch.rule.href?.(nextMatch.value),
      })
    } else {
      tokens.push({ type: nextMatch.rule.type, value: nextMatch.value })
    }

    cursor = nextMatch.index + nextMatch.value.length
  }

  return tokens.length === 0 ? [{ type: 'text', value: text }] : tokens
}

function renderTokens(tokens: Token[], keyPrefix: string) {
  return tokens.map((token, index) => {
    const key = `${keyPrefix}-token-${index}`

    if (token.type === 'email') {
      return (
        <a
          key={key}
          href={`mailto:${token.value}`}
          className="font-semibold text-brand-red hover:underline"
        >
          {token.value}
        </a>
      )
    }

    if (token.type === 'phone') {
      return (
        <a
          key={key}
          href={`tel:+420${token.value.replace(/\s/g, '')}`}
          className="font-semibold text-brand-red hover:underline"
        >
          {token.value}
        </a>
      )
    }

    if (token.type === 'url') {
      const href = token.value.startsWith('http') ? token.value : `https://${token.value}`
      const openInNewTab = href.includes('srdcesportovce.cz')
      return (
        <a
          key={key}
          href={href}
          className="font-semibold text-brand-red hover:underline"
          {...(openInNewTab ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          {token.value}
        </a>
      )
    }

    if (token.type === 'link') {
      return (
        <a key={key} href={token.href} className="font-semibold text-brand-red hover:underline">
          {token.value}
        </a>
      )
    }

    if (token.type === 'strong') {
      return (
        <strong key={key} className="font-semibold">
          {token.value}
        </strong>
      )
    }

    return <span key={key}>{token.value}</span>
  })
}

type ServiceDetailProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) {
    return {
      title: 'Služba',
    }
  }
  return {
    title: `${service.title} | Kardiologie Brandýs`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)

  if (!service) {
    notFound()
  }

  const tokenRules =
    service.slug === 'vysetreni-sportovcu' ? SPORTOVCI_TOKEN_RULES : DEFAULT_TOKEN_RULES

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <BackLink href="/sluzby" className="mb-6">
            Zpět na všechny služby
          </BackLink>

          <p className="text-xs uppercase tracking-[0.4em] text-brand-teal">
            {service.categories.join(' • ')}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-navy">{service.title}</h1>
          <p className="mt-4 text-base text-brand-slate max-w-3xl">{service.description}</p>

          <div className="mt-10 space-y-10">
            {service.detail.map((section, index) => (
              <section
                key={`${service.slug}-${index}`}
                className="rounded-3xl border border-brand-gray bg-white p-6 shadow-lg shadow-brand-gray/60"
              >
                {section.title && (
                  <h2 className="text-2xl font-semibold text-brand-navy">{section.title}</h2>
                )}
                {section.paragraphs?.map((paragraph, paragraphIndex) => {
                  const tokens = tokenizeText(paragraph, tokenRules)
                  return (
                    <p
                      key={`${service.slug}-${index}-paragraph-${paragraphIndex}`}
                      className={`text-sm leading-relaxed text-brand-slate ${
                        paragraphIndex === 0 && !section.title
                          ? 'text-base text-brand-navy'
                          : 'mt-4'
                      }`}
                    >
                      {renderTokens(tokens, `${service.slug}-${index}-${paragraphIndex}`)}
                    </p>
                  )
                })}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-brand-slate">
                    {section.list.map((item, itemIndex) => (
                      <li key={`${service.slug}-${index}-item-${itemIndex}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {service.slug === 'vysetreni-sportovcu' && (
            <section className="mt-10 rounded-3xl border border-brand-gray bg-gradient-to-br from-brand-teal/5 via-white to-brand-blue/5 p-8 shadow-xl shadow-brand-gray/60">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-brand-teal">Dotazník</p>
                  <h2 className="mt-3 text-3xl font-semibold text-brand-navy">Srdce sportovce</h2>
                  <p className="mt-3 text-sm text-brand-slate">
                    Pro urychlení vyšetření si můžete stáhnout a předem vyplnit dotazník.
                  </p>
                </div>
                <a
                  href="/Dotaznik_Srdce-Sportovce.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition hover:bg-brand-red-dark"
                >
                  Stáhnout dotazník
                </a>
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  )
}
