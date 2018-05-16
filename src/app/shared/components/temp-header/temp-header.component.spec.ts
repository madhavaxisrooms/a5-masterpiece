import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHeaderComponent } from './temp-header.component';

describe('TempHeaderComponent', () => {
  let component: TempHeaderComponent;
  let fixture: ComponentFixture<TempHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
