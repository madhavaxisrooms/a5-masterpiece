import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceConfigChangeComponent } from './price-config-change.component';

describe('PriceConfigChangeComponent', () => {
  let component: PriceConfigChangeComponent;
  let fixture: ComponentFixture<PriceConfigChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceConfigChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceConfigChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
