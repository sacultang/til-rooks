## 5.useMapState

[👉 useMapState](../../../packages/lib/src/hooks/useMapState.ts)  
[👉 Day5](../src/components/Day5.tsx)

- has: 주어진 키(key)가 맵 상태에 있는지 여부를 반환합니다.
- remove: 주어진 키(key)와 해당 값(value)을 맵 상태에서 제거합니다.
- removeAll: 맵 상태의 모든 키와 값을 제거합니다.
- removeMultiple: 여러 개의 키(key)를 인자로 받아 해당 키와 값을 맵 상태에서 제거합니다.
- set: 주어진 키(key)와 값을 맵 상태에 설정합니다.
- setMultiple: 다수의 키와 값을 포함하는 nextMap 객체를 인자로 받아 맵 상태를 업데이트합니다.

```ts
function useMapState<T extends { [key: string]: unknown }, K extends keyof T >(
  initialValue: T
){...}

useMapState({a:1, b:2})
```

`T`는 `{string:unknown}`으로 이루어진 `Object`타입이 되고 `K`는 `T`의 key를 상속 받는다..
따라서 `K`는 'a' | 'b' 타입이 된다.

그런데

```ts
const set = useCallback((key: K, value: T[K]) => {
  setMap(currentMap => ({
    ...currentMap,
    [key]: value,
  }))
}, [])
```

여기서 보면 key는 K니까 `'a' | 'b'`가 되는데

```ts
const [setInputKey, setSetInputKey] = useState('')
<button onClick={() => set(setInputKey, setInputValue)}>set</button>
```

`string`을 넣으니까 에러가 난다.  
그저 rooks에 있는걸 고대로 보면서 쳤을 뿐인데!

타입스크립트 공식 문서의 `keyof` 타입 연산자 부분을 보면

> https://www.typescriptlang.org/ko/docs/handbook/2/keyof-types.html

```ts
type Arrayish = { [n: number]: unknown }
type A = keyof Arrayish // type A = number

type Mapish = { [k: string]: boolean }
type M = keyof Mapish // type M = string | number
```

`key`의 타입대로 되는데 `extends`를 하는것과 할당하는 것은 다른건가??
