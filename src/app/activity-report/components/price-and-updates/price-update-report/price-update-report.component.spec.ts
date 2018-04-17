import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceUpdateReportComponent } from './price-update-report.component';

describe('PriceUpdateReportComponent', () => {
  let component: PriceUpdateReportComponent;
  let fixture: ComponentFixture<PriceUpdateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceUpdateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceUpdateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
