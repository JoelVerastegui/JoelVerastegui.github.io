import Icon from '../ui/Icon'
import type { Profile } from '../../interfaces/profile'

export default function About({ profile }: { profile: Profile }) {
  return (
    <section id="perfil" className="container-x section">
      <div className="split split--top-rule">
        <div className="section-heading">
          <h2 className="display-2">Sobre mí</h2>
        </div>
        <div className="about__body">
          <p className="lead lead--loose">{profile.summary}</p>
          <p className="body-lg">{profile.workStyle}</p>
          <div className="about__links">
            <a className="text-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
              Perfil en LinkedIn <Icon name="arrow-up-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
