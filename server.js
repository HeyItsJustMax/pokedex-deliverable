const express = require('express');
const app = express();
const port = 3000
// const Pokemon = require('../models/pokemon.js');

// ========== MIDDLEWARE ==========

// ========== ROUTES ==========
// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: Pokemon });
});


// SHOW
app.get('/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id] });
});

// ========= LISTENER ==========
app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})
