import { PORT,Server} from "./config/index.js"

const server = new Server({
    port:PORT
})
server.start()