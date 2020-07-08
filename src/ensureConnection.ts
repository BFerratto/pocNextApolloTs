import "reflect-metadata";
import { createConnection, getConnectionManager } from "typeorm";

export async function ensureConnection() {
  const connectionManager = getConnectionManager();
  if (!connectionManager.has("default")) {
    await createConnection();
  }
}
