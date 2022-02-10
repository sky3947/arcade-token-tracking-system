import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: "", redirectTo: "/games", pathMatch: "full" },
  { path: "games", component: GamesComponent },
  { path: "history", component: HistoryComponent },
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
