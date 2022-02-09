import { Component, OnInit } from '@angular/core';
import { Game } from 'src/game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  games: Game[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
