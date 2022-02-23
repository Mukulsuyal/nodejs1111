const mongoose = require("mongoose");


//connection creation new database
mongoose.connect("mongodb://localhost:27017/Student-api",
{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=>console.log("connection succesful"))
.catch((err)=>console.log("no connection"));