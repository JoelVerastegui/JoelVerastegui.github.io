import Icon from '../ui/Icon'
import { useState } from 'react'
import type { Profile } from '../../interfaces/profile'
import Button from '../ui/Button'
import Footer from '../layout/Footer'

export default function Contact({ profile }: { profile: Profile }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section id="contacto" className="container-x section">
      <div className="contact">
        <h2 className="display-2 contact__title">
          Abierto a conversar sobre nuevas oportunidades profesionales.
        </h2>
        <div className="contact__email-row">
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <Button className={copied ? 'btn-x--done' : ''} onClick={copy}>
            {copied ? <>Copiado <Icon name="check" /></> : 'Copiar correo'}
          </Button>
        </div>
        <div className="contact__links">
          <Button size="lg" href={profile.linkedinUrl} external>
            LinkedIn <Icon name="arrow-up-right" />
          </Button>
          <Button size="lg" href={profile.githubUrl} external>
            GitHub <Icon name="arrow-up-right" />
          </Button>
        </div>
      </div>
      <Footer name={profile.name} />
    </section>
  )
}
