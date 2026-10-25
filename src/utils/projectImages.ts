const images = import.meta.glob<string>('../assets/projects/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

/** Resuelve el nombre de archivo del JSON a la URL final del asset. */
export function resolveProjectImage(file?: string): string | undefined {
  if (!file) return undefined
  return images[`../assets/projects/${file}`]
}
