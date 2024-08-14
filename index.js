/*
 * Title: upcoming monitoring application
 * Description: A Restful   API for monitoring up to down time of user defined links.
 * Author: Bikrom Roy (@bikrom2001)
 * Date: 8/14/2024
 *
 */

// dependencies
const http = require('http');

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
  // response handler
  res.end('Hello World');
};

// start the server
app.createServer();
