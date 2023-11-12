import { Server } from "bun";
import { createId, init } from "./utils/helpers";
import { message, open, close } from "./utils/websocketHandler";
const { port } = init();

const server: Server = Bun.serve<{ id: string }>({
  port: port,
  fetch(req, server) {
    return server.upgrade(req, { data: { id: createId() } })
      ? undefined
      : new Response("Welcome to Monkey App Server 🐵");
  },
  websocket: {
    message,
    open,
    close: (ws) => close(ws, server),
  },
});

console.log(`Listening on http://${server.hostname}:${server.port}`);
console.log(`WebSocket on ws://${server.hostname}:${server.port}`);
