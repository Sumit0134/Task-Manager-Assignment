const express=require("express");

const app=express();

const {ServerConfig, DatabaseConfig}=require("./config");

const auth=require("./routes/auth");
const todo=require("./routes/todo")

app.use(express.json());

DatabaseConfig();

app.get("/", (req, res)=>{
    res.send("Welcome to the backend of Task Manager App.");
})

app.use("/api/v1", auth)
app.use("/api/v2", todo)

app.listen(ServerConfig.PORT, ()=>{
    console.log(`${ServerConfig.APP_NAME}`.yellow + ` is running on port: `.green + `${ServerConfig.PORT}`.cyan);
});


