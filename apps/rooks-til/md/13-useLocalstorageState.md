## 13.useLocalstorageState

[👉 useLocalstorageState](../../../packages/lib/src/hooks/useLocalstorageState.ts)  
[👉 Day13](../src/components/Day13.tsx)

Localstorage와 상태를 관리 하는 훅.  
로컬스토리지에 상태값을 저장하고, 변경사항을 감지하여 업데이트 된 값을 반환,

1. 초기 상태 값 설정: useState 훅을 사용하여 초기 상태 값을 설정합니다. 이때 initialize 함수를 사용하여 로컬 스토리지에서 이전에 저장된 값을 가져올 수 있습니다.

2. 로컬 스토리지 업데이트 감지: useEffect 훅을 사용하여 상태 값이 변경될 때마다 로컬 스토리지에 값을 저장합니다. isUpdateFromCrossDocumentListener와 isUpdateFromWithinDocumentListener 변수는 각각 다른 문서(탭 또는 창)에서 발생한 이벤트와 동일 문서 내에서 발생한 이벤트인지를 나타내는 플래그입니다. 이 플래그들을 사용하여 업데이트가 다른 문서에서 발생한 경우 로컬 스토리지에 값을 저장하지 않습니다.

3. 다른 문서에서 발생한 로컬 스토리지 이벤트 수신: useEffect 훅을 사용하여 window 객체의 storage 이벤트를 감지합니다. listenToCrossDocumnetStorageEvents 함수는 이벤트가 발생할 때 호출되며, 로컬 스토리지의 특정 키(key)에 대한 업데이트를 감지하고 해당 값을 가져와서 상태를 업데이트합니다.

4. 동일 문서 내에서 발생한 커스텀 이벤트 수신: useEffect 훅을 사용하여 document 객체의 커스텀 이벤트(customEventTypeName)를 감지합니다. listenToCustomEventWithinDocument 함수는 이벤트가 발생할 때 호출되며, 이벤트의 detail 속성에서 새로운 값을 가져와서 상태를 업데이트합니다.

5. 상태 값을 다른 컴포넌트에 브로드캐스트: broadcastValueWithinDocument 함수를 사용하여 현재 상태 값을 커스텀 이벤트로 다른 컴포넌트에 브로드캐스트합니다. 이를 통해 다른 컴포넌트들이 상태 값을 동기화할 수 있습니다.

6. set 함수를 사용하여 상태 값을 변경할 수 있습니다. set 함수는 상태 값을 업데이트하고, broadcastValueWithinDocument 함수를 사용하여 업데이트된 값을 다른 컴포넌트에 브로드캐스트합니다.

7. remove 함수를 사용하여 상태 값을 제거할 수 있습니다. 이 함수는 로컬 스토리지에서 해당 키(key)의 값을 제거합니다.
