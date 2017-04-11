import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/Main';
import template from './template';

const server = express();
const port = 7998;

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} location={req.url} />);
  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});

server.get('/about', (req, res) => {
  const isMobile = true;
  const initialState = { isMobile };
  const appString = renderToString(<App {...initialState} location={req.url} />);
  res.send(template({
    body: appString,
    title: 'Hello World from the server',
    initialState: JSON.stringify(initialState)
  }));
});

server.listen(port);
console.log(`listening on port - ${port}`);
