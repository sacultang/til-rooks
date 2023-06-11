import { useRef, useEffect } from 'react'

/**
 *
 * @param currentValue
 * @returns 이전 값과 현재 값이 다를 때에만 이전 값을 반환
 * @see https://rooks.vercel.app/docs/usePreviousDifferent
 */
function usePreviousDifferent<T>(currentValue: T): T | null {
  const previousRef = useRef<T | null>(null)
  const previousRef2 = useRef<T | null>(null)

  useEffect(() => {
    previousRef2.current = previousRef.current
    previousRef.current = currentValue
  }, [currentValue])

  return currentValue === previousRef.current ? previousRef2.current : previousRef.current
}

export { usePreviousDifferent }
