import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommuteAndBankComponent } from './commute-and-bank.component';

describe('CommuteAndBankComponent', () => {
  let component: CommuteAndBankComponent;
  let fixture: ComponentFixture<CommuteAndBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommuteAndBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommuteAndBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
