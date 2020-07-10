import { resolve } from "path";

module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5435,
  username: "postgres",
  password: "example",
  database: "one_on_one",
  synchronize: true,
  logging: false,
  entities: [resolve(__dirname, "src/entity/*.ts")],
  migrations: [resolve(__dirname, "src/migration/*.ts")],
  subscribers: [resolve(__dirname, "src/subscriber/*.ts")],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscriberDir: "src/subscriber",
  },
};
