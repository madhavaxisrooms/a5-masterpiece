import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcUpdateAnalysisReportComponent } from './arc-update-analysis-report.component';

describe('ArcUpdateAnalysisReportComponent', () => {
  let component: ArcUpdateAnalysisReportComponent;
  let fixture: ComponentFixture<ArcUpdateAnalysisReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcUpdateAnalysisReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcUpdateAnalysisReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
