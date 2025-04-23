import React, { useState } from "react";
import HeadingComp from "./HeadingComp";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {authActions} from "../../store"

const Signin = () => {
  const dispatch=useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:3000/api/v1/signin`, Inputs)
      .then((response) => {
        sessionStorage.setItem("id", response.data.others._id)
        dispatch(authActions.login());
        history("/task");
      });
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 column col-left d-flex justify-content-center  align-items-center">
            <HeadingComp first="Sign" second="In" />
          </div>
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 my-3 input-signup"
                name="email"
                value={Inputs.email}
                onChange={change}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="p-2 my-3 input-signup"
                name="password"
                value={Inputs.password}
                onChange={change}
              />
              <button className="btn-signup p-2 my-3" onClick={submit}>
                SignIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
