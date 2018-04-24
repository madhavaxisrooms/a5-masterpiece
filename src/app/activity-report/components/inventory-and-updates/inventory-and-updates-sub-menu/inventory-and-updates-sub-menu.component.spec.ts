import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAndUpdatesSubMenuComponent } from './inventory-and-updates-sub-menu.component';

describe('InventoryAndUpdatesSubMenuComponent', () => {
  let component: InventoryAndUpdatesSubMenuComponent;
  let fixture: ComponentFixture<InventoryAndUpdatesSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAndUpdatesSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAndUpdatesSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
