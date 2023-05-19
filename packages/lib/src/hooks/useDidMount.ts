import { useEffect } from 'react'
import type { CallbackWithNoArguments } from '@/types/types'

/**
 *
 * @description 컴포넌트가 처음 mount 되었을때 callback을 실행, 컴포넌트가 처음 마운트될 때만 실행되므로, 불필요한 코드 실행을 막을 수 있다.
 * @param callback
 * @see https://rooks.vercel.app/docs/useDidMount
 */

function useDidMount(callback: CallbackWithNoArguments): void {
  useEffect(() => {
    if (typeof callback === 'function') {
      callback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export { useDidMount }
