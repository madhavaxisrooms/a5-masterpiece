import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityReportLandingComponent } from './activity-report-landing.component';

describe('ActivityReportLandingComponent', () => {
  let component: ActivityReportLandingComponent;
  let fixture: ComponentFixture<ActivityReportLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityReportLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityReportLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
