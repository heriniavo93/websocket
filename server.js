// Require ws module
var webSocket = require("ws")

// Create a server listening on port 8181
var server = new webSocket.Server({port: 8181})

// Store sockets
let sockets = []

server.on("connection", function(socket){
    // Store socket
    sockets.push(socket)
    
    // Send message foreach socket
    socket.on("message", function(msg){
        sockets.forEach(s => s.send(msg))
    })

    // Clean sockets array, when a socket closes or disconnects
    socket.on("close", function(){
        sockets = sockets.filter(s => s !== socket)
    })
})