import { ChangeEvent } from 'react'
import { useState, useEffect, useCallback } from 'react'
type InputChangeEvent = ChangeEvent<HTMLInputElement>
type InputHandler<T> = {
  /**
   * Function to handle onChange of an input element
   *
   * @param event The input change event
   */
  onChange: (event: InputChangeEvent) => void

  /**
   * The current value of the input
   */
  value: T
}

type Options<T> = {
  /**
   * validate
   *
   * 유효성 검사 함수
   *
   * @param {any} New value
   * @param {any} Current value
   * @returns {boolean} Whether an update should happen or not
   */
  validate?: (newValue: T, currentValue: T) => boolean
}

const defaultOptions = {}

function useInput<T extends number | string | readonly [] | undefined = string>(
  initialValue: T = '' as T,
  options: Options<T> = defaultOptions
): InputHandler<T> {
  const [value, setValue] = useState<T>(initialValue)

  const onChange = useCallback(
    (event: InputChangeEvent) => {
      const newValue = event.target.value as T
      let shouldUpdate = true

      if (typeof options.validate === 'function') {
        shouldUpdate = options.validate(newValue, value)
      }
      if (shouldUpdate) {
        setValue(newValue)
      }
    },
    [options, value]
  )

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const handler: InputHandler<T> = {
    onChange,
    value,
  }
  return handler
}
export { useInput }
