import { useCallback } from 'react'
import type { Project } from '../../interfaces/project'
import { useLightboxKeys } from '../../hooks/useLightboxKeys'
import { hueStyle } from '../../utils/hue'
import { pad2 } from '../../utils/format'
import Shot from '../ui/Shot'

interface Props {
  project: Project
  index: number
  onChange: (index: number) => void
  onClose: () => void
}

export default function Lightbox({ project, index, onChange, onClose }: Props) {
  const n = project.screenshots.length
  const prev = useCallback(() => onChange((index - 1 + n) % n), [index, n, onChange])
  const next = useCallback(() => onChange((index + 1) % n), [index, n, onChange])
  useLightboxKeys({ onClose, onPrev: prev, onNext: next })

  const shot = project.screenshots[index]
  const isWeb = project.layout === 'web'

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.label} onClick={onClose}>
      <div className="lightbox__top">
        <span className="text-2">
          {project.name} · {pad2(index + 1)} / {n}
        </span>
        <button
          type="button"
          className="btn-x btn-x--outline btn-x--md lightbox__close"
          onClick={onClose}
        >
          Cerrar · Esc
        </button>
      </div>
      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox__nav" aria-label="Anterior" onClick={prev}>
          ←
        </button>
        <div
          className={`lightbox__frame lightbox__frame--${isWeb ? 'web' : 'phone'} hue`}
          style={hueStyle(project.hue)}
        >
          <Shot shot={shot} index={index} caption={`captura ${pad2(index + 1)} · tamaño completo`} className="shot--fill" />
        </div>
        <button type="button" className="lightbox__nav" aria-label="Siguiente" onClick={next}>
          →
        </button>
      </div>
      <span className="lightbox__label">{shot.label}</span>
    </div>
  )
}
