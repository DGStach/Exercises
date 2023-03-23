const fs = require("fs");

fs.readFile('./hello.txt', (err,data)=>{
    console.time("time");
    if(err){
        console.log("err");
    }
    console.log("Asyc", data.toString());
    console.timeEnd("time");
})

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString())

//APPEND - add text for the hello file in each execution
/*
fs.appendFile("./hello.txt", "Add text for file -- This is sooo cool", err=>{
    if(err){
        console.log(err)}
})*/


// WRITE - this lines of code creates bye.txt file and puts Sad to see you go
/*
fs.writeFile("bye.txt", "Sad to see you go", err =>{
    if (err){
        console.log(err)
    }
})*/

// DELETE - file bye.txt and trow error if any problems
fs.unlink("./bye.txt", err=>{
    if(err){
        console.log(err)
    }
    console.log("Inception")
})
