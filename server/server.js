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

const productRouter= require("./routes/Product")
app.use("/api", productRouter);

app.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server started on port 5000");
  }
});
