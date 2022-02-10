import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  showing: boolean = false;
  tokenPurchaseAmount: number = 1;

  constructor() { }

  showPopup(): void {
    this.showing = true;
  }

  hidePopup(): void {
    this.showing = false;
  }

  getPopupStatus(): boolean {
    return this.showing;
  }

  getTokenPurchaseAmount(): number {
    return Math.max(1, this.tokenPurchaseAmount);
  }
}
