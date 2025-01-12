import express from "express";
import errorHandler from "../interface/middleware/error.middleware.js";
import { appRouter } from "../interface/routers/index.js";
import cors from "cors"
import { UPLOADS_PATH,FRONTEND} from "../config/index.js"
import { connectionToDB } from "../infrastructure/db.config.js";
import { userDeserializer } from "../interface/middleware/userDeserialiser.js";
import { corsConfig } from "../interface/middleware/cors.js";

export class Server {
    constructor(config) {
        this.config = config || {};
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors(corsConfig));
        this.app.use(userDeserializer)
        this.app.get("/ping", (req, res) => {
            return res.status(200).json({ message: "pong@@" })
        });
        this.app.use("/api/uploads", express.static(UPLOADS_PATH));
        this.app.use("/api", appRouter);
        this.app.use(errorHandler);

    }

    start() {
       
        const port = this.config.port || 8000;
        
        this.app.listen(port, (err) => {

            if (err) {
                console.error(`Failed to start server: ${err.message}`);
                process.exit(1);
            } else {
                connectionToDB()
                console.log(`Server is running at http://localhost:${port}`);
            }
        });
    }
}