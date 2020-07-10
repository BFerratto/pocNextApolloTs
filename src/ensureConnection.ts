import "reflect-metadata";
import {
  createConnection,
  getConnectionManager,
  getConnectionOptions,
} from "typeorm";
import { resolve } from "path";

export async function ensureConnection(name = "default") {
  const connectionManager = getConnectionManager();

  if (!connectionManager.has(name)) {
    const connOptions = await getConnectionOptions("default");
    console.log(JSON.stringify({ connOptions }, null, 4));
    await createConnection({
      ...connOptions,
      name,
      entities: [resolve(__dirname, "dist/entity/*{.ts,.js}")],
      migrations: [resolve(__dirname, "dist/migration/*{.ts,.js}")],
      subscribers: [resolve(__dirname, "dist/subscriber/*{.ts,.js}")],
    });
  }
}
