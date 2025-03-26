const express = require('express');
const posts = require('./data/posts.js');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {

  console.log('Sto chiamando la Hompage del mio blog');

  res.send('Server del mio blog');

});


app.get('/bacheca', (req, res) => {

  console.log('Sto chiamando la Bacheca del mio blog');

  res.json(posts);

});


app.listen(port, () => {

  console.log(`Server in ascolto alla porta ${port}`);

});
