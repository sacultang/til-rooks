import { useMapState } from '@til/lib'
import { useState } from 'react'
const Day5 = () => {
  const [map, { set, setMultiple, has, remove, removeMultiple, removeAll }] = useMapState({ a: 1, b: 2 })
  const [setInputKey, setSetInputKey] = useState('')
  const [setInputValue, setSetInputValue] = useState('')
  const [removeInputKey, setRemoveInputKey] = useState('')

  return (
    <div>
      <h1>useMapState</h1>
      <div className="input">
        <input type="text" value={setInputKey} onChange={e => setSetInputKey(e.target.value)} placeholder="key" />
        <input value={setInputValue} onChange={e => setSetInputValue(e.target.value)} placeholder="value" />
        <button onClick={() => set(setInputKey, setInputValue)}>set</button>
      </div>
      <div className="input">
        <input value={removeInputKey} onChange={e => setRemoveInputKey(e.target.value)} placeholder="key" />
        <button onClick={() => remove(removeInputKey)}>remove</button>
      </div>
      {Object.entries(map).map(item => {
        return <div key={item[0]}>{item.join(': ')}</div>
      })}
    </div>
  )
}

export default Day5
