import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Game } from 'src/game';
import { GAMES } from 'src/mocks/mock-games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getGames(): Observable<Game[]> {
    return of(GAMES);
  }
}
