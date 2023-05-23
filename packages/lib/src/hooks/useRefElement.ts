import { useCallback, useState } from 'react'
import type { RefElementOrNull } from '../utils/utils'

/**
 * useRefElement hook
 * @returns {[RefElementOrNull, (element: HTMLElementOrNull) => void]}
 * @see https://rooks.vercel.app/docs/useRefElement
 */
function useRefElement<T>(): [(refElement: RefElementOrNull<T>) => void, RefElementOrNull<T>] {
  const [refElement, setRefElement] = useState<RefElementOrNull<T>>(null)
  const ref = useCallback((refElement: RefElementOrNull<T>) => {
    setRefElement(refElement)
  }, [])

  return [ref, refElement]
}
export { useRefElement }
