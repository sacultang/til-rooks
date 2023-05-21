## 9.useResizeObserverRef

[👉 useResizeObserverRef](../../../packages/lib/src/hooks/useResizeObserverRef.ts)  
[👉 Day9](../src/components/Day9.tsx)

`ResizeObserver`를 사용하여 React Ref의 크기를 감지하고 콜백을 실행하는 hooks

```ts
interface ResizeObserverCallback {
  (entries: ResizeObserverEntry[], observer: ResizeObserver): void
}
/**
 *
 * @docs 'border-box': 이 옵션은 요소의 크기를 해당 요소의 경계 상자(border box)를 기준으로 측정합니다. 경계 상자는 요소의 내용(content)과 여백(padding) 그리고 테두리(border)를 포함한 전체 영역을 의미합니다.
 * @docs 'content-box': 이 옵션은 요소의 크기를 해당 요소의 내용 상자(content box)를 기준으로 측정합니다. 내용 상자는 요소의 실제 내용 영역을 의미하며, 여백(padding)과 테두리(border)는 크기 측정에 영향을 주지 않습니다.
 * @docs 'device-pixel-content-box': 이 옵션은 요소의 크기를 장치 픽셀(device pixel) 기준으로 계산한 내용 상자(content box)를 기준으로 측정합니다. 장치 픽셀은 디스플레이 화면의 실제 픽셀을 의미합니다. 이 옵션은 고해상도(Retina) 디스플레이 등의 장치에서 픽셀 밀도에 따른 크기 변화를 정확하게 측정하는 데 유용합니다.
 *
 */
type ResizeObserverBoxOptions = 'border-box' | 'content-box' | 'device-pixel-content-box'

interface ResizeObserverOptions {
  box?: ResizeObserverBoxOptions
}
```
