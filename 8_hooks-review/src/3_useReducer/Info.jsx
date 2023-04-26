import React, { useReducer } from 'react';

function reducer(state, action) {
  // 현재의 state값
  console.log('state: ', state);
  // 넘어온 action값(=== e.target)
  console.log('action: ', action);
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const {name, nickname} = state;   // 구조분해할당

  const onChange = e => dispatch(e.target);

  return (
    <>
      <div>
        <input type="text" name="name" value={name} onChange={onChange}/>
        <input type="text" name="nickname" value={nickname} onChange={onChange}/>
      </div>
      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
      </div>
    </>

  )
}

// ! 실행 순서
// 1. onChange로 변경이 발생했음을 감지하고 해당 함수를 실행한다.
// 2. dispatch가 action객체 (현재의 e.target)을 reducer로 던진다.
// 3. reducer가 state, action을 인자로 받아 action값에 따라 새로운 상태를 반환한다.
//    -> reducer는 state를 action의 type에 따라 변경하는 함수로, input으로 state와 action을 받는다.

export default Info