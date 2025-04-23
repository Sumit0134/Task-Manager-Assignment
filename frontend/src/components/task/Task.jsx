import React, { useState, useEffect } from "react";
import "./Task.css";
import TaskCard from "./TaskCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

const Task = () => {
  const [inputs, setInputs] = useState({ title: "", description: "" });
  const [taskList, setTaskList] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const id = sessionStorage.getItem("id");

  useEffect(() => {
    const fetchTasks = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`http://localhost:3000/api/v2/getTask/${id}`);
        if (res.data.todos) {
          setTaskList(res.data.todos);
        } else {
          toast.info(res.data.message || "No tasks found.");
        }
      } catch (error) {
        toast.error("Error fetching tasks.");
        console.error(error);
      }
    };
    fetchTasks();
  }, [id]);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submit = async () => {
    if (inputs.title === "" || inputs.description === "") {
      toast.error("Title or Description should not be empty.");
      return;
    }

    if (id) {
      try {
        const res = await axios.post("http://localhost:3000/api/v2/addTask", {
          title: inputs.title,
          description: inputs.description,
          id: id,
        });

        if (res.data.todo) {
          setTaskList([res.data.todo, ...taskList]);
          toast.success("Your task is added.");
        }
      } catch (err) {
        toast.error("Error adding task.");
        console.error(err);
      }
    } else {
      setTaskList([{ ...inputs, _id: Date.now() }, ...taskList]);
      toast.success("Task added (not saved)");
      toast.error("Please sign in to save tasks.");
    }

    setInputs({ title: "", description: "" });
  };

  const del = async (index) => {
    const task = taskList[index];
    const updatedList = [...taskList];
    updatedList.splice(index, 1);
    setTaskList(updatedList);

    if (id && task._id) {
      try {
        await axios.delete(`http://localhost:3000/api/v2/deleteTask/${task._id}`, {
          data: { email: "dummy@gmail.com" }, 
        });
        toast.success("Task deleted.");
      } catch (err) {
        toast.error("Error deleting task.");
        console.error(err);
      }
    }
  };

  const dis = (value) => {
    setShowUpdate(value === "block");
  };

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
              value={inputs.title}
              onChange={change}
            />
            <textarea
              placeholder="Description"
              className="todo-inputs"
              name="description"
              value={inputs.description}
              onChange={change}
            />
            <button className="mt-2" onClick={submit}>
              Add
            </button>
          </div>
        </div>

        <div className="task-body m-5">
          <div className="container">
            <div className="row">
              {taskList &&
                taskList.map((item, index) => (
                  <div className="col-lg-3 col-9 mx-5 my-2" key={item._id || index}>
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

      {showUpdate && (
        <div className="task-update" id="task-update">
          <div className="container update">
            <Update display={dis} />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
