import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const { id } = useParams(); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const fetchTask = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v2/getTask/${id}`);
        if (response.data.todos.length > 0) {
          const task = response.data.todos[0]; 
          setTask({ title: task.title, description: task.description });
        } else {
          alert("Task not found");
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/v2/updateTask/${id}`, task);
      alert("Task updated successfully");
      navigate("/task");
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task");
    }
  };

  return (
    <div>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default Update;
