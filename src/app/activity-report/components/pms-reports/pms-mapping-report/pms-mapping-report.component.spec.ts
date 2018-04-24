import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsMappingReportComponent } from './pms-mapping-report.component';

describe('PmsMappingReportComponent', () => {
  let component: PmsMappingReportComponent;
  let fixture: ComponentFixture<PmsMappingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsMappingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsMappingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
