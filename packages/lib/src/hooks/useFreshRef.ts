import { MutableRefObject } from 'react'
import { useEffect, useRef } from 'react'
import { useIsomorphicEffect } from './useIsomorphicEffect'

/**
 *
 * @param value
 * @param preferLayoutEffect
 * @returns
 */
function useFreshRef<T>(value: T, preferLayoutEffect = false): MutableRefObject<T> {
  const useEffectToUse = preferLayoutEffect ? useIsomorphicEffect : useEffect
  const ref = useRef(value)
  useEffectToUse(() => {
    ref.current = value
  })

  return ref
}

export { useFreshRef }
