import { ServerWebSocket } from "bun";

export enum Event {
  JOIN = "join",
  SKIP = "skip",
  MATCH = "match",
  WAITING = "waiting",
}

export interface User {
  id: string;
  ws: ServerWebSocket<unknown>;
}
