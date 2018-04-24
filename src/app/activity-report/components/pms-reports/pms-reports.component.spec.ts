import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsReportsComponent } from './pms-reports.component';

describe('PmsReportsComponent', () => {
  let component: PmsReportsComponent;
  let fixture: ComponentFixture<PmsReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
