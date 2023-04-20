import React, { useState, useMemo } from 'react';

function HeavyComponent() {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    for(let i = 0; i < 1000000000; i++) {}
    return 100;
  };

  // heavyWork가 수행이 된 후 value에 값을 선언해주는 이 부분은 컴포넌트가 리렌더링되면 항상 호출되는 부분이다.
  // 그런데 이 작업은 항상 100을 return하기 때문에 컴포넌트가 리렌더링될 때마다 계속 호출한다는건 비효율적인 작업이다.
  // 또한 지금은 버튼을 눌러 count 값을 증가시킬 때 바로 올라가는게 아니라 약간의 딜레이가 발생한다.
  // 왜? count를 누르면 컴포넌트가 리렌더링이 되면서 heavyWork가 다시 호출되고 있기 때문이다!
  // const value = heavyWork();

  // * 따라서 아래와 같이 useMemo를 사용한다.
  const value = useMemo(() => heavyWork(), []);
  console.log(`value는 ${value}입니다.`);

  return <>
    <p>나는 엄청 무거운 컴포넌트야!</p>
    <button
      onClick={() => setCount(count + 1)}
    >
      누르면 아래 count가 올라가요
    </button>
    <h3>{count}</h3>
  </>
}

export default HeavyComponent