import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/data';

function Work() {
  const params = useParams();
  
  // 어떤 todo인지 찾아보기
  const foundData = data.find((item) => {
    // 하나는 String, 하나는 Number형이기 때문에
    // 일치연산자(===) 사용 위해 형변환 진행
    return item.id === Number(params.id);
  });

  return <div>
    <h3>할 일 : {foundData.todo}</h3>
  </div>;
}

export default Work