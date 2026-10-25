import mongoose from "mongoose";
import { app } from "./app.js";
import { config } from "./config/index.js";
import { startWorker, stopWorker } from "./modules/generation/worker.js";

await mongoose.connect(config.MONGODB_URI);
const server=app.listen(config.PORT,()=>{console.log(`AI Mystery Room API listening on http://localhost:${config.PORT}`);startWorker();});
const shutdown=async()=>{stopWorker();server.close(()=>{void mongoose.disconnect().finally(()=>process.exit(0));});};
process.on("SIGINT",()=>void shutdown());process.on("SIGTERM",()=>void shutdown());
