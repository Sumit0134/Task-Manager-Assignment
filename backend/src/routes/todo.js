const express = require("express");

const router = express.Router();

const { UserModel, TodoModel } = require("../models");

//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, description, id } = req.body; 
    const existingUser = await UserModel.findById(id);
    if (existingUser) {
      const todo = new TodoModel({ title, description, user: existingUser });
      await todo.save().then(() => res.status(200).json({ todo }));
      existingUser.todos.push(todo);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});


// update task route
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, description } = req.body;
    const taskId = req.params.id;

    console.log("Request body:", req.body);  // Log the request body (task data)
    console.log("Task ID:", taskId);  // Log the task ID received from the URL

    if (!title || !description) {
      return res.status(400).json({ message: "Title and description are required" });
    }

    // Find the task by ID before updating
    const taskToUpdate = await TodoModel.findById(taskId);
    if (!taskToUpdate) {
      console.log("Task not found");  // Log if task is not found
      return res.status(404).json({ message: "Task not found" });
    }

    // Update the task
    taskToUpdate.title = title;
    taskToUpdate.description = description;
    await taskToUpdate.save();

    res.status(200).json({ message: "Task updated successfully", taskToUpdate });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { userId } = req.body;
    console.log("Trying to delete task with ID:", req.params.id);
    console.log("From user with ID:", userId);

    const existingUser = await UserModel.findByIdAndUpdate(userId, {
      $pull: { todos: req.params.id },
    });

    if (existingUser) {
      const deleted = await TodoModel.findByIdAndDelete(req.params.id);
      console.log("Deleted task:", deleted);
      return res.status(200).json({ message: "Task deleted" });
    }

    console.log("User not found");
    res.status(404).json({ message: "User not found" });
  } catch (error) {
    console.error("Delete task error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



//get
router.get("/getTask/:id", async (req, res)=>{
    try {
        const todos=await TodoModel.find({user: req.params.id}).sort({createdAt: -1});
        if(todos.length!==0){
            res.status(200).json({todos});
        }
        else{
            res.status(200).json({message: "No tasks"})
        }
    } catch (error) {
        console.log(error)
    }
})

// get a single task by its ID
router.get("/getSingleTask/:id", async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (todo) {
      res.status(200).json({ todo });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


module.exports = router;
