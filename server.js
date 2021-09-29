// ========== IMPORT DEPENDENCIES ==========
const express = require('express');
const morgan = require("morgan")
const app = express();
const port = 3000
const methodOverride = require('method-override')
const mongoose = require("mongoose")
const Pokemon = require('./models/pokemon.js');

// ========== MIDDLEWARE ==========



// ========== ROUTES ==========
// INDEX
app.get('/pokemon/', (req, res) => {
    res.render('index.ejs', { data: Pokemon});
});

// NEW
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {})

})

// CREATE
app.post("/pokemon", (req, res) => {

})

// EDIT

// DESTROY

// UPDATE

// SHOW
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// ========= LISTENER ==========
app.listen(port, () => {
    console.log(`listening on port: ${port}`)

})
