// ! useState

import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const onBtnClickHandler = (operator) => {
    // * 1. 변수에 +1 하는 것 보다 state의 현재 값에 +1을 하기
    // * 2. 하나로 묶을 수 있는 함수는 묶기
    operator === 'plus' ? setValue(prev => prev + 1) : setValue(prev => prev - 1);
  }

  return (
    <div>
      <p>현재 카운터의 값은 {value}입니다.</p>
      <button onClick={() => onBtnClickHandler('plus')}>+</button>
      <button onClick={() => onBtnClickHandler('minus')}>-</button>
    </div>
  )
}

export default Counter