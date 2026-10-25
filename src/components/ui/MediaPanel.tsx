import type { Project } from '../../interfaces/project'
import { hueStyle } from '../../utils/hue'
import { pad2 } from '../../utils/format'
import BrowserFrame from './BrowserFrame'
import PhoneFrame from './PhoneFrame'
import Shot from './Shot'

interface Props {
  project: Project
  /** `list`: panel del listado. `hero`: panel grande de la cabecera del detalle. */
  variant: 'list' | 'hero'
}

/** Panel teñido con las capturas destacadas: marco de navegador (web) o teléfonos (mobile). */
export default function MediaPanel({ project, variant }: Props) {
  const isWeb = project.layout === 'web'
  const shots = project.previewIndexes.map((i) => ({ i, shot: project.screenshots[i] }))

  if (isWeb) {
    const first = shots[0] ?? { i: 0, shot: project.screenshots[0] }
    return (
      <div className={`panel panel--${variant} hue`} style={hueStyle(project.hue)}>
        <div className="panel__browser">
          <BrowserFrame url={project.url} size={variant === 'hero' ? 'lg' : 'sm'}>
            <Shot shot={first.shot} index={first.i} className="shot--web" />
          </BrowserFrame>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`panel panel--${variant} panel--phones phones phones--${
        project.layout === 'wide' ? 'wide' : 'std'
      } hue`}
      style={hueStyle(project.hue)}
    >
      {shots.map(({ i, shot }) => (
        <PhoneFrame key={i} className="phones__item">
          <Shot shot={shot} index={i} caption={`captura ${pad2(i + 1)}`} className="shot--phone" />
        </PhoneFrame>
      ))}
    </div>
  )
}
