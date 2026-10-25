import type { ReactNode } from 'react'

interface Props {
  url?: string
  children: ReactNode
  size?: 'sm' | 'lg'
}

export default function BrowserFrame({ url, children, size = 'sm' }: Props) {
  return (
    <div className={`browser browser--${size}`}>
      <div className="browser__bar">
        <span className="browser__dot" />
        <span className="browser__dot" />
        <span className="browser__dot" />
        {url && <span className="browser__url">{url}</span>}
      </div>
      {children}
    </div>
  )
}
