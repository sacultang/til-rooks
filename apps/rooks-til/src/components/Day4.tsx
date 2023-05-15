import { useCounter } from '@til/lib'

const Day4 = () => {
  const { value, increment, incrementBy, decrement, decrementBy, reset } = useCounter(3)
  const increment5 = () => {
    incrementBy(5)
  }
  const decrement5 = () => {
    decrementBy(5)
  }
  return (
    <div>
      <h1>Day - 4</h1>
      <p>{value}</p>
      <hr />
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={increment5}>increment 5</button>
      <button onClick={decrement5}>decrement 5</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Day4
