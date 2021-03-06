const express = require('express')
const path = require('path');
const app = express()
var cors = require('cors')

app.use(cors())

const port = 7777
var state = false;
var energyLevel = 0;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/state', (req, res) => {
    res.send(state)
})

app.get('/images/:id*', (req, res) => {
    res.sendFile(path.join(__dirname, 'images', req.params.id))
})

app.get('/changeState', (req, res) => {
    console.log(req.query.value);
    if ('activate' == req.query.value) state = true;
    else state = false;
    // res.sendFile(path.join(__dirname, 'index.html'))
    res.send(req.query.value)
})

app.get('/setEnergyLevel', (req, res) => {
    energyLevel = req.query.value;
    res.send(energyLevel)
})

app.get('/getEnergyLevel', (req, res) => {
    res.send(energyLevel)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})