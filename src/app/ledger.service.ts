import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IdlessReceipt, Receipt } from 'src/receipt';
import { LEDGER } from 'src/mocks/mock-ledger';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  constructor() { }

  getLedger(): Observable<Receipt[]> {
    return of(LEDGER);
  }

  nextReceipt(receipt: IdlessReceipt): Receipt {
    return {id: LEDGER.length, ...receipt};
  }

  addReceipt(receipt: Receipt): void {
    LEDGER.push(receipt);
  }
}
