import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePopupComponent } from './purchase-popup.component';

describe('PurchasePopupComponent', () => {
  let component: PurchasePopupComponent;
  let fixture: ComponentFixture<PurchasePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
