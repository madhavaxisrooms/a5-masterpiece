import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceAndUpdatesSubMenuComponent } from './price-and-updates-sub-menu.component';

describe('PriceAndUpdatesSubMenuComponent', () => {
  let component: PriceAndUpdatesSubMenuComponent;
  let fixture: ComponentFixture<PriceAndUpdatesSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceAndUpdatesSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceAndUpdatesSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
