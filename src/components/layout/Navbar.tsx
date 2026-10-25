import { useState } from 'react'
import { HOME_HREF } from '../../hooks/useHashRoute'
import { initials } from '../../utils/format'
import type { SectionId } from '../../utils/scroll'

interface Props {
  name: string
  activeProjects: boolean
  onNavigate: (id: SectionId) => void
}

const LINKS: { id: SectionId; label: string }[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'perfil', label: 'Perfil' },
  { id: 'habilidades', label: 'Habilidades' },
]

export default function Navbar({ name, activeProjects, onNavigate }: Props) {
  const [open, setOpen] = useState(false)

  const go = (id: SectionId) => {
    setOpen(false)
    onNavigate(id)
  }
  const cls = (id: SectionId) =>
    `nav__link${activeProjects && id === 'proyectos' ? ' nav__link--active' : ''}`

  return (
    <nav className="nav">
      <div className="container-x nav__bar">
        <a
          className="nav__brand"
          href={HOME_HREF}
          onClick={(e) => {
            e.preventDefault()
            go('inicio')
          }}
        >
          <span className="nav__logo">{initials(name)}</span>
          <span>{name}</span>
        </a>

        <div className="nav__links">
          {LINKS.map((l) => (
            <button key={l.id} type="button" className={cls(l.id)} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <button type="button" className="nav__cta" onClick={() => go('contacto')}>
            Contacto
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {open && (
        <div className="container-x nav__menu">
          {[...LINKS, { id: 'contacto' as SectionId, label: 'Contacto' }].map((l) => (
            <button key={l.id} type="button" className={cls(l.id)} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
