## 14-useQueueState

[👉 useQueueState](../../../packages/lib/src/hooks/useQueueState.ts)  
[👉 Day14](../src/components/Day14.tsx)

큐를 관리하기 위한 상태 훅  
FIFO(first-infirst-out)에 따라 요소를 처리

- dequeue: 큐에서 요소를 제거하고 반환합니다. 큐가 비어있을 경우 undefined를 반환합니다.
- enqueue: 큐에 새로운 요소를 추가하고, 큐의 새로운 길이를 반환합니다.
- length: 현재 큐의 길이를 반환합니다.
- peek: 큐의 첫 번째 요소를 반환합니다. 큐가 비어있을 경우 undefined를 반환합니다.
