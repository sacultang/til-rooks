import { usePreviousDifferent, useCounter } from '@til/lib'

const Day15 = () => {
  const { value: counter1Value, increment: incrementCounter1, decrement } = useCounter(0)
  const previousCounter1Value = usePreviousDifferent(counter1Value)
  const { value: counter2Value, increment: incrementCounter2 } = useCounter(0)
  const previousCounter2Value = usePreviousDifferent(counter2Value)
  return (
    <div>
      <h1>usePreviousDifferent</h1>
      <hr />
      <p>Counter: {String(counter1Value)}</p>
      <p>Previous Counter 1 value: {String(previousCounter1Value)}</p>
      <p>Counter: {String(counter2Value)}</p>
      <p>Previous Counter 1 value: {String(previousCounter2Value)}</p>
      <button onClick={incrementCounter1}>Increment counter 1</button>
      <button onClick={decrement}>decrement counter 1</button>
      <br />
      <button onClick={incrementCounter2}>Increment counter 2</button>
    </div>
  )
}

export default Day15
