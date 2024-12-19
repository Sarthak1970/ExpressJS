import express from "express";

const app = express(14);
const port=3000;

let date= new Date();
let day=date.getDay();

app.get("/",(req,res)=>{
    if(day===0 || day===6){
        res.render("index.ejs",{
        daytype:"A Weekend",
        advice:"You should relax"
        });
        }
    else{
        res.render("index.ejs",{
        daytype:"A Weekday ",
        advice:"You should go to work"
        });
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})