import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLogReportsComponent } from './cm-log-reports.component';

describe('CmLogReportsComponent', () => {
  let component: CmLogReportsComponent;
  let fixture: ComponentFixture<CmLogReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmLogReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmLogReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
