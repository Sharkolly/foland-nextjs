
// utils/socket.ts
import { io, Socket } from "socket.io-client";
// import { UseStore } from "../Context/Store";

let socket: Socket;

const token = localStorage.getItem("token");
if (!token) {
//   throw new Error("I need token");
}

export const getSocket = () => {
  if (socket && socket.connected) {
    return socket;
  };
  if (!socket) {
    socket = io(
      "https://foland-realty-server.onrender.com/"
      // "http://localhost:3001"
      , {
        auth: {
          token: token,
        },
      }); // use your backend URL
  };
  return socket;
};
