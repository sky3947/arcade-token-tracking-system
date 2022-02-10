import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { BalanceComponent } from './balance/balance.component';
import { AppRoutingModule } from './app-routing.module';
import { HistoryComponent } from './history/history.component';
import { AbsPipe } from './abs.pipe';
import { PurchasePopupComponent } from './purchase-popup/purchase-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    BalanceComponent,
    HistoryComponent,
    AbsPipe,
    PurchasePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
