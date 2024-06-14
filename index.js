require("dotenv").config();
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("This is the basic route");
});

app.get("/instagram", (req, res) => {
  res.send("This is instagram home page");
});

app.get("/login", (req, res) => {
  res.send("<h1>This is the Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("This is the Youtube Page");
});
app.listen(process.env.PORT, () => {
  console.log(`Server is Listeing on ${port}`);
});
