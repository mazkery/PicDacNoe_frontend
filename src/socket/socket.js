import socketIOClient from "socket.io-client";
const ENDPOINT = "https://protected-dusk-54874.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);

export default socket;
