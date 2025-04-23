import React, { useState } from "react";
import "./Signup.css";
import HeadingComp from "./HeadingComp";
import axios from "axios"
import {useNavigate} from "react-router-dom"
const Signup = () => {
  const history=useNavigate()
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3000/api/v1/register`, Inputs).then((response)=>{
      if(response.data.message==="User Already exists"){
        alert(response.data.message);
      } else{
        alert(response.data.message);
        setInputs({
          username: "",
          email: "",
          password: "",
        });
        history("/signin");
      }
    });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                type="username"
                placeholder="Enter your username"
                className="p-2 my-3 input-signup"
                name="username"
                onChange={change}
                value={Inputs.username}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 my-3 input-signup"
                name="email"
                onChange={change}
                value={Inputs.email}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 my-3 input-signup"
                name="password"
                onChange={change}
                value={Inputs.password}
              />
              <button className="btn-signup p-2 my-3" onClick={submit}>
                SignUp
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-flex justify-content-center  align-items-center">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
