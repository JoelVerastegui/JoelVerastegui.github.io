interface Props {
  eyebrow: string
  title: string
}

export default function SectionHeading({ eyebrow, title }: Props) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-2">{title}</h2>
    </div>
  )
}
