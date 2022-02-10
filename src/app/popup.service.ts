import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  showing: boolean = false;

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
}
