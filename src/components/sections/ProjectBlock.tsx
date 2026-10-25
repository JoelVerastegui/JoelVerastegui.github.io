import type { Project } from '../../interfaces/project'
import { projectHref } from '../../hooks/useHashRoute'
import Button from '../ui/Button'
import MediaPanel from '../ui/MediaPanel'
import ProjectIcon from '../ui/ProjectIcon'
import TechChip from '../ui/TechChip'

interface Props {
  project: Project
  num: string
  total: string
}

export default function ProjectBlock({ project: p, num, total }: Props) {
  return (
    <article className={`project-block project-block--${p.layout}`}>
      <div className="project-block__text">
        <div className="project-block__main">
          <div className="project-block__meta">
            <span>
              {num} / {total}
            </span>
            <span className="pill">{p.category}</span>
            <span>{p.platform}</span>
          </div>
          <div className="project-block__title">
            <ProjectIcon name={p.name} hue={p.hue} size={60} radius={16} fontSize={26} />
            <div className="project-block__names">
              <h3 className="display-3">{p.name}</h3>
              <span className="text-2">{p.kind}</span>
            </div>
          </div>
          <p className="body-lg project-block__desc">{p.description}</p>
          <div className="project-block__actions">
            <Button variant="primary" href={projectHref(p.id)}>
              Ver caso de estudio →
            </Button>
            {p.videoUrl && (
              <Button href={p.videoUrl} external>
                ▶ Demo
              </Button>
            )}
            {p.githubUrl && (
              <Button href={p.githubUrl} external>
                GitHub ↗
              </Button>
            )}
          </div>
        </div>
        <div className="project-block__side">
          <div className="project-block__highlights">
            <span className="meta-label">Puntos clave</span>
            {p.highlights.map((h) => (
              <div key={h} className="highlight">
                <span className="highlight__rule" />
                <span>{h}</span>
              </div>
            ))}
          </div>
          <div className="chips">
            {p.stack.slice(0, 4).map((t) => (
              <TechChip key={t.name} tech={t} />
            ))}
          </div>
        </div>
      </div>
      <div className="project-block__media">
        <MediaPanel project={p} variant="list" />
      </div>
    </article>
  )
}
