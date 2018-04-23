import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLogReportComponent } from './cm-log-report.component';

describe('CmLogReportComponent', () => {
  let component: CmLogReportComponent;
  let fixture: ComponentFixture<CmLogReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmLogReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmLogReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
