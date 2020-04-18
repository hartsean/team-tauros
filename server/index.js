const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io');

require('dotenv').config();
const { apiRouter } = require('./api');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection',socket => {
  console.log('new connection made!');
});

const PORT = process.env.RDS_PORT || 8080;
const CLIENT_PATH = path.join(__dirname, '../client/dist');

app.use(express.json());
app.use('/api', apiRouter);
app.use(express.static(CLIENT_PATH));

server.listen(PORT, () => {
  console.log(`Listening on :${PORT} 🚀`);
});

module.exports = {
  app,
};