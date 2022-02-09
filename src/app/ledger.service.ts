import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Receipt } from 'src/receipt';
import { LEDGER } from 'src/mocks/mock-ledger';

@Injectable({
  providedIn: 'root'
})
export class LedgerService {

  constructor() { }

  getLedger(): Observable<Receipt[]> {
    return of(LEDGER);
  }
}
