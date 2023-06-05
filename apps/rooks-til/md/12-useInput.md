## 12.useInput

[👉 useInput](../../../packages/lib/src/hooks/useInput.ts)  
[👉 Day12](../src/components/Day12.tsx)

input 요소를 처리하기 위한 훅

```ts
type Options<T> = {
  /**
   * validate
   *
   * 유효성 검사 함수
   *
   * @param {any} New value
   * @param {any} Current value
   * @returns {boolean} Whether an update should happen or not
   */
  validate?: (newValue: T, currentValue: T) => boolean
}
```

- 옵션값으로 validate함수를 넣을 수 있다. 하지만 위 코드로는 한 가지 함수밖에 못 넣는다

```ts
type Validators<T> = {
  validate: (newValue: T, currentValue: T) => boolean
}[]

type Options<T> = {
  validators?: Validators<T>
}
```

- 배열로 이루어진 Validators를 만든다

```ts
const onChange = useCallback(
  (event: InputChangeEvent) => {
    const newValue = event.target.value as T
    let shouldUpdate = true

    if (options.validators) {
      for (const validator of options.validators) {
        shouldUpdate = validator.validate(newValue, value)
        if (!shouldUpdate) {
          break
        }
      }
    }

    if (shouldUpdate) {
      setValue(newValue)
    }
  },
  [options, value]
)
```

- for문을 이용해 validators를 순회하다가 shouldUpdate가 false이면 break

```ts
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const myInput = useInput('hello', {
  validate: [{ validate: newValue => newValue.length < 15 }, { validate: newValue => emailRegex.test(emailRegex) }],
})
return (
  <div>
    <p> Max length 15 </p>
    <input {...myInput} />
    <p>
      Value is <b>{myInput.value}</b>
    </p>
  </div>
)
```

- email 유효성 검사를 넣어봤는데.. input에 아무것도 입력이 되지 않는다 ㅎㅎ  
  아무래도 먼저 입력값을 받고 나서 유효성을 검사하는 거기 때문인거 같다.
