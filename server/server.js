const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");


const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));


//request
app.get("/", (req, res) => {
    res.json("Hello from get request");
});


app.post("/", (req, res) => {
    console.log(req.body.name);
});


app.listen(5000, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Server started on port 5000");
    }
   
});