import { useIntervalWhen } from '@til/lib'
import { useState } from 'react'

const DayTwo = () => {
  const [value, setValue] = useState(0)
  const [when, setWhen] = useState(false)

  useIntervalWhen(
    () => {
      setValue(prev => prev + 1)
    },
    1000,
    when
  )

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setWhen(prev => !prev)}>Start Count</button>
    </div>
  )
}

export default DayTwo
