import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcPriceReportComponent } from './arc-price-report.component';

describe('ArcPriceReportComponent', () => {
  let component: ArcPriceReportComponent;
  let fixture: ComponentFixture<ArcPriceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcPriceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcPriceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
