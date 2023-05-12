import { useArrayState } from '../hooks/state/useArrayState'

const DayOne = () => {
  const [array, controls] = useArrayState(['1', '2'].map(n => Number(n)))
  const push = controls.push
  const pop = controls.pop
  console.log(array)
  const increaseNum = () => {
    controls.push(parseInt('3', 10))
  }
  return (
    <div>
      <p>Arr - {array.join('')}</p>
      <button onClick={increaseNum}>click</button>
      <button onClick={() => push(4)}>click</button>
      <button onClick={() => pop()}>remove last</button>
    </div>
  )
}

export default DayOne
