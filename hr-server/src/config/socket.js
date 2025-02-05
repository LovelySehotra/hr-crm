export class socketConnection {
    constructor(io) {
        this.io = io;
    }

    connect() {
        this.io.on("connection", (socket) => {
            console.log(`A user connected: ${socket.id}`);

            socket.on("message", (data) => {
                console.log(`Message from ${socket.id}:`, data);
                socket.broadcast.emit("message", data); // Broadcast to other clients
            });

            socket.on("disconnect", () => {
                console.log(`User disconnected: ${socket.id}`);
            });
        });
    }
}
