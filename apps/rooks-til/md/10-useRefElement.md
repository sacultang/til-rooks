## 10.useRefElement

[👉 useRefElement](../../../packages/lib/src/hooks/useRefElement.ts)  
[👉 Day10](../src/components/Day10.tsx)

2개의 값을 가진 배열을 return

```ts
[(refElement: RefElementOrNull<T>) => void, RefElementOrNull<T>]
```

1. 첫 번째 값은 `ref`콜백 함수, 이 함수를 이용해 `refElement`를 설정.

   - `refElement`는 HTMLElement 또는 null

2. 두 번째 값은 `refElement`로 현재 참조된 DOM요소
