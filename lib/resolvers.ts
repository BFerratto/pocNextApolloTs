import { getAccounts, saveAccount } from "../src/services/account";

export const resolvers = {
  Query: {
    account() {
      return getAccounts();
    },
  },
  Mutation: {
    addAccount(_: any, args: { email: string }) {
      return saveAccount(args);
    },
  },
};
