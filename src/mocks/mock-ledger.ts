import { Receipt } from "../receipt";

export const LEDGER: Receipt[] = [
  {
    id: 0,
    date: 0,
    transaction: {dollarAmount: 1.25, tokenAmount: 5},
    info: "Card Refill"
  },
  {
    id: 1,
    date: 100000,
    transaction: {dollarAmount: 0, tokenAmount: -4},
    info: "Sonic Adventure Game"
  },
  {
    id: 2,
    date: 200000,
    transaction: {dollarAmount: 2.5, tokenAmount: 10},
    info: "Card Refill"
  },
  {
    id: 3,
    date: 300000,
    transaction: {dollarAmount: 0, tokenAmount: -4},
    info: "Sonic Adventure Game"
  },
  {
    id: 4,
    date: 400000,
    transaction: {dollarAmount: 0, tokenAmount: -4},
    info: "Sonic Adventure Game"
  },
]