import { spawnSync } from "node:child_process";

for (const script of ["typecheck", "build"]) {
  const result = spawnSync(process.platform === "win32" ? "cmd.exe" : "npm", process.platform === "win32" ? ["/d", "/s", "/c", `npm.cmd run ${script}`] : ["run", script], { stdio: "inherit" });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}


