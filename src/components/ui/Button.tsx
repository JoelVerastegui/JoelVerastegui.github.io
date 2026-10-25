import type { MouseEventHandler, ReactNode } from 'react'

interface Props {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'link'
  size?: 'md' | 'lg'
  href?: string
  external?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  className?: string
}

export default function Button({
  children,
  variant = 'outline',
  size = 'md',
  href,
  external,
  onClick,
  className = '',
}: Props) {
  const cls = `btn-x btn-x--${variant} btn-x--${size} ${className}`.trim()

  if (href) {
    return (
      <a
        className={cls}
        href={href}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
