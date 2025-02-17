import io from "socket.io-client";

const socket = io(import.meta.env.VITE_PUBLIC_BASE_URI);

export default socket;