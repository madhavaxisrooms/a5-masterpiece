import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcInventoryAvailabilityReportComponent } from './arc-inventory-availability-report.component';

describe('ArcInventoryAvailabilityReportComponent', () => {
  let component: ArcInventoryAvailabilityReportComponent;
  let fixture: ComponentFixture<ArcInventoryAvailabilityReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcInventoryAvailabilityReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcInventoryAvailabilityReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
