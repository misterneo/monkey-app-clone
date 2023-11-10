function parseArgs(args: string[]) {
  const map = new Map();
  for (let i = 0; i < args.length; i++) {
    try {
      const arg = args[i];
      if (arg.startsWith("--")) {
        const key = arg.slice(2);
        const value = args[i + 1];
        if (!value || value.startsWith("--")) {
          map.set(key, true);
        } else {
          map.set(key, value);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
  return map;
}

export function init() {
  const args = parseArgs(Bun.argv);

  const debugMode = false || args.get("debug");
  const port = parseInt(args.get("port")) || "3000";

  function log(...args: unknown[]) {
    if (debugMode) {
      console.log(new Date().toLocaleTimeString(), "-", ...args);
    }
  }

  return { log, port };
}

export function createId() {
  return Array(4)
    .fill("")
    .map(() => Math.random().toString(36).slice(-5))
    .join("-");
}
