//POSTMAN BODYPARSER
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get("https://adventofcode.com/2015/day/1/input", (req, res) => {
console.log(req.query)
    // -----> http://localhost:3006/?name=andrei&&age=31
  console.log(req.body)
/*    console.log(req.header)
     console.log(req.params)*/
    res.send("getting root");
/*
    res.status(404).send("not found");
*/
});