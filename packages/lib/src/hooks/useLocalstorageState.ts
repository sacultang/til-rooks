import { Dispatch, SetStateAction } from 'react'
import { useMemo, useState, useEffect, useCallback, useRef } from 'react'
import { useFreshRef } from './useFreshRef'

// Gets Value from localstorage
function getValueFromLocalStorage(key: string) {
  if (typeof localStorage === 'undefined') {
    return null
  }

  const storedValue = localStorage.getItem(key) ?? 'null'

  try {
    return JSON.parse(storedValue)
  } catch (error) {
    console.error(error)
  }
  return storedValue
}

// Saves value to localstorage
function saveValueToLocalStorage<S>(key: string, value: S) {
  if (typeof localStorage === 'undefined') {
    return null
  }
  if (value === undefined) {
    return localStorage.removeItem(key)
  }

  return localStorage.setItem(key, JSON.stringify(value))
}

function initialize<S>(key: string, initialState: S | (() => S)) {
  const valueLoadedFromLocalStorage = getValueFromLocalStorage(key)
  if (valueLoadedFromLocalStorage === null) {
    return typeof initialState === 'function' ? (initialState as () => S)() : initialState
  } else {
    return valueLoadedFromLocalStorage
  }
}

type UseLocalstorageStateReturnValue<S> = [S, Dispatch<SetStateAction<S>>, () => void]
type BroadcastCustomEvent<S> = CustomEvent<{ newValue: S }>

function useLocalstorageState<S>(key: string, initialState?: S | (() => S)): UseLocalstorageStateReturnValue<S> {
  const [value, setValue] = useState(() => initialize(key, initialState))
  const isUpdateFromCrossDocumentListener = useRef(false)
  const isUpdateFromWithinDocumentListener = useRef(false)
  const customEventTypeName = useMemo(() => {
    return `rooks=${key}-localstorage-update`
  }, [key])

  useEffect(() => {
    if (!isUpdateFromCrossDocumentListener.current || !isUpdateFromWithinDocumentListener.current) {
      saveValueToLocalStorage<S>(key, value)
    }
  }, [key, value])

  // 다른 문서에서 발생한 로컬 스토리지 이벤트 수신
  const listenToCrossDocumnetStorageEvents = useCallback(
    (event: StorageEvent) => {
      if (event.storageArea === localStorage && event.key === key) {
        try {
          isUpdateFromCrossDocumentListener.current = true
          const newValue = JSON.parse(event.newValue ?? 'null')
          if (value !== newValue) {
            setValue(newValue)
          }
        } catch (error) {
          console.log(error)
        }
      }
    },
    [key, value]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', listenToCrossDocumnetStorageEvents)
      return () => {
        window.removeEventListener('storage', listenToCrossDocumnetStorageEvents)
      }
    } else {
      console.warn('useLocalStorageState: window is undefined.')
      return () => {}
    }
  }, [listenToCrossDocumnetStorageEvents])

  // 동일 문서 내에서 발생한 커스텀 이벤트 수신
  const listenToCustomEventWithinDocument = useCallback(
    (event: BroadcastCustomEvent<S>) => {
      try {
        isUpdateFromWithinDocumentListener.current = true
        const { newValue } = event.detail
        if (value !== newValue) {
          setValue(newValue)
        }
      } catch (error) {
        console.log(error)
      }
    },
    [value]
  )

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.addEventListener(customEventTypeName, listenToCustomEventWithinDocument)
      return () => {
        document.removeEventListener(customEventTypeName, listenToCustomEventWithinDocument)
      }
    } else {
      console.warn('[useLocalstorageState] document is undefined.')
      return () => {}
    }
  }, [customEventTypeName, listenToCustomEventWithinDocument])

  // 상태 값을 다른 컴포넌트에 브로드캐스트
  const broadcastValueWithinDocument = useCallback(
    (newValue: S) => {
      if (typeof document !== 'undefined') {
        const event: BroadcastCustomEvent<S> = new CustomEvent(customEventTypeName, { detail: { newValue } })
        document.dispatchEvent(event)
      } else {
        console.warn('[useLocalstorageState] document is undefined.')
      }
    },
    [customEventTypeName]
  )

  // 최신 상태 값을 참조할 수 있는 mutable ref 객체 생성
  const currentValue = useFreshRef(value, true)

  const set = useCallback(
    (newValue: SetStateAction<S>) => {
      const resolvedNewValue =
        typeof newValue === 'function' ? (newValue as (prevState: S) => S)(currentValue.current) : newValue

      isUpdateFromCrossDocumentListener.current = false
      isUpdateFromWithinDocumentListener.current = false
      setValue(resolvedNewValue)
      broadcastValueWithinDocument(resolvedNewValue)
    },
    [broadcastValueWithinDocument, currentValue]
  )

  const remove = useCallback(() => {
    localStorage.removeItem(key)
  }, [key])

  return [value, set, remove]
}

export { useLocalstorageState }
