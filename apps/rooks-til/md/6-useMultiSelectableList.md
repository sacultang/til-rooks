## 6.useMultiSelectableList

[👉 useMultiSelectableList](../../../packages/lib/src/hooks/useMultiSelectableList.ts)  
[👉 Day6](../src/components/Day6.tsx)

![useMultiSelectableList](https://rooks.vercel.app/docs/useMultiSelectableList)  
여러 select값을 쉽게 구해주는? hooks

```ts
function warnIfBothValueAndIndexAreProvided<T>(
  functionName: string,
  object: OptionalIndexValue<T> | OptionalIndicesValues<T>
) {
  if (Object.values(object).every(value => typeof value !== 'undefined')) {
    console.warn(
      `${functionName}. Expected either ${Object.keys(object).join(' or')} to be provied. However all were provided`
    )
  } else if (Object.values(object).every(value => typeof value === 'undefined')) {
    console.warn(`${functionName}. ${Object.keys(object).join(' , ')} are all undefined.`)
  }
}
```

Object의 값들이 `undefined`인지 아닌지 체크하여 콘솔로 경고메세지를 띄워주는 함수

- Array.prototype.every()
  - 배열안의 모든 요소가 판별 함수를 통과하는지 테스트. boolean값을 반환

```ts
const updateSelections = ({ indices, values }: OptionalIndicesValues<T>) => {
  return () => {
    warnIfBothValueAndIndexAreProvided('updateSelections', { indices, values })
  1️⃣ if (typeof indices !== 'undefined') {
      if (!allowUnselected && indices.length === 0) {
        console.warn(`updateSelections failed. indices is an empty list.`)
        return
      }
      setCurrentIndices(indices)
  2️⃣ } else if (typeof values !== 'undefined') {
      const valueIndices = list.reduce((accumulator, current, index) => {
        if (values.includes(current)) {
          const array = [...accumulator, index]
          return array
        }
        return accumulator
      }, [])

    3️⃣ if (valueIndices.length > 0) {
        setCurrentIndices(valueIndices)
      } else if (allowUnselected) {
        setCurrentIndices(valueIndices)
      } else {
        console.warn(`updateSelections failed. Do the values exist in the list?`)
      }
    }
  }
}
```

1. `indices`가 정의 되어있는데, `allowUnselected`가 false, `indices`가 빈 배열일 경우 경고를 출력하고 함수 종료, 아니라면 `currentIndices`에 `indices`를 설정
2. `values`가 정의 되어있으면 `values`를 사용하여 `list` 배열에서 해당 값들의 인덱스를 찾아내고, 그 인덱스들을 `valueIndices`배열에 저장
3. `valueIndices` 배열이 비어있지 않은 경우, `setCurrentIndices` 함수를 사용하여 현재 인덱스로 설정.

4. `allowUnselected`가 true인 경우, `setCurrentIndices` 함수를 사용하여 현재 인덱스로 설정. 이 경우에는 `valueIndices` 배열이 비어있을 수 있다.

5. `allowUnselected`가 false이고, `valueIndices` 배열이 비어있는 경우, 경고 메시지를 출력
