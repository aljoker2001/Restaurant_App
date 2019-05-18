require("dotenv").config();
var express = require('express');

var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routing for control panel
app.get("/view", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

//JSON links for table and table
fetch("/api/current")
  .then(response => response.json())
  .then(data => {
    let 
  })