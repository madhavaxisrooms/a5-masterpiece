import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPriceReportComponent } from './product-price-report.component';

describe('ProductPriceReportComponent', () => {
  let component: ProductPriceReportComponent;
  let fixture: ComponentFixture<ProductPriceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPriceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPriceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
