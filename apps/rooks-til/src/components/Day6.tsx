import { useMultiSelectableList } from '@til/lib'
import { useEffect, useState } from 'react'
const Day6 = () => {
  const [total, setTotal] = useState(0)
  const [selection, { matchSelection, toggleSelection, updateSelections }] = useMultiSelectableList(toppings, [0, 1])

  useEffect(() => {
    if (Array.isArray(selection[1])) {
      const totalPrice = selection[1].reduce((acc: number, cur: ToppingsType): number => acc + cur.price, 0)
      setTotal(totalPrice)
    }
  }, [selection])
  return (
    <div>
      <h1>useMultiSelectableList</h1>
      <hr />
      <ul>
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  id={`check-box-${index}`}
                  name={name}
                  checked={matchSelection({ index })}
                  onChange={() => toggleSelection({ index })()}
                />
                <label htmlFor={`check-box-${index}`}>{name}</label>
              </div>
              <div>{price}</div>
            </li>
          )
        })}
        <li>
          <div>total : {total}</div>
        </li>
      </ul>
    </div>
  )
}

export default Day6
type ToppingsType = { name: string; price: number }
const toppings: ToppingsType[] = [
  {
    name: 'Capsicum',
    price: 1.2,
  },
  {
    name: 'Paneer',
    price: 2.0,
  },
  {
    name: 'Red Paprika',
    price: 2.5,
  },
  {
    name: 'Onions',
    price: 3.0,
  },
  {
    name: 'Extra Cheese',
    price: 3.5,
  },
]
