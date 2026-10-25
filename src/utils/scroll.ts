export type SectionId = 'inicio' | 'proyectos' | 'perfil' | 'habilidades' | 'contacto'

export function scrollToSection(id: SectionId) {
  if (id === 'inicio') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
