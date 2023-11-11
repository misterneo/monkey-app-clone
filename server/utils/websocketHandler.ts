import { ServerWebSocket } from "bun";
import { init } from "./helpers";
import { Event, MessageData, User } from "./types";
const { log } = init();

let users: User[] = [];

export const message = function handleMessage(
  ws: ServerWebSocket<{ id: string }>,
  message: string
) {
  if (message.toString() === "ping") {
    ws.send("pong");
    log("Ping");
    return;
  }

  let data: MessageData | null = null;
  try {
    data = JSON.parse(message.toString());
  } catch (error) {
    log("Error parsing JSON:", error);
    return;
  }

  if (!data || !data.id || !data.event) return;

  if (
    (data.event === Event.JOIN || data.event === Event.SKIP) &&
    !users.find((user) => user.id === data?.id)
  ) {
    log(`${data.event} event triggered -`, data.id);
    users.push({ id: data.id, ws });
    matchUsers();
  }
};

export const open = function handleOpen(ws: ServerWebSocket<{ id: string }>) {
  log("Opened connection to:", ws.data.id);
};

export const close = function handleClose(ws: ServerWebSocket<{ id: string }>) {
  users = users.filter((user) => user.ws !== ws);
  log("Closed connection to:", ws.data.id);
};

function matchUsers() {
  while (users.length >= 2) {
    const [user1, user2] = [users.pop(), users.pop()];

    user1?.ws.send(
      JSON.stringify({ event: Event.MATCH, id: user2?.id, isCaller: true })
    );
    user2?.ws.send(
      JSON.stringify({ event: Event.MATCH, id: user1?.id, isCaller: false })
    );
  }

  if (users.length === 1) {
    users[0].ws.send(JSON.stringify({ event: Event.WAITING }));
  }
}
