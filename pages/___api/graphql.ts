import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../lib/schema";
import { ensureConnection } from "../../src/ensureConnection";
export const config = {
  api: {
    bodyParser: false,
  },
};
export default async function startServer(req: any, res: any) {
  await ensureConnection();
  const apolloServer = new ApolloServer({ schema });
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
