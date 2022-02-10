import { Component, Input, OnInit, SimpleChanges, } from '@angular/core';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  // @Input() ledger: Receipt[] = [];
  @Input() balance: number = 0;

  constructor(
    private popupService: PopupService,
  ) { }

  ngOnInit(): void { }

  showPopup(): void {
    this.popupService.showPopup();
  }
}
