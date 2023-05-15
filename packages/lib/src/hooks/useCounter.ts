import { useCallback, useState } from 'react'

type CounterHandler = {
  decrement: () => void
  decrementBy: (amount: number) => void
  increment: () => void
  incrementBy: (amount: number) => void
  reset: () => void
  value: number
}
/**
 * @typeof handler
 * @type {object}
 * @property {number} value 카운터 값
 * @property {Function}  increment 카운터 값을 1씩 증가
 * @property {Function} decrement 카운터 값을 1씩 감소
 * @property {Function} incrementBy incrAmount 만큼 카운터 증가
 * @property {Function} decrementBy decrAmount 만큼 카운터 감소
 * @property {Function} reset 카운터를 initialValue로 재설정
 *
 */

/**
 * Counter hook
 * @param {number} initialValue 카운터 초기 값
 * @returns {handler} 카운터 핸들러
 * @see https://rooks.vercel.app/docs/useCounter
 */
function useCounter(initialValue: number): CounterHandler {
  const [counter, setCounter] = useState(initialValue)

  const incrementBy = useCallback((incrAmount: number) => {
    setCounter(currentCounter => currentCounter + incrAmount)
  }, [])

  const decrementBy = useCallback(
    (decrAmount: number) => {
      incrementBy(-decrAmount)
    },
    [incrementBy]
  )

  const increment = useCallback(() => {
    incrementBy(1)
  }, [incrementBy])

  const decrement = useCallback(() => {
    incrementBy(-1)
  }, [incrementBy])

  const reset = useCallback(() => {
    setCounter(initialValue)
  }, [initialValue])

  return { decrement, decrementBy, increment, incrementBy, reset, value: counter }
}
export { useCounter }
