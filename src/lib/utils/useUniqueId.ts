import { useState } from 'react'

export function useUniqueId(prefix: string = 'component'): string {
  const [id] = useState(() => `${prefix}-${Math.random().toString(16).slice(2)}`)
  return id
}
