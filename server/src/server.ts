import express  from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usários')

  response.json([
    'Gabriel',
    'Arthur',
    'Diego',
  ]);
} );

app.listen(3333);