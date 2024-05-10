// Create client websocket
var clientSocket = new WebSocket("ws://localhost:8181")


// Connection opened
clientSocket.addEventListener("open", (event) => {
    clientSocket.send("Hello Server!");
});


// Listen for messages
clientSocket.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
});