import { hueStyle } from '../../utils/hue'
import { resolveProjectIcon } from '../../utils/projectImages'

interface Props {
  name: string
  hue: number
  /** Nombre de archivo en src/assets/icons/. Sin él se muestra la inicial del proyecto. */
  icon?: string
  size: number
  radius: number
  fontSize: number
}

/** Ícono de la app; si no hay imagen, un badge teñido con la inicial del nombre. */
export default function ProjectIcon({ name, hue, icon, size, radius, fontSize }: Props) {
  const src = resolveProjectIcon(icon)
  if (src) {
    return (
      <img
        className="project-icon project-icon--img"
        src={src}
        alt=""
        style={{ width: size, height: size, borderRadius: radius }}
        aria-hidden="true"
      />
    )
  }
  return (
    <span
      className="project-icon hue"
      style={{
        ...hueStyle(hue),
        width: size,
        height: size,
        borderRadius: radius,
        fontSize,
      }}
      aria-hidden="true"
    >
      {name[0]}
    </span>
  )
}
