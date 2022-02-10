import { Component, Input, OnInit } from '@angular/core';

import { PopupService } from '../popup.service';
import { PurchasePoint } from '../purchase-point';

@Component({
  selector: 'app-purchase-popup',
  templateUrl: './purchase-popup.component.html',
  styleUrls: ['./purchase-popup.component.css']
})
export class PurchasePopupComponent implements OnInit {
  @Input() purchasePoint!: PurchasePoint;

  constructor(
    public popupService: PopupService,
  ) { }

  ngOnInit(): void {
  }

  onPurchase(): void {
    this.popupService.hidePopup();
    this.purchasePoint.purchaseTokens();
  }

  onCancel(): void {
    this.popupService.hidePopup();
  }
}
