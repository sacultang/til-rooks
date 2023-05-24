## 10.11-useIsomorphicEffect

[👉 11-useIsomorphicEffect](../../../packages/lib/src/hooks/11-useIsomorphicEffect.ts)  
[👉 Day11](../src/components/Day11.tsx)

`window`객체의 존재 여부에 따라 클라이언트 환경과 서버환경에서  
`useEffect` 또는 `useLayoutEffect`를 선택적으로 사용하는 훅

### useEffect와 useLayoutEffect의 차이

> [참고 아티클](https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5)

- useEffect는 컴포넌트가 render와 paint 된 후 실행. useEffect 내부에 dom에 영향을 주는 코드가 있을 시  
  사용자 입장에서는 화면 깜빡임을 보게 된다.
- useLayoutEffect는 컴포넌트들이 render 된 후 실행, 그 이후에 paint가 된다. paint가 되기전에 실행되기 전에
  dom을 조작하는 코드가 존재하더라도 사용자는 깜빡임을 경험하지 않게 된다.

- Render : DOM tree를 구성하기 위해 각 엘리먼트의 스타일 속성을 계산하는 과정
- Paint: 실제 스크린에 Layout을 표시하고 업데이트하는 과정
