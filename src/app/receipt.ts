import { Transaction } from "../transaction";

export interface Receipt {
  id: number;
  date: number;
  transaction: Transaction;
  info: string;
}

export interface IdlessReceipt {
  date: number;
  transaction: Transaction;
  info: string;
}