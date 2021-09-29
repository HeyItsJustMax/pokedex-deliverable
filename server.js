const express = require('express');
const app = express();
const port = 3000
const methodOverride = require('method-override')
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
