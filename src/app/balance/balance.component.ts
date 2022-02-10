import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Receipt } from 'src/receipt';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  ledger: Receipt[] = [];
  balance: number = 0;
  @Output() ledgerEmitter = new EventEmitter<Receipt[]>();

  constructor(private ledgerService: LedgerService) { }

  ngOnInit(): void {
    this.getLedger();
    this.calculateTokenBalance();

    // Send the balance to parent components to avoid duplicate API calls.
    this.ledgerEmitter.emit(this.ledger);
  }

  getLedger(): void {
    this.ledgerService.getLedger()
      .subscribe(ledger => this.ledger = ledger);
  }

  /**
   * Calculate the token balance from the ledger history.
   */
  calculateTokenBalance(): void {
    let balance = 0;
    this.ledger.map(r => balance += r.transaction.tokenAmount);
    this.balance = balance;
  }
}
