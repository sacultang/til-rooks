# rooks TIL

### 1.useArrayState

[👉 useArrayState](../../packages/lib/src/hooks/useArrayState.ts)  
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

### 2.useIntervalWhen

[👉 useIntervalWhen](../../packages/lib/src/hooks/useIntervalWhen.ts)  
[👉 Day2](./src/components/DayTwo.tsx)

작성 중 lint에 의한 error `no-inner-declarations`

> no-inner-declarations는 ESLint의 규칙 중 하나로, 중첩된 블록 내에서 함수나 변수를 선언하는 것을 금지하는 규칙입니다.

> 이 규칙을 적용하면, 함수나 변수를 중첩된 블록 내에서 선언하는 것을 방지하여 코드의 가독성과 유지보수성을 높일 수 있습니다. 또한, 이 규칙은 호이스팅(hoisting) 문제를 방지할 수 있습니다. 호이스팅은 변수나 함수 선언이 스코프의 맨 위로 올라가는 것을 의미합니다. 때문에 중첩된 블록 내에서 함수나 변수를 선언하면, 예상치 못한 동작을 일으킬 수 있습니다.

![linterror](./src/assets/useInterval/01.png)

```ts
if (when) {
  // ❌
  function intervalCallback() {
    savedRefCallback.current?.()
  }
}

if (when) {
  // ✅
  const intervalCallback = () => {
    savedRefCallback.current?.()
  }
}
```

```ts
// Good ✅
function foo() {}

// Bad ❌
if (test) {
  function foo() {}
}

function anotherThing() {
  var fn

  if (test) {
    // Good ✅
    fn = function expression() {}

    // Bad ❌
    function declaration() {}
  }
}
```
