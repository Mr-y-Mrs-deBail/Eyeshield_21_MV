const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
    socket.on('message', message => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});


