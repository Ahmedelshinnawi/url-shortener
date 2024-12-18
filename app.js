require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGODBURI);
  console.log(`MongoDB Connected: ${connect.connection.host}`);
};
app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(7000, () => {
  connectDB();
  console.log(`Server is Running on Port 7000`);
});
