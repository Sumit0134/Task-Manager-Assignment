const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const { UserModel } = require("../models");

//sign in
router.post("/register", async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = new UserModel({ username, email, password: hashedPassword });
  
      await user.save();
  
      res.status(201).json({ message: "User registered", user });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });  

//sign in
router.post("/signin", async (req, res)=>{
    try {
        const user=await UserModel.findOne({email: req.body.email});
        if(!user){
            res.status(400).json({message: "Please Sign Up First"});
        }

        const isPasswordCorrect=bcrypt.compareSync(req.body.password, user.password);
        if(!isPasswordCorrect){
            res.status(400).json({message: "Password is not correct"});
        }

        const {password, ...others}=user._doc;
        res.status(200).json({others});
    } catch (error) {
        res.status(400).json({message: "User Already Exists"});
    }
})


module.exports = router;
