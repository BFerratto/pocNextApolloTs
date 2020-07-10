import { createServer } from "http";
import next from "next";
import { parse } from "url";
import { ensureConnection } from "./ensureConnection";
import getGraphqlHandler from "./getGraphqlHandler";

const port = parseInt(process.env.PORT || "3000", 10);

async function startServer() {
  await ensureConnection();
  const handleGraphql = await getGraphqlHandler();
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev });
  const handle = app.getRequestHandler();
  await app.prepare();
  createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    const { pathname } = parsedUrl;
    if (pathname === "/api/graphql") {
      handleGraphql(req, res);
      return;
    }
    handle(req, res, parsedUrl);
  }).listen(port);
}

startServer().then(() => {
  console.log(`> Server listening at http://localhost:${port}`);
});
