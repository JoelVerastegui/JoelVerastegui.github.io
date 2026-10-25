import { hueStyle } from '../../utils/hue'

interface Props {
  name: string
  hue: number
  size: number
  radius: number
  fontSize: number
}

export default function ProjectIcon({ name, hue, size, radius, fontSize }: Props) {
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
