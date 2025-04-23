import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/task'); // Redirect to /task route
  };

  return (
    <div className='home d-flex justify-content-center align-items-center'>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className='text-center'>Create and Organize your daily tasks <br/> using our Task Manager App.</h1>
        <button className='home-btn p-2' onClick={handleClick}>Create your Task</button>
      </div>
    </div>
  )
}

export default Home
