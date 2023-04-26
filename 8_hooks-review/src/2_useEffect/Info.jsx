// ! useEffect
// * 의존성배열에 빈 배열이나 의존 값을 넣는 경우는 있어도 배열을 아예 생략하는 상황은 거의 없음

import React, { useEffect, useState } from 'react'

const InfoEffect = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeNickname = e => setNickname(e.target.value);

  // ! before
  // 최초 렌더링 및 input에 onChange가 될 때마다 재렌더링 진행되고 있음
  // console.log('렌더링이 완료되었습니다.');

  // ! after (using useEffect)
  // * useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고,
  // * 업데이트될 때는 실행하지 않으려면 의존성배열을 빈배열로 추가해야 함
  // 최초 렌더링 시에만 콘솔이 나타나고, onChange가 되더라도 콘솔은 나오지 않음!
  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
  }, [])

  // ! after (use useEffcet & dependency array)
  // 최초 렌더링 시 1회 실행 및 이름이 onChange될 때만 콘솔 출력!
  useEffect(() => {
    console.log('이름이 변경되었습니다.');
    console.log('useEffect name : ', name);
  }, [name]);

  // ! clean up
  // * 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떤 작업을 수행하고 싶다면 clean up 함수 필요
  // 최초 렌더링 시에는 cleanup이 실행되지 않고, nickname이 onChange될 때 clean up이 실행됨
  // [참고] 현재 index.js에서 React.StrictMode가 비활성화되어있기 때문에 한 번만 마운트되고 있음
  // * 언마운트 직전에만 clean up을 호출하고 싶다면 의존성 배열에 빈 배열을 넣어줘야 함
  useEffect(() => {
    console.log('effect✨');
    console.log('effect - nickname : ', nickname);
    return () => {
      console.log('clean up🧹');
      console.log('clean up - nickname : ', nickname);
    }
  }, [nickname])

  return (
    <>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <p>이름 : {name}</p>
        <p>닉네임 : {nickname}</p>
      </div>
    </>
  )
}

export default InfoEffect