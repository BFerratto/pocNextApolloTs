import { getAccounts } from "../src/services/account";

export const resolvers = {
  Query: {
    account() {
      return getAccounts();
    },
  },
};
