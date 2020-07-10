import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Account {
    id: ID!
    email: String!
  }
  type Query {
    account: [Account]
  }
  type Mutation {
    addAccount(email: String!): Account
  }
`;
