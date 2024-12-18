import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("Request received");
  console.log(req.method);
  console.log(req.url);
  console.log(res.statusCode);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/",(req,res)=>{
  res.send("Hello");
})

app.get("/users",(req,res)=>{
  res.send("Hello users");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
