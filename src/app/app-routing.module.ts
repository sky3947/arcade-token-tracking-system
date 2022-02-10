import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { HistoryComponent } from './history/history.component';

export const PATH_GAMES = "games";
export const PATH_HISTORY = "history";

const routes: Routes = [
  { path: "", redirectTo: `/${PATH_GAMES}`, pathMatch: "full" },
  { path: PATH_GAMES, component: GamesComponent },
  { path: PATH_HISTORY, component: HistoryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
