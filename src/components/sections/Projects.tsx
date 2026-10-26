import { useState } from 'react'
import type { Project, ProjectCategory } from '../../interfaces/project'
import ProjectBlock from './ProjectBlock'

type Filter = 'Todos' | ProjectCategory
const FILTERS: Filter[] = ['Todos', 'Mobile', 'Web']

export default function Projects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('Todos')
  const [changed, setChanged] = useState(false)
  const count = (f: Filter) =>
    f === 'Todos' ? projects.length : projects.filter((p) => p.category === f).length

  return (
    <section id="proyectos" className="container-x section">
      <div className="projects__head">
        <div className="section-heading">
          <h2 className="display-2">Proyectos</h2>
        </div>
        <div className="filters" role="group" aria-label="Filtrar por plataforma">
          {FILTERS.filter((f) => f !== 'Web' || count(f) > 0).map((f) => (
            <button
              key={f}
              type="button"
              className={`filter${f === filter ? ' filter--active' : ''}`}
              aria-pressed={f === filter}
              onClick={() => {
                setFilter(f)
                setChanged(true)
              }}
            >
              {f}
              <span className="filter__count">{count(f)}</span>
            </button>
          ))}
        </div>
      </div>

      <div key={filter} className={changed ? 'projects__list projects__list--enter' : undefined}>
        {projects.map((p) =>
          filter === 'Todos' || p.category === filter ? <ProjectBlock key={p.id} project={p} /> : null,
        )}
      </div>
    </section>
  )
}
