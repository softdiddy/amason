const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require('./models/User');

dotenv.config();
const app = express();

mongoose.connect(
  process.env.DATABASE,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//api call
const productRouter= require("./routes/Product");
const categoryRouter= require("./routes/Catigory");
const ownerRouter= require("./routes/Owner");

app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", ownerRouter);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started on port 5000");
  }
});
