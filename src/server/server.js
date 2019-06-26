import express from 'express';
import React from 'react'; 
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (request, response) => {
    const tag =  <App /> ;

    response.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="helloWorld">${tag}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

<<<<<<< HEAD
server.listen(5002, () => null);
=======
server.listen(5001, () => null);
>>>>>>> 58682e094ba2a140b72a620572b5654e52da633a
