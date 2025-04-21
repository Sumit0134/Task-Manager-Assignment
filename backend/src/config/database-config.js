const mongoose = require("mongoose");

const colors=require("colors");

const { MONGODB_URI } = process.env;

const connection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);

    console.log("MongoDB Database is connected.".green)
  } catch (error) {
    console.log("Error occurred while connecting to MongoDB Database: ".red, error);

    process.exit(1);
  }
};

module.exports=connection;
