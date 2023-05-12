import { useCallback, useMemo, useState } from 'react'

type Push<T> = (...args: Parameters<T[]['push']>) => void
type Pop = () => void

export type UseArrayStateControls<T> = {
  push: Push<T>
  pop: Pop
}

export type UseArrayStateReturnValue<T> = [T[], UseArrayStateControls<T>]

/**
 * @see {@link https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useArrayState.ts}
 * @see {@link https://rooks.vercel.app/docs/useArrayState}
 */

function useArrayState<T>(initial: T[] | (() => T[])): UseArrayStateReturnValue<T> {
  /**
   * ?? -> 널 병합 연산자
   * 왼쪽 피연산자가 'null' 또는 'undefined'일 때 오른쪽 피연산자를 반환, 그렇지 않으면 왼쪽 피연산자를 반환
   * initial이 없으면 []
   *  @see {@link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing}
   */
  const [array, setArray] = useState(initial ?? [])

  const push = useCallback<Push<T>>(
    value => {
      setArray([...array, value])
    },
    [array]
  )

  const pop = useCallback<Pop>(() => {
    setArray(array.slice(0, array.length - 1))
  }, [array])

  const controls = useMemo<UseArrayStateControls<T>>(() => {
    return {
      push,
      pop,
    }
  }, [push, pop])

  const returnValue = useMemo<UseArrayStateReturnValue<T>>(() => {
    return [array, controls]
  }, [array, controls])

  return returnValue
}
export { useArrayState }
