## 7.useOutsideClick

[👉 useOutsideClick](../../../packages/lib/src/hooks/useOutsideClick.ts)  
[👉 Day7](../src/components/Day7.tsx)

- ref : 외부 클릭 영역을 판별하기 위해 사용
- handler : 외부 클릭이 감지될 때 실행할 콜백 함수
- when : true 일때만 외부 클릭 감지

```ts
/**
 * @doc `ref.current`가 존재하고, 클릭 된 요소가 `ref.current`에 포함되어 있지 않을 경우에 `savedHandler.current` 호출
 */
const memoizedCallback = useCallback(
  (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      savedHandler.current(event)
    }
  },
  [ref]
)
```

```ts
/**
 * @doc useRef를 이용해 handler 기억
 * @doc useEffect를 이용해 savedHander.current 를 handler로 설정 hnadler가 변경될 때마다 savedHandler.current도 업데이트
 */
const savedHandler = useRef(handler)
useEffect(() => {
  savedHandler.current = handler
}, [handler])
```
