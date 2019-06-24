import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

const server = express();
server.use(express.static('dist'));

server.get('/', (request, response) => {
    const tag = ReactDOMServer.renderToString(<App />);

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

server.listen(5000, () => null);