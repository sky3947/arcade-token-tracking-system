import { Transaction } from "./transaction";

export interface Receipt {
  id: number;
  date: number;
  transaction: Transaction;
  info: string;
}