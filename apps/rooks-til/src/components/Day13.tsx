import { useLocalstorageState } from '@til/lib'

const Day13 = () => {
  const [count, setCount] = useLocalstorageState('myCount', 0)
  return (
    <div>
      <h1>Rooks : useLocalstorageState</h1>
      <p> Refresh the page to see the previous value in tact</p>
      <button onClick={() => setCount(0)}>clear</button>
      <button onClick={() => setCount(count + 1)}>Click me {count}</button>
    </div>
  )
}

export default Day13
