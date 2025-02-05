import express from "express";
import errorHandler from "../interface/middleware/error.middleware.js";
import { appRouter } from "../interface/routers/index.js";
import cors from "cors";
import { UPLOADS_PATH } from "../config/index.js";
import { connectionToDB } from "../infrastructure/db.config.js";
import { userDeserializer } from "../interface/middleware/userDeserialiser.js";
import { corsConfig } from "../interface/middleware/cors.js";
import http from "http";
import { Server as IOServer } from "socket.io";
import { socketConnection } from "./socket.js";  

export class Server {
    constructor(config) {
        this.config = config || {};
        this.app = express();
        this.server = http.createServer(this.app);
        this.io = new IOServer(this.server, {
            maxHttpBufferSize: 1e8,
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        // Middleware setup
        this.app.use(express.json({ limit: "10mb" }));
        this.app.use(cors(corsConfig));
        this.app.use(userDeserializer);

        // Routes
        this.app.get("/ping", (req, res) => {
            return res.status(200).json({ message: "pong@@" });
        });

        this.app.use("/api/uploads", express.static(UPLOADS_PATH));
        this.app.use("/api", appRouter);
        this.app.use(errorHandler);

        // Initialize Socket.IO connection
        this.socket = new socketConnection(this.io);
    }

    start() {
        const port = this.config.port || 8000;

        this.server.listen(port, (err) => {
            if (err) {
                console.error(`Failed to start server: ${err.message}`);
                process.exit(1);
            } else {
                connectionToDB();
                console.log(`Server is running at http://localhost:${port}`);
                this.socket.connect();  
            }
        });
    }
}
