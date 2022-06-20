import { execSync } from "child_process";

import { PORT } from "./env-variables.js";

export function killPort() {
  try {
    const isPortBusy = execSync(`lsof -i:${PORT}`);

    if (isPortBusy) {
      console.log(`Killing process on port ${PORT}`);
      const stdout = execSync(`npx kill-port ${PORT}`);
      console.log(`${stdout}`);
    }
  } catch {
    console.log(`Port ${PORT} is free`);
  }
}
