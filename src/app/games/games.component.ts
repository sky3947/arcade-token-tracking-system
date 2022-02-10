import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game';
import { GamesService } from '../games.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor(
    private gamesService: GamesService,
    private popupService: PopupService,
  ) { }

  ngOnInit(): void {
    this.getGames();
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
}
