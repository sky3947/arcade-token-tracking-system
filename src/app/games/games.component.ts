import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game';
import { GamesService } from '../games.service';
import { LedgerService } from '../ledger.service';
import { PopupService } from '../popup.service';
import { PurchasePoint } from '../purchase-point';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent extends PurchasePoint implements OnInit {
  games: Game[] = [];
  balance: number = 0;

  constructor(
    private gamesService: GamesService,
    ledgerService: LedgerService,
    popupService: PopupService,
  ) {
    super(ledgerService, popupService);
  }

  ngOnInit(): void {
    this.getGames();
    this.loadLedger();
    this.calculateTokenBalance();
  }

  getGames(): void {
    this.gamesService.getGames()
      .subscribe(games => this.games = games);
  }

  showPopup(): void {
    this.popupService.showPopup();
  }

  hidePopup(): void {
    this.popupService.hidePopup();
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
  }
}
