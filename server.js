var express = require('express');
var path = require('path');
var reservations = [];
var waitlist = [];

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/reservations", function(req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.post('/api/reservations', function(req, res) {
    var newReservation = req.body;
    if (reservations.length <= 5) {
        reservations.push(newReservation);
    }
});
    
app.post('/api/waitlist', function(req, rest) {
    if (reservations.length > 5) {
        waitlist.push(newReservation);
    }
});

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`);
})