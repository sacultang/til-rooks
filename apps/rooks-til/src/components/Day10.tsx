import { useRefElement } from '@til/lib'
import { useEffect, useState } from 'react'
function useEventListenerRef(eventName: string, callback: () => void) {
  const [ref, element] = useRefElement<HTMLElement>()

  useEffect(() => {
    if (!(element && element.addEventListener)) {
      return
    }
    element?.addEventListener(eventName, callback)
    return () => {
      element?.removeEventListener(eventName, callback)
    }
  }, [element, eventName, callback])

  return ref
}
const Day10 = () => {
  const [value, setValue] = useState(0)
  const ref = useEventListenerRef('click', () => {
    setValue(prev => prev + 1)
  })
  return (
    <div>
      <h1>useRefElement</h1>
      <hr />
      <div ref={ref} style={{ padding: '20px', border: '5px solid dodgerblue' }}>
        <h2>Click in the box</h2>
        <p>value is {value}</p>
      </div>
    </div>
  )
}

export default Day10
