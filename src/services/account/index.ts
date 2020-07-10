import { Account } from "../../entity/Account";

export async function getAccounts() {
  const accounts = await Account.find();
  console.log(accounts);
  return accounts;
}
