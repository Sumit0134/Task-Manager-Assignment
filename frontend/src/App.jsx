import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Signup from './components/signup/Signup';
import Signin from './components/signup/Signin';
import Task from "./components/task/Task";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { authActions } from './store';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) {
      dispatch(authActions.login());
    }
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task' element={<Task />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
