require("dotenv").config();
const handler = require('./api/index.js');
const http = require('http');

const server = http.createServer(async (req, res) => {
  req.url = req.url || '/';
  await handler(req, res);
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
  console.log('Environment:', process.env.NODE_ENV || 'development');
});
