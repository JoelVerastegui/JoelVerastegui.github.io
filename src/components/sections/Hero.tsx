import Icon from '../ui/Icon'
import type { Profile } from '../../interfaces/profile'
import type { Project } from '../../interfaces/project'
import { projectHref } from '../../hooks/useHashRoute'
import { hueStyle } from '../../utils/hue'
import Button from '../ui/Button'
import ProjectIcon from '../ui/ProjectIcon'
import face from '../../assets/face.png'

interface Props {
  profile: Profile
  projects: Project[]
  onNavigate: (id: 'proyectos' | 'contacto') => void
}

export default function Hero({ profile, projects, onNavigate }: Props) {
  return (
    <section id="inicio" className="container-x hero">
      <div className="hero__grid">
        <div className="hero__text">
          <div className="hero__role">
            <span className="dot" />
            {profile.role}
          </div>
          <h1 className="display-1">{profile.name}</h1>
          <p className="lead hero__headline">{profile.headline}</p>
          <p className="body-lg hero__intro">{profile.intro}</p>
          <div className="hero__actions">
            <Button variant="primary" size="lg" onClick={() => onNavigate('proyectos')}>
              Ver proyectos <Icon name="arrow-down" />
            </Button>
            <Button size="lg" href={profile.linkedinUrl} external>
              LinkedIn <Icon name="arrow-up-right" />
            </Button>
            <Button size="lg" href={profile.githubUrl} external>
              GitHub <Icon name="arrow-up-right" />
            </Button>
            <Button variant="link" size="lg" onClick={() => onNavigate('contacto')}>
              Contacto <Icon name="arrow-right" />
            </Button>
          </div>
        </div>
        <div className="hero__photo">
          <img src={face} alt={`Fotografía de ${profile.name}`} />
        </div>
      </div>

      <div className="hero__index">
        {projects.map((p) => (
          <a key={p.id} className="hero__index-item hue" style={hueStyle(p.hue)} href={projectHref(p.id)}>
            <ProjectIcon name={p.name} hue={p.hue} icon={p.icon} size={32} radius={9} fontSize={14} />
            <span className="hero__index-text">
              <span className="hero__index-name">{p.name}</span>
              <span className="hero__index-meta">
                {p.category} · {p.kind}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
