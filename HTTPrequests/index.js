import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
    console.log(req.rawHeaders);
})

app.get("/about",(req,res)=>{
    res.send("<h1>About Me</h1>");
    console.log(req.rawHeaders);
})

app.listen(port,()=>{
  console.log(`Server running on port ${port}.`);
});


