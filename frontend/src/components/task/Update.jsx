import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const { id } = useParams(); 
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: "20px",
      maxWidth: "600px",
      margin: "auto",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      outline: "none",
      width: "100%",
    },
    textarea: {
      padding: "10px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      outline: "none",
      width: "100%",
      minHeight: "100px",
      resize: "vertical",
    },
    button: {
      padding: "10px 15px",
      fontSize: "16px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  // Fetch task details on component mount
  useEffect(() => {
    const fetchTask = async () => {
      try {
        console.log("Fetching task with ID:", id);
        const response = await axios.get(`http://localhost:3000/api/v2/getSingleTask/${id}`);
        console.log("Response data:", response.data);
  
        if (response.data.todo) {
          const task = response.data.todo;
          setTask({ title: task.title, description: task.description });
        } else {
          alert("Task not found");
        }
      } catch (error) {
        console.error("Error fetching task:", error);
        alert("Failed to fetch task");
      }
    };
  
    fetchTask();
  }, [id]);
   // Ensure that the task is fetched when the `id` changes
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting task update with ID:", id);
    console.log("Task data:", task);  // Log the data you're sending in the update request
  
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v2/updateTask/${id}`,
        task
      );
      console.log("Response after update:", response.data);  // Log the response after update
      alert("Task updated successfully");
      navigate("/task");  // Redirect to task list after update
    } catch (error) {
      console.error("Error updating task:", error);
      alert("Failed to update task");
    }
  };
  

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Update Task</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
          style={styles.input}
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
          style={styles.textarea}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Update;
