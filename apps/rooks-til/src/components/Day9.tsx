import { useResizeObserverRef } from '@til/lib'
import { useState } from 'react'

const Day9 = () => {
  const [resizeCount, setResizeCount] = useState(0)
  const incrementResizeCount = () => {
    return setResizeCount(prev => prev + 1)
  }
  const [myRef] = useResizeObserverRef(incrementResizeCount)
  const [XOffset, setXOffset] = useState(0)
  const [YOffset, setYOffset] = useState(300)
  return (
    <div>
      <h1>Day9 - useResizeObserverRef</h1>
      <hr />
      <div
        style={{
          width: 300,
          background: 'royalblue',
          padding: '10px',
          position: 'absolute',
          left: XOffset,
          top: YOffset,
        }}
      >
        <div
          style={{ resize: 'both', overflow: 'auto', background: 'white', color: 'blue', maxWidth: '100%' }}
          ref={myRef}
        >
          <p>Resize this div as you see fit. To demonstrate that it also updates on child dom nodes resize</p>
        </div>
        <h2>Bounds</h2>
        <p>
          <button onClick={() => setXOffset(prev => prev - 5)}>Move Left</button>
          <button onClick={() => setXOffset(prev => prev + 5)}>Move Right</button>
        </p>
        <p>
          <button onClick={() => setYOffset(prev => prev - 5)}>Move Up</button>
          <button onClick={() => setYOffset(prev => prev + 5)}>Move Down</button>
        </p>
      </div>
      <div style={{ height: 500 }}>
        <pre data-testid="message">Resize count: {resizeCount}</pre>
      </div>
    </div>
  )
}

export default Day9
