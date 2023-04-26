// ! useState

import React, { useState } from 'react'

const Info = () => {
  // * 하나로 묶을 수 있는 state, 함수는 다 묶어보기
  const [info, setInfo] = useState({
    name: '',
    nickname: '',
  });

  const onInputChangeHandler = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div>
        <input type="text" name="name" onChange={onInputChangeHandler} />
        <input type="text" name="nickname" onChange={onInputChangeHandler} />
      </div>
      <div>
        <p>이름 : {info.name}</p>
        <p>닉네임 : {info.nickname}</p>
      </div>
    </>
  )
}

export default Info