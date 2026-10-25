import { spawnSync } from "node:child_process";

const result = spawnSync(process.platform === "win32" ? "cmd.exe" : "npm", process.platform === "win32" ? ["/d", "/s", "/c", "npm.cmd --workspace @mystery/api run seed"] : ["--workspace", "@mystery/api", "run", "seed"], { stdio: "inherit" });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;


