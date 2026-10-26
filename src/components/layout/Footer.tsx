import Icon from '../ui/Icon'
import { scrollToSection } from '../../utils/scroll'

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} {name}
      </span>
      <button type="button" className="footer__top" onClick={() => scrollToSection('inicio')}>
        Volver arriba <Icon name="arrow-up" />
      </button>
    </footer>
  )
}
