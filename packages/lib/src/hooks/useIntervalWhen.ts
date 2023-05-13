import { useRef, useEffect } from 'react'
import { noop } from '@/utils/noop'

/**
 * 조건이 true일때 setInterval을 호출하는 hooks
 * @see {@link{https://github.com/imbhargav5/rooks/blob/main/packages/rooks/src/hooks/useIntervalWhen.ts}}
 * @see {@link{https://rooks.vercel.app/docs/useIntervalWhen}}
 */

function useIntervalWhen(callback: () => void, intervalDurationMs = 0, when = true, startImmediate = false): void {
  const savedRefCallback = useRef<() => void>()

  useEffect(() => {
    savedRefCallback.current = callback
  })

  useEffect(() => {
    if (when) {
      const intervalCallback = () => {
        savedRefCallback.current?.()
      }
      if (startImmediate) {
        intervalCallback()
      }

      const interval = window.setInterval(intervalCallback, intervalDurationMs)

      return () => {
        window.clearInterval(interval)
      }
    }
    return noop
  }, [when, intervalDurationMs, startImmediate])
}

export { useIntervalWhen }
