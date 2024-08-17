/*
 * Title: upcoming monitoring application
 * Description: A Restful   API for monitoring up to down time of user defined links.
 * Author: Bikrom Roy (@bikrom2001)
 * Date: 8/14/2024
 *
 */

// dependencies
const http = require('http');
const url = require('url');
const { StringDecoder } = require('string_decoder');

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

// Create a server
app.createServer = () => {
  const server = http.createServer(app.handleRequest);
  server.listen(app.config.port, () => {
    console.log(`listening on ${app.config.port}`);
  });
};

// handle Request response
app.handleRequest = (req, res) => {
  // Request handling function
  // get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headerObject = req.headers;

  const decoder = new StringDecoder('utf-8');
  let realData = '';
  req.on('data', (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on('end', () => {
    realData += decoder.end();
    console.log(realData);
    // response handler
    res.end('Hello World');
  });
};

// start the server
app.createServer();
