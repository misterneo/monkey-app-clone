import { debugMode } from "./constants";

export function log(...args) {
  if (debugMode) {
    console.log(...args);
  }
}
