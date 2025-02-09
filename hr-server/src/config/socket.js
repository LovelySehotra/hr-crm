export class socketConnection {
    constructor(io) {
        this.io = io;
    }

    connect() {
        this.io.on("connection", (socket) => {
            console.log(`A user connected: ${socket.id}`);

            socket.on("sendMessage", (data) => {
                console.log(`Message from ${socket.id}:`, data);
                socket.broadcast.emit("receiveMessage", data); // Broadcast to other clients
            });

            socket.on("disconnect", () => {
                console.log(`User disconnected: ${socket.id}`);
            });
            // socket.on("sendMessage", (data) => {
            //     io.emit("receiveMessage", data);
            // });
        
            // socket.on("disconnect", () => {
            //     console.log("User disconnected");
            // });
        });
    }
}
