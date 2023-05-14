import { useState } from 'react'
import { useIntervalWhen } from './useIntervalWhen'

type CountdownOptions = {
  interval?: number
  onDown?: (restTime: number, newTime: Date) => void
  onEnd?: (newTime: Date) => void
}
/**
 *
 * @param endTime : 종료시간, `Date` 객체
 * @param options : `interval`: 콜백 함수를 호출하는 주기, `onDown` : 매번 주기적으로 호출되는 콜백함수, 현재 종료시간까지 남은시간과 현재 시간 정보를 전달
 * `onEnd` : 종료 시간에 도달할 때 호출되는 콜백 함수, 종료 시간 정보를 전달
 * @returns
 */
function useCountdown(endTime: Date, options: CountdownOptions = {}): number {
  const { interval = 1_000, onDown, onEnd } = options
  const [time, setTime] = useState<Date>(() => new Date())
  const restTime = endTime.getTime() - time.getTime()
  const count = restTime > 0 ? Math.ceil(restTime / interval) : 0

  const onTick = () => {
    const newTime = new Date()
    if (newTime > endTime) {
      if (onEnd) {
        onEnd(newTime)
      }
      setTime(endTime)
      return
    }

    if (onDown) {
      onDown(restTime, newTime)
    }

    setTime(newTime)
  }
  useIntervalWhen(onTick, count ? interval : undefined, true, true)

  return count
}

export { useCountdown }
