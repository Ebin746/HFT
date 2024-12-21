const express=require("express");
const app=express();
const dataBaseConnection =require("./mongo/dataBase");
const user=require("./routes/user")
const scholarship=require("./routes/scholarship")
app.use(express.json())


app.use("/user",user);
app.use("/scholarship",scholarship);

app.listen(3000,()=>{
    dataBaseConnection()
    console.log("started on 3000");
})