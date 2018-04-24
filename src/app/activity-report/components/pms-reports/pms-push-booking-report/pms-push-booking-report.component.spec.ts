import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsPushBookingReportComponent } from './pms-push-booking-report.component';

describe('PmsPushBookingReportComponent', () => {
  let component: PmsPushBookingReportComponent;
  let fixture: ComponentFixture<PmsPushBookingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsPushBookingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsPushBookingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
