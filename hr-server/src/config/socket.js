import singleChatSocket from "../interface/controllers/singleChatSocket.js";

export class socketConnection {
    constructor(io) {
        this.io = io;
    }

    connect() {
        this.io.on("connection", (socket) => {
            console.log("New client connected:", socket.id);
            try {
                new singleChatSocket(socket, this.io);
                console.log("singleChatSocket instance created successfully.");
            } catch (error) {
                console.error("Error creating singleChatSocket instance:", error);
            }
        });
    }
}
