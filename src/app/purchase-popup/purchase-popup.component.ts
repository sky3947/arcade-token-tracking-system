import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopupService } from '../popup.service';
import { PATH_HISTORY } from '../app-routing.module';

@Component({
  selector: 'app-purchase-popup',
  templateUrl: './purchase-popup.component.html',
  styleUrls: ['./purchase-popup.component.css']
})
export class PurchasePopupComponent implements OnInit {
  tokenPurchaseAmount: number = 1;

  constructor(
    private popupService: PopupService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onPurchase(): void {
    this.tokenPurchaseAmount = Math.max(1, this.tokenPurchaseAmount);
    console.log(`purchased ${this.tokenPurchaseAmount} tokens`);
    this.popupService.hidePopup();
    // this.router.navigate([`/${PATH_HISTORY}`]);
  }
}
