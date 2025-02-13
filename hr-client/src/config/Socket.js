import io from "socket.io-client";

const socket = io(process.env.VITE_APP_BACKEND_HOST );

export default socket;