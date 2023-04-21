import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div>
      Home
      <br />
      <button
        onClick={() => navigate('/works')}
      >
        Works로 이동
      </button>  
    </div>
  )
}

export default Home