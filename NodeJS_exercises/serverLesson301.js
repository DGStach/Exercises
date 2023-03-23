const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("getting root");
})
app.get("/profile", (req, res)=>{
    res.send("getting profile");
})
app.post("/profile", (req, res)=>{
    const user ={
        name:"Sally",
        job: "doctor"}
    res.send(user);
})
app.listen(3000);