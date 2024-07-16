import { io } from 'socket.io-client';

const HOST = 'localhost';
const PORT = 5500;
const NAMESPACE = '';

const socket = io(`http://${HOST}:${PORT}/${NAMESPACE}`, {
  path: `/socket.io`,  // handshake path
  reconnect: true,
});

console.log('socket.io-test')

socket.on('connect', () => {
  console.log('connected, id=', socket.id)
});

socket.onAny((event, ...args) => {
  console.log('received event:', event, args);
});

socket.on("disconnect", () => {
  console.log(socket.id); // undefined
});

socket.on('error', (error) => {
  console.log(error);
});
