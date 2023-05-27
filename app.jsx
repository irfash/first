const express = require("express");


const app = express();

app.get("/",(req,res)=>{
    res.write("Writing code on codespaces");
    res.write("Hello World");
    res.end();
    
})


app.listen(3000,()=>{
console.log("I am running ");

})
