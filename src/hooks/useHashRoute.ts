import { useEffect, useState } from 'react'

export type Route = { view: 'home' } | { view: 'project'; id: string }

const parse = (hash: string): Route => {
  const m = hash.match(/^#\/proyecto\/([\w-]+)/)
  return m ? { view: 'project', id: m[1] } : { view: 'home' }
}

/** Ruteo mínimo por hash: `#/` (inicio) y `#/proyecto/:id` (caso de estudio). */
export function useHashRoute(): Route {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  return parse(hash)
}

export const projectHref = (id: string) => `#/proyecto/${id}`
export const HOME_HREF = '#/'
