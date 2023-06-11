## 15-usePreviousDifferent

[👉 usePreviousDifferent](../../../packages/lib/src/hooks/usePreviousDifferent.ts)  
[👉 Day15](../src/components/Day15.tsx)

```ts
function usePreviousDifferent<T>(currentValue: T): T | null {
  const previousRef = useRef<T | null>(null)
  const previousRef2 = useRef<T | null>(null)

  useEffect(() => {
    previousRef2.current = previousRef.current
    previousRef.current = currentValue
  }, [currentValue])

  return currentValue === previousRef.current ? previousRef2.current : previousRef.current
}
```

1. `useRef`를 사용, 두 개의 참조 변수를 생성
2. `currentValue`가 변경 되면 `previousRef`에는 현재 값을 `previousRef2`에는 `previousRef`에 저장되어 있는 값을 할당
3. `currentValue === previousRef.current` 이면 이전값, 아니면 현재값을 return
