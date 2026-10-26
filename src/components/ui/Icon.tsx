export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'arrow-up-right'
  | 'play'
  | 'check'

const PATHS: Record<IconName, string> = {
  'arrow-left': 'M19 12H5m6-6-6 6 6 6',
  'arrow-right': 'M5 12h14m-6-6 6 6-6 6',
  'arrow-up': 'M12 19V5m-6 6 6-6 6 6',
  'arrow-down': 'M12 5v14m-6-6 6 6 6-6',
  'arrow-up-right': 'M7 17 17 7M8 7h9v9',
  play: 'M8 5.5v13l10-6.5z',
  check: 'm5 12.5 4.5 4.5L19 7.5',
}

/** Íconos de trazo único (1.75px, extremos redondeados) que heredan el color y el tamaño del texto. */
export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className={`icon icon--${name}`}
      viewBox="0 0 24 24"
      fill={name === 'play' ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={name === 'play' ? 0 : 1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={PATHS[name]} pathLength={1} />
    </svg>
  )
}
