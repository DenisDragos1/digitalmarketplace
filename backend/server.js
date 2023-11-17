const express=require("express");

const app=express();
app.use(cors({
    origin: ["http://localhost:5173"],
    methods:["POST","GET"],
    credentials: true 
  }));
 
app.listen(8081,()=>{
    console.log("listtening on port 8081");
})