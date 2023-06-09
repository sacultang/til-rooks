import { useQueueState } from '@til/lib'
import { useRef } from 'react'

const Day14 = () => {
  const numberToPushRef = useRef(3)
  const [list, { enqueue, dequeue, length, peek }] = useQueueState([1, 2, 3])
  function addToStack() {
    numberToPushRef.current = numberToPushRef.current + 1
    enqueue(numberToPushRef.current)
  }
  return (
    <div>
      <h1>useQueueState</h1>
      <hr />
      <div>
        {list.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>
        <p>아이템 길이: {length}</p>
        <p>큐의 첫번째 요소: {peek()}</p>
      </div>
      <button onClick={addToStack}>enqueue</button>
      <button onClick={dequeue}>dequeue</button>
    </div>
  )
}

export default Day14
