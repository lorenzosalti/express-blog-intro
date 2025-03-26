const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {

  console.log('Sto chiamando la Hompage del mio blog')

  res.send('Server del mio blog');

})

app.get('/bacheca', (req, res) => {

  console.log('Sto chiamando la Bacheca del mio blog');

  const posts = [
    {
      titolo: 'Ciambellone',
      contenuto: 'Ricetta: lorem ipsum dolor',
      immagine: 'imgs/ciambellone.jpeg',
      tags: ['#cucina', '#pasticceria', '#ciambellone', '#ricetta']
    },
    {
      titolo: 'Cracker di Barbabietola',
      contenuto: 'Ricetta: lorem ipsum dolor',
      immagine: 'imgs/cracker_barbabietola.jpeg',
      tags: ['#cucina', '#panificazione', '#cracker', '#barbabietola', '#ricetta']
    },
    {
      titolo: 'Pane Fritto',
      contenuto: 'Ricetta: lorem ipsum dolor',
      immagine: 'imgs/pane_fritto_dolce.jpeg',
      tags: ['#cucina', '#pasticceria', '#panefritto', '#ricetta']
    },
    {
      titolo: 'Pasta di Barbabietola',
      contenuto: 'Ricetta: lorem ipsum dolor',
      immagine: 'imgs/pasta_barbabietola.jpeg',
      tags: ['#cucina', '#pastafresca', '#barbabietola', '#ricetta']
    },
    {
      titolo: 'Torta Paesana',
      contenuto: 'Ricetta: lorem ipsum dolor',
      immagine: 'imgs/torta_paesana.jpeg',
      tags: ['#cucina', '#pasticceria', '#torta', '#tortapaesana', '#ricetta']
    }
  ];

  res.json(posts);

})


app.listen(port, () => {
  console.log(`Server in ascolto alla porta ${port}`);
})
