import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryUpdateReportComponent } from './inventory-update-report.component';

describe('InventoryUpdateReportComponent', () => {
  let component: InventoryUpdateReportComponent;
  let fixture: ComponentFixture<InventoryUpdateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryUpdateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryUpdateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
