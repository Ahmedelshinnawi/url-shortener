require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Url = require("./models/urlModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const connectDB = async () => {
  const connect = await mongoose.connect(process.env.MONGODBURI);
  console.log(`MongoDB Connected: ${connect.connection.host}`);
};

app.get("/", async (req, res) => {
  try {
    const urls = await Url.find();
    res.render("index", { urls });
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

app.post("/shorten", async (req, res) => {
  try {
    const url = await Url.create({ fullUrl: req.body.fullUrl });
    url.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const shortUrl = req.params.id;
    const url = await Url.findOne({ shortUrl });
    if (!url) return res.status(404).send("URL Not Found");

    res.redirect(url.fullUrl);
  } catch (err) {
    console.log(err);
  }
});

app.listen(7000, () => {
  connectDB();
  console.log(`Server is Running on Port 7000`);
});
