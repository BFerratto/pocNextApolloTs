import { ApolloServer } from "apollo-server-micro";
import { schema } from "../lib/schema";

export default function getGraphqlHandler() {
  const path = "/api/graphql";
  const apolloServer = new ApolloServer({ schema });
  return apolloServer.createHandler({ path });
}
