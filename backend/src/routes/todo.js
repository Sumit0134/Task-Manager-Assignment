const express = require("express");

const router = express.Router();

const { UserModel, TodoModel } = require("../models");

//create
router.post("/addTask", async (req, res) => {
  try {
    const { title, description, email } = req.body;
    const existingUser = await UserModel.findOne({ email });
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

//update
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, description, email } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task updated", updatedTodo });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//delete
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser=await UserModel.findOneAndUpdate({email}, {$pull: {todos: req.params.id}});
    if(existingUser){
        await TodoModel.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "task deleted"})
    }
  } catch (error) {
    console.log(error)
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

module.exports = router;
