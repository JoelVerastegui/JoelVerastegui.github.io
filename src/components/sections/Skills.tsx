import type { SkillGroup } from '../../interfaces/profile'
import TechChip from '../ui/TechChip'

export default function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <section id="habilidades" className="container-x section">
      <div className="section-heading section-heading--pad">
        <h2 className="display-2">Habilidades</h2>
      </div>
      <div className="skills">
        {groups.map((g) => (
          <div key={g.title} className="card skills__group">
            <span className="skills__title">{g.title}</span>
            <div className="chips">
              {g.items.map((t) => (
                <TechChip key={t.name} tech={t} variant="raised" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
