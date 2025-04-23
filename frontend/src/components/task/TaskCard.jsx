import React from 'react'
import "./Task.css"
import {AiFillDelete} from "react-icons/ai";
import {GrDocumentUpdate} from "react-icons/gr"

const TaskCard = ({title, description, id, delid, display}) => {
  return (
    <div className='p-3 todo-card'>
        <div>
          <h5>{title}</h5>
          <p className='todo-card-p'>{description.split("", 77)}...</p>
        </div>
        <div className='d-flex justify-content-around'>
          <div className='d-flex justify-content-center align-items-center card-icon-head px-2 px-1'
          onClick={()=>{
            display("block");
          }}
          >
            <GrDocumentUpdate className='card-icons'/> Update
          </div>
          <div className='d-flex justify-content-center align-items-center card-icon-head px-2 px-1' onClick={()=>delid(id)}>
          <AiFillDelete className='card-icons del'/> Delete
          </div>
        </div>
    </div>
  )
}

export default TaskCard
