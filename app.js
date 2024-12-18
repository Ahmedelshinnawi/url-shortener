require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index");
});

app.listen(7000, () => {
  console.log(`Server is Running on Port 7000`);
});
