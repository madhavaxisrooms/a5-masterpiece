import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryAndUpdatesComponent } from './inventory-and-updates.component';

describe('InventoryAndUpdatesComponent', () => {
  let component: InventoryAndUpdatesComponent;
  let fixture: ComponentFixture<InventoryAndUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryAndUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryAndUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
