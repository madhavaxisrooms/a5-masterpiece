import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAndPriceAvailabilityReportComponent } from './inventory-and-price-availability-report.component';

describe('InventoryAndPriceAvailabilityReportComponent', () => {
  let component: InventoryAndPriceAvailabilityReportComponent;
  let fixture: ComponentFixture<InventoryAndPriceAvailabilityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAndPriceAvailabilityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAndPriceAvailabilityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
