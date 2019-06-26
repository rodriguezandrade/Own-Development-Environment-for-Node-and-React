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

server.listen(1002, () => null);
