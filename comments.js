// create web server
const express = require('express');
const app = express();

// create server
const http = require('http');
const server = http.createServer(app);

// create socket server
const socket = require('socket.io');
const io = socket(server);

// set view engine to ejs
app.set('view engine', 'ejs');

// set public folder to serve static files
app.use(express.static('public'));

// create a variable to store comments
let comments = [];

// listen to the connection event
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('loadComments', comments);
    socket.on('comment', (data) => {
        comments.push(data);
        io.emit('comment', data);
    });
});

// listen to the port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});