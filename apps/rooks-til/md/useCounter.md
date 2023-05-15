## 4.uesCounter

[👉 useCounter](../../../packages/lib/src/hooks/useCounter.ts)  
[👉 Day4](../src/components/Day4.tsx)

state를 증감하는 hooks

```ts
const incrementBy = useCallback((incrAmount: number) => {
  setCounter(currentCounter => currentCounter + incrAmount)
}, [])

const decrementBy = useCallback(
  (decrAmount: number) => {
    incrementBy(-decrAmount)
  },
  [incrementBy]
)
```

counter를 감소 시킬때 `incrementBy()`로 -값을 전달하여 감소 시킨다.
