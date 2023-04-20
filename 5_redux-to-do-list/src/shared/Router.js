import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../components/Main';
import Test from '../components/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":id" element={<Test />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;