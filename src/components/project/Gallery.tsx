import { useRef } from 'react'
import type { Project } from '../../interfaces/project'
import { hueStyle } from '../../utils/hue'
import { pad2 } from '../../utils/format'
import Shot from '../ui/Shot'

interface Props {
  project: Project
  onOpen: (index: number) => void
}

export default function Gallery({ project, onOpen }: Props) {
  const strip = useRef<HTMLDivElement>(null)
  const isWeb = project.layout === 'web'
  const scroll = (dir: 1 | -1) => {
    const el = strip.current
    el?.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className="detail-section gallery">
      <div className="gallery__head">
        <div className="gallery__title">
          <h2 className="display-3 display-3--tight">Galería</h2>
          <span className="text-3">
            {project.screenshots.length} capturas en orden de uso · haz clic en una captura para
            ampliar
          </span>
        </div>
        <div className="gallery__arrows">
          <button type="button" className="icon-btn" aria-label="Desplazar a la izquierda" onClick={() => scroll(-1)}>
            ←
          </button>
          <button type="button" className="icon-btn" aria-label="Desplazar a la derecha" onClick={() => scroll(1)}>
            →
          </button>
        </div>
      </div>
      <div
        ref={strip}
        className={`gallery__strip gallery__strip--${isWeb ? 'web' : 'phone'} hue`}
        style={hueStyle(project.hue)}
      >
        {project.screenshots.map((shot, i) => (
          <button
            key={i}
            type="button"
            className="gallery__item"
            aria-label={`Ampliar captura: ${shot.label}`}
            onClick={() => onOpen(i)}
          >
            <Shot shot={shot} index={i} className={isWeb ? 'shot--web' : 'shot--phone'} />
            <span className="gallery__caption">
              <span className="text-3">{pad2(i + 1)}</span>
              <span>{shot.label}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
