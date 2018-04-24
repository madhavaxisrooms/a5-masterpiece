import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsReportsSubMenuComponent } from './pms-reports-sub-menu.component';

describe('PmsReportsSubMenuComponent', () => {
  let component: PmsReportsSubMenuComponent;
  let fixture: ComponentFixture<PmsReportsSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsReportsSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsReportsSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
