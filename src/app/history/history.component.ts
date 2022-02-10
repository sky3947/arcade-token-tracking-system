import { Component, OnInit } from '@angular/core';
import { LedgerService } from '../ledger.service';
import { PopupService } from '../popup.service';
import { PurchasePoint } from '../purchase-point';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent extends PurchasePoint implements OnInit {
  balance: number = 0;
  tokensPurchased: number = 0;
  tokensSpent: number = 0;

  constructor(
    ledgerService: LedgerService,
    popupService: PopupService,
  ) {
    super(ledgerService, popupService)
  }

  ngOnInit(): void {
    this.loadLedger();
    this.calculateTokensHistory();
    this.calculateTokenBalance();
  }

  calculateTokensHistory(): void {
    let purchased = 0;
    let spent = 0;
    this.ledger.map(r => {
      let amt = r.transaction.tokenAmount
      if (amt > 0) {
        purchased += amt;
      } else {
        spent += amt;
      }
    });

    this.tokensPurchased = purchased;
    this.tokensSpent = spent;
  }

  getPopupStatus(): boolean {
    return this.popupService.getPopupStatus();
  }

  calculateTokenBalance(): void {
    let balance = 0;
    this.ledger.map(r => balance += r.transaction.tokenAmount);
    this.balance = balance;
  }

  /**
   * Overrides updateValues() in PruchasePoint.
   */
  override updateValues(): void {
      this.calculateTokenBalance();
      this.calculateTokensHistory();
  }
}
