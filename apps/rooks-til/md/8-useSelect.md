## 8.useSelect

[👉 useSelect](../../../packages/lib/src/hooks/useSelect.ts)  
[👉 Day8](../src/components/Day8.tsx)

list 선택 값을 쉽게 불러오는 hooks

```ts
type SelectHandler<T> = {
  index: number
  item: T
  setIndex: (newIndex: number) => void // list 인덱스로 select
  setItem: (newItem: T) => void // list item 으로 select
}
```

```ts
const Day8 = () => {
  const { index, setIndex, item, setItem } = useSelect(list, 0)

  return (
    <div>
      <h1>useSelect</h1>
      <hr />
      {list.map((listItem, listIndex) => (
        <button
          key={listItem.heading}
          onClick={() => setItem(listItem)}
          style={{ backgroundColor: listIndex === index ? 'antiquewhite' : '#fff' }}
        >
          {listItem.heading}
        </button>
      ))}

      <p>{item.content}</p>
    </div>
  )
}
```

`setIndex`로 선택할 경우는 `list`에서 index를 넘겨주면 되고, `setItem`으로 선택할 경우는 `list`에서 item을 넘겨주면 된다.
