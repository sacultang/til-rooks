import { useIsomorphicEffect } from '@til/lib'
import { useState } from 'react'

const Component = () => {
  useIsomorphicEffect(() => {
    console.log('Rendered')
  }, [])
  return null
}

const Day11 = () => {
  const [shouldRender, enableRender] = useState(true)
  return (
    <div>
      <h1>useIsomorphicEffect </h1>
      <hr />
      <div>
        <br />
        <button onClick={() => enableRender(!shouldRender)}>Click</button>
        {shouldRender && <Component />}
      </div>
    </div>
  )
}

export default Day11
