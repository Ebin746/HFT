const express=require("express");
const app=express();
require('dotenv').config();
const cors=require("cors");
const dataBaseConnection =require("./mongo/dataBase");

const user=require("./routes/user")
const scholarship=require("./routes/scholarship")
const aiChat=require("./routes/ai");


app.use(cors({
    origin: "http://localhost:5173",             // If cookies or credentials are involved
  }));
app.use(express.json())


app.use("/user",user);
app.use("/scholarship",scholarship);
app.use("/ai", aiChat);

app.listen(3000,()=>{
    dataBaseConnection()
    console.log("started on 3000");
})