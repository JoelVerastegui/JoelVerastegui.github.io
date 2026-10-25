import type { Screenshot } from '../../interfaces/project'
import { resolveProjectImage } from '../../utils/projectImages'

interface Props {
  shot: Screenshot
  index: number
  /** Etiqueta del placeholder cuando aún no hay imagen. */
  caption?: string
  className?: string
}

/** Captura de pantalla: imagen real si existe; si no, placeholder rayado teñido por el proyecto. */
export default function Shot({ shot, index, caption, className = '' }: Props) {
  const src = resolveProjectImage(shot.image)
  if (src) {
    return <img className={`shot shot--img ${className}`} src={src} alt={shot.label} />
  }
  return (
    <div className={`shot shot--placeholder ${className}`} role="img" aria-label={shot.label}>
      <span className="mono-label">{caption ?? `captura ${String(index + 1).padStart(2, '0')}`}</span>
      <span className="mono-sub">{shot.label}</span>
    </div>
  )
}
