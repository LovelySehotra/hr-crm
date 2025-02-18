import io from "socket.io-client";

const socket = io(import.meta.env.VITE_APP_BACKEND_HOST);
// console.log(import.meta.env.VITE_PUBLIC_BASE_URI)
export default socket;