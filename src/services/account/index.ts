import { Account } from "../../entity/Account";

export async function getAccounts() {
  const accounts = await Account.find();
  return accounts;
}

export async function saveAccount({ email }: { email: string }) {
  const createdAccount = new Account();
  createdAccount.email = email;
  await createdAccount.save();
  return createdAccount;
}
