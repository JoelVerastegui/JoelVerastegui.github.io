export const pad2 = (n: number) => String(n).padStart(2, '0')

/** Antepone https:// a las direcciones sin protocolo para que el enlace no se resuelva como ruta relativa. */
export const externalUrl = (url: string) => (/^https?:\/\//i.test(url) ? url : `https://${url}`)

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
