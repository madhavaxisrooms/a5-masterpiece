import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndUpdatesComponent } from './price-and-updates.component';

describe('PriceAndUpdatesComponent', () => {
  let component: PriceAndUpdatesComponent;
  let fixture: ComponentFixture<PriceAndUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAndUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAndUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
