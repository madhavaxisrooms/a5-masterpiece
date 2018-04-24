import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDiscrepancyComponent } from './inventory-discrepancy.component';

describe('InventoryDiscrepancyComponent', () => {
  let component: InventoryDiscrepancyComponent;
  let fixture: ComponentFixture<InventoryDiscrepancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDiscrepancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDiscrepancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
