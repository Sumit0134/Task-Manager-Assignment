import React from 'react'
import "./Signup.css"
import HeadingComp from './HeadingComp'

const Signup = () => {
  return (
    <div className='signup'>
       <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className='d-flex flex-column w-100 p-5'>
              <input type="username" placeholder='Enter your username' className='p-2 my-3 input-signup' name='username'/>
              <input type="email" placeholder='Enter your email' className='p-2 my-3 input-signup' name='email'/>
              <input type="password" placeholder='Enter your password' className='p-2 my-3 input-signup' name='password'/>
              <button className='btn-signup p-2 my-3'>SignUp</button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center  align-items-center">
            <HeadingComp first="Sign" second="Up"/>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Signup
