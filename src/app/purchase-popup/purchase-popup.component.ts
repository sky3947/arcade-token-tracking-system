import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopupService } from '../popup.service';
import { LedgerService } from '../ledger.service';

@Component({
  selector: 'app-purchase-popup',
  templateUrl: './purchase-popup.component.html',
  styleUrls: ['./purchase-popup.component.css']
})
export class PurchasePopupComponent implements OnInit {
  tokenPurchaseAmount: number = 1;

  constructor(
    private popupService: PopupService,
    private ledgerService: LedgerService,
  ) { }

  ngOnInit(): void {
  }

  onPurchase(): void {
    this.tokenPurchaseAmount = Math.max(1, this.tokenPurchaseAmount);
    this.popupService.hidePopup();
    this.ledgerService.addReceipt({
      date: Date.now(),
      transaction: {dollarAmount: this.tokenPurchaseAmount * .25, tokenAmount: this.tokenPurchaseAmount},
      info: "Card Refill",
    });
  }
}
