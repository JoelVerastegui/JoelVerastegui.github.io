import { useEffect } from 'react'

interface Handlers {
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

/** Teclado del visor: Esc cierra, ← → navegan. */
export function useLightboxKeys({ onClose, onPrev, onNext }: Handlers) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])
}
