import { useArrayState } from '@til/lib'
import { useState } from 'react'
const DayOne = () => {
  const [array, controls] = useArrayState(['1', '2'].map(n => Number(n)))
  const [newArr, setNewArr] = useState([1, 2, 3])
  const push = controls.push
  const pop = controls.pop
  console.log(array)
  const increaseNum = () => {
    // controls.push(parseInt('3', 10))
    setNewArr(prev => [...prev, 4])
  }
  return (
    <div>
      <p>Arr - {array.join('')}</p>
      <p>newArr - {newArr.join('')}</p>
      <button onClick={increaseNum}>click</button>
      <button onClick={() => push(4)}>click</button>
      <button onClick={() => pop()}>remove last</button>
    </div>
  )
}

export default DayOne
