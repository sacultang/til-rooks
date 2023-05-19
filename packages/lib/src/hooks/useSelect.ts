import { useCallback, useState } from 'react'

type SelectHandler<T> = {
  index: number
  item: T
  setIndex: (newIndex: number) => void
  setItem: (newItem: T) => void
}

/**
 *
 * @param list
 * @param initialIndex
 * @returns handler
 * @see https://rooks.vercel.app/docs/useSelect
 */
function useSelect<T>(list: T[], initialIndex = 0): SelectHandler<T> {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex)

  const setItem = useCallback(
    (item: T) => {
      setSelectedIndex(list.indexOf(item))
    },
    [list]
  )

  return {
    index: selectedIndex,
    item: list[selectedIndex],
    setIndex: setSelectedIndex,
    setItem,
  }
}

export { useSelect }
