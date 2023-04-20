import React, { useEffect, useState, useMemo } from 'react';

function ObjectComponent() {
  const [isAlive, setIsAlive] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);
  
  // * 문제상황
  // useEffect를 이용해 me의 정보가 바뀌었을 때만 발동되도록 dependency Array를 넣어놨음에도
  // 상관없는 count를 증가시킬 때 계속 console.log가 찍히고 있다.

  // ? 왜? 불변성과 관련이 깊다.
  // 버튼이 선택되어 useleccCount state가 바뀌게 되면 '리렌더링'이 된다.
  // -> 리렌더링이 되면 '컴포넌트 함수가 새로 호출'된다.
  // -> 컴포넌트 함수가 새로 호출되면 'me 객체도 다시 재할당'한다. (이때, 다른 메모리 주소값 할당)
  // -> useEffect의 dependency Array에 의해 me 객체가 바뀌었는지 확인해봐야 하는제 주소값이 다르므로
  //    리액트 입장에서는 me가 바뀌었다고 인식하고 useEffect 내부 로직이 호출된다. 
  // 이러한 상황을 해결하기 위해 useMemo를 이용할 수 있다.

  // * useMemo 사용 전
  // const me = {
  //   name: 'Ted Chang',
  //   age: 21,
  //   isAlive: isAlive ? '생존' : '사망',
  // };

  // * useMemo 사용 후
  const me = useMemo(() => {
    return {
      name: 'Ted Chang',
      age: 21,
      isAlive: isAlive ? '생존' : '사망',
    };
  }, [isAlive]);


  useEffect(() => {
    console.log('생존여부가 바뀔 때만 호출해주세요!');
  }, [me]);

  return (
    <>
      <div>
        내 이름은 {me.name}이고, 나이는 {me.age}야!
      </div>
      <br />
      <div>
        <button
          onClick={() => setIsAlive(!isAlive)}
        >
          누르면 살았다가 죽었다가 해요
        </button>
        <br />
        생존여부 : {me.isAlive}
      </div>

      <hr />

      필요없는 숫자 영역이에요!
      <br />
      {uselessCount}
      <br />
      <button
        onClick={() => setUselessCount(uselessCount + 1)}
      >
        누르면 숫자가 올라가요
      </button>
    </>
  );
}

export default ObjectComponent;