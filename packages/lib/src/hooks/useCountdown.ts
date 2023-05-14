import { useState } from 'react'
import { useIntervalWhen } from './useIntervalWhen'

type CountdownOptions = {
  interval?: number
  onDown?: (restTime: number, newTime: Date) => void
  onEnd?: (newTime: Date) => void
}

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
