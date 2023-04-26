// ! useMemo : 변수 메모이제이션
// * 첫번째 인수의 함수에 '변수에 설정할 값의 반환', 두번째 인수에 '의존 배열' 전달
// 1) 변수 정의 로직이 복잡하거나 많은 수의 루프가 실행되는 경우 등에 사용함으로써
//    변수 설정에 의한 부하를 낮출 수 있음
// 2) 의존 배열에 설정된 값을 참조함으로써 변수를 설정하는데 영향을 주는 외부값을
//    명시적으로 나타낼 수 있어 가독성 향상 기대 가능

import React, { useState, useMemo } from 'react';

const getAverage = numbers => {
  // 1. 최초 렌더링될 때, 사용자가 input에 입력한 값이 있을 때 콘솔 출력
  // => 숫자를 등록할 때가 아니라 input 내용이 수정될 때마다 이 함수가 호출되는 것은 불필요한 렌더링!
  // => 따라서 useMemo를 이용해 최적화를 진행한다.
  console.log('평균 값 계산 중🤔');
  // 2. 매개변수로 들어온 numbers(=== list)의 길이가 0이면 평균값 0을 반환한다.
  if (numbers.length === 0) return 0;
  // 3. 길이가 0이 아닐 경우 list에 reduce로 총 합계를 구한다.
  const sum = numbers.reduce((acc, cur) => acc + cur);
  // 4. 평균값을 구해 값을 return한다.
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => setNumber(e.target.value);
  const onInsert = () => {
    // * [Array.prototype.concat()] 인자로 주어진 배열이나 값들을 기존 배열에 합쳐 새 배열을 반환
    // 1. 사용자가 입력한 number값을 정수로 반환 후, concat 메서드로 기존 list 배열에 추가한 새 배열을 변수에 담는다.
    const nextList = list.concat(parseInt(number));
    // 2. list state에 추가된 값이 담긴 nexList를 담는다.
    setList(nextList);
    // 3. 사용자가 입력한 값을 초기화한다.
    setNumber('');
  };

  // ! 최적화를 위해 getAverage 함수 useMemo 사용
  // 이전에는 input에 값이 바뀔 때마다 렌더링되었지만 
  // useMemo 사용 후에는 list에 값이 등록되었을 때만 getAverage가 호출된다.
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
        {/* useMemo 사용 전 */}
        {/* <p>평균값: {getAverage(list)}</p> */}
        {/* useMemo 사용 후 */}
        <p>평균값: {avg}</p>
      </div>
    </div>
  )
}

export default Average