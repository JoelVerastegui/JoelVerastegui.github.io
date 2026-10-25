import type { CSSProperties } from 'react'

/** Expone el tono del proyecto como variable CSS; la clase `.hue` deriva los colores. */
export const hueStyle = (hue: number): CSSProperties =>
  ({ '--hue': hue }) as CSSProperties
