import React, { useState } from "react";
import "./Task.css";
import TaskCard from "./TaskCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";

const Task = () => {
  const [Inputs, setInputs] = useState({ title: "", description: "" });
  const [Array, setArray] = useState([]);
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = () => {
    if (Inputs.title === "" || Inputs.description === "") {
      toast.error("Title or Description should not be empty.");
    } else {
      setArray([...Array, Inputs]);
      setInputs({ title: "", description: "" });
      toast.success("Your task is added.");
      toast.error("Your task is added but not saved, please sign up.");
    }
  };
  const del = (id) => {
    Array.splice(id, "1");
    setArray([...Array]);
  };
  const dis=(value)=>{
    document.getElementById("task-update").style.display=value;
  }
  return (
    <>
      <div className="task">
        <ToastContainer />
        <div className="task-main container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column todo-inputs-div w-50">
            <input
              type="text"
              placeholder="Title"
              className="my-2 todo-inputs"
              name="title"
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              type="text"
              placeholder="Description"
              className="todo-inputs"
              onChange={change}
              name="description"
              value={Inputs.description}
            />
            <button className="mt-2" onClick={submit}>
              Add
            </button>
          </div>
        </div>
        <div className="task-body m-5">
          <div className="container">
            <div className="row">
              {Array &&
                Array.map((item, index) => (
                  <div className="col-lg-3 col-9 mx-5 my-2" key={index}>
                    <TaskCard
                      title={item.title}
                      description={item.description}
                      id={index}
                      delid={del}
                      display={dis}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="task-update" id="task-update">
        <div className="container update">
        <Update display={dis}/>
        </div>
      </div>
    </>
  );
};

export default Task;