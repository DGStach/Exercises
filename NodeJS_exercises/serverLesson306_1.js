
const express = require("express");
const app = express();

const a = app.use(express.static(__dirname + '/public'))
app.listen(3006);