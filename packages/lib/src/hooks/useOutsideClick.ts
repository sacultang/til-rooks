import type { MutableRefObject } from 'react'
import { useEffect, useRef, useCallback } from 'react'
import { noop } from '../utils/noop'
/**
 * useOutsideClick hook
 * Ref 요소 외부에 클릭이 발생했는지 체크
 *
 * @param ref Ref whose outside click needs to be listened to
 * @param handler Callback to fire on outside click
 * @param when A boolean which which activates the hook only when it is true. Useful for conditionally enable the outside click
 * @see https://rooks.vercel.app/docs/useOutsideClick
 *
 */
function useOutsideClick(
  ref: MutableRefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void,
  when = true
): void {
  const savedHandler = useRef(handler)

  const memoizedCallback = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        savedHandler.current(event)
      }
    },
    [ref]
  )

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (when) {
      document.addEventListener('click', memoizedCallback, true)
      document.addEventListener('ontouchstart', memoizedCallback, true)

      return () => {
        document.removeEventListener('click', memoizedCallback, true)
        document.removeEventListener('ontouchstart', memoizedCallback, true)
      }
    }

    return noop
  }, [ref, handler, when, memoizedCallback])
}

export { useOutsideClick }
