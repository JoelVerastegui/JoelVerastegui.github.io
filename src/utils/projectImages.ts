const images = import.meta.glob<string>('../assets/projects/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const icons = import.meta.glob<string>('../assets/icons/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** Resuelve el nombre de archivo del JSON a la URL final del asset. */
export function resolveProjectImage(file?: string): string | undefined {
  if (!file) return undefined
  return images[`../assets/projects/${file}`]
}

/** Resuelve el nombre de archivo del ícono de un proyecto a la URL final del asset. */
export function resolveProjectIcon(file?: string): string | undefined {
  if (!file) return undefined
  return icons[`../assets/icons/${file}`]
}
