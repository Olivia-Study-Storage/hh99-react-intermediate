import React from 'react';
// * 1. react-router-dom을 사용하기 위해서 아래 API들을 import
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Works from '../pages/Works';
import Work from '../pages/Work';

// * 2. Router 라는 함수를 만들고 아래와 같이 작성
// BrowserRouter를 Router로 감싸는 이유는, 
// SPA의 장점인 브라우저가 깜빡이지 않고 다른 페이지로 이동할 수 있게 만들어준다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
						Routes안에 아래와 같이 작성한다.
						Route에는 react-router-dom에서 지원하는 props들이 있다.
						path는 우리가 흔히 말하는 사용하고싶은 '주소'를 넣는다.
						element는 해당 주소로 이동했을 때 보여주고자 하는 컴포넌트를 넣어준다.
				 */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works />} />
        {/* 파라미터를 사용해서 페이지 이동하기 */}
        <Route path="works/:id" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;