require("dotenv").config();
var express = require('express');

var app = express()
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routing for control panel
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

//JSON links for table and table

var table = {

}

var waitlist = {
  
}
app.post("/api/table", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var waitList = req.body;

  console.log();

  // We then add the json the user first 5 to be seated
  characters.push();

  // We then display the JSON to the users
  res.json();
});

app.post("/api/waitlist", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var waitList = req.body;

  console.log();

  // We then add the json the user sent to the waitlist array
  characters.push();

  // We then display the JSON to the users
  res.json();
});
