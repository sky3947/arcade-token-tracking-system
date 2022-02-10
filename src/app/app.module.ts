import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { BalanceComponent } from './balance/balance.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { AbsPipe } from './abs.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    BalanceComponent,
    HistoryComponent,
    AbsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
