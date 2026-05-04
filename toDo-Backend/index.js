require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require('fs');
const { log } = require("console");
const app = express();
app.use(cors());
app.use(express.json());
let todos = [];
app.post("/login",(req,res)=>
{
    const data = req.body;
    const user_data = JSON.parse(fs.readFileSync("__dirname"+"/user.txt").toString());
    console.log(data);
    

})
app.get("/todos", (req, res) => {
    res.json(todos);
});
app.post("/addtodos", (req, res) => {
    console.log(req.body);
    const newtodo = {
        id : Date.now(),
        text : req.body.iptodo,
        completed : false,
    }
    todos.push(newtodo);
    res.json(todos);
});
app.patch("/completeTask/:id",(req,res)=>{
    const id = req.params.id;
    const index = todos.findIndex(todo=>todo.id==id);
    todos[index].completed = req.body.completed;
    res.json(todos);
});
app.delete("/deleteTask/:id",(req,res)=>
{
    const id = req.params.id;
    const index = todos.findIndex(todo => todo.id == id);
    console.log(index);
    todos.splice(index,1);
    res.json(todos);
})
app.listen(process.env.PORT, () => {
    console.log(`Server Running at Port ${process.env.PORT}..`);
});