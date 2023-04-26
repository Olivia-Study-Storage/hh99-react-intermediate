// ! useRef : DOM 요소에 접근할 수 있도록 하는 react hook
// 설정된 ref값은 컴포넌트게 계속해서 렌더링되어도 unmount 전까지 값을 유지한다.

// 이러한 특징으로 인해 useRef는 다음 2가지 용도로 사용된다.
// * 1. 저장공간으로서의 useRef
//   - state와 비슷한 역할을 한다.
//   - 다만, state는 변화가 일어나면 리렌더링이 되고 내부 변수들은 초기화 된다.
//   - ref에 저장한 값은 리렌더링을 일으키지 않아 ref의 값 변화가 일어나도 리렌더링으로 내부 변수가 초기화되지 않는다.
//   ! 따라서 state는 리렌더링이 꼭 필요한 값을 다룰 때, ref는 리렌더링을 발생시키지 않는 값을 저장할 때 사용한다.
// * 2. DOM 요소 접근 방법으로의 useRef
//   - 렌더링되자마자 특정 input이 포커싱되어야 하나면 useRef를 사용한다.
// ! useRef는 객체이므로 내부의 초기값에 접근하려면 .current로 들어가야 한다.

import React, { useState, useMemo, useCallback, useRef } from 'react';

const getAverage = numbers => {
  console.log('평균 값 계산 중🤔');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  // * useRef를 사용하여 ref를 설정하면
  // * useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트를 가리킴
  const inputEl = useRef(null);

  // * 컴포넌트가 처음 렌더링될 때만 함수 생성하여 그 함수 계속 재사용 (의존성배열이 빈 배열)
  const onChange = useCallback(e => setNumber(e.target.value), []);
  // * number 혹은 list가 바뀌었을 때만 함수 생성
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
      {
        list.map((value, index) => (
          <li key={index}>{value}</li>
        ))
      }
      </ul>
      <div>
        <p>평균값: {avg}</p>
      </div>
    </div>
  )
}

export default Average