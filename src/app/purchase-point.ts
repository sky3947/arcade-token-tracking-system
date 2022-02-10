import { Receipt } from "src/receipt";
import { LedgerService } from "./ledger.service";
import { PopupService } from "./popup.service";

export class PurchasePoint {
  ledger: Receipt[] = [];
  protected ledgerService;
  protected popupService;

  constructor(
    ledgerService: LedgerService,
    popupService: PopupService,
  ) {
    this.ledgerService = ledgerService;
    this.popupService = popupService;
  }

  purchaseTokens(): void {
    let purchaseAmount = this.popupService.getTokenPurchaseAmount();
    let receipt = this.ledgerService.nextReceipt({
      date: Date.now(),
      transaction: { dollarAmount: purchaseAmount * .25, tokenAmount: purchaseAmount },
      info: "Card Refill",
    });
    this.ledgerService.addReceipt(receipt);
    this.updateValues();
  }

  loadLedger(): void {
    this.ledgerService.getLedger()
      .subscribe(ledger => this.ledger = ledger);
  }

  updateValues(): void { }
}