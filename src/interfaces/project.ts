export type ProjectCategory = 'Mobile' | 'Web'

/** Disposición del bloque en el listado: lado de las capturas y ancho del texto. */
export type ProjectLayout = 'right' | 'left' | 'wide' | 'web'

export interface Tech {
  name: string
  abbr: string
}

export interface StackItem extends Tech {
  group: string
  /** Tecnología principal: se destaca en la cabecera y en la sección Stack. */
  main?: boolean
}

export interface TechnicalPoint {
  label: string
  value: string
}

export interface Screenshot {
  label: string
  /** Nombre de archivo dentro de src/assets/projects/. Sin él se muestra un placeholder. */
  image?: string
}

export interface Project {
  id: string
  name: string
  kind: string
  category: ProjectCategory
  platform: string
  /** Tono OKLCH que tiñe el panel de capturas y el icono del proyecto. */
  hue: number
  /** Nombre de archivo dentro de src/assets/icons/. Sin él se muestra la inicial del proyecto. */
  icon?: string
  layout: ProjectLayout
  description: string
  highlights: string[]
  about: string[]
  features: string[]
  technical: TechnicalPoint[]
  stack: StackItem[]
  screenshots: Screenshot[]
  /** Índices de screenshots que se muestran en el listado y en la cabecera del detalle. */
  previewIndexes: number[]
  videoUrl?: string
  githubUrl?: string
  /** Dirección mostrada en el marco de navegador (proyectos web). */
  url?: string
}
