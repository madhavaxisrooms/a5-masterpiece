import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaInventoryComponent } from './ota-inventory.component';

describe('OtaInventoryComponent', () => {
  let component: OtaInventoryComponent;
  let fixture: ComponentFixture<OtaInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
