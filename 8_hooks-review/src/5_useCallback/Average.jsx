// ! useCallback : 함수 메모이제이션
// * 첫번째 인수에 '생성하고 싶은 함수', 두번째 인수에 '의존 배열'을 받음
// 의존배열이 비어있다면 처음 작성된 것을 재사용, 값이 있을 경우 그 값이 변경되는 시점에 다시 작성
// 자녀 컴포넌트에 props로 전달하는 함수는 useCallback을 사용해 메모이제이션함으로써 의도치 않은 재렌더링을 방지

import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
  console.log('평균 값 계산 중🤔');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};


const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  // * 컴포넌트가 처음 렌더링될 때만 함수 생성하여 그 함수 계속 재사용 (의존성배열이 빈 배열)
  //   -> 기존의 값을 조회하지 않고 바로 설정만 하기 때문에 배열이 비어있어도 상관 없음
  const onChange = useCallback(e => setNumber(e.target.value), []);
  // * number 혹은 list가 바뀌었을 때만 함수 생성
  //   -> 기존의 number와 list를 조회해서 nextList를 생성하기 떄문에 배열 안에 number와 list를 넣어줘야 함
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  }, [number, list]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input type="text" value={number} onChange={onChange}/>
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
};

export default Average