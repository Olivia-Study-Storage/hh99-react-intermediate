// ! useReducer
// useState보다 더 다양한 컴포넌트 상황에 따라 더 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 hook

// ? [리듀서] : 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 action값을 전달받아 새로운 상태를 반환하는 함수
// -> 리듀서 함수에서 새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 함
// -> useReducer에 사용하는 액션 객체는 반드시 type을 지니고 있을 필요가 없음

// * useReducer의 장점
// 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있음

import React, { useReducer } from 'react';

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}
      
      const Counter = () => {
  // * 첫번째 파라미터에는 리듀서 함수를, 두번째 파라비터에는 해당 리듀서의 기본 값을 넣어준다.
  const [state, dispatch] = useReducer(reducer, {value: 0});

  return (
    <div>
      <p>현재 카운터 값은 {state.value}입니다.</p>
      {/* 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출 */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
    </div>
  )
}

export default Counter