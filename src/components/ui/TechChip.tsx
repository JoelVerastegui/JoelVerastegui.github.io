import type { Tech } from '../../interfaces/project'

interface Props {
  tech: Tech
  variant?: 'default' | 'raised'
}

export default function TechChip({ tech, variant = 'default' }: Props) {
  return (
    <span className={`tech-chip tech-chip--${variant}`}>
      <span className="tech-chip__mark">{tech.abbr}</span>
      {tech.name}
    </span>
  )
}
