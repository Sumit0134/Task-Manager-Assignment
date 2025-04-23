import React from "react";
import "./Task.css";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TaskCard = ({ title, description, delid, onUpdate, taskId }) => {
  const truncatedDescription = description.length > 77 ? description.slice(0, 77) + "..." : description;

  return (
    <div className='p-3 todo-card'>
      <div>
        <h5>{title}</h5>
        <p className='todo-card-p'>{truncatedDescription}</p>
      </div>
      <div className='d-flex justify-content-around'>
        <div
          className='d-flex justify-content-center align-items-center card-icon-head px-2 px-1'
          onClick={() => onUpdate(taskId)}  // Pass taskId to onUpdate
        >
          <GrDocumentUpdate className='card-icons' /> Update
        </div>
        <div
          className='d-flex justify-content-center align-items-center card-icon-head px-2 px-1'
          onClick={() => delid(taskId)}  // Pass taskId to delid
        >
          <AiFillDelete className='card-icons del' /> Delete
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
