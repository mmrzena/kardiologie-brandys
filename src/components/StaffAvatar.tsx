type AvatarSize = 'md' | 'lg'

type StaffAvatarProps = {
  id: string
  name: string
  className?: string
  size?: AvatarSize
}

const SIZE_STYLES: Record<AvatarSize, { circle: string; text: string }> = {
  md: { circle: 'h-20 w-20', text: 'text-2xl' },
  lg: { circle: 'h-28 w-28', text: 'text-3xl' },
}

function getInitialsFromId(id: string, fallbackName: string) {
  const parts = id
    .split(/[-_]/)
    .filter(Boolean)
    .slice(0, 2)

  const initials = parts.map((part) => part[0]?.toUpperCase()).join('')

  if (initials) return initials

  const fallback = fallbackName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return fallback || '?'
}

export default function StaffAvatar({ id, name, className, size = 'md' }: StaffAvatarProps) {
  const styles = SIZE_STYLES[size]
  const containerClassName = [
    'relative flex w-full items-center justify-center overflow-hidden',
    'bg-gradient-to-br from-brand-blue/10 via-white to-brand-teal/10',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClassName} role="img" aria-label={`Profil ${name}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.08),transparent_65%)]" />
      <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-brand-blue/5 blur-2xl" />
      <div
        className={`relative z-10 flex ${styles.circle} items-center justify-center rounded-full border border-brand-blue/10 bg-white/60 shadow-sm backdrop-blur`}
      >
        <span className={`${styles.text} font-semibold text-brand-navy/80`}>
          {getInitialsFromId(id, name)}
        </span>
      </div>
    </div>
  )
}
