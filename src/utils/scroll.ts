export type SectionId = 'inicio' | 'proyectos' | 'perfil' | 'habilidades' | 'contacto'

export const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

export function scrollToSection(id: SectionId) {
  if (id === 'inicio') {
    window.scrollTo({ top: 0, behavior: scrollBehavior() })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() })
}
