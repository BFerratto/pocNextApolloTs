import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Account {
    id: ID!
    email: String!
  }
  type Query {
    viewer: User!
    account: [Account]
  }
`;
