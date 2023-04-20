import React from 'react';
import Child from './Child';

function Father() {
  // * useContext를 사용하지 않았을 때의 이전 방식
  // Father()에서 props를 내려 받을 필요도 없다.
  // return <Child houseName={houseName} pocketMoney={pocketMoney} />

  // * useContext를 사용한 방식
  return <Child />
}

export default Father