import { io } from 'socket.io-client';

const HOST = 'localhost';
const PORT = 5000;
const NAMESPACE = 'viv';

const socket = io(`http://${HOST}:${PORT}/${NAMESPACE}`, {
  path: `/socket.io`,  // handshake path
  reconnect: true,
});

console.log('socket.io-test')

socket.on('connect', () => {
  console.log('connected', socket.id)
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.on('error', (error) => {
  console.log(error);
});
