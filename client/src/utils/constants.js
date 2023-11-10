import Peer from "peerjs";
import { createContext } from "react";

export const debugMode = false;

export const VideoProvider = createContext();

export const peer = new Peer();

export const WS_URL = window.location.href
  .replace("http", "ws")
  .replace("5173", "3000");
export const HEARTBEAT = {
  message: "ping",
  interval: 58000,
  timeout: 120000,
  returnMessage: "pong",
};

export const MESSAGE_EVENTS = {
  MATCH: "match",
  WAITING: "waiting",
  JOIN: "join",
  SKIP: "skip",
};
