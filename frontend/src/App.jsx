import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Signin from './components/signup/Signin'


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/task' element={<Task/>}/> */}
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
