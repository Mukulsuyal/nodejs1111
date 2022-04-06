const express = require("express");
require("./db/conn");
const router = require("./routers/getstud");
const router1 = require("./routers/createstud");
const router2 = require("./routers/updatestud");
const router3 = require("./routers/deletestud");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(router);
app.use(router1);
app.use(router2);
app.use(router3);

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})