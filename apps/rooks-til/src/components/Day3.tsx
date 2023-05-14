import { useCountdown } from '@til/lib'
import { useState } from 'react'
const Day3 = () => {
  const [endTime, setEndTime] = useState(new Date())
  const [count, setCount] = useState(10)
  const countdown = useCountdown(endTime)
  const startCountdown = () => setEndTime(new Date(Date.now() + count * 1000))
  return (
    <div className="App">
      <h1>@rooks/use-countdown example</h1>
      <input type="number" value={count} onChange={event => setCount(Number(event.target.value))} />
      <button onClick={startCountdown}>
        {countdown > 0 && countdown <= count
          ? `${countdown} second${countdown === 1 ? '' : 's'} remaining...`
          : 'Start Countdown'}
      </button>
    </div>
  )
}

export default Day3
