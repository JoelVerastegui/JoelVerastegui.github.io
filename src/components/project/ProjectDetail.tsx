import { useState } from 'react'
import type { Project } from '../../interfaces/project'
import { HOME_HREF, projectHref } from '../../hooks/useHashRoute'
import { pad2 } from '../../utils/format'
import Button from '../ui/Button'
import MediaPanel from '../ui/MediaPanel'
import ProjectIcon from '../ui/ProjectIcon'
import TechChip from '../ui/TechChip'
import Gallery from './Gallery'
import Lightbox from './Lightbox'

interface Props {
  project: Project
  prev: Project
  next: Project
  index: number
  total: number
  onBack: () => void
}

function Neighbor({ project, dir }: { project: Project; dir: 'prev' | 'next' }) {
  const icon = <ProjectIcon name={project.name} hue={project.hue} size={44} radius={12} fontSize={18} />
  return (
    <a className={`neighbor neighbor--${dir}`} href={projectHref(project.id)}>
      {dir === 'prev' && <span className="neighbor__arrow">←</span>}
      {dir === 'prev' && icon}
      <span className="neighbor__text">
        <span className="text-3">{dir === 'prev' ? 'Anterior' : 'Siguiente'}</span>
        <span className="neighbor__name">{project.name}</span>
      </span>
      {dir === 'next' && icon}
      {dir === 'next' && <span className="neighbor__arrow">→</span>}
    </a>
  )
}

export default function ProjectDetail({ project: p, prev, next, index, total, onBack }: Props) {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const main = p.stack.filter((s) => s.main)
  const groups = p.stack
    .filter((s) => !s.main)
    .reduce<{ group: string; items: typeof p.stack }[]>((acc, s) => {
      const g = acc.find((x) => x.group === s.group)
      if (g) g.items.push(s)
      else acc.push({ group: s.group, items: [s] })
      return acc
    }, [])

  return (
    <div className="container-x detail">
      <div className="detail__bar">
        <button type="button" className="back-link" onClick={onBack}>
          ← Todos los proyectos
        </button>
        <div className="detail__pager">
          <span className="text-3 detail__counter">
            {pad2(index + 1)} / {pad2(total)}
          </span>
          <a className="icon-btn" href={projectHref(prev.id)} aria-label="Proyecto anterior">
            ←
          </a>
          <a className="icon-btn" href={projectHref(next.id)} aria-label="Proyecto siguiente">
            →
          </a>
        </div>
      </div>

      <header className="detail__header">
        <div className="detail__intro">
          <div className="project-block__meta">
            <span className="pill">{p.category}</span>
            <span>{p.platform}</span>
          </div>
          <div className="detail__title">
            <ProjectIcon name={p.name} hue={p.hue} size={88} radius={22} fontSize={34} />
            <div className="project-block__names">
              <h1 className="display-1d">{p.name}</h1>
              <span className="text-2 detail__kind">{p.kind}</span>
            </div>
          </div>
          <p className="lead lead--loose detail__desc">{p.description}</p>
        </div>
        <div className="detail__actions">
          <div className="chips">
            {main.map((t) => (
              <TechChip key={t.name} tech={t} />
            ))}
          </div>
          <div className="detail__buttons">
            {p.videoUrl && (
              <Button variant="primary" size="lg" href={p.videoUrl} external>
                ▶ Ver video de demostración
              </Button>
            )}
            {p.githubUrl && (
              <Button size="lg" href={p.githubUrl} external>
                Repositorio en GitHub ↗
              </Button>
            )}
          </div>
        </div>
      </header>

      <MediaPanel project={p} variant="hero" />

      <section className="detail-section split">
        <h2 className="display-3 display-3--tight">El producto</h2>
        <div className="detail__about">
          {p.about.map((t) => (
            <p key={t} className="body-lg">
              {t}
            </p>
          ))}
        </div>
      </section>

      <section className="detail-section two-cols">
        <div className="card card--lg">
          <div className="card__head">
            <h3>Características</h3>
            <span className="text-3">Funcionalidades</span>
          </div>
          {p.features.map((t, i) => (
            <div key={t} className="row row--num">
              <span className="row__key row__key--accent">{pad2(i + 1)}</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
        <div className="card card--lg">
          <div className="card__head">
            <h3>Tecnologías</h3>
            <span className="text-3">Puntos técnicos</span>
          </div>
          {p.technical.map((t) => (
            <div key={t.label} className="row row--tech">
              <span className="row__key">{t.label}</span>
              <span>{t.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section split">
        <h2 className="display-3 display-3--tight">Stack</h2>
        <div>
          <div className="stack-main">
            {main.map((t) => (
              <div key={t.name} className="stack-main__item">
                <span className="stack-main__mark">{t.abbr}</span>
                <span className="stack-main__text">
                  <span className="stack-main__name">{t.name}</span>
                  <span className="text-3">Tecnología principal</span>
                </span>
              </div>
            ))}
          </div>
          {groups.map((g) => (
            <div key={g.group} className="row row--tech row--center">
              <span className="row__key">{g.group}</span>
              <div className="chips">
                {g.items.map((t) => (
                  <TechChip key={t.name} tech={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Gallery project={p} onOpen={setLightbox} />

      <section className="detail-section two-cols two-cols--tight">
        <Neighbor project={prev} dir="prev" />
        <Neighbor project={next} dir="next" />
      </section>
      <div className="detail__footer-link">
        <a className="back-link back-link--accent" href={HOME_HREF} onClick={(e) => { e.preventDefault(); onBack() }}>
          Volver a todos los proyectos
        </a>
      </div>

      {lightbox !== null && (
        <Lightbox project={p} index={lightbox} onChange={setLightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
