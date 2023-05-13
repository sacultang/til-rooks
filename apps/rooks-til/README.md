# rooks TIL

## 1 - useArrayState

[👉 useArrayState]('../../../../packages/lib/src/hooks/state/useArrayState.ts')  
[👉 DayOne](./src/components/DayOne.tsx)

배열 state를 setState를 로직에서 사용하지 않고 배열 관련 메소드를 쉽게 쓸 수 있도록 해주는 hooks인거 같다.

처음 보는 타입

```ts
type Push<T> = (...args: Parameters<T[]['push']>) => void
```

- Parameters

  `Parameters`는 TypeScript에서 제공하는 유틸리티 타입.  
  함수 타입의 매개변수들을 튜플 타입으로 변환해주는 역할을 한다.

```ts
function foo(a: string, b: number, c: boolean) {
  // do..
}

type FooParam = Parameters<typeof foo> // [string, number, boolean] 이 된다
```
