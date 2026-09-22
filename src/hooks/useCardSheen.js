import { useCallback } from 'react'

/**
 * Feeds the pointer position into --mx / --my so `.card::before` can render a
 * highlight that tracks the cursor across the card.
 */
export default function useCardSheen() {
  return useCallback((event) => {
    const el = event.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }, [])
}
