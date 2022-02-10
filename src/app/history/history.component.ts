import { Component, OnInit } from '@angular/core';
import { Receipt } from 'src/receipt';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  // Receives the ledger from the child BalanceComponent.
  ledger: Receipt[] = [];
  tokensPurchased: number = 0;
  tokensSpent: number = 0;

  constructor(private popupService: PopupService) { }

  ngOnInit(): void {
  }

  grabLedger(ledger: Receipt[]): void {
    this.ledger = ledger;
    this.calculateTokensHistory();
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
}
