const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

let reservations = []

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routing for default page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'view.html'))
})

// Routing for add
app.get('/add', function (req, res) {
  res.sendFile(path.join(__dirname, 'add.html'))
})

// POST to add 
app.post('/api/reservations', (req, res) => {
  let newReservation = req.body
  reservations.push(newReservation)
  res.json(reservations)
})

// Start express Server
app.listen(PORT, error => {
  if (error) throw error
  console.log(`App listening on ${PORT}`)
})