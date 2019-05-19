// require("dotenv").config();
var express = require('express');
var path = require('path');

var app = express()
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitlist = [];
// routing for control panel
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/add", function (req, res) {
    // res.json(reservations)
    console.log("reservations:", reservations)
    console.log("waitlist:", waitlist)
    // res.json(reservations);
    return res.json(reservations.concat(waitlist));
})

//JSON links for table and waitlist
app.post("/api/add", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    console.log("new reservation:", newReservation);
    if (reservations.length < 5) {
        reservations.push(newReservation);
    } else {
        waitlist.push(newReservation);
    }

    // We then display the JSON to the users
    res.json(newReservation);
});

app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
})
