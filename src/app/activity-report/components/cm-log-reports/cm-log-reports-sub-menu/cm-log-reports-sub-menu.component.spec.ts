import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmLogReportsSubMenuComponent } from './cm-log-reports-sub-menu.component';

describe('CmLogReportsSubMenuComponent', () => {
  let component: CmLogReportsSubMenuComponent;
  let fixture: ComponentFixture<CmLogReportsSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmLogReportsSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmLogReportsSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
