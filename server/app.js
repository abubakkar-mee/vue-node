const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")


const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({msg:"welcome from server"})
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
    mongoose.connect("mongodb://localhost:27017/random").then(()=>{
        console.log("database is connected");
    }).catch(e => {
        console.log(e);
    })
})