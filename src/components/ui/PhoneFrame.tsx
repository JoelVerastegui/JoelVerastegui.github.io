import type { CSSProperties, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export default function PhoneFrame({ children, className = '', style }: Props) {
  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone__screen">{children}</div>
    </div>
  )
}
