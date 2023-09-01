const { Server } = require("socket.io");

const io = new Server(8000);

io.on("Connection", (socket) => {
    console.log('Socket Connected ', socket.io);
});