import { useCallback, useState, useRef, useEffect } from 'react'
import { noop } from '../utils/noop'

type HTMLElementOrNull = HTMLElement | null
type CallbackRef<T extends HTMLElement | null = HTMLElementOrNull> = (node: T) => void

const config: ResizeObserverOptions = {
  box: 'content-box',
}
/**
 *
 * useResizeObserverRef hook
 *
 * React Ref에 대한 크기 조정 관찰자를 반환하고 콜백을 실행합니다.
 * https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 *
 * @param {ResizeObserverCallback} callback 크기 조정 시 실행되어야 하는 함수
 * @param {ResizeObserverOptions} options 관찰에 대한 옵션을 설정할 수 있는 옵션 객체
 * @returns {[CallbackRef]} callbackref
 * @see https://rooks.vercel.app/docs/useResizeObserverRef
 */
function useResizeObserverRef(
  callback: ResizeObserverCallback | undefined,
  options: ResizeObserverOptions = config
): [CallbackRef] {
  const { box } = options
  const [node, setNode] = useState<HTMLElementOrNull>(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  })

  const handleResizeObserver = useCallback<ResizeObserverCallback>((...args) => {
    callbackRef.current?.(...args)
  }, [])

  useEffect(() => {
    if (node) {
      // 콜백 함수에 연결된 관찰자 만들기
      const observer = new ResizeObserver(handleResizeObserver)

      // 크기 조정을 위해 대상 노드 관찰 시작
      observer.observe(node, { box })

      return () => {
        observer.disconnect()
      }
    }
    return noop()
  }, [node, handleResizeObserver, box])

  const ref: CallbackRef = useCallback((node: HTMLElementOrNull) => {
    setNode(node)
  }, [])

  return [ref]
}

export { useResizeObserverRef }
