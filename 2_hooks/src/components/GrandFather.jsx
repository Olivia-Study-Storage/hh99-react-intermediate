import React from 'react';
import Father from './Father';
import { FamilyContext } from '../context/FamilyContext';

// * useContext 주의사항 - 렌더링 문제
// useContext 사용 시 Provider(여기서는 G.F.)에서 제공한 value가 달라지면
// useContext를 사용하고 있는 모든 컴포넌트가 '리렌더링'된다.
// => 따라서 'value' 부분을 항상 신경써줘야 한다!

// GF -> Child에게 어떤 정보를 알려줘서 Child가 그 내용을 출력하도록 하는 상황 가정
function GrandFather() {
  const houseName = '스파르타';
  const pocketMoney = 10000;

  // * useContext를 사용하지 않았을 때의 이전 방식
  // return <Father houseName={houseName} pocketMoney={pocketMoney} />

  // * useContext를 사용한 방식
  // context 만든걸 통해서 외부로 접근하기 때문에 하나씩 props를 내려줄 필요가 없다.
  return (
    <FamilyContext.Provider
      value={{
        houseName,
        pocketMoney,
      }}
    >
      <Father/>
    </FamilyContext.Provider>
  )
}

export default GrandFather