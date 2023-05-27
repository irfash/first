const express = require("express");


const app = express();

app.get("/",(req,res)=>{
    res.write("<h1>Writing code on codespaces</h1>");
    res.write("<h2>Hello World</h2>");
    res.end();
    
})


app.listen(3000,()=>{
console.log("I am running ");

})
